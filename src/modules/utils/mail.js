
import dotenv from "dotenv";
dotenv.config({});
import  sgMail from '@sendgrid/mail'
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)



export const sendMail = async ({ to, subject, html = "", text = "" } = {}) => {
  try {
    const msg = {
      to, 
      from: process.env.EMAIL_APP, 
      subject, 
      text, 
      html,
    };

    const response = await sgMail.send(msg);
    console.log(`Email sent successfully! Status Code: ${response[0].statusCode}`);
    return { success: true, statusCode: response[0].statusCode };
  } catch (error) {
    console.error(`Failed to send email: ${error.message}`);
    return { success: false, error: error.message };
  }
};



















// export const sendMail =({to, subject ,html , text}={})=>{

//     const msg = {
//         to: to, 
//         from: process.env.EMAIL_APP, 
//         subject:subject,
//         text: text,
//         html: html,
//       }
      
//       sgMail
//         .send(msg)
//         .then((response) => {
//           console.log(response[0].statusCode)
//           console.log(response[0].headers)
//         })
//         .catch((error) => {
//           console.error(error)
//         })

//         return msg;
//       }