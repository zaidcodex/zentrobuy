import React, { useState, useContext, useEffect, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import AppContext from '../context/appContext';



const ViewPost = () => {
  const context = useContext(AppContext);
  const { posts, getPosts, updatePost, deletePost, categories, getCategories } = context;
const editor = useRef(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
 const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getPosts();
      await getCategories();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.category === selectedCategory);
      setFilteredPosts(filtered);
    }
  }, [posts, selectedCategory]);

  useEffect(() => {
    console.log(selectedPost)
  }, [selectedPost]);




  const handleInputChange = (e) => {
    setSelectedPost({ ...selectedPost, [e.target.name]: e.target.value });
  };

  const handleDescriptionChange = (value) => {
    setSelectedPost({ ...selectedPost, description: value });
  };

  const handleCategoryChange = (e) => {
    setSelectedPost({ ...selectedPost, category: e.target.value });
  };

  
  const config = useMemo(() => ({
    readonly: false,
    height: 300,
    placeholder: 'Write your description...',
    toolbarAdaptive: false,
    toolbarSticky: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    pastePlain: false,
  }), []);


  const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setUploading(true); // 1. Show loader
  setSelectedPost(prev => ({ ...prev, coverImage: '' })); // 2. Hide existing image

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'hockey');
  formData.append('cloud_name', 'dqu8eh3hz');

  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dqu8eh3hz/image/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    if (result.url) {
      setSelectedPost(prev => ({
        ...prev,
        coverImage: result.url, // 3. Show new image
      }));
    } else {
      alert('Upload failed!');
    }
  } catch (error) {
    console.error('Upload error:', error);
    alert('Image upload failed!');
  } finally {
    setUploading(false); // 4. Hide loader, re-enable button
  }
};


  const handleUpdate = async () => {
    setUpdating(true);
    await updatePost(selectedPost._id, selectedPost);
    setUpdating(false);
    document.getElementById('closeModalBtn').click();
    await getPosts();
  };

  const handleCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirmed = async () => {
    await deletePost(deleteId);
    setShowDeleteModal(false);
    await getPosts();
  };

  return (
    <div className="container mt-5">
      <h2 style={{ color: '#ea4c2d' }}>View Posts</h2>

      {/* Spinner on initial load */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <div>
          {/* Category Filter Dropdown */}
          <div className="mb-4 mt-3">
            <label className="form-label">Filter by Category</label>
            <select className="form-select" value={selectedCategory} onChange={handleCategoryFilter}>
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            {filteredPosts.slice().reverse().map((post) => (
              <div className="col-md-4 mb-4" key={post._id}>
                <div className="card h-100">
                  <img src={post.coverImage} className="card-img-top" alt={post.title} style={{ height:'250px', objectFit:"cover"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <div
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html:
                          post.description.length > 100
                            ? post.description.substring(0, 100) + '...'
                            : post.description,
                      }}
                    />
                    <div className="d-flex justify-content-between align-items-center mt-2 flex-end">
                      <button
                      style={{backgroundColor:'#ea4c2d', color:'white'}}
                        className="btn btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#postEditModal"
                        onClick={() => setSelectedPost(post)}
                      >
                        View More
                      </button>
                      <i
                        className="fa fa-trash text-danger"
                        style={{ fontSize: '26px', cursor: 'pointer' }}
                        onClick={() => confirmDelete(post._id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit Modal */}
    <div className="modal fade" id="postEditModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit Post</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" id="closeModalBtn"></button>
      </div>

      {selectedPost && (
        <div className="modal-body">
          <div className="form-group mb-2">
            <label>Meta Title</label>
            <input
              type="text"
              className="form-control"
              name="metaTitle"
              value={selectedPost.metaTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-2">
            <label>Meta Description</label>
            <input
              type="text"
              className="form-control"
              name="metaDescription"
              value={selectedPost.metaDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-2">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={selectedPost.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-2">
            <label>Cover Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                // remove existing image temporarily
                setSelectedPost({ ...selectedPost, coverImage: '' });
                handleImageUpload(e);
              }}
              disabled={uploading}
            />

            {/* Uploading spinner */}
            {uploading && (
              <div className="mt-2 text-center">
                <div className="spinner-border text-primary" role="status" />
                <div className="text-muted">Uploading image...</div>
              </div>
            )}

            {/* Show image only after upload is done */}
            {!uploading && selectedPost.coverImage && (
              <img
                src={selectedPost.coverImage}
                alt="Cover"
                className="mt-2 card-img-top"
                style={{width:'250px', height:"250px", objectFit:'cover'}}
              />
            )}
          </div>

          <div className="form-group mb-2">
            <label>Description</label>
            <JoditEditor
              ref={editor}
              value={selectedPost.description}
              config={config}
              tabIndex={1}
              onBlur={handleDescriptionChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Category</label>
            <select
              className="form-control"
              value={selectedPost.category}
              onChange={handleCategoryChange}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="modal-footer">
        <button
          className="btn btn-success"
          onClick={handleUpdate}
          disabled={uploading || updating}
        >
          {updating ? (
            <div>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              disabled={uploading || updating}
                ></span>
              Updating...
            </div>
          ) : (
            'Update Post'
          )}
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this post?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleDeleteConfirmed}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPost;
