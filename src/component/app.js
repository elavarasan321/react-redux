import React from 'react';
 import { useFormik } from 'formik';
 import 'bootstrap/dist/css/bootstrap.min.css'
 import * as yup from "yup";

//  const validate = (values) => {
//     const errors = {};
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } 
  
//     //...
  
//     return errors;
//   };
 
 const App = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validationSchema:yup.object({
        firstName:yup.string()
        .required("First Name is required")
        .strict()
        .trim()
        .min(3,"Minimum 3 character required")
        .max(15,"max 15 character required"),
        lastName:yup.string()
        .required("Last Name is required")
        .strict()
        .trim()
        .min(3,"Minimum 3 character required")
        .max(15,"max 15 character required"),
        email:yup.string()
        .required()
        .email()
        


     }),
     onSubmit: values => {
       console.log(values)
     },
   });
   return (
       <div className="container">
     <form onSubmit={formik.handleSubmit} autoComplete="off">
       <label htmlFor="firstName">First Name</label>
       <input
       className="form-control"
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       {formik.errors.firstName?<div className="text-danger">{formik.errors.firstName}</div>:null}
       
       <label htmlFor="lastName">Last Name</label>
       <input
       className="form-control"
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       {formik.errors.lastName?<div className="text-danger">{formik.errors.lastName}</div>:null}
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         className="form-control"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
       <button type="submit" className="btn btn-primary">Submit</button>
     </form>
     </div>
   );
 };

 export default App;