import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/appContext';
import { Switch, Route, Link, useLocation, useHistory} from "react-router-dom";
// import CreateUser from "./CreateUser";

const Sidebar = () => {
    const context = useContext(AppContext);
    const {  } = context;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const history = useHistory()
    
    const [user, setUser] = useState({
        email:""
    })
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        history.push("/admin")
        setUser(null);
        closeMobileMenu();
    };

    // Close mobile menu when route changes
    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname]);

    // Function to check if a link is active
    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    // Get link classes based on active state
    const getLinkClasses = (path, isMobile = false) => {
        if (isMobile) {
            const baseClasses = "list-group-item list-group-item-action border-0 d-flex align-items-center";
            if (isActiveLink(path)) {
                return `${baseClasses} fw-bold`;
            }
            return `${baseClasses}`;
        } else {
            const baseClasses = "nav-link d-flex align-items-center";
            if (isActiveLink(path)) {
                return `${baseClasses} bg-white fw-bold `;
            }
            return `${baseClasses} text-white`;
        }
    };

    // Get mobile link styles
    const getMobileLinkStyles = (path) => {
        if (isActiveLink(path)) {
            return { 
                backgroundColor: "white", 
                borderLeft: "4px solid #ffffff",
                color: "#ea4c2d"
            };
        }
        return { 
            backgroundColor: "transparent", 
            borderLeft: "4px solid transparent",
            color: "white"
        };
    };

    // Get desktop link styles
    const getDesktopLinkStyles = (path) => {
        if (isActiveLink(path)) {
            return { 
                backgroundColor: "white",
                borderRadius: "0.375rem",
                color: "#ea4c2d"
            };
        }
        return {};
    };
    
    return (
        <div>
            {/* Mobile Navbar - Only visible on mobile */}
            <nav className="navbar navbar-expand-lg d-lg-none shadow-sm" style={{ backgroundColor: "#ea4c2d" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fw-bold" to="/">
                    Admin
                        {/* {user.email === "admin@me-enterprises.com" ? "Admin Panel": "Dashboard"} */}
                    </Link>
                    <button 
                        className="btn btn-outline-light border-0 p-2"
                        type="button" 
                        onClick={toggleMobileMenu}
                        aria-controls="mobileNavbar" 
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" style={{ 
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")` 
                        }}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-lg-none"
                    style={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.5)", 
                        zIndex: 1040 
                    }}
                    onClick={closeMobileMenu}
                ></div>
            )}

            {/* Mobile Offcanvas Menu */}
            <div 
                className={`offcanvas offcanvas-start d-lg-none ${isMobileMenuOpen ? 'show' : ''}`}
                style={{ 
                    backgroundColor: "#ea4c2d",
                    visibility: isMobileMenuOpen ? 'visible' : 'hidden',
                    zIndex: 1050
                }}
                tabIndex="-1"
            >
                <div className="offcanvas-header border-bottom border-secondary">
                    <h5 className="offcanvas-title text-white fw-bold">
                        Admin
                        {/* {user.email === "admin@me-enterprises.com" ? "Admin Panel" : "Dashboard"} */}
                    </h5>
                    <button 
                        type="button" 
                        className="btn-close btn-close-white" 
                        onClick={closeMobileMenu}
                        aria-label="Close"
                    ></button>
                </div>
                
                <div className="offcanvas-body p-0 d-flex flex-column">
                    <nav className="flex-grow-1">
                        <div className="list-group list-group-flush">
                            <Link 
                                className={getLinkClasses("/admin-dashboard/basic-settings", true)}
                                to="/admin-dashboard/basic-settings"
                                style={getMobileLinkStyles("/admin-dashboard/basic-settings")}
                            >
                                <i className="bi bi-gear me-2"></i>
                                Basic Settings
                            </Link>
                            <Link 
                                className={getLinkClasses("/admin-dashboard/view-categories", true)}
                                to="/admin-dashboard/view-categories"
                                style={getMobileLinkStyles("/admin-dashboard/view-categories")}
                            >
                                <i className="bi bi-grid me-2"></i>
                                View Categories
                            </Link>
                            <Link 
                                className={getLinkClasses("/admin-dashboard/create-categories", true)}
                                to="/admin-dashboard/create-categories"
                                style={getMobileLinkStyles("/admin-dashboard/create-categories")}
                            >
                                <i className="bi bi-plus-square me-2"></i>
                                Create Categories
                            </Link>
                            <Link 
                                className={getLinkClasses("/admin-dashboard/create-post", true)}
                                to="/admin-dashboard/create-post"
                                style={getMobileLinkStyles("/admin-dashboard/create-post")}
                            >
                                <i className="bi bi-pencil-square me-2"></i>
                                Create Post
                            </Link>
                            <Link 
                                className={getLinkClasses("/admin-dashboard/view-post", true)}
                                to="/admin-dashboard/view-post"
                                style={getMobileLinkStyles("/admin-dashboard/view-post")}
                            >
                                <i className="bi bi-file-text me-2"></i>
                                View Posts
                            </Link>
                            {user.email === "admin@me-enterprises.com" && (
                                <div>
                                    <Link 
                                        className={getLinkClasses("/admin-dashboard/create-user", true)}
                                        to="/admin-dashboard/create-user"
                                        style={getMobileLinkStyles("/admin-dashboard/create-user")}
                                    >
                                        <i className="bi bi-person-plus me-2"></i>
                                        Create User
                                    </Link>
                                    <Link 
                                        className={getLinkClasses("/admin-dashboard/view-users", true)}
                                        to="/admin-dashboard/view-users"
                                        style={getMobileLinkStyles("/admin-dashboard/view-users")}
                                    >
                                        <i className="bi bi-people me-2"></i>
                                        View All Users
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                    
                    {/* Mobile Profile Section */}
                    <div className="mt-auto p-3 border-top border-secondary bg-dark bg-opacity-25">
                        <div className="d-flex align-items-center mb-3 p-2 rounded bg-light bg-opacity-10">
                            <i className="fa fa-user"></i>
                            {/* <img
                                src="https://png.pngtree.com/png-vector/20220529/ourmid/pngtree-black-user-icon-flat-and-simple-vector-people-avatar-icon-vector-png-image_46750236.jpg"
                                alt="profile"
                                className="rounded-circle me-3 border border-light border-2"
                                width="40"
                                height="40"
                            /> */}
                            <div className="flex-grow-1">
                                <div className="text-white fw-bold small">
                                    Admin
                                    {/* {user.email === "admin@me-enterprises.com" ? "Admin" : user.firstName} */}
                                </div>
                                <div className="text-white-50 small">{user.email}</div>
                            </div>
                        </div>
                        <button
                            className="btn btn-outline-light w-100"
                            onClick={handleLogout}
                        >
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Sidebar - Only visible on desktop */}
            <div className="d-none d-lg-block shadow-sm" style={{ backgroundColor: "#ea4c2d", color: "white", minHeight: "100vh", position: "relative" }}>
                <div className="d-flex flex-column h-100 px-3 pt-2" style={{ minHeight: "100vh" }}>
                    <a 
                        href="/" 
                        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                        <span className="fs-5 fw-bold">
                            Admin
                            {/* {user.email === "admin@me-enterprises.com" ? "Admin Panel": "Dashboard"} */}
                        </span>
                    </a>
                    
                    {/* Navigation Menu - Flexible grow area */}
                    <div className="flex-grow-1">
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item mb-1">
                                <Link 
                                    className={getLinkClasses("/admin-dashboard/basic-settings")}
                                    to="/admin-dashboard/basic-settings"
                                    style={getDesktopLinkStyles("/admin-dashboard/basic-settings")}
                                >
                                    <i className="bi bi-gear me-2"></i>
                                    <span>Basic Settings</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-1">
                                <Link 
                                    className={getLinkClasses("/admin-dashboard/view-categories")}
                                    to="/admin-dashboard/view-categories"
                                    style={getDesktopLinkStyles("/admin-dashboard/view-categories")}
                                >
                                    <i className="bi bi-grid me-2"></i>
                                    <span>View Categories</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-1">
                                <Link 
                                    className={getLinkClasses("/admin-dashboard/create-categories")}
                                    to="/admin-dashboard/create-categories"
                                    style={getDesktopLinkStyles("/admin-dashboard/create-categories")}
                                >
                                    <i className="bi bi-plus-square me-2"></i>
                                    <span>Create Categories</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-1">
                                <Link 
                                    className={getLinkClasses("/admin-dashboard/create-post")}
                                    to="/admin-dashboard/create-post"
                                    style={getDesktopLinkStyles("/admin-dashboard/create-post")}
                                >
                                    <i className="bi bi-pencil-square me-2"></i>
                                    <span>Create Post</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-1">
                                <Link 
                                    className={getLinkClasses("/admin-dashboard/view-post")}
                                    to="/admin-dashboard/view-post"
                                    style={getDesktopLinkStyles("/admin-dashboard/view-post")}
                                >
                                    <i className="bi bi-file-text me-2"></i>
                                    <span>View Posts</span>
                                </Link>
                            </li>
                            {user.email === "admin@me-enterprises.com" && (
                                <div>
                                    <li className="nav-item mb-1">
                                        <Link 
                                            className={getLinkClasses("/admin-dashboard/create-user")}
                                            to="/admin-dashboard/create-user"
                                            style={getDesktopLinkStyles("/admin-dashboard/create-user")}
                                        >
                                            <i className="bi bi-person-plus me-2"></i>
                                            <span>Create User</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-1">
                                        <Link 
                                            className={getLinkClasses("/admin-dashboard/view-users")}
                                            to="/admin-dashboard/view-users"
                                            style={getDesktopLinkStyles("/admin-dashboard/view-users")}
                                        >
                                            <i className="bi bi-people me-2"></i>
                                            <span>View All Users</span>
                                        </Link>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                    
                    {/* Admin Section - Sticky at bottom */}
                    <div className="mt-auto">
                        <hr className="text-white-50" />
                        <div className="dropdown pb-4">
                            <a 
                                href="#" 
                                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" 
                                id="dropdownUser1" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <div className="position-relative me-2">
                                    <i class="fa-solid fa-user"></i>
                                    {/* <img
                                        src="https://png.pngtree.com/png-vector/20220529/ourmid/pngtree-black-user-icon-flat-and-simple-vector-people-avatar-icon-vector-png-image_46750236.jpg"
                                        alt="profile"
                                        width="32"
                                        height="32"
                                        className="rounded-circle border border-light border-2"
                                    /> */}
                                </div>
                                <span className="fw-semibold">
                                    Admin
                                    {/* {user.email === "admin@me-enterprises.com" ? "Admin": user.firstName} */}
                                    </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow-lg">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Logout
                                    </button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;