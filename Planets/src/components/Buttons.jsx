export default function Buttons({ color, clicker }) {

    function handleHover(e) {
        e.target.style.backgroundColor = `${color}`
    }

    function handleLeave(e) {
        e.target.style.backgroundColor = 'transparent'
    }

    return (
        <div className="btn-container" onClick={clicker}>
            <button className="" onMouseOver={handleHover} onMouseLeave={handleLeave}>01 OVERVIEW</button>
            <button className="" onMouseOver={handleHover} onMouseLeave={handleLeave}>02 INTERNAL STRUCTURE</button>
            <button className="" onMouseOver={handleHover} onMouseLeave={handleLeave}>03 SURFACE GEOLOGY</button>
        </div>
    )
}