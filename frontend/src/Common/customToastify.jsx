import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CustomToastify = () => {
    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                theme={'colored'}
                rtl={false}
                draggable
                pauseOnHover
                closeOnClick
                pauseOnFocusLoss
                limit={5}
            />
        </div>
    )
}

export const customToast = (message, type) => {
    toast(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: type,
    })
}

export const customToastSystem = (message, type) => {
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: type,
    })
}