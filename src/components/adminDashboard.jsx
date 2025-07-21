import React, { useEffect } from 'react';
import Sidebar from './sidebar';
import BasicSettings from './basicSettings';
import ViewCategories from './viewCategories';
import CreateCategories from './createCategories';
import CreatePosts from './createPost';
import ViewPost from './viewPost';
import { Switch, Route, useHistory } from 'react-router-dom';

const AdminDashboard = () => {
      const history = useHistory(); useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      history.push('/admin'); 
    }
  }, []);
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar for Desktop */}
        <div className="d-none d-md-block col-md-3 col-xl-2 p-0">
          <div
            className="bg-dark text-white vh-100"
            style={{ position: 'sticky', top: 0, overflowY: 'auto' }}
          >
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-xl-10">
          {/* Optional Mobile Sidebar */}
          <div className="d-md-none">
            <Sidebar />
          </div>

          <div className="p-3">
            <Switch>
              <Route
                exact
                path="/admin-dashboard/basic-settings"
                component={BasicSettings}
              />
              <Route
                exact
                path="/admin-dashboard/view-categories"
                component={ViewCategories}
              />
              <Route
                exact
                path="/admin-dashboard/create-categories"
                component={CreateCategories}
              />
              <Route
                exact
                path="/admin-dashboard/create-post"
                component={CreatePosts}
              />
              <Route
                exact
                path="/admin-dashboard/view-post"
                component={ViewPost}
              />
              {/* <Route path="/admin-dashboard/view-rentals" component={ViewRentals} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
