import {Helmet} from "react-helmet";
import Banner from "../../components/banner/Banner";
import Maps from "../../components/Map/Map";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
    return (
        <div className="">
        <Helmet>
            <title>Home || StaySage</title>
        </Helmet>
           <Banner/>
           <Newsletter/>
           <Maps/>
        </div>
    )
}

export default Home