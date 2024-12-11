const Welcome = () => {
    return (
        <div id="welcomeDiv">
            <h1 className="welcomeHeading">Welcome To Americus' Dog School & More</h1>
            <div id="viewerDiv">
                <div id="leftSideInfo">
                    <p className="registeredDogs">The Top 20 AKC Registered Dogs</p>
                    <ol>
                        <li className="top20List no-flex"> Labrador Retriever</li>
                        <li className="top20List no-flex"> French Bulldog</li>
                        <li className="top20List no-flex"> German Shepherd</li>
                        <li className="top20List no-flex"> Golden Retriever</li>
                        <li className="top20List no-flex"> Bulldog</li>
                        <li className="top20List no-flex"> Poodle</li>
                        <li className="top20List no-flex"> Beagle</li>
                        <li className="top20List no-flex"> Rottweiler</li>
                        <li className="top20List no-flex"> German Short-haired Pointer</li>
                        <li className="top20List no-flex"> Dachshund</li>
                        <li className="top20List no-flex"> Pembroke Welsh Corgi</li>
                        <li className="top20List no-flex"> Australian Shepherd</li>
                        <li className="top20List no-flex"> Yorkshire Terrier</li>
                        <li className="top20List no-flex"> Boxer</li>
                        <li className="top20List no-flex"> Great Dane</li>
                        <li className="top20List no-flex"> Siberian Husky</li>
                        <li className="top20List no-flex"> Cavalier King Charles Spaniel</li>
                        <li className="top20List no-flex"> Doberman Pinscher</li>
                        <li className="top20List no-flex"> Miniature Schnauzer</li>
                        <li className="top20List no-flex"> Shih Tzu</li>
                    </ol>
                </div>
                <div id="imgViewer">
                    <img src="images/dogo-argentino.jpg" alt="didnt" id='imgViewed' />
                    <img src="images/longhaired-rottweiler.jpg" alt="didnt" id='imgViewed' />
                    <img src="images/leonberger.jpg" alt="didnt" id='imgViewed' />
                </div>
                <div id="imgViewer2">
                    <img src="images/neapolitan-mastiff.jpg" alt="didnt" id='imgViewed' />
                    <img src="images/cane-corso2.jpg" alt="didnt" id='imgViewed' />
                    <img src="images/tibetan-mastiff.jpg" alt="didnt" id='imgViewed' />
                </div>
                <div id="rightSideInfo">
                    <p className="fascinatingFacts">8 Fascinating Facts:</p>
                    <ol>
                        <li className="factsList no-flex"> Americans spend over 10 billion dollors a year taking care of their dogs and cats, and most of that money is spent on food.</li>
                        <li className="factsList no-flex"> There are more different types of dogs than any other animal in the world.</li>
                        <li className="factsList no-flex"> The smaller the dog the faster he matures.</li>
                        <li className="factsList no-flex"> Puppies are deaf until they're around 20 days old.</li>
                        <li className="factsList no-flex"> Dogs with curly coats, like Poodles, don't shed hair.</li>
                        <li className="factsList no-flex"> Blonde bombshell actress Jean Harlow named her dog "Oscar" so that she could always say she had gotten one.</li>
                        <li className="factsList no-flex"> St. Patrick, who, as a young man, had been kidnapped from his native England, escaped from Ireland by hiding himself among a shipload of Irish Wolfhounds bound for England.</li>
                        <li className="factsList no-flex"> Dogs have been around man for a long time. Remains found in the Yukon have been carbon-dated to be 20,000 years old.</li>
                    </ol>
                </div>
            </div>
        </div>

    )
}

export default Welcome


// canvas {image-rendering: -moz-crisp-edges, image-rendering: -webkit-crisp-edges, image-rendering: pixelated, image-rendering: crisp-edges}
// @keyframes walkdown { 0% { }}
// [{ id: 1, name: , maxHp: , hp: ,  }]
// successEvents(caster, targets) { return [ { type:}]}
// 