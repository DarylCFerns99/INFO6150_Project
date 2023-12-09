import React from "react"
import { Navigate, Outlet  } from "react-router-dom"

import { getFromLocalStorage, getFromSessionStorage } from "../Common/common"

const AdminRoute = () => {
    const local = getFromLocalStorage("user")
    const session = getFromSessionStorage("user")
    const registered = (local || session) ? true : false
    
	return registered ? <Outlet /> : <Navigate to="/login" />
}

export default AdminRoute