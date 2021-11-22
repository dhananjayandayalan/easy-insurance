import React from "react";
import classes from './login.module.css'
import { Formik } from "formik"; //
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./validate-form.css";
import logo from './contact_logo 2.jpg'
 
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address.";
        }
     
        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long.";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Invalid password. Must contain one number.";
        }
     
        return errors;
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
 
      return (
        //   validating login-form.js   //
        <form onSubmit={handleSubmit}>
            <div class="context">
                <div className={classes.login}>
                    <div className={classes.left}>
                        <div className={classes.left_card}>
                            <img src={logo} alt=""/>
                            <h2 className={classes.tag_line}>Easy Insurance</h2>
                        </div>
                    </div>
                    
                    <div className={classes.right}>
                        
                        <div className={classes.right_card}>
                        <div className={classes.right_top}>
                                    <button>Need Help?</button>
                                </div>
                                <div className={classes.right_middle}>
                            <form>
                                <div className={classes.login_form_ctn}>
                                    <div className={classes.lf_top}>
                                        <h2>Login</h2>
                                    </div>

                                    <div className={classes.lf_middleOne}>
                                    <label htmlFor="email">Email</label> 
                                    <input
  id="email"
  name="email"
  type="text"
  placeholder="Enter your email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.email && touched.email && "error"}
/>
{errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
) }
                                  <label htmlFor="password">Password</label>
     
     <input
       id="password"
       name="password"
       type="password"
       placeholder="Enter your password"
       value={values.password}
       onChange={handleChange}
       onBlur={handleBlur}
       className={errors.password && touched.password && "error"}
     />
     {errors.password && touched.password && (
       <div className="input-feedback">{errors.password}</div>
     )}
                                    </div>

                                    <div className={classes.lf_middleTwo}>
                                        <button >Forgotten Password?</button>
                                    </div>
                                    
                                    <div className={classes.lf_bottom}>
                                        <a className={classes.lgin_btn}
                                        type='submit'>Log In</a>
                                    </div>   

                                </div>
                            </form>
                        
                    </div>
                </div>
                </div>
                    
                </div>
            </div>

 
     
      <button type="submit" disabled={isSubmitting}>
  Login
</button>
 
    </form>
      );
    }
    }
  </Formik>
);
 
export default ValidatedLoginForm;