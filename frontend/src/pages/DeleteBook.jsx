import React, { useState } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBooks = () =>{
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    const handleDeleteBook = () => {
          setLoading(true);
      
          fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(),
          })
            .then(() => {
              setLoading(false);
              navigate("/");
            })
            .catch((error) => {
              setLoading(false);
              alert("An error happened.Please Check console");
              console.log(error);
            });
    }
    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl m-4'>Delete Book </h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col item items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure You want to delete this book?</h3>
<button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
Yes, Delete it
</button>
            </div>
        </div>
    )
}
export default DeleteBooks