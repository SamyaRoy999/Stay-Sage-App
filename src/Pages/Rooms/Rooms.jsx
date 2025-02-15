import { useLoaderData } from "react-router-dom"
import FeatureCard from "../../components/FeaturedRooms/FeatureCard/FeatureCard";
import { useState } from "react";
import { Helmet } from "react-helmet";



const Rooms = () => {
    const rooms = useLoaderData()

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredRooms, setFilteredRooms] = useState(rooms);

    const handleFilter = () => {

        fetch(`https://server-nine-beryl.vercel.app/roomsr?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(response => response.json())
            .then(data => {
                setFilteredRooms(data);
            })
            .catch(error => {
                console.error('Error fetching filtered rooms:', error);
            });
    };


    return (
        <div className=" mx-auto container">
            <Helmet>
                <title>ROOMS || StaySage</title>
            </Helmet>
            <div>
                <input
                    type="number"
                    placeholder="Minimum Price"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Maximum Price"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                />
                <button onClick={handleFilter}>Apply Filter</button>

            </div>

            <div className=" font-Poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredRooms.map(item => <FeatureCard key={item._id} rooms={item} />)}
            </div>
        </div>
    )
}

export default Rooms
