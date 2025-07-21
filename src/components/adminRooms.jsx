import React, { useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core'
import { useState, useContext } from 'react';
import AppContext from '../context/appContext';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./theimages', false, /\.(png|jpe?g|svg)$/));
const AdminRooms = ({ theArr, anotherArr }) => {
  const [packageType, setPackageType] = useState("normal")
  const [date, setDate] = useState("10")
  const buttonRef = useRef(null)
  console.log(theArr);


  const context = useContext(AppContext)
  const {deleteRoom,createRoom,editRooms, obj,setobj,allPackageData,roomButtonRef, roomImageCloudinary, roomSelectedImage, setRoomSelectedImage, setCoverImages, editImages, setImageLoader, selectedImage, setSelectedImage, modalRef, adminToken, setAdminToken, siteData, setSiteData, editSiteInfo, editLoader, coverImages, cloudinary } = context

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

    setRoomSelectedImage(anotherImage)
    setImageForUpload(theimage)
  }

  const excludeImage = (index) => {
    const newArr = obj.assets.filter((e, i) => { return i !== index })
    // console.log(new);

    setobj({...obj,assets:newArr})
  }


  const [firstdndElement, setfirstdndElement] = useState({ element: null, index: null })
  const [seconddndElement, setseconddndElement] = useState({ element: null, index: null })

  const changeOrder = () => {
    // imgPreview.splice(firstdndElement.index,0,seconddndElement.element.url)
    // imgPreview.splice(seconddndElement.index,1,firstdndElement.element.url)

    obj.assets.splice(firstdndElement.index, 1, seconddndElement.element)
    obj.assets.splice(seconddndElement.index, 1, firstdndElement.element)

    setobj({...obj})
  }

  console.log(firstdndElement)
  console.log(seconddndElement)


  

  const filterData=(packageid)=>{
    const newObj = allPackageData.filter((e) => {
      return e._id == packageid
    })
  
    
    
    setobj({...newObj[0],newPackage:false})
  }

  console.log(obj)
  // console.log(obj);
  
  



  return (
    <div>
    {allPackageData.length>0&&<div className='container p-4 pt-5'>
      <div className='pb-3'>
        <h2 className='pb-3' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#6699ff' }}>Current Featured Rooms</h2>
        <button onClick={()=>{
          buttonRef.current.click()
          setobj({name:"",description01:"",description02:"",assets:[],services:[],newPackage:true})
        }} className="btn btn-outline-primary">Add New Package</button>


        <div className="row ">
          {allPackageData.map((e, i) => {
            return <div className="col-md-4 col-12">
              <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
              // style={{ borderColor: "#6699ff" }}
              >
                <img src={e.assets[0].url} class="card-img-top rounded-4" alt="..." />

                <div class="px-0 card-body d-flex flex-column">
                  <h2 style={{ fontWeight: "bold" }} class="h4">{e.name}</h2>
                  <div className="d-flex mb-2">
                    <div className="ratings">
                      <span className="mx-1">4.5</span>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  {/* <p class="card-text">{e.description01}</p> */}
                <p class="card-text">{e.description01.slice(0,183)+" ..."}</p>

                  {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">Rs.7500</h2> +Tax</p> */}
                  <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>

                    <span onClick={() => { filterData(e._id);buttonRef.current.click() }} style={{ backgroundColor: "#6699ff", color: "white" }} class="btn">Edit <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span>
                    {/* <Link  onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}} to={`/room/${e._id}`}><span style={{ backgroundColor: "#6699ff", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></Link> */}
                  </div>
                </div>
              </div>
            </div>
          })}




        </div>
      </div>



      {/* <div className='py-3'>
        <h2 className='pb-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#BB332F" }}>Who Are We?</h2>

        <p>e-Safar Travel & Tours is one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country.</p>
        <p>We provide you with flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multi – national companies, foreigners and Pakistan’s living abroad.
        </p>
        <p style={{ color: "#BB332F" }}><strong>Following are the projects of e-Safar i.e </strong>
        </p>

        <ul>
          <li>
            e-Safar Travel and Tours
          </li>
          <li>
            e-Journey Travel and Tours
          </li>
          <li>
            Booking Agora
          </li>
        </ul>


        <p className='text-center'><strong style={{ color: "#BB332F" }}>Our motive is</strong> <br /> <strong>"Satisfy your Journey".</strong></p>
      </div> */}

      {/* <!-- Button trigger modal --> */}
      <button ref={buttonRef} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Featured Room</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {obj&&<div class="modal-body">
              
              <h4>Package Name</h4>
              <input
                value={obj.name} onChange={(e) => setobj({ ...obj, name: e.target.value })} 
                type="text" placeholder='Package Name' className="form-control my-2 " />


              <div className="d-flex justify-content-between w-100">
                <button type="button" class="btn btn-outline-primary"
                  data-bs-target="#anotherModal"
                  data-bs-toggle="modal" >
                  Add Images
                </button>
                <button type="button" class="btn btn-outline-success"
                // onClick={() => { editImages() }}
                >
                  Save Images
                </button>
              </div>
              <div className="row my-3">
                {/* <div className="col-md-4 py-2 col-6">

                            <div className="card shadow-none">
                                < img src={"https://www.shutterstock.com/image-vector/upload-add-picture-jpg-file-600nw-1975494812.jpg"} alt="" />
                            </div>


                        </div> */}
                {obj.assets.map((e, i) => {
                  return <div className="col-md-3 py-2 col-4">
                    <div
                      draggable
                      onDragStart={() => { setfirstdndElement({ element: e, index: i }); console.log(i) }}
                      onDragEnter={() => { setseconddndElement({ element: e, index: i }); console.log(i) }}
                      onDragEnd={() => changeOrder()}
                      className="card shadow-none position-relative">
                      <span
                        onClick={() => { excludeImage(i) }}
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <i class="fa fa-times" aria-hidden="true"></i>

                        {/* <span class="visually-hidden">unread messages</span> */}
                      </span>
                      < img src={e.url} alt="" />
                    </div>

                  </div>
                })}


              </div>
              <h4>Package Description 1</h4>
              <input
              value={obj.description01} onChange={(e) => setobj({ ...obj, description01: e.target.value })} 
                // value={siteData.phone} onChange={(e) => setSiteData({ ...siteData, phone: e.target.value })} 
                type="text" placeholder='Description 1' className="form-control my-2 " />
              <h4>Package Description 2</h4>
              <input
              value={obj.description02} onChange={(e) => setobj({ ...obj, description02: e.target.value })} 
                // value={siteData.phone} onChange={(e) => setSiteData({ ...siteData, phone: e.target.value })} 
                type="text" placeholder='Description 1' className="form-control my-2 " />
              <h4>Package Services</h4>
              <button onClick={()=>{
                const incrementedServices = [...obj.services,"Newly Added Service"]
                setobj({...obj,services:incrementedServices})}} className="btn btn-outline-success">Add Services</button>
              
              {obj.services.map((element,index)=>{
                return   <div className="input-group my-2"><input
                key={index}
                value={element}
                onChange={(e) => {
                  const updatedServices = [...obj.services];
                  updatedServices[index] = e.target.value;
                  setobj({ ...obj, services: updatedServices });
                }}
                type="text"
                placeholder="New Services"
                className="form-control"
              />
              <div className="input-group-text">
              <i class="fa fa-times text-danger" 
              onClick={()=>{
                const decrementedServices = obj.services.filter((e,i)=>{return i!==index });
                setobj({...obj,services:decrementedServices})
              }}
              aria-hidden="true"></i>

              </div>
              </div>
              })}
              
              {!obj.newPackage&&<div className="d-flex w-100">
                <button  data-bs-target="#deleteModal" data-bs-toggle="modal" className="btn btn-outline-danger w-100">Delete Package</button>
              </div>}
            </div>
            }
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={()=>obj.newPackage?createRoom():editRooms()} data-bs-dismiss="modal" type="button" class="btn btn-outline-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="anotherModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Images</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
             

            </div>
            {/* <div class="modal-footer">
              <button class="btn btn-outline-secondary" data-bs-target="#exampleModal" data-bs-toggle="modal">Back</button>
              <button type="button" class="btn btn-outline-primary">Save changes</button>
            </div> */}
            <div class="modal-body">
              <div class="mb-3">
                <label for="formFile" class="form-label">Select image file</label>
                <input accept="image/*" onChange={(e) => { console.log(e.target.files[0]); e.target.files[0] && previewPhoto(e.target.files[0]) }} class="form-control" type="file" id="formFile" />
                {roomSelectedImage && <img className='w-100 my-2' src={roomSelectedImage} alt="" />}
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-outline-secondary" ref={roomButtonRef} onClick={() => { setRoomSelectedImage(null) }} data-bs-target="#exampleModal" data-bs-toggle="modal">Back</button>
              {/* <button type="button" class="btn btn-outline-primary">Save changes</button> */}
              {/* <button ref={modalRef} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button disabled={!roomSelectedImage || setImageLoader} onClick={() => roomImageCloudinary(imageForUpload)} type="button" class="btn btn-outline-primary">Upload</button>
              {setImageLoader && <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Validation</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <h5 className="text-center text-danger">Proceed to delete, the following content cannot be restored when deleted.</h5>
             

            </div>
            {/* <div class="modal-footer">
              <button class="btn btn-outline-secondary" data-bs-target="#exampleModal" data-bs-toggle="modal">Back</button>
              <button type="button" class="btn btn-outline-primary">Save changes</button>
            </div> */}
           
            <div class="modal-footer">
              <button class="btn btn-outline-secondary" data-bs-target="#exampleModal" data-bs-toggle="modal">Back</button>
              {/* <button type="button" class="btn btn-outline-primary">Save changes</button> */}
              {/* <button ref={modalRef} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button  type="button" data-bs-dismiss="modal" onClick={()=>deleteRoom()} class="btn btn-outline-danger">Delete</button>
        
            </div>
          </div>
        </div>
      </div>

    </div >}
    </div >
  )
}

export default AdminRooms