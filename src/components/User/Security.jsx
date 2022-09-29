/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { TabPanel,Tabs } from "react-tabs"
import * as styles from './style'
import {H11,H22,H33} from '../Home/GlobalStyles'

export const Security =()=>{
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        mode: "onBlur",
      });
    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
      } = useForm({
        mode: "onBlur",
      });
      const onSubmitId2 = (data) => {
        console.log(JSON.stringify(data.tel));
        alert(`thank you for your message`);
      };
      const {
        register: register3,
        formState: { errors: errors3 },
        handleSubmit: handleSubmit3,
      } = useForm({
        mode: "onBlur",
      });
    
    
    
      const onSubmitId = (data) => {
        console.log(JSON.stringify(data.tel));
        alert(`thank you for your message`);
      };
    return(

        <div>
             <h3>Security</h3>
              <form key={2} onSubmit={handleSubmit2(onSubmitId)} className="privacy">
                <label css={styles.labelStyles}>New password</label>
                <input css={styles.inputStyles} type="password" {...register2("newPassword", { required: true })} placeholder="Name" />
                {errors2.newPassword && <span className='error'>* Enter your New Password</span>}
                <label css={styles.labelStyles}>Confirm</label>
                <input css={styles.inputStyles} type="password" {...register2("confirmPassword", { required: true })} placeholder="Name" />
                {errors2.confirmPassword && <span className='error'>* Confirm your New Password</span>}
                <input css={styles.inputSubmit} type="submit" className='inactive' />
              </form>

              <form key={3} onSubmit={handleSubmit3(onSubmitId2)} className="authentic-form privacy">
                <label css={styles.labelStyles}>Two Factors Authentification</label>
                <input css={styles.inputStyles} type="email" placeholder="Enter personal email address" {...register3("email", { required: true })} />
                {errors3.email && <span className='error'>This field is required</span>}
                <input css={styles.inputStyles} type="tel" placeholder="Enter your phone number " {...register3("tel", { required: true })} />
                {errors3.tel && <span className='error'>This field is required</span>}
                <input css={styles.inputStyles} type="email" placeholder="Bricefongang@gmail.com" {...register3("email2", { required: true })} />
                {errors3.email2 && <span className='error'>This field is required</span>}
                <input css={styles.inputStyles} type="text" placeholder="Add biometric ID" {...register3("biometricID", { required: true })} />
                {errors3.biometricID && <span className='error'>This field is required</span>}
                <input css={styles.inputSubmit} type="submit" />
              </form>


              <div className='security-box privContent' >
                <H22>Extra Security</H22>
                <form onSubmit={handleSubmit()}>
                  <div className='check-cont'>
                    <label css={styles.labelStyles} class="check">
                      <input type="checkbox" placeholder="Get alerts about unrecognized logins " {...register("Get alerts about unrecognized logins ", {})} />
                      <span class="checkmark"></span>
                    </label>
                    <p css={styles.styledH4}>Get alerts about unrecognized logins <span>We’ll let you know if anyone logs in from a device or browser you don’t usually use. </span></p>
                  </div>
                  <div className='check-cont'>
                    <label css={styles.labelStyles}class="check">
                      <input type="checkbox" placeholder="Safe Browsing" {...register("Safe Browsing", {})} />
                      <span class="checkmark"></span>
                    </label>
                    <p css={styles.styledH4}>Safe Browsing <span>Display a warning if you attempt to navigate to a potentially dangerous or deceptive website through our platform </span></p>
                  </div>
                </form>
              </div>

              <div className='privacy-box privContent'>
                <H22 css={styles.styledH3}>Privacy</H22>
                <h4 css={styles.styledH4}>Data Controls </h4>
                <p css={styles.pNotFadedText}>We’ll let you know if anyone logs in from a device or browser you don’t usually use. </p>
                <h4 css={styles.styledH4}>Data Controls </h4>
                <p css={styles.pNotFadedText}>We’ll let you know if anyone logs in from a device or browser you don’t usually use. </p>
                <h4 css={styles.styledH4}>Data Controls </h4>
                <p css={styles.pNotFadedText}>We’ll let you know if anyone logs in from a device or browser you don’t usually use. </p>
              </div>

              <div className='help-box privContent'>
                <H22 css={styles.styledH3}>Get help</H22>
                <h4 css={styles.styledH4}>Learn more about security </h4>
                <div className='faq-links'>
                  <a href="/"> If you think your account was hacked </a>
                  <a href="/">If you’ve noticed unusual activity on your account, tell us what's happening so we can help you. </a>
                </div>
              </div>
              </div>
 
    )
}