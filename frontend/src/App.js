import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css';

import Header from "./Components/Header/header";
import GuestRoute from "./routes/guestRoute";
import AdminRoute from "./routes/adminRoute";
import PageNotFound from "./pageNotFound";

function App() {
	// Add routes to this object
	const routes = {
		'/home': <Header />,
		'/home/:resaturant_id': <Header />,
		'/home/:resaturant_id/menu': <Header />
	}

	return (
		<div className="App">
			<div className="App" style={{width: `100vw`, height: `100vh`}}>
				<Header />
				<Router>
					<Routes>
						<Route index path="/" element={<Navigate to="/home" replace />}></Route>
						<Route exact path="/login" element={<GuestRoute />}>
							{/* <Route exact path="/login" element={<Login />} /> */}
						</Route>
						{
							(Object.keys(routes) ?? []).map((ele, idx) => 
								<Route exact path={ele} key={idx} element={<AdminRoute />}>
									<Route exact path={ele} key={idx} element={routes[ele] || undefined} />
								</Route>
							)
						}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
