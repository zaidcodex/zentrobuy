import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/appContext';

const CreateCategories = () => {
  const context = useContext(AppContext);
  const { createCategory } = context;

  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    title: '',
    description: '',
    coverImage: '',
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hockey");
    data.append("cloud_name", "dqu8eh3hz");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dqu8eh3hz/image/upload", {
        method: "POST",
        body: data
      });
      const uploadedImageURL = await res.json();
      setFormData(prev => ({
        ...prev,
        coverImage: uploadedImageURL.url
      }));
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await createCategory(formData);
    setSubmitting(false);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="container mt-5">
      <h2 style={{ color: '#ea4c2d' }}>Create Category</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label>Meta Title</label>
          <input
            type="text"
            name="metaTitle"
            className="form-control"
            value={formData.metaTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Meta Description</label>
          <input
            type="text"
            name="metaDescription"
            className="form-control"
            value={formData.metaDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label>Cover Image</label>
          <input
            className="form-control"
            type="file"
            onChange={handleFileUpload}
            disabled={uploading}
          />
          {uploading && (
            <div className="mt-2 text-center">
              <div className="spinner-border text-primary" role="status" />
              <div className="text-muted">Uploading...</div>
            </div>
          )}
        </div>

        <button type="submit" className="btn " disabled={submitting || uploading} style={{backgroundColor:'#ea4c2d', color:'white'}}>
          {submitting ? (
            <div>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Creating...
            </div>
          ) : (
            'Create Category'
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateCategories;
