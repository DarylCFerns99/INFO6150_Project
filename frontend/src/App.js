import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import * as actions from './redux/actions'
import { CustomToastify } from "./Common/customToastify";
import { getFromLocalStorage, setSessionStorage } from "./Common/common";

import GuestRoute from "./routes/guestRoute";
import AdminRoute from "./routes/adminRoute";
import PageNotFound from "./pageNotFound";

import Header from "./Components/Header/header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer";
import Restaurant from "./Components/Restaurant/restaurant";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
	const dispatch = useDispatch()

	// Add routes to this object
	const routes = {
		'/home': <Header />,
		'/home/:restaurant_id': <Header />,
		'/home/:restaurant_id/menu': <Header />,
		'/profile': <Profile />
	}
	const guestRoutes = {
		'/': <Home />,
		"/login": <Login />,
		"/register": <Register />,
		"/restaurantRegister": <Register isUser={false}  />,
	}

    useEffect(() => {
        let tempUser = getFromLocalStorage("user")
        if (tempUser) {
            setSessionStorage(tempUser)
            dispatch(actions.handleAddUserData(JSON.parse(tempUser)))
        } else {
            localStorage.clear()
            sessionStorage.clear()
        }
    }, [])

	return (
		<ChakraProvider>
		<div className="App">
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
						<Route path="/restaurant/:placeId" element={<Restaurant />} />
						<Route path="/home" element = {<Home />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
			<CustomToastify />
		</div>
		</ChakraProvider>
	);
}

export default App;
