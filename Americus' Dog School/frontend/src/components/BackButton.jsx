import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/'}) =>{

    return (
            <Link
            to={destination}
            className='bg-sky-800 text-white rounded-lg w-fit backButton' 
            >
             ⬅️
            </Link>
    )
}

export default BackButton