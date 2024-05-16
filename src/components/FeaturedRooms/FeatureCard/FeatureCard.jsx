import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureCard = ({ rooms }) => {
    console.log(rooms);
    const { _id, images, name, price, description } = rooms
    return (
        <div >
            <Link to={`/singleRoom/${_id}`}>
                <div  className="relative font-Poppins flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                        <img
                            src={images[0]}
                            alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[#90B0B7] font-bold block font-sans text-base antialiased  leading-relaxed text-blue-gray-900">
                                {name}
                            </p>
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                ${price}
                            </p>
                        </div>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                            {description}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button ">
                            Book Now
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeatureCard

FeatureCard.propTypes = {
    rooms: PropTypes.any
};