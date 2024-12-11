import { useLoaderData } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";

export default function Products() {

    const [listOne, setListOne] = useState([]);
    const [listTwo, setListTwo] = useState([]);
    const [localList, setLocalList] = useState([]);


    const products = useLoaderData();
    console.log(products);

    useEffect(() => {
        setListOne(products.slice(0, 99));
        setTimeout(() => setListTwo(products.slice(99, 194))
            , 4500);
        setLocalList(products.slice(194, 371))
    }, []);


    return (
        <div className="products-container">
                {listOne.map((products) => <div key={products.id} className="card"><img src={products.thumbnail} alt="#" className="thumbnail" /><div className="title-price"><p className="productName">{products.title}</p></div> <span className="price">${products.price}</span></div>)}
                {listTwo.map((products) => <div key={products.id} className="card"><img src={products.thumbnail} alt="#" className="thumbnail" /><div className="title-price"><p className="productName">{products.title}</p></div> <span className="price">${products.price}</span></div>)}
                {localList.map((products) => <div key={products.id} className="card"><img  src={products.images[0]} alt="#" className="thumbnail" /><div className="title-price"><p className="productName">{products.title}</p></div> <span className="price">${products.price}</span></div>)}
        </div>
    )
}

export const productsLoader = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=194')
    const ProductArr = await res.json()

    const loc = await fetch('/data.json');
    const locProds = await loc.json();

    let allprods = ProductArr.products.concat(locProds.products);

    return allprods;
}
