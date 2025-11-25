import React from 'react'
import AppContext from './appContext'
import { useEffect, useState,useRef } from 'react'
import useLocalStorage from '../components/hooks/uselocalstorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const AppState = (props) => {

    const history = useHistory()

    const world = "helloworldhowareyou"

    // const [appLoader, setappLoader] = useState(true)
    const [coverImages, setCoverImages] = useState([])
    const [adminToken, setAdminToken] = useLocalStorage('adminToken', null)
    const [admin, setAdmin] = useState(false)
    const [settings, setSettings] = useState(null);
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [categoryPosts, setCategoryPost] = useState([])
    const [appLoader, setAppLoader] = useState(false)
    const [singPost, setSingPost] = useState(null)
    

    const signIn = async (username, password) => {
  try {
    const url = "https://zentrobuy-be.vercel.app/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "*",
      },
      body: JSON.stringify({ email: username, password }),
    });

    const data = await response.json();

    if (!response.ok || !data.token) {
      
      alert(data.error || "Invalid credentials. Please try again.");
      return;
    }

    // ✅ Login success
    localStorage.setItem("authToken", data.token);
    setAdmin(true);
    history.push("/admin-dashboard/basic-settings");
    console.log("Login successful:", data);
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong. Please check your connection or try again.");
  }
};


    // console.log(adminToken);

    
    const [siteData, setSiteData] = useState({ title: "", email: "", contact: "", description: "", about: "" })
    const [allPackageData, setAllPackageData] = useState([])
    




    const modalRef = useRef(null)
        const [selectedImage, setSelectedImage] = useState(null)
        const [setImageLoader, setSetImageLoader] = useState(false)

        const [roomSelectedImage, setRoomSelectedImage] = useState(null)
    
        const cloudinary = async (file) => {
        // setEditorLoader(true)
        setSetImageLoader(true)
        const url = "https://api.cloudinary.com/v1_1/dextrzp2q/image/upload"

        // https://faithful-bass-yoke.cyclic.app/api/sendImg/

        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'dga8po59')

        const response = await fetch(url, {
            method: 'post', // *GET, POST, PUT, DELETE, etc.



            body: formData // body data type must match "Content-Type" header
        });
        const myres = await response.json();
        modalRef.current.click()
        console.log(myres.secure_url)
        // const finalAdd = coverImages.push()
        // console.log(finalAdd);
        
        setCoverImages([...coverImages,{url:myres.secure_url}])
        setSelectedImage(null)
        setSetImageLoader(false)
    }

    const roomButtonRef = useRef(null)
    const [obj, setobj] = useState(null)
    const roomImageCloudinary = async (file) => {
        // setEditorLoader(true)
        // setSetImageLoader(true)
        const url = "https://api.cloudinary.com/v1_1/dextrzp2q/image/upload"
        setSetImageLoader(true)
        // https://faithful-bass-yoke.cyclic.app/api/sendImg/

        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'dga8po59')

        const response = await fetch(url, {
            method: 'post', // *GET, POST, PUT, DELETE, etc.



            body: formData // body data type must match "Content-Type" header
        });
        const myres = await response.json();
        modalRef.current.click()
        console.log(myres.secure_url)
        const newAssets = [...obj.assets,{url:myres.secure_url}]
        setobj({...obj,assets:newAssets})

        console.log(newAssets)
        console.log(obj)
        // const finalAdd = coverImages.push()
        // console.log(finalAdd);
        setSetImageLoader(false)
        roomButtonRef.current.click()
        // setCoverImages([...coverImages,{url:myres.secure_url}])
        setRoomSelectedImage(null)
        
    }

    const [editorLoader, setEditorLoader] = useState(false)
  


   const getBasicSettings = async () => {
  try {
    const res = await fetch("https://zentrobuy-be.vercel.app/api/settings/getsettings");
    const data = await res.json();

    if (res.ok) {
      setSettings(data); 
      console.log(data)
    } else {
      console.error("Failed to fetch settings:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching basic settings:", err);
  }
};

// let tokenExist;
useEffect(() => {
  //    tokenExist = localStorage.getItem("authToken")
  // if (tokenExist) {
    getBasicSettings();
    getCategories();
    getPosts();
  
}, []);



const updateSettings = async (newSettings) => {
  try {
    const res = await fetch("https://zentrobuy-be.vercel.app/api/settings/updatesettings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSettings),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Failed to update settings:", data.error || data);
      return { success: false, error: data.error || "Update failed" };
    }

    console.log(" Settings updated successfully:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Network/server error:", err.message);
    return { success: false, error: err.message };
  }
};


const getCategories = async()=>{
    try {
        const res = await fetch("https://zentrobuy-be.vercel.app/api/category/getcategories")
        const data = await res.json()
        
        if (res.ok) {
            setCategories(data)
    } else {
      console.error("Failed to fetch Categories:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching categories:", err);
  } 
}


const createCategory = async (categoryData)=>{
     try {
      const res = await fetch('https://zentrobuy-be.vercel.app/api/category/createcategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Category created successfully!');
      } else {
        alert('Failed to create category: ' + result.error);
      }
    } catch (error) {
      console.error('Error creating category:', error);
      alert('Server error.');
    }
}


const createPost = async (post)=>{
    try {
      const res = await fetch('https://zentrobuy-be.vercel.app/api/post/createpost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Post created successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong.');
    }
}


const getPosts = async ()=>{
    try {
        const res = await fetch('https://zentrobuy-be.vercel.app/api/post/getpost')
    const data = await res.json()
        
        if (res.ok) {
            setPosts(data)
    } else {
      console.error("Failed to fetch Posts:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Error fetching posts:", err);
  } 
}



const updateCategory = async (id, updatedCategory) => {
  const res = await fetch(`https://zentrobuy-be.vercel.app/api/category/updatecategory/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedCategory),
  });
  return await res.json();
};




const updatePost = async (id,updatedPost) => {
  try {
    const res = await fetch(`https://zentrobuy-be.vercel.app/api/post/updatepost/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });

    const result = await res.json();

    if (res.ok) {
      alert('Post updated successfully!');
      return { success: true, data: result };
    } else {
      alert('Failed to update post: ' + result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return { success: false, error: error.message };
  }
};



const deleteCategory = async (id) => {
  try {
    const res = await fetch(`https://zentrobuy-be.vercel.app/api/category/deletecategory/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();

    if (res.ok) {
      alert('Category deleted successfully!');
      return { success: true, data: result };
    } else {
      alert('Error deleting category: ' + result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    alert('Server error.');
    return { success: false, error: error.message };
  }
};


const deletePost = async (id) => {
  try {
    const res = await fetch(`https://zentrobuy-be.vercel.app/api/post/deletepost/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Delete failed:', data.error || 'Unknown error');
      alert('Failed to delete post.');
    } else {
      alert('Post deleted successfully!');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    alert('Server error while deleting post.');
  }
};



const getPostsByCategory = async (categoryId) => {
  try {
    const response = await fetch(`https://zentrobuy-be.vercel.app/api/post/getcategorypost/${categoryId}`);
    const data = await response.json();

    if (data.success) {
      console.log('Posts:', data.posts);
     setCategoryPost(data.posts) // or update your state here if in React
    } else {
      console.error('Failed to fetch posts');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


const getPostById = async (id) => {
  try {
    const res = await fetch(`https://zentrobuy-be.vercel.app/api/post/getpostbyid/${id}`);
    const data = await res.json();

    if (res.ok && data.success) {
      setSingPost(data.post)
      console.log("post", data)
      return data.post
    } else {
      console.error('Post not found:', data.message || 'Unknown error');
      return null;
    }
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return null;
  }
};



    // 


      // console.clear()
    return (
        <AppContext.Provider value={{settings,  getPostById, singPost, appLoader, setAppLoader, getPostsByCategory,categoryPosts, deletePost,getBasicSettings, deleteCategory,updatePost, updateCategory, posts,getPosts,createPost ,createCategory ,getCategories,categories, updateSettings, obj,setobj,allPackageData,roomButtonRef,setRoomSelectedImage,roomImageCloudinary,roomSelectedImage,editorLoader,setCoverImages,setImageLoader,selectedImage,setSelectedImage,modalRef,  siteData, world, signIn, coverImages, appLoader, adminToken, admin, setAdminToken, setSiteData,cloudinary }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState