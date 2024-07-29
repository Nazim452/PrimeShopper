import mongoose from "mongoose";
import nodemailer from 'nodemailer';


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:{},
        required:true
    },
    answer:{
        type:String,
        required:true
    },

    role:{
        type:Number,
        default:0,
    },
    

},{timestamps:true})



userSchema.post("save", async function(doc){
    try {
        console.log("DOC--------------->>>>>>>>>>>>>",doc);
        //1st -- create Transpoter
        //shift all thi one in configure folder
        let transpoter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
               user: process.env.MAIL_USER, 
               pass:process.env.MAIL_PASS,

            },

        })

        //send mail

        try {
            let info = await transpoter.sendMail({
                from:`Nazim`,
                to:doc.email   ,                    // jo db me enry th usme mail bhi tha us mail ko bheja ja raha hia
                subject:"Welcome to PrimeShopper",
                html:`<h1>Founder of PrimeShopper - Nazim </h1><h2>Unlock Your potential today with PrimeShhopper </h2>  <h3>Welcome to our online shopping community! 🎉 Get ready to embark on an exciting journey of style and savings. As a valued member, you'll enjoy exclusive deals, personalized recommendations, and seamless shopping experiences. Dive in now to discover a world of endless possibilities and let us make your shopping dreams come true! Happy shopping </h3> `
            })
            console.log("INfo------------->>>>>>>>>>>>>",info);
            
        } catch (error) {
            console.log(error);
            console.error(error);
            console.log("Something Went Wrong While sending mail");
            
        }

       

        
    } catch (error) {
        console.error(error);
        console.log("Error while sending mail");
        
    }
})




//users - jo mongoose schema me hai
export default mongoose.model('users',userSchema)














