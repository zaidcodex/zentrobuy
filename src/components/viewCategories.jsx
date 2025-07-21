import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/appContext';

const ViewCategories = () => {
  const context = useContext(AppContext);
  const { categories, getCategories, updateCategory, deleteCategory } = context;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    getCategories();
  }, []);

  const handleViewDetails = (category) => {
    setSelectedCategory({ ...category });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const handleChange = (e) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
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
        setSelectedCategory((prev) => ({
          ...prev,
          coverImage: result.url,
        }));
      } else {
        alert('Image upload failed.');
      }
    } catch (err) {
      console.error('Cloudinary Upload Error:', err);
      alert('Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleUpdate = async () => {
    if (selectedCategory._id) {
      await updateCategory(selectedCategory._id, selectedCategory);
      handleCloseModal();
      getCategories();
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModalDel(true);
  };

  const handleDeleteConfirmed = async () => {
    await deleteCategory(deleteId);
    setShowModalDel(false);
    setDeleteId('');
    getCategories();
  };

  return (
    <div className="container mt-5">
      <h2 style={{color:'#ea4c2d'}}>View Categories</h2>

      <div className="row">
        {categories.slice().reverse().map((category) => (
          <div className="col-md-4 mb-4" key={category._id}>
            <div className="card h-100">
              <img src={category.coverImage} className="card-img-top" alt={category.title} style={{ height:'250px', objectFit:"cover"}}/>
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
                <p className="card-text">
                  {category.description.length > 100
                    ? category.description.substring(0, 100) + '...'
                    : category.description}
                </p>
                <div className="d-flex justify-content-between align-items-center flex-end">
                  <button style={{backgroundColor:'#ea4c2d', color:'white'}} className="btn " onClick={() => handleViewDetails(category)}>
                    View More
                  </button>
                  <i
                    className="fa fa-trash"
                    style={{ fontSize: '26px', cursor: 'pointer', color:"#ea4c2d" }}
                    onClick={() => confirmDelete(category._id)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showModal && selectedCategory && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Category</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label>Meta Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="metaTitle"
                    value={selectedCategory.metaTitle || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Meta Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="metaDescription"
                    value={selectedCategory.metaDescription || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={selectedCategory.title || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={selectedCategory.description || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Upload New Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileUpload}
                    disabled={uploading}
                  />
                  {uploading && <small className="text-muted">Uploading...</small>}
                </div>
                {selectedCategory.coverImage && (
                  <img
                    src={selectedCategory.coverImage}
                    alt="Preview"
                    className="img-thumbnail mt-2"
                    width={150}
                  />
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showModalDel && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setShowModalDel(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this category?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModalDel(false)}>
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

export default ViewCategories;
