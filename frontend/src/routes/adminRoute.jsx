import React from "react"
import { Navigate, Outlet  } from "react-router-dom"

import { getFromSessionStorage } from "../Common/common"

const AdminRoute = () => {
    const registered = getFromSessionStorage('user') ? true : false
    
	return !registered ? <Outlet /> : <Navigate to="/login" />
}

export default AdminRoute