import React from "react"
import { Navigate, Outlet  } from "react-router-dom"

import { getFromLocalStorage } from "../Common/common"

const GuestRoute = () => {
    const registered = getFromLocalStorage('name') ? true : false
    
	return registered ? <Navigate to="/home" /> : <Outlet />
}

export default GuestRoute