import { createOrder } from './service';
import * as actions from '../../redux/actions'
import {
        MDBBtn,
        MDBCard,
        MDBCardBody,
        MDBCardHeader,
        MDBCardImage,
        MDBCol,
        MDBContainer,
        MDBIcon,
        MDBListGroup,
        MDBListGroupItem,
        MDBRipple,
        MDBRow,
        MDBTooltip,
        MDBTypography,
    } from "mdb-react-ui-kit";
    
import { useNavigate, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { capitalizeFirstLetter } from '../../Common/common';

const CheckoutPage = () => {
    const {restaurant_id}  = useParams()
    const resto_id = restaurant_id;

    // const [cartTotal, setCartTotal] = useState(0);
    const dispatch = useDispatch();
    const cartReducer = useSelector(state => state.cartReducer);
    const userReducer = useSelector(state => state.userReducer);
    const restaurantReducer = useSelector(state => state.restaurantReducer)
    const checkoutKeys = Object.keys(cartReducer?.cartData[resto_id] ?? { });
    const obj = checkoutKeys?.map(ele => (JSON.parse(ele)));
    const navigate = useNavigate();
    const handleCreateOrder = async () => {
      
      await createOrder(transformCartReducerToObj(cartReducer))
          .then((res) => {
              dispatch(actions.handleDelRestoCart(restaurant_id))
              navigate('/home');   
          })
          .catch((err) => {
              console.log(err);
          });

      console.log(transformCartReducerToObj(cartReducer))
    }

    const transformCartReducerToObj = (cart) => {
      //user_id, restaurant_id, total, menu_items_ids in array 
      const {cartData, total} = cart
      const obj = {
          restaurant_id,
          user_id: userReducer._id,
          total: ((total[restaurant_id] * 6.25)/100 + total[restaurant_id]).toFixed(2) ,
          menu_items_id: [].concat(...Object.keys(cartData?.[restaurant_id] ?? {}).map((e) => Array(cartData[restaurant_id][e]).fill(JSON.parse(e)._id))),     
      }
      return obj;
    }

    return (
      <section className="h-100 gradient-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <h2>{restaurantReducer.name} </h2>
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0">
                    Cart Items : {checkoutKeys.length ?? 0}
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  {obj.map((ele) => (
                    <MDBRow className='my-2'>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src={ele.image}
                            className="w-100"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{capitalizeFirstLetter(ele.title)}</strong>
                        </p>

                        <MDBTooltip
                          wrapperProps={{ size: "sm" }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                        >
                          <MDBIcon onClick={() => dispatch(actions.handleRemoveCartItem({props: ele, resto_id}))} fas icon="trash" />
                        </MDBTooltip>

                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4 justify-content-center"
                          style={{ maxWidth: "300px" }}
                        >
                          <MDBBtn onClick={() => dispatch(actions.handleDelItemFromCart({props:ele, resto_id }))} className="px-3 me-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          <span className="d-flex align-items-center m-1 p-1">
                            <h4> {cartReducer.cartData[resto_id][JSON.stringify(ele)]} </h4>
                          </span>

                          <MDBBtn onClick={() => dispatch(actions.handleAddItemToCart({props:ele, resto_id }))} className="px-3 ms-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>Total : ${ele.price * cartReducer.cartData[resto_id][JSON.stringify(ele)]}</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  ))}
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody>
                  <p>
                    <strong>We Accept</strong>
                  </p>
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
            <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>
                    <strong>Expected delivery</strong>
                  </p>
                  <p className="mb-0">
                    Your Order will be delivered within 40 minutes
                  </p>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${cartReducer.total[restaurant_id]}</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                      Tax - 6.25%
                      <span> { ((cartReducer.total[restaurant_id] * 6.25)/100).toFixed(2) } </span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including Taxes)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{(cartReducer.total[restaurant_id] + (cartReducer.total[restaurant_id] * 6.25)/100).toFixed(2)}</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>

                  <MDBBtn onClick={handleCreateOrder} block size="lg">
                    Place Order
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
}

export default CheckoutPage;