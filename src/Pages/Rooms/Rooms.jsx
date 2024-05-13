import {useLoaderData } from "react-router-dom"
import FeatureCard from "../../components/FeaturedRooms/FeatureCard/FeatureCard";


const Rooms = () => {
    const rooms = useLoaderData()

    return (
        <div>
            <div className=" font-Poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rooms.map(item => <FeatureCard key={item._id} rooms={item} />)}
            </div>
        </div>
    )
}

export default Rooms
