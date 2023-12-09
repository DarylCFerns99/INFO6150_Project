import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import * as actions from './redux/actions'
import { CustomToastify } from "./Common/customToastify";
import { getFromLocalStorage, getFromSessionStorage, setSessionStorage } from "./Common/common";

import GuestRoute from "./routes/guestRoute";
import AdminRoute from "./routes/adminRoute";
import PageNotFound from "./pageNotFound";
import Menu from "./Components/Menu/menu";
import CheckoutPage from "./Components/CheckoutPage/checkoutPage";

import Header from "./Components/Header/header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer";
import Restaurant from "./Components/Restaurant/restaurant";

function App() {
	const dispatch = useDispatch()
	const userReducer = useSelector(state => state.userReducer)
	const [loading, setLoading] = useState(false)

	// Add routes to this object
	const routes = {
		'/home': <Home />,
		'/restaurant/:restaurant_id': <Restaurant />,
		'/restaurant/:restaurant_id/menu': <Header />,
		'/profile': <Profile />,
		"/home/:restaurant_id/checkout": <CheckoutPage/>
	}
	const guestRoutes = {
		'/': <Header />,
		"/login": <Login />,
		"/register": <Register />,
		"/restaurantRegister": <Register isUser={false}  />,
	}

    useEffect(() => {
		if (!Object.keys(userReducer).length) {
			let tempUser = getFromLocalStorage('user')
			console.log(getFromLocalStorage("user"))
			if (tempUser) {
				setSessionStorage(tempUser)
			} else {
				tempUser = getFromSessionStorage('user')
				localStorage.clear()
			}
			if (tempUser) {
				dispatch(actions.handleAddUserData(JSON.parse(tempUser)))
			}
		}
    }, [userReducer])

	return (
		<div className="App">
			{
				loading
				? <></>
				: (
					<Router>
						<Header />
						<main>
							<Routes>
								{
									(Object.keys(guestRoutes) ?? []).map((ele, idx) =>
										<Route exact path={ele} key={idx} element={<GuestRoute />}>
											<Route exact path={ele} key={idx} element={guestRoutes[ele] || undefined} />
										</Route>
									)
								}
								{
									(Object.keys(routes) ?? []).map((ele, idx) =>
										<Route exact path={ele} key={idx} element={<AdminRoute />}>
											<Route exact path={ele} key={idx} element={routes[ele] || undefined} />
										</Route>
									)
								}
								<Route path="*" element={<PageNotFound />} />
							</Routes>
						</main>
						<Footer />
					</Router>
				)
			}
			<CustomToastify />
		</div>
	);
}

export default App;
