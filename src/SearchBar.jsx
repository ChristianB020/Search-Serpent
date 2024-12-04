import { useEffect, useState } from "react";
import './searchBar.css';
import { Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';

function SearchBar() {
    const [searchResultList, setSearchResultList] = useState([]);
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const navigate = useNavigate();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        const getExerciseData = async () => {
            if (!debouncedQuery) {
                setSearchResultList([]);
                return;
            }

            const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.crossref.org/works';

            try {
                const params = new URLSearchParams({
                    'query': debouncedQuery,  // Changed to debouncedQuery
                    'mailto': 'christianbastien020@gmail.com'
                });

                params.append('filter', 'type:journal-article', 'language:en');  // Added filter for articles

                const response = await fetch(`${baseUrl}?${params}`, {
                    headers: {
                        'Origin': null
                    }
                });

                if (!response.ok) {
                    throw new Error("API response issues detected");
                }

                const data = await response.json();
                // console.log(data);
                setSearchResultList(data.message.items);  // Set only the items array
            } catch (error) {
                console.log("Error fetching data:", error.message);
            }
        };

        getExerciseData();
    }, [debouncedQuery]);


    const handleClick = (article) => {
        localStorage.setItem(`${article.title}`, JSON.stringify(article))
        navigate(`/details/${article.title}`)

    }

    return (
        <div className="searchBarWrapper">
            <h1>Search Serpent 🔍🐍</h1>
            <label id='searchBarLabel' htmlFor="SearchBar">Search Scholarly Articles</label>
            <input
                className="SearchBar"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul className="searchBarList">
                {searchResultList.map((article, index) => (
                    <li className="searchBarListItem" onClick={() => handleClick(article)}>
                        <div className="info-Card-Wrapper">
                            <h3 className="Companytitle"> {article["container-title"][0] || 'No title available'}</h3>
                            <h4 className="Companytitle"> {article.title?.[0] || 'No title available'}</h4>
                            <p className="publisher">{"Published By: " + article?.publisher || 'No publisher available'}</p>
                            <p className="generalInfo">Volume {article.volume} </p>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;