import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import axios from "axios";
import { LiaEdit } from "react-icons/lia";
import Swal from "sweetalert2"
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
const MyRooms = () => {
    const [myData, setmyData] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const [modul, setModul] = useState(false)
    const myRoomsEmail = async () => {
        const { data } = await axios.get(`http://localhost:5000/mybook/${user.email}`)
        setmyData(data);
    }

    useEffect(() => {
        myRoomsEmail()
    }, [user.email])


    const heldelCancel = async id => {

        const { isConfirmed } = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        });

        if (isConfirmed) {
            const { data } = await axios.delete(`http://localhost:5000/mybook/${id}`);

            if (data.deletedCount > 0) {
                Swal.fire(
                    'Cancelled!',
                    'Your booking has been cancelled.',
                    'success'
                );

            } else {
                Swal.fire(
                    'Error!',
                    'Failed to cancel the booking.',
                    'error'
                );
            }
        }
        myRoomsEmail()
    }
    const updateDate = async id => {
        const date = { startDate: startDate.toLocaleDateString("en-GB") }
        const { data } = await axios.patch(`http://localhost:5000/mybook/${id}`, date)
        console.log(data);
        // if (data.acknowledged) {
        //     toast.success('Login Successful!')
        // }
        myRoomsEmail()
    }
    
    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data);
      }

    return (
        <div>
            <Helmet>
                <title>MYROOMS || StaySage</title>
            </Helmet>

            <ToastContainer />
            <div className="overflow-x-auto font-Poppins min-h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Booking Time</th>
                            <th>Edit Date</th>
                            <th>Cancel Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myData.map(item => (
                            <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.images} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.startDate}
                                </td>
                                {modul &&
                                    <td>
                                        <DatePicker className=" border-2 my-5 border-zinc-600" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </td>
                                }

                                <td onClick={() => {
                                    updateDate(item._id)
                                    setModul(!modul)
                                }}>

                                    {modul ? <button className="badge badge-info gap-2" onClick={() => { setModul(true); toast.success(' Update Dete Successful!') }}>set</button> : <LiaEdit className=" text-2xl" />}

                                </td>
                                <th>
                                    <button onClick={() => heldelCancel(item._id)} className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Cancel</button>
                                </th>
                                <th>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <textarea  {...register("area", { required: true })} placeholder="comment" className="w-full h-20 border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"></textarea> <br />
                                        <input {...register("timestamp", { required: true })} type="text" placeholder="timestamp" /><br />
                                        <input {...register("rating", { required: true })} type="number" placeholder="rating" name="" id="" /><br />
                                        <button  type="submit" className="bg-gray-900 text-white px-4 py-2">Submit Review</button><br />
                                    </form>
                                </th>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyRooms
