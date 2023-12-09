import React from 'react'
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../Common/common';
import { MDBNavbarLink } from 'mdb-react-ui-kit';


const ItemCategory = () => {
    const menuReducer = useSelector(state => state.menuReducer);
    
  return (
    <nav>
      <ul>
        {/* //parse id in the map func */}
        {Object.keys(menuReducer?.data["resto_id"] ?? {}).map((item) => (
          <div key={item} className='list-group list-group-light w-75 m-2'>
            <MDBNavbarLink href={`#${item}`} className='h-25 bg-secondary bg-gradient list-group-item list-group-item-action px-3 border-2" '>
              {capitalizeFirstLetter(item)}
            </MDBNavbarLink>
          </div>
        ))}
      </ul>
    </nav>
  )
}

export default ItemCategory