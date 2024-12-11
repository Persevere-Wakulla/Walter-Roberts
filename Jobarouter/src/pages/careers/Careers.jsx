import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based In: {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

// Loader function
export const careersLoader = async () => {
    const res = await fetch('db.json')

    if (!res.ok) {
        throw Error('Could not fetch the Careers')
      }

    const careerArr = await res.json()



    return careerArr
}