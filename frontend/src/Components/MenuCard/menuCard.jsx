import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'
import { useParams } from 'react-router';

import { foodImg } from '../../Common/imageImports'
import { capitalizeFirstLetter } from '../../Common/common'
import {
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit'
import { useState } from 'react';

const MenuCard = ({props, iconFlag}) => {
  const {title, image, price, description} = props;
  const dispatch = useDispatch();
  const cartReducer = useSelector(state => state.cartReducer);
  const {restaurant_id}  = useParams()
  const resto_id = restaurant_id;

  return (
    <div className='d-flex m-2 flex-column flex-sm-row border-2'>
        <div>
            <img style={{width: "clamp(100px, 15%, 300px)"}} className="rounded-3" src={foodImg} alt="" />
        </div>
        <div className='w-75 '>
            <h4> <strong> {capitalizeFirstLetter(title) ?? "Loading"} </strong> </h4>
            <h5>$ {price ?? "Loading..."}</h5>
            <p>{description ?? "Loading..."}</p>
        </div> 
        
        {iconFlag && <div className="d-flex mb-4" style={{ maxWidth: "300px", maxHeight:"50px" }}>
                  <MDBBtn onClick={() => dispatch(actions.handleDelItemFromCart({props, resto_id}))} className="px-3 me-2">
                    <MDBIcon fas icon="minus" />
                  </MDBBtn>

                  <span className='d-flex align-items-center m-1 p-1'><h4 >{cartReducer?.cartData?.[resto_id]?.[JSON.stringify(props)] ?? 0 }</h4></span>

                  <MDBBtn onClick={() => dispatch(actions.handleAddItemToCart({props, resto_id}))} className="px-3 ms-2">
                    <MDBIcon fas icon="plus" />
                  </MDBBtn>
        </div>}
    </div>
  )
}

export default MenuCard