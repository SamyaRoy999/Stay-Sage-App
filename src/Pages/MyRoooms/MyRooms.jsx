import { useContext, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import axios from "axios";


const MyRooms = () => {
    const [myData, setmyData] = useState([])
    const { user } = useContext(AuthContext);
    const myRoomsEmail = async () => {
        const { data } = await axios.get(`http://localhost:5000/mybook/${user.email}`)
        setmyData(data);
    }

    myRoomsEmail()

    const heldelCancel = id =>{
        alert(id)
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
                            <th>Favorite Color</th>
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
                                <td>Purple</td>
                                <th>
                                <button onClick={()=>heldelCancel(item._id)} className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Cancel</button>
                                </th>
                            </tr>

                        </tbody>
                    ))}
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}

export default MyRooms
