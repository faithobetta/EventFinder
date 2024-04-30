import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

function Search() {
    const key = import.meta.env.VITE_TICKETMASTER_API_KEY
    const [query, setQuery] = useState("");
    const [data, setData] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (!query) return setSuggestions([]);
            try {
                const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&apikey=${key}`);
                if (response.data._embedded && response.data._embedded.events) {
                    setSuggestions(response.data._embedded.events.map(event => ({
                        id: event.id,
                        name: event.name
                    })));
                } else {
                    setSuggestions([]);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setSuggestions([]);
            }
        };
        
        const debouncedFetchData = debounce(fetchData, 300);
        debouncedFetchData();

        return () => debouncedFetchData.cancel();
    }, [query]);

    return (
        <div className="search">
            <div className="search-bar">
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    placeholder="Search for Events"
                    className="search-input"
                    aria-label="Search Events"
                />
                <ul className="suggestions">
                    {suggestions.map(item => (
                        <Link key={item.id} to={`/single/${item.id}`}>
                            <li onClick={() => setData(item.id)}>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Link className="search-text" to={`/single/${data}`}>
                <FaSearch className="search-icon" aria-label="Search"/>
            </Link>
        </div>
    );
}

export default Search;
