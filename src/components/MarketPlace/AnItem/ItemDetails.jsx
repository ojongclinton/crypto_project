/** @jsxImportSource @emotion/react */
import * as styles from './style'
import React from 'react'
import { useParams } from 'react-router-dom'


function ItemDetails() {
    let {itemId} = useParams()
    console.log(itemId)
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero commodi quisquam sit, fugit quidem non placeat maiores fuga voluptatem reiciendis aspernatur voluptatibus numquam ducimus ea molestiae animi veritatis quibusdam quasi, vel nemo facilis sequi aliquam. Rerum sunt tempora qui odio consequatur! Earum impedit autem fugiat, magnam accusantium vel nam repudiandae nobis? Suscipit facilis ad unde illo quod deserunt id non natus eligendi, impedit voluptatem nesciunt voluptatum ipsa similique consequatur! Laborum reiciendis iure repellendus in voluptatibus velit earum, quidem beatae sunt hic reprehenderit harum sequi nulla tenetur omnis voluptate, accusantium magnam consequuntur? Libero ullam repellat optio possimus saepe placeat. Tenetur!
      
    </div>
  )
}

export default ItemDetails