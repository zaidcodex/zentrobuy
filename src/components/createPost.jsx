import React, { useState, useContext, useEffect, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import AppContext from '../context/appContext';

const CreatePost = () => {
  const context = useContext(AppContext);
  const { categories, getCategories, createPost } = context;

  const editor = useRef(null);

  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    title: '',
    coverImage: '',
    description: '',
    category: '',
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const config = useMemo(
    () => ({
      readonly: false,
      height: 300,
      placeholder: 'Write your description...',
      toolbarAdaptive: false,
      toolbarSticky: false,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      pastePlain: false,
    }),
    []
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategorySelect = (e) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'affiliate');
    data.append('cloud_name', 'dyytzksdp');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dyytzksdp/image/upload', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (result.url) {
        setFormData((prev) => ({
          ...prev,
          coverImage: result.url,
        }));
      } else {
        alert('Upload failed!');
      }
    } catch (err) {
      console.error('Error uploading:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await createPost(formData);
    setSubmitting(false);
    setFormData({
      metaTitle: '',
      metaDescription: '',
      title: '',
      coverImage: '',
      description: '',
      category: '',
    });
  };

  return (
    <div className="container my-5">
      <h2 style={{ color: '#ea4c2d' }}>Create Post</h2>
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

        {/* ✅ File upload + image preview */}
        <div className="form-group mb-3">
          <label>Cover Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileUpload}
            disabled={uploading}
          />
          {uploading && (
            <div className="mt-2 text-center">
              <div className="spinner-border text-primary" role="status" />
              <div className="text-muted">Uploading...</div>
            </div>
          )}

          {/* ✅ Show preview after upload */}
          {formData.coverImage && !uploading && (
            <div className="mt-3 text-center">
              <img
                src={formData.coverImage}
                alt="Cover Preview"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />
              <p className="text-muted mt-2 small">Preview of uploaded cover image</p>
            </div>
          )}
        </div>

       {/* ✅ Independent Image Upload with Preview and URL */}
<div className="form-group mb-3">
  <label>Image Uploading (Not Post Image)</label>
  
  {/* Upload button */}
  <input
    type="file"
    className="form-control"
    onChange={async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      setUploading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "affiliate");
      data.append("cloud_name", "dyytzksdp");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dyytzksdp/image/upload",
          { method: "POST", body: data }
        );
        const result = await res.json();
        if (result.url) {
          setFormData((prev) => ({
            ...prev,
            extraImage: result.url, // ✅ new key (not part of post form)
          }));
        } else {
          alert("Upload failed!");
        }
      } catch (err) {
        console.error("Error uploading:", err);
      } finally {
        setUploading(false);
      }
    }}
    disabled={uploading}
  />

  {/* Show uploading spinner */}
  {uploading && (
    <div className="mt-2 text-center">
      <div className="spinner-border text-primary" role="status" />
      <div className="text-muted">Uploading...</div>
    </div>
  )}

  {/* ✅ Show uploaded image URL + preview */}
  {formData.extraImage && !uploading && (
    <div className="mt-3">
      <label className="small text-muted">Uploaded Image URL:</label>
      <input
        type="text"
        readOnly
        className="form-control mb-3"
        value={formData.extraImage}
      />
      <div className="text-center">
        <img
          src={formData.extraImage}
          alt="Uploaded Preview"
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: "250px", objectFit: "cover" }}
        />
      </div>
    </div>
  )}
</div>


        <div className="form-group mb-3">
          <label>Description</label>
          <JoditEditor
            ref={editor}
            value={formData.description}
            config={config}
            tabIndex={1}
            onBlur={(newContent) =>
              setFormData((prev) => ({ ...prev, description: newContent }))
            }
          />
        </div>

        <div className="form-group mb-4">
          <label>Select Category</label>
          <select
            className="form-control"
            value={formData.category}
            onChange={handleCategorySelect}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn"
          disabled={submitting || uploading}
          style={{ backgroundColor: '#ea4c2d', color: 'white' }}
        >
          {submitting ? (
            <div>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Creating...
            </div>
          ) : (
            'Create Post'
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
