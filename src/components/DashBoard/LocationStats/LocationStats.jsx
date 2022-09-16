/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'

const TempStats = [
    {location:'Melbourne, AUS',amount:'100,000,000'},
    {location:'Melbourne, AUS',amount:'100,000,000'},
    {location:'Melbourne, AUS',amount:'100,000,000'},
    {location:'Melbourne, AUS',amount:'100,000,000'},
]

export const LocationStats =()=>{
    return(
        <div css={styles.container}>
            <h2 css={styles.heading}>Location statistics</h2>
            <div>
                {TempStats.map((stat,index)=>{
                    return(
                        <div key={index} css={styles.aLocation}>
                            <div css={styles.flag}>
                            </div>
                            <div>
                                <p css={styles.textStyle}>{stat.location}</p>
                                <p css={styles.textStyle2}>{stat.amount}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}