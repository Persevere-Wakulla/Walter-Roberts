import { useEffect, useState, createContext } from "react"
import { NavLink, Outlet, Link } from "react-router-dom"
import SignOut from "./components/SignOUt"

export const UserContext = createContext()

const RootLayout = () => {
    const defaultLogin = {
        userName: "",
        userPassWord: "",
    };
    const [currentUser, setCurrentUser] = useState(null);
    const [userLogIn, setUserLogIn] = useState(defaultLogin)
    const [errorMessage, setErrorMessage] = useState(null)

    const login = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users/findUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userLogIn),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setCurrentUser(data.data)
                    setUserLogIn(defaultLogin)
                    localStorage.setItem('user', JSON.stringify(data.data))
                } else {
                    setErrorMessage(data.data)
                    messageModal()
                }
            })
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'))
        if (localUser) {
            setCurrentUser(localUser)
        }
    }, [])

    return (
        <>
            <nav id="rootNav">
                <div id="logoDiv">
                    <img src="/images/doglogo.png" alt="didn't Load" id="homeLogo" />
                </div>
                {/* <!-- The navigation menu --> */}
                <div id="navLinkDiv">
                    <NavLink to='/' id="navlink" >Home</NavLink>
                    <NavLink to='/addDog' id="navlink" >Add Dog</NavLink>
                    <NavLink to='/training' id="navlink" >Training</NavLink>
                    <NavLink to='/kennel/sporting' id="navlink" >Kennel</NavLink>
                    <NavLink to='/DogApplication' id="navlink" >Applications</NavLink>
                    <NavLink to='/Contact' id="navlink" >Contact</NavLink>
                </div>
                {
                    !currentUser ?
                        (<div id="loginDiv">
                            <div className="dropdown">
                                <button type="button" id="loginToggle" className="btn" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    Login
                                </button>
                                <form id="dropdownMenu" className="dropdown-menu p-4" onSubmit={login}>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="userName">User Name:</label>
                                        <input type="text"
                                            id="userName"
                                            autoComplete="off"
                                            className="formControl"
                                            placeholder="User Name"
                                            value={userLogIn.userName}
                                            onChange={(e) =>
                                                setUserLogIn({ ...userLogIn, userName: e.target.value })
                                            } />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            autoComplete="off"
                                            className="formControl"
                                            placeholder="Password"
                                            value={userLogIn.passWord}
                                            onChange={(e) =>
                                                setUserLogIn({ ...userLogIn, userPassWord: e.target.value })
                                            } />
                                    </div>
                                    <button type="submit" id="loginBtn">Login</button>
                                </form>
                            </div>
                            <div id="createProfileLink">
                                <Link to='/CreateUserProfile' >Create Profile</Link>
                            </div>
                        </div>) : (<div id="currentUserDiv">
                            <h1 id="currentUser">Hello, {currentUser.firstName}</h1>
                            <img className="avatar" src={currentUser.favoriteDog} />
                            <SignOut setState={setCurrentUser} />
                        </div>
                        )}
                {
                    errorMessage &&
                    <div><h1 id="errorMessage">{errorMessage.message}</h1></div>
                }
            </nav>
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
                <Outlet />
            </UserContext.Provider>
        </>
    )
}

export default RootLayout