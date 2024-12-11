import { Outlet } from "react-router-dom"

export default function ProductsLayout() {

    return (
        <div className="products-layout">
            <h2>Products</h2>
            <p className="para-one">These are the products we offer.</p>
            <p className="para-two">Click on the HAMBURGER in the top right corner to view List of Products by Category.</p>
            <Outlet />
        </div>
    )
}