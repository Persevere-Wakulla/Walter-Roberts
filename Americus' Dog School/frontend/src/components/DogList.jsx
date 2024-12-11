import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router"

function DogList() {
    let catData = useOutletContext();
    let { category } = useParams();
    let weWant = catData.find((element) => element.category == category);
    // let [dogs, setDog] = useState([...weWant.dogInfo]);
    let dogs = [...weWant.dogInfo];
    const [isAscend, setIsAscend] = useState(true);
    // let isAscend = true;

    // useEffect(() => { console.dir('In Use Effect') }, [isAscend]);

    const handleSort = (e) => {
        let newDogs;
        if (e.target.id == 'name') {
            if (isAscend) {
                newDogs = dogs.toSorted();
            }
            if (!isAscend) {
                newDogs = dogs.toSorted().toReversed();
            }
            dogs = newDogs;
        }
        setIsAscend(!isAscend);
    }

    return (
        <>
            <div className="listDiv">
                <div className="initialheaderRow">
                    <div className="headCol"><a href="#" className="headSorter">Image</a></div>
                    <div className="restOfAnchors" onClick={handleSort}>
                        <div className="headCol"><a href="#" className="headSorter" id="name">Name</a></div>
                        <div className="headCol"><a href="#" className="headSorter" id="weight">Weight</a></div>
                        <div className="headCol"><a href="#" className="headSorter" id="heightAtShoulder">Height</a></div>
                        <div className="headCol"><a href="#" className="headSorter" id="cost">Cost</a></div>
                    </div>
                </div>
                {dogs.map((dog, ind) => {
                    return (
                        <div key={ind} className="dogListing">
                            <div className="dogImgDiv">
                                <img src={'/' + dog.images} alt="" />
                            </div>
                            <div className="dogInfoDiv">
                                <div className="dogNameDiv">
                                    <p className="dogName"></p><p>{dog.name}</p>
                                </div>
                                <div className="weightDiv">
                                    <p className="weight">(males/females):</p><p className="dogWeight">{dog.weight.males}/{dog.weight.females}</p>
                                </div>
                                <div className="heightDiv">
                                    <p className="height">(males/females):</p><p className="dogHeight">{dog.heightAtShoulder.males}/{dog.heightAtShoulder.females}</p>
                                </div>
                                <div className="dogCostDiv">
                                    <p className="dogCost"></p><p>{dog.cost}*</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <p className="prices"><strong>*Moderate</strong>: $50-$100<strong><span className="priceSpan">*Expensive:</span></strong> $101-$300<strong><span className="priceSpan">*Very Expensive:</span></strong> $301-$500</p>
            </div>
        </>
    )
}

export default DogList