/** @jsxImportSource @emotion/react */
import React from 'react'
import { useParams } from 'react-router-dom'
import { H22 } from '../../Home/GlobalStyles'
import Item from './Item'
import * as styles from './style'

const Viewcategory =({items})=>{
    const {category} = useParams()
    const categoryItems = items.filter(item=>item.category==category)
    console.log(categoryItems)
    
    return(
        <div>
            <H22 style={{margin:'2vh'}}>{category}</H22>
        <div css={styles.allItems}>
            {categoryItems.map((item,index)=>{
                return(
                    <div key={index}>
                        <Item item={item} btnColor='#5A48FB'/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Viewcategory