import React, { useState, useEffect, useHistory } from 'react'
import '../Styles/Edit.css'
import { Link, useParams } from 'react-router-dom'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   


    //  ............................Table.jsx...................................   
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    //  ............................Table.jsx...................................



    //  ............................Details.jsx.................................


    //eye nte icon click cheyyumbol oro "id" kk anusarich details varan
    const { id } = useParams("")
    console.log(id);

    const getdata = async (e) => {

        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
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
            setINP(data) // ivide nammude data ellam "setINP" store aakknnu, so "edit" icon click cheyyumbol athil ulla datas forms il fill aakm
            // munbe ivide undayath ---> "setUserdata(data)" 
            console.log("get data");
        }
    }

    useEffect(() => { //"useEffect" use cheyyunnath --> page reload cheyyumbol "getdata" enna fuction ne call cheyyum
        getdata();
    }, []);

    //  ............................Details.jsx.................................


    //  ............................editing setting.................................

    const updateuser = async (e) => {
        e.preventDefault();

        const { name, email, work, add, mobile, desc, age } = inpval;

        const res2 = await fetch(`http://localhost:8003/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, add, mobile, desc, age
            })
        });

        // backend il varunnath success aano failure aano enn nokki aa varunnath frontend il varan
        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data")
        } else {
            alert("data added")

            
        }

    }

    //  ............................editing setting.................................


    return (
        <div className='container'>
            <Link to={'/'}>home2</Link>
            <form className='mt-4'>
                <div className='row'>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="email" value={inpval.name} onChange={setData} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
