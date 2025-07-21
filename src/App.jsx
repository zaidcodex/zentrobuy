import React, {useEffect, useContext} from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer'
import Admin from './components/admin.jsx'
import Posts from './components/post.jsx'
import AdminDashboard from './components/adminDashboard.jsx'

import { Switch, Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min.js'
import Home from './components/home.jsx'
import AppContext from './context/appContext.jsx';
import CategoryPage from './components/categoryPage.jsx'
import ScrollToTop from './components/scrollToTop.jsx'
export default function App() {
 const { getCategories, appLoader } = useContext(AppContext);

  
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin-dashboard') || location.pathname.startsWith('/admin');
  
  return (
    <div>
      
       {!appLoader && !isAdminRoute && <Navbar />}
      
      
    <ScrollToTop/>
      <Switch>

        <Route exact path="/">
        <Home/>
          {/* <Home theArr={destinationList} /> */}
          {/* <UnderConstruction /> */}
          
        </Route>

        <Route exact path="/admin">
          <Admin/>
        </Route>
        <Route path="/admin-dashboard">
          <AdminDashboard/>
        </Route>
        <Route path="/category/:id">
          <CategoryPage/>
        </Route>
        <Route path="/post/:id">
          <Posts/>
        </Route>

      </Switch>
      
       {!isAdminRoute && <Footer />}



    </div>
  )
}
