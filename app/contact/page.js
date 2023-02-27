// import React from "react";
// import "./ContactUs.scss";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import FormInput from "../../CommonComponents/FormInput/FormInput";
// import FormText from "../../CommonComponents/FormInput/FormText";
// import BlueBtn from "../../CommonComponents/BlueBtn/BlueBtn";

// import first from "../../assest/contact/first.svg";
// import second from "../../assest/contact/second.svg";
// import third from "../../assest/contact/three.svg";
// import { FaTelegramPlane } from "react-icons/fa";
// import Marque from "../../components/Marque/Marque";

// const ContactUs = () => {
//   const validate = Yup.object({
//     fullName: Yup.string()
//       .min(2, "Name must be 2 character")
//       .max(20, "Must be 15 characters or less")
//       .required("Required"),
//     email: Yup.string().email("Email is invalid").required("Required"),
//     message: Yup.string()
//       .min(6, "Must be at least 6 charaters")
//       .max(100, "Must be 100 character or less.")
//       .required("Required"),
//   });

//   return (
//     <>
//       <div className="contact">
//         <div class="mobile-marque">
//           <Marque />
//         </div>
//         <div className="deskone-chaticon-mobile">
//           <div className="only-for-mobile">
//             <div className="chat-icon">
//               <FaTelegramPlane />
//             </div>
//           </div>
//         </div>
//         <div className="contact-disclamer">
//           <h2 className="contact-disclamer-heading">Disclaimer</h2>
//           <p className="contact-disclamer-para">
//             AJ Sports merely links/embeds content uploaded to popular media
//             hosting websites such Vimeo.com, Dailymotion.com, Youtube.com,
//             twitch.tv, reddit.com, etc. AJ Sports does not host any audio-visual
//             content itself and has no ability to modify such content. We thus
//             cannot accept any liability for the content transmitted by others as
//             we are not affiliated nor endorsed by the external content. All
//             content is copyright of their respective owners. AJ Sports operates
//             as a search engine for streams and videos already hosted publicly on
//             the world wide web. For any legal issues please contact appropriate
//             media file owners.
//           </p>
//           {/* <br />
//             <p className="contact-disclamer-para"> Email : info@gmail.com</p> */}
//         </div>
//         <div className="only-for-desktop">
//           <div className="only-for-desktop-chat-icon">
//             <FaTelegramPlane />
//           </div>
//         </div>
//         <div className="contact-container">
//           <div className="contactform">
//             <center>
//               <p className="contactform-heading">Contact Us</p>
//             </center>
//             <center>
//               <p className="contactform-subheading">How can we help you?</p>
//             </center>

//             <div className="form-width">
//               <Formik
//                 initialValues={{
//                   fullName: "",
//                   email: "",
//                   amount: "",
//                 }}
//                 validationSchema={validate}
//                 onSubmit={(values) => {
//                   console.log(values);
//                 }}
//               >
//                 {(formik) => (
//                   <div>
//                     <Form className="contact-form">
//                       <FormInput
//                         label="Full Name"
//                         name="fullName"
//                         type="text"
//                       />
//                       <FormInput
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                       />
//                       <FormText label="Message" name="message" />
//                       <div className="contactform-btn">
//                         <center>
//                           <BlueBtn type="submit" text="Submit" />
//                         </center>
//                       </div>
//                     </Form>
//                   </div>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//         <div className="contact-information">
//           <div className="contact-information-container">
//             <div className="contact-information-container-top">
//               <div className="contact-information-container-top-item">
//                 <img src={third} alt="phone" />
//                 <p>+7(35130)3-11-81</p>
//               </div>
//               <div className="contact-information-container-top-item">
//                 <img src={second} alt="phone" />
//                 <p>ajsports1@protonmail.com</p>
//               </div>
//             </div>
//             <div className="contact-information-container-bottom">
//               <img src={first} alt="phone" />
//               <p>Matrosova, bld. 30. Ozersk, Russia</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
