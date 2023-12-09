import React from "react"
import { Navigate, Outlet  } from "react-router-dom"

import { getFromLocalStorage, getFromSessionStorage } from "../Common/common"

const GuestRoute = () => {
    const local = getFromLocalStorage("user")
    const session = getFromSessionStorage("user")
    const registered = (local || session) ? false : true
    
	return registered ? <Outlet /> : <Navigate to="/" />
}

export default GuestRoute