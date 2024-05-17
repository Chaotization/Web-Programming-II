import React, {useState} from 'react';
import '../App.css';
import {useQuery} from '@apollo/client';
import queries from '../quires.js';
import {Link} from "react-router-dom";

const Search = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        genre: '',
        min: '',
        max: '',
    });

    const[path, setPath] = useState({
        genre: 'albums',
        year: 'companies',
        name: 'artists',
        song: 'songs'
    })

    const [searchType, setSearchType] = useState('genre');
    const [error, setError] = useState(null);
    const [isSearched, setIsSearched] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        let parsedValue = value;
        if (name === 'min' || name === 'max') {
            parsedValue = parseInt(value, 10);
            if (isNaN(parsedValue)) {
                parsedValue = '';
            }
        }
        setFormData({...formData, [name]: parsedValue});
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
        setFormData({
            genre: '',
            min: '',
            max: '',
            name: '',
            title: ''
        });
        setIsSearched(false);
    };

    const handleSubmit = () => {
        setIsSearched(true);
    }

    const {data: albums, loading: loadingGenre, error: errorGenre} = useQuery(queries.Album_By_Genre, {
        variables: {genre: formData.genre},
        skip: searchType !== 'genre' || !isSearched,
        fetchPolicy: 'cache-and-network'
    })

    const {data: companies, loading: loadingYear, error: errorYear} = useQuery(queries.Company_Founded_By_Year, {
        variables: {min: formData.min, max: formData.max},
        skip: searchType !== 'year' || !isSearched,
        fetchPolicy: 'cache-and-network'
    })

    const {data: artists, loading: loadingName, error: errorName} = useQuery(queries.Search_Artist_By_Artist_Name, {
        variables: {searchTerm: formData.name},
        skip: searchType !== 'name' || !isSearched,
        fetchPolicy: 'cache-and-network'
    })

    const {data: songs, loading: loadingTitle, error: errorTitle} = useQuery(queries.Search_Song_By_Title, {
        variables: {searchTitleTerm: formData.title},
        skip: searchType !== 'song' || !isSearched,
        fetchPolicy: 'cache-and-network'
    })

    const renderFormFields = () => {
        switch (searchType) {
            case 'genre':
                return <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />;
            case 'year':
                return (
                    <>
                        <input type="text" name="min" placeholder="Min Year" value={formData.min} onChange={handleChange} required />
                        <input type="text" name="max" placeholder="Max Year" value={formData.max} onChange={handleChange} required />
                    </>
                );
            case 'name':
                return <input type="text" name="name" value={formData.name} onChange={handleChange} required />;
            case 'song':
                return <input type="text" name="title" value={formData.title} onChange={handleChange} required />;
        }
    };

    const renderResults = () => {
        if (!isSearched) {
            return null;
        }

        let results;
        switch (searchType) {
            case 'genre':
                results = albums?.albumsByGenre;
                break;
            case 'year':
                results = companies?.companyByFoundedYear;
                break;
            case 'name':
                results = artists?.searchArtistByArtistName;
                break;
            case 'song':
                results = songs?.searchSongByTitle;
                break;
        }

        if (loadingGenre || loadingYear || loadingName || loadingTitle) {
            return <p>Loading...</p>;
        }

        return results ? (
            <ul>
                {results.map(item => (
                    <li key={item._id}>
                        <Link to={`/${path[searchType]}/${item._id}`}>
                            {item.name || item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        ) : null;
    };

    return (
        <div>
            <p>Search Item By Different Type</p>
            {error && (
                <div className="error-message">
                    <p>Error: {error.message}</p>
                </div>
            )}
            <select value={searchType} onChange={handleSearchTypeChange}>
                <option value="genre">By Genre</option>
                <option value="year">By Founding Year</option>
                <option value="name">By Artist Name</option>
                <option value="song">By Song Title</option>
            </select>
            {renderFormFields()}
            <button onClick={handleSubmit}>Search</button>
            {renderResults()}
        </div>
    );
}

export default Search;