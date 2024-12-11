import { useOutletContext, useParams } from "react-router"
// import { trainingLoader } from "./TrainingDisplay";

function BasicTraining() {

    const trainData = useOutletContext();
    let { category } = useParams();
    let weWant = trainData.find((element) => element.category == category);
    let training = [...weWant.trainingInfo]

    // for sub-nav
    const scroller = (id) => {
        console.dir(id)
        if (id !== 'Top') {
            const goTo = document.getElementById(`${id}`)
            console.log(goTo)
            goTo.scrollIntoView({ block: 'start', behavior: 'smooth' })
        } else {
            document.getElementsByClassName('listDiv')[0].scroll({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <>
            <div id="trainingListDiv" className="listDiv">
                <div className="initialheaderRow">
                    <div className="scrolls">
                        <button onClick={(e) => scroller(e.target.innerText)} id="headSorter">Top</button>
                    </div>
                    {training.map(info => (
                        <div id="scrolls" key={info.name}>
                            <button onClick={(e) => scroller(e.target.innerText)} id="headSorter2">{info.name}</button>
                        </div>
                    ))}
                </div>
                {/* name, description, [{step}+s], [tips], [{variable}+s], conclusion */}
                {training.map((trainingInfo, ind) => {
                    const tipsUl = (
                        <ul>
                            {trainingInfo.tips.map((info, ind) => (
                                <li className="no-flex variable" key={`tips-${ind}`}>
                                    {info}
                                </li>
                            ))}
                        </ul>)
                    return (
                        <div key={ind} className="trainingListing" id={trainingInfo.name}>
                            <div className="trainDiv">
                                <h5><u>{trainingInfo.name}</u></h5>
                                <p>{trainingInfo.description}</p>
                                {trainingInfo.tips && (trainingInfo.name === 'Roll Over' || trainingInfo.name === 'Spin') &&
                                    tipsUl}
                                <ol>{trainingInfo.steps.map((obj, index) => (
                                    <li className="no-flex" key={`steps-${index}`}>
                                        {obj.step}
                                        {obj.quickFix &&
                                            <p>
                                                <span className='bold'>Problem: </span>
                                                <span> {obj.quickFix.problem}</span>
                                                <br />
                                                <span className='bold'>Solution: </span>
                                                <span> {obj.quickFix.solution}</span>
                                            </p>}
                                        {obj.moreInfo &&
                                            <p>{obj.moreInfo}</p>}
                                    </li>
                                ))}
                                </ol>
                                <ul>
                                    {trainingInfo.variables.map((obj, ind) => (
                                        <li className="no-flex variable" key={`variable-${ind}`}>
                                            <span className="bold">{obj.topic}</span>
                                            <br />
                                            <span className="bold">HowTo: </span>
                                            <br />
                                            <ul>
                                                {obj.howTo.map((str, ind) => (
                                                    <li className="no-flex variable dot" key={`howTo-${ind}`}>
                                                        {str}
                                                    </li>
                                                ))}
                                            </ul>
                                            {obj.quickFix &&
                                                <p>
                                                    <span className='bold'>Problem: </span>
                                                    <span> {obj.quickFix.problem}</span>
                                                    <br />
                                                    <span className='bold'>Solution: </span>
                                                    <span> {obj.quickFix.solution}</span>
                                                </p>}
                                            {obj.thoughts && <>
                                                <span className='bold'>Thoughts: </span>
                                                <span>{obj.thoughts}</span>
                                            </>}
                                        </li>
                                    ))}
                                </ul>
                                {trainingInfo.tips && (trainingInfo.name !== 'Roll Over' || trainingInfo.name !== 'Spin') &&
                                    tipsUl}
                                {trainingInfo.quickFix &&
                                    <p>
                                        <span className='bold'>Problem: </span>
                                        <span> {trainingInfo.quickFix.problem}</span>
                                        <br />
                                        <span className='bold'>Solution: </span>
                                        <span> {trainingInfo.quickFix.solution}</span>
                                    </p>}
                                {trainingInfo.thoughts && <>
                                    <span className='bold'>Thoughts: </span>
                                    <span>{trainingInfo.thoughts}</span>
                                </>}
                                <p>{trainingInfo.conclusion}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default BasicTraining