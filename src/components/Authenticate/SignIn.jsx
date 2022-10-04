/** @jsxImportSource @emotion/react */
import React ,{ useCallback , useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import * as styles from './styles'

export const SignIn= () => {
const navigate = useNavigate()
    const {
        register: register4,
        formState: { errors: errors4 },
        handleSubmit: handleSubmit4, 
        reset:reset,
        isSubmitSuccessful

      } = useForm({
        mode: "onBlur",
      });

      const onLogin = (data) => {
        console.log(JSON.stringify(data.tel));
        alert(`thank you for your message`);
      };


      const resetAsyncForm = useCallback(async () => {
        const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset(result); // asynchronously reset your form values
      }, [reset]);
      
      useEffect(() => {
        resetAsyncForm()
      }, [isSubmitSuccessful])

    return(
        <>
          <div css={styles.loginWrap}>
            <div css={styles.loginWrapContainer}>
              <h2 css={[styles.center_text,styles.h2Heading]}>Se connecter à <span css={styles.h2Span}>OnlineP2P</span></h2>
               <p css={[styles.center_text,styles.pNotFadedText]}>Welcome back! Please enter your details.</p>
               <form key={4} onSubmit={handleSubmit4(onLogin)}>
                <label css={styles.labelStyles} >Email</label>
                <input css={styles.inputStyles} type="email" {...register4("email", {  required: true, pattern: /^\S+@\S+$/i })} placeholder="Name" />
                {errors4.email && <span css={styles.error}>* write the email with correct pattern</span>}
                <label css={styles.labelStyles} >Mot de passe</label>
                <input css={styles.inputStyles} type="password" {...register4("password", { required: true })} placeholder="Name" />
                {errors4.password && <span css={styles.error}>* Enter your Password</span>}
                <div css={styles.checkwrap}>
                    <div css={styles.checkwrap_check_cont}>
                        <label class="check">
                        <input type="checkbox" {...register4("Safe Browsing", {})} />
                        <span className="checkmark"></span>
                        </label>
                        <p css={styles.pNotFadedText} style={{margin:'0px 10px'}}>Se souvenir de moi</p>
                    </div>
                    <a href='/' css={styles.checkwrap_a}>Mot de passe oublié?</a>
                </div>
                <input type="submit" value="Se Connecter" css={[styles.login_wrap_inputSubmit,styles.inputSubmit]}/>
                <p className='center-text forget-pass' css={[styles.forget_pass,styles.center_text]}>Don’t have an account?<a css={styles.forget_pass_a} onClick={()=>navigate('/signUp')}>Sign Up</a></p>
              </form>
          </div>
          </div>
        </>
    )
}