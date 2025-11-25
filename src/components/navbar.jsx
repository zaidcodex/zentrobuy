import React, {useContext} from 'react'
import logo from './LOGO.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useRef } from 'react'
import AppContext from '../context/appContext';

export default function Navbar() {
    const context = useContext(AppContext);
    const { categories } = context;
    const refer = useRef(null)
    
    return (
        <div style={{zIndex:99999}} className='sticky-top'>
            <nav style={{borderBottom:"3px solid #c7a49d6e", backgroundColor:"#38384D"}} className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    {/* Logo */}
                    {/* <Link 
                        className="navbar-brand" 
                        onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0 }) }} 
                        to="/"
                    >
                        <img src={logo} height={'43.5'} alt="Logo" />
                    </Link> */}
                    
                    {/* Toggle Button */}
                    <button 
                        className="navbar-toggler border-0" 
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <i style={{color:"#000000ff"}} className="fa-solid fa-bars fa-xl"></i>
                    </button>
                    
                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse my-2" id="navbarSupportedContent">
                        {/* Empty div for spacing on left */}
                        <div className="d-none d-lg-block" style={{width: '100px'}}></div>
                        
                        {/* Centered Navigation */}
                        <ul className="navbar-nav mx-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <Link 
                                    style={{fontSize:"18px", color:"white"}} 
                                    className="nav-link fw-bold" 
                                    aria-current="page" 
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            
                            {categories.map((cat) => (
                                <li className="nav-item mx-2" key={cat._id}>
                                    <Link 
                                        className="nav-link fw-bold" 
                                        style={{fontSize:"18px", color:"white"}} 
                                        to={`/category/${cat._id}`}
                                    >
                                        {cat.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Empty div for spacing on right */}
                        <div className="d-none d-lg-block" style={{width: '100px'}}></div>
                    </div>
                </div>
            </nav>

            {/* Custom CSS for hover effects */}
            <style>{`
                .navbar-dark .nav-link {
                    color: white !important;
                }
                
                .navbar-dark .nav-link:hover {
                    color: black !important;
                }
                
                .navbar-dark .nav-link.active {
                    color: black !important;
                }
            `}</style>
        </div>
    )
}