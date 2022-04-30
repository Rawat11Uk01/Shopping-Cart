import './Items.css';
import React from 'react'
import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
const Items = () => {

    return (
        <>
            {data.map((d) => <div className='div__items' >

                <div className='div__image'>
                    <div className='product_image'>
                        <img src={d.image} />
                    </div>
                    <div className='addAndRemove'>
                     
          <p><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></p>
          1
          <p><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></p>
                     
                    </div>
                </div>
                <div className='items__details'>
                    <h1>{d.name}</h1>
                    <p className='price'>${d.price}</p>
                    <p className='color'>Color: <span>{d.color}</span> </p>
                    <p className='stock'>In stock</p>
                    <div className='buttons-div'>
                        <button className='button1'>Delete</button>
                        <button
                        className='button2'>send more like this</button>
                    </div>
                </div>
            </div>)}
<div className='footer'>
<h1>Subtotal <span>$13,500</span></h1>
<button>Proceed to buy (3 items)</button>
</div>
        </>

    )
}

export default Items