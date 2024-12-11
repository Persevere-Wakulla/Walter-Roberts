import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {

    const products = useLoaderData()
    const [display, setDisplay] = useState(dailyDeal());

    function dailyDeal() {
        const today = new Date().getDate()
        const deals = products.filter(item => {
            if (item.id % today === 0 && item.price < 50) {
                return item
            }
        })
        return deals
    }

    // useEffect(() => {
    //     if(filter !== "") {
    //         setDisplay(data.product.filter(item = item.category === filter.slug))
    //             setTitle(filter.name)
    //     } else {
    //         setDisplay(dailyDeal())
    //         setTitle("Today's Deals")
    //     }
    // }, [filter])


    return (
        <div className="home-page">
            <h1 className="great-products">Great Products</h1>
            <p className="para-two">Click on the HAMBURGER in the top right corner to view List of Products by Category.</p>
            <div className="grid-container">
                <div className="big-sale-container">
                    <h1>50% OFF SALE</h1>
                    <p>All Products In This Box Is <span className="fifty-off">50%</span> Off Today</p>
                    {display.map((item, index) => (
                        <div className="flex-daily-boxes" key={index}>
                            <div className="daily-sales-card">
                                <img src={item.images[0]} className="daily-images" alt="#" />
                                <h5>{item.title}</h5>
                                <s>${item.price}</s>
                                <div className="flex-group">
                                    <p className="product__price">
                                        <span className="visually-hidden">Now:</span>
                                        ${(item.price * 0.5).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="home-middle-column">
                    <h1>We Offer Credit Cards</h1>
                    <p>Please fill out the following form to see if you qualify and get approved for your Simple Shopping Credit Card NOW.
                    </p>

                    <form className="row g-3">
                        <div className="input-group">
                            <span className="input-group-text">First and last name</span>
                            <input type="text" aria-label="First name" id="your-first-name" className="form-control" required />
                            <input type="text" aria-label="Last name" id="your-last-name" className="form-control" required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option defaultValue={"Choose..."}>Choose...</option>
                                <option>AL</option>
                                <option>AR</option>
                                <option>AS</option>
                                <option>AZ</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>DC</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>IA</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>MA</option>
                                <option>MD</option>
                                <option>ME</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MO</option>
                                <option>MS</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>NE</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NV</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VA</option>
                                <option>VT</option>
                                <option>WA</option>
                                <option>WI</option>
                                <option>WV</option>
                                <option>WY</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" required />
                        </div>
                        <div className="enployment-history">
                            <p>Current Enployment Information</p>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Company Name</span>
                            <input type="text" aria-label="Current-company" id="your-company-name" className="form-control" required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputWorkAddress" placeholder="1234 Cumber St" required />
                        </div>
                        {/* <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                            </label>
                            </div>
                        </div> */}
                        <div className="col-md-6">
                            <label htmlFor="inputEmail5" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail5" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber6" className="form-label">Phone Number</label>
                            <input type="phoneNumber" className="form-control" id="phoneNumber6" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

