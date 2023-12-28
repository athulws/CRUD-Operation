import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../Styles/Table.css'
import { CiRead } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Table = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async (e) => {


        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });


        // backend il varunnath success aano failure aano enn nokki aa varunnath frontend il varan
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error");
        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => { //"useEffect" use cheyyunnath --> page reload cheyyumbol "getdata" enna fuction ne call cheyyum
        getdata();
    })

    return (
        <div>
            <Navbar />
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <Link to='/register' className='btn btn-primary'>Add data</Link>
                    </div>

                    <table class="table">
                        <thead>
                            <tr class="table-dark">
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id+1}</th>
                                                <td>{element?.name}</td>
                                                <td>{element?.email}</td>
                                                <td>{element?.work}</td>
                                                <td>{element?.mobile}</td>
                                                <td className='d-flex justify-content-between'>
                                                    <button className='btn btn-success'><CiRead /></button>
                                                    <button className='btn btn-primary'><MdEdit /></button>
                                                    <button className='btn btn-danger'><MdDelete /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }





                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
