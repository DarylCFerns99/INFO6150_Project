import React from 'react'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
    const navigate = useNavigate()
    
    return (
        <section class="errorPage">
            <div class="errorPage__text">
                <h3>404</h3>
                <span class="errorPage__button" onClick={() => navigate("/")}>Back to home</span>
            </div>
            <span class="errorPage__templeweed-container"><img src="https://i.ibb.co/mTg87G2/tembleweed.png" alt="Page not found" class="errorPage__tembleweed" /></span>
            <div class="errorPage__terrain"></div>
        </section>
    )
}

export default PageNotFound