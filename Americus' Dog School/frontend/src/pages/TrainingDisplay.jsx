import { NavLink, Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const TrainingDisplay = () => {

  let trainingData = useLoaderData();
  let categories = []
  trainingData.data.forEach((cat) => {
    categories.push(cat.category)
  });

  return (
    <>
      <div className="homeDiv">
        <div className="tabBox" id="trainingBox">
          <div className="tabs">
            <ul className="tabsList">
              {categories.map((cat, index) => { return <li key={index} className="trainingTabListItem"><NavLink id="trainingNavLinks" className="trainingLink" to={`${cat}`}>{cat}</NavLink></li> })}
            </ul>
          </div>
          <div className="categoryContent" id="trainingContent">
            <Outlet context={trainingData && trainingData.data} />
          </div>
        </div>
      </div>
    </>
  )
}


export const trainingLoader = async () => {
  let res = await fetch(`http://localhost:3000/training`);
  let data = await res.json();
  return data
}


export default TrainingDisplay