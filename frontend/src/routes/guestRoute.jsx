import React from "react"
import { Navigate, Outlet  } from "react-router-dom"

import { getFromSessionStorage } from "../Common/common"

const GuestRoute = () => {
    const registered = getFromSessionStorage('user') ? false : true
    
	return registered ? <Outlet /> : <Navigate to="/" />
}

export default GuestRoute