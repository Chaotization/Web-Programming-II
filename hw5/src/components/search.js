import {useState} from "react";

const Search = ({ onSearchChange, initialValue }) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onSearchChange(value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className="center">
            <label>
                <span className= 'search-label '>Search: </span>
                <input
                    className= 'search-input'
                    autoComplete="off"
                    type="text"
                    name="searchTerm"
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
        </form>
    );
};

export default Search;