import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">MERCURY</Link>
                    </li>
                    <li>
                        <Link to="/venus">VENUS</Link>
                    </li>
                    <li>
                        <Link to="/earth">EARTH</Link>
                    </li>
                    <li>
                        <Link to="/mars">MARS</Link>
                    </li>
                    <li>
                        <Link to="/jupiter">JUPITER</Link>
                    </li>
                    <li>
                        <Link to="/saturn">SATURN</Link>
                    </li>
                    <li>
                        <Link to="/uranus">URANUS</Link>
                    </li>
                    <li>
                        <Link to="/neptune">NEPTUNE</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}