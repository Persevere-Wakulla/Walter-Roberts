import { useEffect, useState } from "react"
import { NavLink, Outlet, Link } from "react-router-dom"

export default function RootLayout() {

    const [catList, setCatList] = useState([])
    console.dir(catList);

    useEffect(() => {
        async function getCats() {
            const res = await fetch('https://dummyjson.com/products/category-list');
            const cats = await res.json();
            let allCats = [...cats, "drones", "hats", "headphones", "monitors", "musical-instruments", "pool-tables", "skateboards", "yoga-mats"];
            setCatList(allCats);
        }
        getCats();
    }, [])

    return (
        <div>
            <header>
                <nav id="top-nav" className="navbar bg-body-tertiary fixed-top navbar-brand">
                    <div className="container-fluid">
                    <p className="hamburger-title">SIMPLE SHOPPING</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h3 className="offcanvas-title">SIMPLE SHOPPING</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/" className="homePage">Home</NavLink>
                                    <NavLink to="products" className="productsPage">Products</NavLink>
                                    {/* <div className="btn-container"> */}
                                    {catList.map((cat, index) => <Link key={index} to={`products/${cat}`} >{cat}</Link>)}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Render the children of the component */}
            <Outlet />
        </div>
    )
}