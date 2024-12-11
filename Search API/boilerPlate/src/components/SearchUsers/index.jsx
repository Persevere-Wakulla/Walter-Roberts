import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestions";

export default function SearchUsers() {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value;
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                post && post.length
                    ? post.filter((item) => item.indexOf(query) > -1)
                    : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    function handleClick(event) {
        setShowDropDown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true)

            const response = await fetch('https://dummyjson.com/post?limit=30');
            const data = await response.json();

            console.log(data);
            if (data && data.post && data.post.length) {
                setUsers(data.post.map((postItem) => postItem.id));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, []);

    return (
        <div className="search-autocomplete-container">
            {loading ? (
                <h1>Loading Data ! Please Wait</h1>
            ) : (
                <input
                value={searchParam}
                name="search-posts"
                placeholders="Seach Post here..."
                onChange={handleChange}
                />
            )}
            
            {showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
        </div>
    );
}