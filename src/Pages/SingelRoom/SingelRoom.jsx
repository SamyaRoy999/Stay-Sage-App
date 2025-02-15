import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import DatePicker from "react-datepicker";
import axios from 'axios'
import Swal from "sweetalert2"

import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const SingelRoom = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)

    const [singleRooms, setSingleRooms] = useState([])
    // console.log(user.email);
    const
        { availability, description, images, name, price, size, special_offers, total_reviews } = singleRooms

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://server-nine-beryl.vercel.app/rooms/singel/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleRooms(data);
            })
    }, [])
    const addedBook = async () => {
        const userEmail = user?.email;

        const auhtData = {
            userEmail,
            images,
            name,
            startDate: startDate.toLocaleDateString("en-GB")
        }

        console.log(auhtData);

        const { isConfirmed } = await Swal.fire({
            title: { name },
            text: { description },
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm Button'
        });
        if (isConfirmed) {

            try {
                const { data } = await axios.post("https://server-nine-beryl.vercel.app/mybook", auhtData)
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Book Room',
                        'Your booking has been successfull.',
                        'success'
                    );
                }
            } catch (error) {
                console.log(error);
            }


            const data2 = { availability: "unavailable" }

            try {
                const { data } = await axios.patch(`https://server-nine-beryl.vercel.app/rooms/singel/${id}`, data2)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-16 font-Poppins">
             <Helmet>
                <title> DETAILS || StaySage</title>
            </Helmet>
            {setSingleRooms && (
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">

                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={images} alt="Product Image" />
                            </div>

                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-9">{name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                                {description}
                            </p>
                            <div className="flex mb-6">
                                <div className="mr-4 text-xl">
                                    <span className="font-bold  text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">${price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{availability}</span>
                                </div>
                            </div>

                            <div className="mb-6 text-xl">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Size:</span>
                                <span className="text-gray-600 dark:text-gray-300">{size}</span>
                            </div>
                            <div className="mb-6 text-xl">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Offers:</span>
                                <span className="text-gray-600 dark:text-gray-300">{special_offers}</span>
                            </div>
                            <div className="mb-6 text-xl">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Total Reviews :</span>
                                <span className="text-gray-600 dark:text-gray-300">{total_reviews}</span>
                            </div>
                            <span>Booking Dete :</span>
                            <DatePicker className=" border-2 px-2 my-5 border-zinc-600" selected={startDate} onChange={(date) => setStartDate(date)} />

                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2" >
                                    <button onClick={addedBook} className={`w-full bg-gray-900   dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ${availability === 'unavailable' ? "cursor-not-allowed opacity-30" : ""} dark:hover:bg-gray-700`} disabled={availability === 'unavailable'}>Book Now</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>

    )
}

export default SingelRoom
