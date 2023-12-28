const express = require("express")
const router = express.Router();

const users = require("../Models/userSchema"); //ith ivideyum mention cheyyanam

// router.get("/",(req,res)=>{
//     console.log("connect");
// });


//register user

router.post("/register",async(req,res)=>{ //user nte data database il keran
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body; //ivide direct mention cheyyukayaan cheyyunnath

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
       res.status(404).json("Plz fill the data") 
       return;//This will help to avoid sending multiple responses for a single request.
    }

    try {
        const preuser = await users.findOne({email:email}) //"users" enna database il already register cheytha user aano nokkan,(ie, already register aaya email ID aano enn nokkan)
                                                          // "email:email" --> aadyathe "email" database il ulla email, randamathe "email" is nammal type cheyyunna email
        console.log(preuser);

        if (preuser) {
            res.status(404).json("this user is already present") // database il add aaya email ID aan koduthathenkil aa email ID database il add aakilla, athinulla message aan ith
            return; //This will help to avoid sending multiple responses for a single request.
        }else{
            const adduser = new users({ // database il illatha details aan kodukkunnathenkil 
                name,email,age,mobile,work,add,desc
            });
            
            await adduser.save(); // database il save aakan
            res.status(201).json(adduser) // save aayal response send cheyyum
            console.log(adduser);
        }
    } catch (error) {
        res.status(404).json(error)
    }
})


//get userdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find(); // user details find cheythu
        res.status(201).json(userdata)
        console.log(userdata);
        
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;