/** @jsxImportSource @emotion/react */
import React from 'react';
import { useForm } from "react-hook-form";
import * as styles from './styles'

export default () => {

    const {
        register: register5,
        formState: { errors: errors5 },
        handleSubmit: handleSubmit5,
      } = useForm({
        mode: "onBlur",
      });

      const onSignup = (data) => {
        console.log(JSON.stringify(data.tel));
        alert(`thank you for your message`);
      };

    return(
        <>

          <div >
            <div css={styles.signup_wrap_container}>
              <h2 css={[styles.center_text,styles.h2Heading]}>Se connecter à <span css={styles.h2Span}>OnlineP2P</span></h2>
               <p css={[styles.center_text,styles.pNotFadedText]}>Welcome back! Please enter your details.</p>
               <form onSubmit={handleSubmit5(onSignup)} css={styles.signup_wrap_signup_form} key={1}>
                <div css={[styles.col_50_col , styles.colc]}>
                  <label css={styles.labelStyles}>First name</label>
                  <input css={styles.inputStyles} type="text" placeholder="First name" {...register5("firstName", { required: true, maxLength: 80 })} />
                  {errors5.firstName && <span css={styles.error}>* Fill the required Field</span>}
                </div>
                <div css={[styles.col_50_col , styles.colc]}>
                  <label css={styles.labelStyles}>Last name</label>
                  <input css={styles.inputStyles} type="text" placeholder="Last name" {...register5("lastName", { required: true, maxLength: 100 })} />
                  {errors5.lastName && <span css={styles.error}>* Fill the required Field</span>}
                </div>
                <div css={[styles.col_100_col , styles.colc]}>
                  <label css={styles.labelStyles}>My bio</label>
                  <textarea css={[styles.inputStyles,styles.textArea]} placeholder="My bio" {...register5("bio", {required : true})} />
                  {errors5.bio && <span css={styles.error}>* Describe Your Little Bio</span>}
                </div>
                <div css={[styles.col_50_col , styles.colc]}>
                  <label css={styles.labelStyles}>Country</label>
                  <input css={styles.inputStyles} type="text" placeholder="Country" {...register5("country", {required: true})} />
                  {errors5.country && <span css={styles.error}>* Enter your Country Name</span>}
                </div>
                <div className='col-50 col'>
                  <label css={styles.labelStyles}>Location</label>
                  <input css={styles.inputStyles} type="text" placeholder="Location" {...register5("location", {required: true})} />
                  {errors5.location && <span css={styles.error}>* Enter your Location</span>}
                </div>
 
             
                <div css={[styles.col_33_col , styles.colc]}>
                  <label css={styles.labelStyles}>Email</label>
                  <input css={styles.inputStyles} type="text" placeholder="abc@Email.com" {...register5("email", { required: true, pattern: /^\S+@\S+$/i })} />
                  {errors5.email && <span css={styles.error}>* Enter your Email</span>}
                </div>
                <div css={[styles.col_33_col , styles.colc]}>
                  <label css={styles.labelStyles}>DOB</label>
                  <input css={styles.inputStyles} type="date" {...register5("dob" , { required: true })} />
                  {errors5.dob && <span css={styles.error}>* Select Day</span>}
                </div>


                <div css={[styles.col_33_col , styles.colc]}>
                  <label css={styles.labelStyles}>Postal Code</label>
                  <input css={styles.inputStyles} type="text" placeholder="Postal Code" {...register5("postalcode", { required: true})} />
                  {errors5.postalcode && <span css={styles.error}>* Enter your Mobile Number</span>}
                </div>

                <div css={[styles.col_50_col , styles.colc]}>
                  <label css={styles.labelStyles}>Phone number</label>
                  <input css={styles.inputStyles} type="tel" placeholder="+237" {...register5("number", { required: true, minLength: 6, maxLength: 12 })} />
                  {errors5.number && <span css={styles.error}>* Enter your Mobile Number</span>}
                </div>
                <div css={[styles.col_50_col , styles.colc]}>
                  <label css={styles.labelStyles}>Account-Type</label>
                  <select css={styles.inputStyles} {...register5("accounttype" , { required: true })}>
                    <option value="">Select</option>
                    <option value="1">buyer</option>
                    <option value="2">saller</option>
                  </select>
                  {errors5.accounttype && <span css={styles.error}>* Select Day</span>}
                </div>

                <div style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
                  <input css={styles.inputSubmit} type="submit" className='btn' value="Create account" />
                </div>
              </form>
          </div>
          </div>
        </>
    )
}