import React from 'react'
import '../Styles/Details.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Navbar from './Navbar'
import profile from '../Assets/profile.png'
import { MdMailOutline } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Details = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 style={{ fontWeight: 400 }}>Welcome Harsh Pathak</h1>

        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="add_btn">
              <button className='btn btn-primary mx-2'><MdEdit /></button>
              <button className='btn btn-danger'><MdDelete /></button>
            </div>

            <div className='row'>
              <div className="left_view col-lg-6 col-md-6 col-sm-12">
                <img src={profile} style={{ width: 50 }} alt="" />
                <h3 className='mt-3'>Name: <span>Harsh Pathak</span></h3>
                <h3 className='mt-3'>Age: <span>21</span></h3>
                <p className='mt-3'><MdMailOutline />Email: <span>harsh@gmail.com</span></p>
                <p className='mt-3'><MdWork />Occupation: <span>Webdeveloper</span></p>
              </div>

              <div className="right_view col-lg-6 col-md-6 col-sm-12">

                <p className='mt-5'><FaMobileAlt />Mobile: <span>+91 9090909090</span></p>
                <p className='mt-3'><FaLocationDot />Location: <span>ahmedabad</span></p>
                <p className='mt-3'>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, animi!</span></p>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Details
