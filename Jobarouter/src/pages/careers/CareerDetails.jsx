import { useParams, useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for: {career.title}</h2>
      <p>Starting salary: ${career.Salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque, pariatur laboriosam aperiam animi voluptatum deserunt alias earum sequi deleniti nobis commodi nostrum enim quasi nam mollitia exercitationem ea ducimus.</p>
      </div>
    </div>
  );
};
// Loader Function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch('db.json' + id)
 
  if (!res.ok) {
    throw Error('Could not find that Career')
  }
  
  const careerDetailsArr = await res.json()

  return careerDetailsArr
}
