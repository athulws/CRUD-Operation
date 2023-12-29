import React, { useState } from 'react'
import '../Styles/Register.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Register = () => {

    const [inpval, setINP] = useState({
        name:"", //ee sambavangal use cheyth backend il ulla datas store cheyym
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
    })

    const setData = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target; // ith "e.target.name" and "e.target.value" num equal aan
        setINP((preval)=>{ // inpval ne fill cheyyanaan setINP 
            return{
                ...preval, //ith name,email,age,
                [name]:value // user enter cheyyunna value ee "name" il store aakm, ee "name" thanne aan form tag nte ullil ittath
            }
        })
    }

    //connection of frontend and backend using "fetch" method
    const addinpdata = async(e)=>{
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = inpval;

        const res = await fetch("http://localhost:8003/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        });


        // backend il varunnath success aano failure aano enn nokki aa varunnath frontend il varan
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            alert("error");
            console.log("error");
        }else{
            alert("data added")
            console.log("data added");
        }
    }
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <Link to={'/'}>home</Link>
                <form className='mt-4'>
                    <div className='row'>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" value={inpval.name} onChange={setData} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">email</label>
                            <input type="email" value={inpval.email} onChange={setData} name='email' class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">age</label>
                            <input type="text" value={inpval.age} onChange={setData} name='age' class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Mobile</label>
                            <input type="number" value={inpval.mobile} onChange={setData} name='mobile' class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Work</label>
                            <input type="text" value={inpval.work} onChange={setData} name='work' class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Adderss</label>
                            <input type="text" value={inpval.add} onChange={setData} name='add' class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-12 col-md-12 col-12">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea value={inpval.desc} onChange={setData} name="desc" className='form-control' id="" cols="30" rows="5"></textarea>
                        </div>
                        
                        <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
