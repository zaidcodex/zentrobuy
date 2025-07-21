import React from 'react'

const PackageInfo = ({data}) => {

    // const destinationList= [
    //     {title:"United States",image:"https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Turkey",image:"https://images.unsplash.com/photo-1605581810011-c6d684e7ca22?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"United Arab Emirates",image:"https://images.unsplash.com/photo-1620767996534-ba882b75e971?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Estonia",image:"https://images.unsplash.com/photo-1564951537954-29dd59397b90?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Kyrgyzstan",image:"https://images.unsplash.com/photo-1629339569419-4af602a862ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Bulgaria",image:"https://images.unsplash.com/photo-1601152888642-f2f1b5ee0ca2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Greece",image:"https://images.unsplash.com/photo-1598395927056-8d895e701c3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Italy",image:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    //     {title:"Czech Republic",image:"https://images.unsplash.com/photo-1556715371-6264bf5f03ba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    // ]
    return (
        <div className='container p-4 py-5'>
            <div className='pb-3'>
                <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Package Details</h2>
                {/* <h3 style={{opacity: 0.9}}>It is a long established fact that a reader</h3> */}
            </div>

            <p><b>Departure Country:</b> Pakistan</p>
            <p><b>Destination Country:</b> Saudi Arabia</p>
            <p><b>Destination City:</b> Makkah Madina</p>
            <p><b>Company:</b> e-Safar Travels and Tours</p>



            <div className='my-5 pb-2'>
                <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Room Types</h2>


                <table class="table my-4">
                    <thead>
                        <tr style={{ backgroundColor: "#BB332F", color: "white" }}>
                            <th scope="col">Duration</th>
                            <th scope="col">Double</th>
                            <th scope="col">Triple</th>
                            <th scope="col">Quad</th>
                            <th scope="col">Sharing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">10 Days</th>
                            {data.day10.map((e)=>{
                                return  <td>PKR {e}</td>

                            })}
                            {/* <td>95,500</td>
                            <td>77,500</td>
                            <td>72,000</td>
                            <td>72,000</td> */}
                        </tr>
                        <tr>
                            <th scope="row">15 Days</th>
                            {data.day15.map((e)=>{
                                return  <td>PKR {e}</td>

                            })}
                        </tr>
                        <tr>
                            <th scope="row">20 Days</th>
                            {data.day20.map((e)=>{
                                return  <td>PKR {e}</td>

                            })}
                        </tr>
                        <tr>
                            <th scope="row">28 Days</th>
                            {data.day28.map((e)=>{
                                return  <td>PKR {e}</td>

                            })}
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className=' pb-3'>

                <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Hotel Name & Distances</h2>


                <table class="table my-4">
                    <thead>
                        <tr style={{ backgroundColor: "#BB332F", color: "white" }}>
                            <th scope="col">Location</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Distances</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Makkah</th>
                            <td>{data.makkah}</td>
                            <td>{data.makkahDistance}</td>

                        </tr>
                        <tr>
                            <th scope="row">Madinah</th>
                            <td>{data.madinah}</td>
                            <td>{data.madinahDistance}</td>

                        </tr>

                    </tbody>
                </table>
                <div className='pt-3'>
                    <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold",color:"#BB332F" }}>Package Include</h2>
                    {/* <h3 style={{opacity: 0.9}}>It is a long established fact that a reader</h3> */}
                </div>


         


                <table class="table my-4">
                    <thead>
                        <tr style={{ backgroundColor: "#BB332F", color: "white" }}>
                            <th scope="col">Package Inclusions</th>
                            <th scope="col">Inclusion Status</th>
                            {/* <th scope="col">Distances</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Makkah Hotel</th>
                            <td><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></td>
                            {/* <td>0 Meter</td> */}

                        </tr>
                        <tr>
                            <th scope="row">Madinah Hotel</th>
                            <td><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></td>
                            {/* <td>0 Meter</td> */}

                        </tr>
                        <tr>
                            <th scope="row">Room</th>
                            <td><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></td>
                            {/* <td>0 Meter</td> */}

                        </tr>
                        <tr>
                            <th scope="row">Umrah</th>
                            <td><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></td>
                            {/* <td>0 Meter</td> */}

                        </tr>
                        <tr>
                            <th scope="row">Complete Transport</th>
                            <td><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></td>
                            {/* <td>0 Meter</td> */}

                        </tr>

                    </tbody>
                </table>
                {/* <p><b>Makkah Hotel</b><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></p>
                <p><b>Madinah Hotel</b><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></p>
                <p><b>Room</b><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></p>
                <p><b>Umrah Visa</b><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></p>
                <p><b>Complete Transport</b><i style={{ fontSize: '25px', color: "#BB332F" }} class="mx-2 fa fa-check-square" aria-hidden="true"></i></p> */}

                {/* <h3 style={{opacity: 0.9}}>It is a long established fact that a reader</h3> */}
            </div>

        </div >
    )
}

export default PackageInfo