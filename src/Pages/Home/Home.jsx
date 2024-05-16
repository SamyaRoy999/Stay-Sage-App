import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";
import Maps from "../../components/Map/Map";
import Newsletter from "../../components/Newsletter/Newsletter";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";



const Home = () => {
 
    return (
        <div className="">
            <Helmet>
                <title>Home || StaySage</title>
            </Helmet>
           
            <Banner />
            <FeaturedRooms />
            <Newsletter />
            <Maps />
        </div>
    )
}

export default Home