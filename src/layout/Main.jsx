import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx/Navbar"
import Footer from "../components/Footer/Footer"



const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main