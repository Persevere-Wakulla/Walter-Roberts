import { useState, useContext, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { UserContext } from "../RootLayout";


export default function CreateUserProfile() {
    const [loading, setLoading] = useState("");
    const [userProfile, setUserProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        favoriteDog: ""
    });

    const [dogCat, setDogcat] = useState('herders')
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const dogs = useLoaderData()
    const navigate = useNavigate();

    const registerUser = async () => {
        if (userProfile.favoriteDog === '') {
            alert('Please Select A Favorite Dog')
        } else {
            const newUser = userProfile;
            fetch("http://localhost:3000/users/createUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            })
                .then(() => {
                    setCurrentUser(userProfile)
                    localStorage.setItem('user', JSON.stringify('user', userProfile))
                    setUserProfile({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        username: "",
                        password: "",
                        address: "",
                        city: "",
                        state: "",
                        zipCode: "",
                        favoriteDog: ""
                    });
                    setLoading(false);
                    navigate("/");
                })
                .catch((error) => {
                    setLoading(false);
                    alert("An Error happened. Check Information!");
                    console.log(error);
                });
        };
    }

    const dogSelect = (e) => {
        document.getElementById('filePath').value = `${e.target.id}`
        setUserProfile({ ...userProfile, favoriteDog: '/' + e.target.id })
    }
    return (
        <div className="registrationFormDiv">
            <h1 id="registrationHeader">Registration Form</h1>
            <div id="registrationForm">
                <form id="registrationFormId">
                    <section id='userInfo'>
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="on"
                            value={userProfile.firstName}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, firstName: e.target.value })
                            }
                        />
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="on"
                            value={userProfile.lastName}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, lastName: e.target.value })
                            }
                        />
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={userProfile.email}
                            autoComplete="on"
                            pattern=".+@example\.com" size="30" required
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, email: e.target.value })
                            }
                        />
                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="on"
                            value={userProfile.phone}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, phone: Number(e.target.value) })
                            }
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                        />
                        <label htmlFor="createUsername">Username: </label>
                        <input
                            type="text"
                            name="createUsername"
                            id="createUsername"
                            autoComplete="off"
                            value={userProfile.username}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, username: e.target.value })
                            }
                        />
                        <label htmlFor="userPassword">Password: </label>
                        <input
                            type="password"
                            id="userPassword"
                            name="userPassword"
                            autoComplete="off"
                            value={userProfile.password}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, password: e.target.value })
                            }
                        />
                        <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="on"
                            value={userProfile.address}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, address: e.target.value })
                            }
                        />
                        <label htmlFor="city">City: </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="on"
                            value={userProfile.city}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, city: e.target.value })
                            }
                        />
                        <label htmlFor="state">State: </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            autoComplete="on"
                            value={userProfile.state}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, state: e.target.value })
                            }
                        />
                        <label htmlFor="zipCode">ZipCode: </label>
                        <input
                            type="number"
                            name="zipCode"
                            id="zipCode"
                            autoComplete="on"
                            value={userProfile.zipCode}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, zipCode: Number(e.target.value) })
                            }
                        />
                        <label htmlFor="selectedDog">Selected Dog: </label>
                        <input
                            type="text"
                            name="filePath"
                            id="filePath"
                            autoComplete="on"
                        />
                    </section>
                    <div id="register">
                        <button type='button' onClick={registerUser}>
                            Register
                        </button>
                    </div>
                </form>
                <section id='favoriteDog'>
                    <h3 className="yourFavDog">Choose your favorite dog:</h3>
                    <p className="chooseOne">Please choose only one</p>
                    <div>
                        {/* Favorite dog section with loop */}
                        <article id="selections">
                            {/*category comp with loop */}
                            <label id={'categories'}>
                                <select id="dogCat" name='categories' className="selector" onChange={(e) => setDogcat(e.target.value)} value={dogCat}>
                                    {dogs.data.map((obj) => (
                                        <option key={obj.category} value={obj.category}>{obj.category}</option>
                                    ))}
                                </select>
                            </label>
                            <ul id="favoriteDogList">
                                {dogs.data.find(cat => cat.category == dogCat) ? dogs.data.find(cat => cat.category == dogCat).dogInfo.map(dog => {
                                    return <li key={dog.name} id={dog.images} onClick={dogSelect}>{dog.name}</li>
                                }) : 'No Dog Category'}
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    )
}; 