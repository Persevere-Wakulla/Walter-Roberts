import { useState } from "react"
import Navbar from "../components/Navbar"
import Buttons from "../components/Buttons"
import Text from "../components/Text"

export default function Mars({ prop }) {

    const [content, setContent] = useState('')

    function changeContent(e) {
        setContent(e.target.innerText)
    }

    const imgSrc = content === '02 INTERNAL STRUCTURE' ? <img src={prop.images.internal} /> : content === '03 SURFACE GEOLOGY' ? (<div className="picContainer">
        <img src={prop.images.planet} alt="" />
        <img src={prop.images.geology} alt="" className="marsPic surfacePic" /> </div>)
        : <img src={prop.images.planet} className="planetSize" />


    const text = content === '02 INTERNAL STRUCTURE' ? prop.structure : content === '03 SURFACE GEOLOGY' ? prop.geology : prop.overview

    return (
        <div>
            <header>
                <h2>THE PLANETS</h2>
                <Navbar />
            </header>
            <section className="content-container">
                <div className="image">
                    {imgSrc}
                </div>
                <div className="information-container">
                    <h1>{prop.name}</h1>
                    <Text content={text} />
                    <Buttons color={prop.color} clicker={changeContent} />
                </div>
            </section>
            <footer>
                <div className="rotation">
                    <span>ROTATION TIME</span>
                    <h2>{prop.rotation}</h2>
                </div>
                <div className="revolution">
                    <span>REVOLUTION TIME</span>
                    <h2>{prop.revolution}</h2>
                </div>
                <div className="radius">
                    <span className="spanRadius"> RADIUS </span>
                    <h2>{prop.radius}</h2>
                </div>
                <div className="temperature">
                    <span>AVERAGE TEMP.</span>
                    <h2>{prop.temperature}</h2>
                </div>
            </footer>
        </div>
    )
}