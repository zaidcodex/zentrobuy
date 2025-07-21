import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/appContext';

const BasicSettings = () => {
  const context = useContext(AppContext);
  const { settings, updateSettings, getBasicSettings } = context;

  const [newSettings, setNewSettings] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getBasicSettings();
  }, []);

  useEffect(() => {
    if (settings) {
      setNewSettings({ ...settings });
    }
  }, [settings]);

  const handleChange = (e) => {
    setNewSettings({
      ...newSettings,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSettings = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await updateSettings(newSettings);
    setUpdating(false);
  };

  return (
    <div className="container mt-5">
      <h2 style={{ color: '#ea4c2d' }}>Basic Settings</h2>

      {newSettings ? (
        <form onSubmit={handleUpdateSettings} className="mt-4">
          <div className="form-group mb-3">
            <label>Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              className="form-control"
              value={newSettings.metaTitle}
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
              value={newSettings.metaDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={newSettings.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={newSettings.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={newSettings.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn" disabled={updating} style={{backgroundColor:'#ea4c2d', color:'white'}}>
            {updating ? (
              <div>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Updating...
              </div>
            ) : (
              'Update Settings'
            )}
          </button>
        </form>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicSettings;
