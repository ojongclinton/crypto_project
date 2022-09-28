/** @jsxImportSource @emotion/react */
import { RiPencilLine } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import * as styles from './style'

export const Profile =()=>{
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        mode: "onBlur",
      });

      const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        alert(`thank you for your message`);
      };
    return(
        <div>
              <h3>Profile Desktop</h3>
              <div className='profile-wrap'>
                <div className='prof-img'>
                  <img src="" />
                  <RiPencilLine className='edit-icon' />
                </div>
                <div className='prof-cont'>
                  <h3>Brice Fongang </h3>
                  <h5>Brice Fongang </h5>
                  <span className='active-state'></span>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="profile-form" key={1}>
                <div css={styles.col_50_col}>
                  <label css={styles.labelStyles}>First name</label>
                  <input type="text" css={styles.inputStyles} placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
                  {errors.firstName && <span className='error'>* Fill the required Field</span>}
                </div>
                <div css={[styles.col_50_col,styles.colc]}>
                  <label css={styles.labelStyles}>Last name</label>
                  <input type="text" css={styles.inputStyles} placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
                  {errors.lastName && <span className='error'>* Fill the required Field</span>}
                </div>
                <div css={[styles.col_100_col,styles.colc]}>
                  <label css={styles.labelStyles}>My bio</label>
                  <textarea css={[styles.inputStyles,styles.textArea]} placeholder="My bio" {...register("bio", {required : true})} />
                  {errors.bio && <span className='error'>* Describe Your Little Bio</span>}
                </div>
                <div css={[styles.col_50_col,styles.colc]}>
                  <label css={styles.labelStyles}>Country</label>
                  <input type="text" css={styles.inputStyles} placeholder="Country" {...register("country", {required: true})} />
                  {errors.country && <span className='error'>* Enter your Country Name</span>}
                </div>
                <div css={[styles.col_50_col,styles.colc]}>
                  <label css={styles.labelStyles}>Location</label>
                  <input type="text" css={styles.inputStyles} placeholder="Location" {...register("location", {required: true})} />
                  {errors.location && <span className='error'>* Enter your Location</span>}
                </div>
                <div css={[styles.col_33_col,styles.colc]}>
                  <label css={styles.labelStyles}>Location</label>
                  <select css={styles.inputStyles} {...register("day" , { required: true })}>
                    <option value="">Day</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">7</option>
                  </select>
                  {errors.day && <span className='error'>* Select Day</span>}
                </div>
                <div css={[styles.col_33_col,styles.colc]}>
                  <label css={styles.labelStyles}>Location</label>
                  <select css={styles.inputStyles} {...register("month" , {required: true})}>
                     <option value="">Month</option>
                    <option value="January">January</option>
                    <option value="Feburary">Feburary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  {errors.month && <span className='error'>* Select Month</span>}
                </div>
                <div css={[styles.col_33_col,styles.colc]}>
                  <label css={styles.labelStyles}>Location</label>
                  <select css={styles.inputStyles} {...register("year" , {required: true})}>
                    <option value="">Year</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                  </select>
                  {errors.year && <span className='error'>* Select year</span>}
                </div>
                <div css={[styles.col_50_col,styles.colc]}>
                  <label css={styles.labelStyles}>Email</label>
                  <input css={styles.inputStyles} type="text" placeholder="abc@Email.com" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                  {errors.email && <span className='error'>* Enter your Email</span>}
                </div>
                <div css={[styles.col_50_col,styles.colc]}>
                  <label css={styles.labelStyles}>Phone number</label>
                  <input type="tel" css={styles.inputStyles} placeholder="+237" {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
                  {errors.number && <span className='error'>* Enter your Mobile Number</span>}
                </div>

                <div css={[styles.col_100_col,styles.colc]}>
                  <input type="submit" css={styles.inputSubmit} className='btn' value="change" />
                </div>
              </form>

            </div>
    )
}