import {Helmet} from "react-helmet";
import Banner from "../../components/banner/Banner";
import Maps from "../../components/Map/Map";

const Home = () => {
    return (
        <div className="">
        <Helmet>
            <title>Home || StaySage</title>
        </Helmet>
           <Banner/>
           <Maps/>
        </div>
    )
}

export default Home