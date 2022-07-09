const router = require("./routes");
require("../DataBase/dbConnection");
const User= require("../DataBase/Collections/userSignUp/users");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const secSign=process.env.SIGN;



router.post('/login', async (request,response)=>{

    console.log(request.body);
    try {
       
        const {email,password}=request.body;

        if( !email || !password ){
            return response.status(400).json({error:"Please Enter all the ID Password"});
        }else{
            
           
            const IsUserExists= await User.findOne({email:email});
            if(IsUserExists){
                const isPassMatched= await bcrypt.compare(password,IsUserExists.password);
                if(isPassMatched){
                    
                    // Adding Token to DataBase
                       
                       // Generating Token
                         const data={
                                  id:IsUserExists._id
                                }
                         const token= jwt.sign(data,secSign);
                        
                       // Save to DB
                       const saveToken= await IsUserExists.updateOne({token:token});

                       if(saveToken){
                        console.log("token successfully saved to DB ");
                        response.json({
                            message1:" Login Successfully ",
                            message2:"token successfully saved to DB",
                            userName:`${IsUserExists.fname} ${IsUserExists.lname}`,
                            token:token
                        });
                       }else{
                        console.log("token DID NOT successfully saved to DB ");
                        response.json({message:" Login Successfully ",error:"token DID NOT successfully saved to DB"});
                       }
                    
                    

                          

                }else{
                    response.status(402).json({error:"Invalid User ID Password"});
                }
            }else{
                response.status(402).json({error:"Invalid User ID Password"});
            }

        }
    } catch (error) {
        response.json({error:`${error}`});
    }
});