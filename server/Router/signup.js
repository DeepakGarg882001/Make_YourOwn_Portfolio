const router=require("./routes");
const bcrypt=require("bcryptjs");
require("./../DataBase/dbConnection");
const User= require("./../DataBase/Collections/userSignUp/users");


router.post('/register', async (request,response)=>{
    
    console.log(request.body);
    try {
        
        const {fname,lname,email,phone,work,password}=request.body;

        if( !fname || !lname || !email || !phone || !work || !password ){
            return response.json({message:"Please Enter all the Details of FORM "});
        }else{

            const IsUserExists= await User.findOne({email:email});
            if(IsUserExists){
               return response.status(422).json({error:"User already Exists whith this email"});
            }else{
                 const salt= await bcrypt.genSalt();
                 const secure= await bcrypt.hash(password,salt);
                 
                const newUser = new User({fname,lname,email,phone,work,password:secure});
                
                const addedToDB= await newUser.save();
              
                if(addedToDB){
                    response.status(201).json({message:" user register successfully "});
                    console.log("registered");
                    console.log(addedToDB);
                    console.log("now new user Doc");
                    console.log(newUser);
                   
                   
                }else{
                    response.status(500).json({error:" registeration process failed "});
                }
            }
        }
        
    } catch (error) {
        response.json({error:`${error}`});
    }
});