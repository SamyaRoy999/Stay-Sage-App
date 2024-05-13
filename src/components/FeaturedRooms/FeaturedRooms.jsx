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
            <h3 className=" font-bold text-3xl mb-6">Featured rooms</h3>
            {featuredRooms.map(item => <FeatureCard key={item._id} rooms={item} />)}
            
        </div>
    )
}

export default FeaturedRooms