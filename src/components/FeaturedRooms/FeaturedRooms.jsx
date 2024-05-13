import { useState } from "react"
import { useEffect } from "react"
import FeatureCard from "./FeatureCard/FeatureCard"


const FeaturedRooms = () => {
    const [featuredRooms, setFeaturedRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setFeaturedRooms(data)
            })
    }, [])



    return (
        <div className=" mx-auto container mt-14  md:mt-20 lg:mt-24">
            <h3 className=" font-bold text-4xl mb-6">Featured rooms</h3>
            <div className=" font-Poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredRooms.slice(0,6).map(item => <FeatureCard key={item._id} rooms={item} />)}
            </div>

        </div>
    )
}

export default FeaturedRooms