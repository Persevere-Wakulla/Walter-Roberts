import { useLoaderData, useParams } from "react-router-dom"

export default function FilteredProducts() {

    const fLS = useLoaderData();
    let fL = fLS[0];
    let myFL = fLS[1];

    return (
        <div>
            <h3 className="category-section">{fL.products[0].category.toUpperCase()}</h3>
            <div className="products-filtered">
                {fL.products.map((prod) => <div key={prod.id} className="card"><img className="thumbnail" src={prod.thumbnail} alt="#" /><div className="title-price"><p className="productName">{prod.title}</p></div> <span className="price">${prod.price}</span></div>)}
                {myFL.map((products) => <div key={products.id} className="card"><img className="thumbnail" src={`${products.images[0]}`} alt={`${products.images[0]}`} /><div className="title-price"><p className="productName">{products.title}</p></div> <span className="price">${products.price}</span></div>)}
            </div>
        </div>
    )
}

export async function filterLoader({ params }) {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/products/category/${id}`);
    let filteredList = await res.json();
    let myFilteredL = await myFilterLoader(id);
    return [filteredList, myFilteredL]
}

async function myFilterLoader(id) {
    const res = await fetch(`/data.json`);
    const myList = await res.json();
    let myFilteredList = myList.products.filter((prod) => prod.category === id);
    return myFilteredList
}