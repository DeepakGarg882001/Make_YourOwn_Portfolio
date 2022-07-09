const router = require("./routes");
const AdminMessage= require("../DataBase/Collections/getInTouch/message");
require("../DataBase/dbConnection");

router.post('/message', async (request,response)=>{

    console.log(request.body);

    try {
        
        const { clientEmail, clientName, clientPhone, clientMessage}= request.body;

       if( !clientEmail || !clientName || !clientPhone || !clientMessage){
        return response.status(401).json({error:" Please fill the complete form "});

       }else{
            
          const addMessage = { clientEmail, clientName, clientPhone, clientMessage };
          
          const newMessage =new AdminMessage(addMessage);

          const post = await newMessage.save();

          if(post){
            response.status(201).json({message:"Message Successfully send to Admin window"});
          }else{
            response.status(401).json({error:"Message Failed "});
          }
       }

    } catch (error) {
        console.log(error);
        response.json({error:error}).send(error);
    }

});