const jwt =require("jsonwebtoken");
const User = require("../DataBase/Collections/userSignUp/users");


// Initialise The Middleware Between Client and Server
const Key = process.env.SIGN;

const authenticate = async (request,response,next) =>{
 
    console.log("wait.. checking aboutUsMiddleware");
    try {

        const token = request.cookies.myToken; 
           
        console.log(request.cookies);
        const makeVerify =  jwt.verify(token,Key);
        // console.log(makeVerify);

        if(makeVerify.id){
               
            const userIs = await User.findOne({_id:makeVerify.id});
           
            if(userIs){
                
                console.log(" User verified ");
                console.log(userIs);

                request.rootUser=userIs;
                request.token=token; 

                next();

            }else{
                console.log(" User did not found"); 
            }
            
        }else{
           console.log("unAuthorised User ");
        }

       

    } catch (error) {
        console.log(error);
        response.status(401).json({error:`${error}`})
    }
    
   

 }

module.exports=authenticate;