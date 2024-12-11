import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/'}) =>{

    return (
        <div className='flex'>
            <Link
            to={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' 
            >
             <h3 className='text-2xl'>🔙</h3>   
            </Link>
        </div>
    )
}

export default BackButton