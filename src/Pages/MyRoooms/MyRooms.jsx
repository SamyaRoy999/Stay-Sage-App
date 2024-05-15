import { useContext, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import axios from "axios";
import { LiaEdit } from "react-icons/lia";
import Swal from "sweetalert2"

const MyRooms = () => {
    const [myData, setmyData] = useState([])
    const { user } = useContext(AuthContext);
    const myRoomsEmail = async () => {
        const { data } = await axios.get(`http://localhost:5000/mybook/${user.email}`)
        setmyData(data);
    }

    myRoomsEmail()

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
    }
    return (
        <div>
            <div className="overflow-x-auto font-Poppins">
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
                            <th>Job</th>
                            <th>Edit Date</th>
                            <th>Cancel Room</th>
                        </tr>
                    </thead>
                    {myData.map(item => (
                        <tbody key={item._id}>
                            {/* row 1 */}
                            <tr>
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
                                <td> <LiaEdit className=" text-2xl" /></td>
                                <th>
                                    <button onClick={() => heldelCancel(item._id)} className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Cancel</button>
                                </th>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default MyRooms
