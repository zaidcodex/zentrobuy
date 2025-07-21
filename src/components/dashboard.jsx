import React from 'react'
import { useContext, useState } from 'react'
import AppContext from '../context/appContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useRef } from 'react'
import DestinationList from './destination copy 2'
import AdminRooms from './adminRooms'
const Dashboard = ({theArr,anotherArr}) => {
    const context = useContext(AppContext)
    const { allPackageData,setCoverImages,editImages, setImageLoader, selectedImage, setSelectedImage, modalRef, adminToken, setAdminToken, siteData, setSiteData, editSiteInfo, editLoader, coverImages, cloudinary } = context
    const history = useHistory()
    if (!adminToken) {
        history.push("/admin")
    }
    const [currentState, setCurrentState] = useState("Basic")


    const fileInputRef = useRef(null);

    const handleDivClick = () => {
        // Trigger the file input click
        fileInputRef.current.click();
    };

    const [imageForUpload, setImageForUpload] = useState(null)

    const previewPhoto = (theimage) => {
        // const file = input.files;

        // const fileReader = new FileReader();
        // const image = fileReader.readAsDataURL(theimage);
        // console.log(image);

        const anotherImage = URL.createObjectURL(theimage)
        console.log(anotherImage);

        setSelectedImage(anotherImage)
        setImageForUpload(theimage)
    }

    const excludeImage =(index)=>{
        const newArr = coverImages.filter((e,i)=>{return i!==index})
        // console.log(new);
        
        setCoverImages(newArr)
    }


    const [firstdndElement, setfirstdndElement] = useState({ element: null, index: null })
    const [seconddndElement, setseconddndElement] = useState({ element: null, index: null })

    const changeOrder = () => {
        // imgPreview.splice(firstdndElement.index,0,seconddndElement.element.url)
        // imgPreview.splice(seconddndElement.index,1,firstdndElement.element.url)

        coverImages.splice(firstdndElement.index, 1, seconddndElement.element)
        coverImages.splice(seconddndElement.index, 1, firstdndElement.element)

        setCoverImages([...coverImages])
    }

    console.log(firstdndElement)
    console.log(seconddndElement)



    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Admin Panel</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">
                            <button onClick={() => { setAdminToken(null) }} className="btn btn-outline-danger">Logout</button>

                        </form>
                    </div>
                </div>
            </nav>
            <div className='container my-5'>

                {/* <h1 className=/"text-center">Admin Panel</h1> */}

                <nav class="nav nav-pills nav-fill">
                    <a class={`nav-link ${currentState == "Basic" && 'active'}`} onClick={() => setCurrentState("Basic")} aria-current="page" href="#">Basic Settings</a>
                    <a class={`nav-link ${currentState == "Cover" && 'active'}`} onClick={() => setCurrentState("Cover")} href="#">Cover Images</a>
                    <a class={`nav-link ${currentState == "Room" && 'active'}`} onClick={() => setCurrentState("Room")} href="#">Room Settings</a>
                    {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
                </nav>

                {currentState == "Basic" && <div className='my-3'>
                    <h4>Site Tite</h4>
                    <input value={siteData.title} onChange={(e) => setSiteData({ ...siteData, title: e.target.value })} type="text" placeholder='Site Name' className="form-control my-2 " />
                    <h4>Site Email</h4>
                    <input value={siteData.email} onChange={(e) => setSiteData({ ...siteData, email: e.target.value })} type="text" placeholder='Site Email' className="form-control my-2 " />
                    <h4>Site Contact Number</h4>
                    <input value={siteData.phone} onChange={(e) => setSiteData({ ...siteData, phone: e.target.value })} type="text" placeholder='Site Contact Number' className="form-control my-2 " />
                    <h4>Site Description</h4>
                    <textarea value={siteData.description} onChange={(e) => setSiteData({ ...siteData, description: e.target.value })} class="form-control" id="exampleFormControlTextarea1 my-2" rows="4"></textarea>
                    <h4 className='my-2'>Site About Description</h4>
                    <textarea value={siteData.about} onChange={(e) => setSiteData({ ...siteData, about: e.target.value })} class="form-control" id="exampleFormControlTextarea1 my-2" rows="4"></textarea>
                    <div className="d-flex">
                        <button disabled={editLoader} onClick={() => { editSiteInfo() }} className="btn btn-outline-primary my-2">Save Changes</button>
                        {editLoader && <div className="p-2">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>}

                    </div>
                </div>
                }
                {currentState == "Cover" && <div className='my-3'>
                    <div className="d-flex justify-content-between w-100">
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Images
                        </button>
                        <button type="button" class="btn btn-outline-success" onClick={() => { editImages() }}>
                            Save Images
                        </button>
                    </div>
                    <div className="row my-3">
                        {/* <div className="col-md-4 py-2 col-6">

                            <div className="card shadow-none">
                                < img src={"https://www.shutterstock.com/image-vector/upload-add-picture-jpg-file-600nw-1975494812.jpg"} alt="" />
                            </div>


                        </div> */}
                        {coverImages.map((e,i) => {
                            return <div className="col-md-3 py-2 col-4">
                                <div
                                 draggable
                                 onDragStart={() => { setfirstdndElement({ element: e, index: i }); console.log(i) }}
                                 onDragEnter={() => { setseconddndElement({ element: e, index: i }); console.log(i) }}
                                 onDragEnd={() => changeOrder()}
                                className="card shadow-none position-relative">
                                    <span onClick={()=>{excludeImage(i)}} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                        {/* <span class="visually-hidden">unread messages</span> */}
                                    </span>
                                    < img src={e.url} alt="" />
                                </div>

                            </div>
                        })}

                    </div>
                </div>
                }
                {currentState == "Room" && <div className="my-3">
          <AdminRooms theArr={allPackageData} anotherArr={anotherArr} />

                </div>
                }
                
            </div>
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Images</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input accept="image/*" onChange={(e) => { console.log(e.target.files[0]); e.target.files[0] && previewPhoto(e.target.files[0]) }} class="form-control" type="file" id="formFile" />
                                {selectedImage && <img className='w-100 my-2' src={selectedImage} alt="" />}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button ref={modalRef} onClick={()=>{setSelectedImage(null)}} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={!selectedImage || setImageLoader} onClick={() => cloudinary(imageForUpload)} type="button" class="btn btn-outline-primary">Upload</button>
                            {setImageLoader && <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard