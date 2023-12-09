import ReviewCard from '../ReviewsCard/reviewCard';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

//redux-store
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

//import common functions
import { capitalizeFirstLetter, formatMenuItems } from '../../Common/common';

import { fetchMenu } from './menuService'

//Top image handling
import PhotoAlbum from 'react-photo-album'
import { one, two, three, four } from '../../Common/imageImports';

//components
import ItemCategory from './ItemCategoryNavbar/itemCategory';
import MenuCard from '../MenuCard/menuCard';

import { MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInputGroup,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit'

const photos = [
    { src: one, width: 800, height: 600 },
    { src: two, width: 1600, height: 900 },
    { src: three, width: 1600, height: 900 },
    { src: four, width: 1600, height: 900 },
];

//todo 
//string , number or loose coupled key validation

const Menu = ({ iconFlag=false }) => {
    const navigate = useNavigate();
    const { restaurant_id } = useParams(); //useParams hook to grab the resto id
    const dispatch = useDispatch();
    const menuReducer = useSelector(state => state.menuReducer);
    const [menuData, setMenuData] = useState({})
    const [showSearchAlert, setShowSearchAlert] = useState(false);
    const cartReducer = useSelector(state => state.cartReducer);

    const handleFetchMenu = async() => {
        //check for valid resto id in if loop 
        await fetchMenu(restaurant_id)
            .then((res) => {
                dispatch(actions.handleAddMenuData(res));           
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const sumValues = Object.values(cartReducer.cartData[restaurant_id] ?? {}).reduce((a, b) => a + b, 0);

    useEffect(() => {
        handleFetchMenu();
    }, [])

    useEffect(() => {
        setMenuData(menuReducer?.data["resto_id"] ?? setMenuData({})) ;
    }, [menuReducer?.data]);

    const handleSearch = (e) => {
        let tempSearch = e.target.value.toLowerCase();
        console.log([].concat(...Object.values(menuData)));
        if(tempSearch){
            setMenuData(formatMenuItems([].concat(...Object.values(menuData)).filter(ele =>  ele.title.toLowerCase().includes(tempSearch))))  
        } else setMenuData(menuReducer?.data["resto_id"] ?? setMenuData({}));    
    }

    return (
      <div style={{ margin: "0 auto" }}>
        <MDBContainer className='mb-5'>
          <MDBRow>
            <MDBCol size="4">
              {" "}
              <ItemCategory />{" "}
            </MDBCol>
            <MDBCol size="8">
              <div className="d-flex justify-content-around">
                <h2> Place Order </h2>
                <div className="w-50">
                  <MDBInputGroup>
                    <MDBInput onChange={handleSearch} label="Search" />
                    <MDBBtn
                      onClick={() => setShowSearchAlert(true)}
                      rippleColor="dark"
                    >
                      <MDBIcon icon="search" />
                    </MDBBtn>
                  </MDBInputGroup>
                </div>
              </div>

              <hr />
              {Object.keys(menuData ?? {}).map((heading, idx) => (
                <div key={idx}>
                  <h2 id={heading}> {capitalizeFirstLetter(heading)} </h2>
                  {menuData[heading].map((key, index) => (
                    <div key={`${idx}${index}`} className="hover-shadow">
                      <hr />
                      <MenuCard props = {key} iconFlag = {iconFlag} />
                      <hr />
                    </div>
                  ))}
                </div>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>

{
  iconFlag &&
    <button 
      style={{bottom: "55px", left:"50%", backgroundColor: "rgba(255,255,255, 0.9)" ,transform: "translate(-50%, -50%)"}}
      onClick={() => navigate(`/home/${restaurant_id}/checkout`)}
      className="btn btn-outline-primary btn-lg btn-rounded position-sticky"
    >
      <MDBIcon fas icon="shopping-cart" />
      <span className='m-1'>  Checkout </span>
      <span className="p-1">({sumValues ?? 0})</span>
    </button>
}
      </div>
    );
}

export default Menu