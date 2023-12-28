import React from 'react'
import Navbar from './Navbar'
import '../Styles/Table.css'
import { CiRead } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Table = () => {
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

                            <tr>
                                <th scope="row">1</th>
                                <td>meet</td>
                                <td>meet@email.com</td>
                                <td>Webdeveloper</td>
                                <td>9191919191</td>
                                <td className='d-flex justify-content-between'>
                                    <button className='btn btn-success'><CiRead /></button>
                                    <button className='btn btn-primary'><MdEdit /></button>
                                    <button className='btn btn-danger'><MdDelete /></button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>meet</td>
                                <td>meet@email.com</td>
                                <td>Webdeveloper</td>
                                <td>9191919191</td>
                                <td className='d-flex justify-content-between'>
                                    <button className='btn btn-success'><CiRead /></button>
                                    <button className='btn btn-primary'><MdEdit /></button>
                                    <button className='btn btn-danger'><MdDelete /></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
