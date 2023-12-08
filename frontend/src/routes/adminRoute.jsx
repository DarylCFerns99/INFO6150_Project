import React from "react"
import { Navigate, Outlet  } from "react-router-dom"

import { getFromLocalStorage } from "../Common/common"

const AdminRoute = () => {
    const registered = getFromLocalStorage('name') ? true : false
    
	return !registered ? <Outlet /> : <Navigate to="/login" />
}

export default AdminRoute