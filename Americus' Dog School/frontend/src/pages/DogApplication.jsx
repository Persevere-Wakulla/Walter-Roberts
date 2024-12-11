import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DogApplication() {
    const [loading, setLoading] = useState("");
    const [dogApplication, setDogApplication] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        why: "",
        dogBefore: "",
        family: "",
        children: "",
        expenseInvolved: "",
        doesEveryone: "",
        dogExercising: "",
        dogFeeding: "",
        dogGrooming: "",
        leftAlone: "",
    });

    const navigate = useNavigate();
    const registerApplication = async () => {
        const newApplication = dogApplication;
        fetch("http://localhost:3000/applications/createDogApplication", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newApplication),
        })
            .then(() => {
                setDogApplication({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    why: "",
                    dogBefore: "",
                    family: "",
                    children: "",
                    expenseInvolved: "",
                    doesEveryone: "",
                    dogExercising: "",
                    dogFeeding: "",
                    dogGrooming: "",
                    leftAlone: "",
                });
                setLoading(false);
                alert("Thank You! Your form has been submitted. Will be notified within 24 hours!")
                setTimeout( ()=> {
                    navigate("/");
                }, 3000)
            })
            .catch((error) => {
                setLoading(false);
                alert("An Error happened. Check Information!");
                console.log(error);
            });
    };

    return (
        <div className="applicationDiv">
            <h1 className="adoptionApplicationForm">Adoption Application</h1>
            <div className="dogApplicationForm">
                <form id="adoptionForm" /*className="border border-green w-75 m-auto"*/ >
                    <div className="adoptionForm1">
                        <label>First Name: <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="on"
                            value={dogApplication.firstName}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, firstName: e.target.value })
                            }
                        />
                        </label>
                        <label>Last Name: <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="on"
                            value={dogApplication.lastName}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, lastName: e.target.value })
                            }
                        />
                        </label>
                        <label>Email: <input
                            type="email"
                            id="email"
                            value={dogApplication.email}
                            autoComplete="on"
                            pattern=".+@example\.com" size="30" required
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, email: e.target.value })
                            }
                        />
                        </label>
                        <label>Phone Number: <input
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="on"
                            value={dogApplication.phone}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, phone: Number(e.target.value) })
                            }
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                        />
                        </label>
                        <label>Address: <input
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="on"
                            value={dogApplication.address}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, address: e.target.value })
                            }
                        />
                        </label>
                        <label>City: <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="on"
                            value={dogApplication.city}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, city: e.target.value })
                            }
                        />
                        </label>
                        <label>State: <input
                            type="text"
                            name="state"
                            id="state"
                            autoComplete="on"
                            value={dogApplication.state}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, state: e.target.value })
                            }
                        />
                        </label>
                        <label>ZipCode: <input
                            type="number"
                            name="zipCode"
                            id="zipCode"
                            autoComplete="on"
                            value={dogApplication.zipCode}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, zipCode: Number(e.target.value) })
                            }
                        />
                        </label>
                    </div>
                    <div className="adoptionForm2">
                        <label className="wantDog">Why do you want a dog? <input
                            type="text"
                            name="why"
                            id="why"
                            autoComplete="on"
                            value={dogApplication.why}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, why: e.target.value })
                            }
                        />
                        </label>
                        <label className="hadDog">Have you had a dog before? <input
                            type="text"
                            name="dogBefore"
                            id="dogBefore"
                            autoComplete="on"
                            value={dogApplication.dogBefore}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, dogBefore: e.target.value })
                            }
                        />
                        </label>
                        <label className="yourFamily">How big is your family? <input
                            type="text"
                            name="family"
                            id="family"
                            autoComplete="on"
                            value={dogApplication.family}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, family: e.target.value })
                            }
                        />
                        </label>
                        <label className="yourChildren">How old are your children 'if any'? <input
                            type="text"
                            name="children"
                            id="children"
                            autoComplete="on"
                            value={dogApplication.children}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, children: e.target.value })
                            }
                        />
                        </label>
                        <label className="understandExpense">Do you fully understand the expense involved in dog ownership? <input
                            type="text"
                            name="expenseInvolved"
                            id="expenseInvolved"
                            autoComplete="on"
                            value={dogApplication.expenseInvolved}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, expenseInvolved: e.target.value })
                            }
                        />
                        </label>
                        <label className="reallyWant">Does everyone in the family really want a dog? <input
                            type="text"
                            name="doesEveryone"
                            id="doesEveryone"
                            autoComplete="on"
                            value={dogApplication.doesEveryone}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, doesEveryone: e.target.value })
                            }
                        />
                        </label>
                        <label className="exercisingDog">Who will be responsible for exercising the dog? <input
                            type="text"
                            name="dogExercising"
                            id="dogExercising"
                            autoComplete="on"
                            value={dogApplication.dogExercising}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, dogExercising: e.target.value })
                            }
                        />
                        </label>
                        <label className="feedingDog">Who will be responsible for feeding the dog? <input
                            type="text"
                            name="dogFeeding"
                            id="dogFeeding"
                            autoComplete="on"
                            value={dogApplication.dogFeeding}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, dogFeeding: e.target.value })
                            }
                        />
                        </label>
                        <label className="groomingDog">Who will be responsible for grooming the dog? <input
                            type="text"
                            name="dogGrooming"
                            id="dogGrooming"
                            autoComplete="on"
                            value={dogApplication.dogGrooming}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, dogGrooming: e.target.value })
                            }
                        />
                        </label>
                        <label className="dogLeftAlone">Will the dog regularly be left alone for more than an hour or two? <input
                            type="text"
                            name="leftAlone"
                            id="leftAlone"
                            autoComplete="on"
                            value={dogApplication.leftAlone}
                            onChange={(e) =>
                                setDogApplication({ ...dogApplication, leftAlone: e.target.value })
                            }
                        />
                        </label>
                    </div>
                </form>
                    <div>
                        <button onClick={registerApplication} className="submitButton">
                            Submit
                        </button>
                    </div>
            </div>
        </div>
    )
}