import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import "./App.styles.css"

import Header from "./Components/Header/header";
import GuestRoute from "./routes/guestRoute";
import AdminRoute from "./routes/adminRoute";
import PageNotFound from "./pageNotFound";
import Restaurant from "./Components/Restaurant/restaurant";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import { useSelector } from "react-redux";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
	// Add routes to this object
	const routes = {
		'/home': <Header />,
		'/home/:resaturant_id': <Header />,
		'/home/:resaturant_id/menu': <Header />
	}


	return (
		<ChakraProvider>
		<div className="App">
			<Header />
			{/* <Restaurant/> */}
				{/* <Header /> */}
				<Router>
					<Routes>
						{/* <Route index path="/" element={<Navigate to="/home" replace />}></Route>
						<Route exact path="/login" element={<GuestRoute />}> 
							 <Route exact path="/login" element={<Login />} /> 
					   </Route>
						{
							(Object.keys(routes) ?? []).map((ele, idx) => 
								<Route exact path={ele} key={idx} element={<AdminRoute />}>
									<Route exact path={ele} key={idx} element={routes[ele] || undefined} />
								</Route>
							)
						} */}
						 <Route path="/about" element={<About/>}/>
						 <Route path="/restaurant/:placeId" element={<Restaurant />} />
						 <Route path="/home" element = {<Home />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Router>
			
			</div>
		</ChakraProvider>
	);
}

export default App;
