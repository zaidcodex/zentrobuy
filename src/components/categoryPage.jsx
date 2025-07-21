import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/appContext' // Adjust path as needed
import Cards from './cards' // Adjust path as needed
import FullScreenLoader from './fullScreenLoader.jsx';

const CategoryPage = () => {
  const { id } = useParams() // Get category ID from URL params
  const { categories, categoryPosts, posts, getCategories, getPosts , getPostsByCategory, appLoader, setAppLoader } = useContext(AppContext) // Get data from context
 


    useEffect(() => {
      const fetchFunc = async ()=>{  
        setAppLoader(true)
      await getPostsByCategory(id)
        setAppLoader(false)
      }
      fetchFunc()
      }, [id]);

  

  // Debug logging
  console.log('URL ID:', id)
  console.log('Categories:', categories)
  console.log('Posts:', posts)
  
  // Handle case where no ID is provided
  if (!id) {
    return (
      <div className="container-fluid py-5">
        <div className="text-center">
          <h2>Category ID Required</h2>
          <p className="text-secondary">Please provide a category ID in the URL.</p>
        </div>
      </div>
    )
  }
  
//   // Try different ways to find the category
  let category = categories.find(cat => cat.id === parseInt(id))
  
//   // If not found, try string comparison
//   if (!category) {
//     category = categories.find(cat => cat.id === id)
//   }
  
  // If still not found, try _id (MongoDB style)
  if (!category) {
    category = categories.find(cat => cat._id === id)
  }
  
  
  
  // Filter posts that belong to this category
  // const categoryPosts = category ? posts.filter(post => 
  //   post.categoryId === parseInt(id) || 
  //   post.category === category._id
  // ) : []
  
 if (appLoader) {
  return <FullScreenLoader />;
}


  // Handle loading state
  if (!categories.length || !posts.length) {
    return (
      <div className="container-fluid py-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
  
  // Handle category not found
  if (!category) {
    return (
      <div className="container-fluid py-5">
        <div className="text-center">
          <h2>Category Not Found</h2>
          <p className="text-secondary">The requested category does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid pb-4">
      {appLoader && <FullScreenLoader />}
      {/* Category Header Section */}
       <div className="position-relative overflow-hidden vw-100" style={{ height: '90vh', minHeight: '400px', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
          <img 
            src={category.coverImage || 'https://via.placeholder.com/1920x600'} 
            className="w-100 h-100 position-absolute top-0 start-0" 
            style={{objectFit:"cover"}}
            alt={category.title} 
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: 'linear-gradient(rgba(5, 5, 5, 0.4), rgba(6, 6, 6, 0.6))'
            }}
          >
            <div className="text-center text-white px-4">
              <h1 className="display-2 fw-bold mb-4" style={{}}>
                {category.title}
              </h1>
              {/* <p className="lead fs-4 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                {category.description}
              </p>
              <p className="fs-5 opacity-75">
                {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} in this category
              </p> */}
            </div>
          </div>
        </div>
    
    

      {/* Posts Section */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="h3 fw-bold mb-4" style={{color:"#ea4c2d"}}>Posts in {category.title}</h2>
        </div>
      </div>

      {/* Posts Grid */}
      {categoryPosts.length > 0 ? (
        <div className="row">
          {categoryPosts.slice().reverse().map((post) => (
            <Cards key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="row">
          <div className="col-12 text-center py-5">
            <h3 className="text-secondary">No posts found</h3>
            <p className="text-muted">There are no posts in this category yet.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryPage