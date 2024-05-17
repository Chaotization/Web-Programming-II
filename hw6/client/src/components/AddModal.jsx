import React, {useEffect, useState} from 'react';
import '../App.css';
import {useMutation} from "@apollo/client";
import queries from '../quires';
import ReactModal from 'react-modal';
import {useNavigate} from "react-router-dom";
ReactModal.setAppElement('#root');

const AddModal = ({isOpen, type, onRequestClose}) => {

    const [formData, setFormData] = useState({
        name: '',
        dateFormed: '',
        members: [],
        title: '',
        releaseDate: '',
        genre: '',
        artistId: '',
        companyId: '',
        foundedYear: '',
        country: '',
        duration: '',
        albumId: '',
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCompleted = () => {
        onRequestClose();
        setFormData({});
        setIsLoading(false);
        setError(null);
    }

    const handleError = (error) => {
        console.error("Error:", error.message);
        setError(error);
        setIsLoading(false);
    };

    const [addArtist, {loading: loadingArtist, error: errorArtist}] = useMutation(queries.Add_Artist, {
        onCompleted: handleCompleted,
        onError: handleError,
        update(cache, {data: {addArtist}}) {
            const {artists} = cache.readQuery({query: queries.Get_Artists});
            cache.writeQuery({
                query: queries.Get_Artists,
                data: {artists: [...artists, addArtist]},
            });
        }
    });


    const [addAlbum, {loading: loadingAlbum, error: errorAlbum}] = useMutation(queries.Add_Album, {
        onCompleted: handleCompleted,
        onError: handleError,
        update(cache, {data: {addAlbum}}) {
            const {albums} = cache.readQuery({query: queries.Get_Albums});
            cache.writeQuery({
                query: queries.Get_Albums,
                data: {albums: [...albums, addAlbum]},
            });
        }
    });

    const [addCompany, {loading: loadingCompany, error: errorCompany}] = useMutation(queries.Add_Company, {
        onCompleted: handleCompleted,
        onError: handleError,
        update(cache, {data: {addCompany}}) {
            const {recordCompanies} = cache.readQuery({query: queries.Get_Companies});
            cache.writeQuery({
                query: queries.Get_Companies,
                data: {recordCompanies: [...recordCompanies, addCompany]},
            });
        }
    });

    const [addSong, {loading: loadingSong, error: errorSong}] = useMutation(queries.Add_Song, {
        onCompleted: handleCompleted,
        onError: handleError,
        update: (cache, { data: { addSong } }) => {
            if (!formData.albumId) return;

            const cacheData = cache.readQuery({
                query: queries.Get_Songs_By_Album_Id,
                variables: { id: formData.albumId },
            });

            if (cacheData && cacheData.getSongsByAlbumId) {
                const updatedSongs = [...cacheData.getSongsByAlbumId, addSong];

                cache.writeQuery({
                    query: queries.Get_Songs_By_Album_Id,
                    variables: { id: formData.albumId },
                    data: { getSongsByAlbumId: updatedSongs },
                });
            } else {
                cache.writeQuery({
                    query: queries.Get_Songs_By_Album_Id,
                    variables: { id: formData.albumId },
                    data: { getSongsByAlbumId: [addSong] },
                });
            }
        }
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const variables = {...formData};

        switch (type) {
            case 'artist':
                addArtist({variables});
                break;
            case 'album':
                addAlbum({variables});
                break;
            case 'company':
                addCompany({variables});
                break;
            case 'song':
                addSong({variables});
                break;
        }
        onRequestClose();
    };


    const handleChange = (e) => {
        if (e.target.name === "foundedYear") {
            const year = parseInt(e.target.value, 10);
            setFormData({...formData, [e.target.name]: isNaN(year) ? '' : year});
        } else {
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    };


    const initializeFormData = () => {
        setFormData({
            name: '',
            dateFormed: '',
            members: '',
            title: '',
            releaseDate: '',
            genre: '',
            artistId: '',
            companyId: '',
            foundedYear: '',
            country: '',
            duration: '',
            albumId: '',
        });
    };

    useEffect(() => {
        if (!isOpen) {
            initializeFormData();
        }
    }, [isOpen]);


    const formFields = () => {
        switch (type) {
            case 'artist':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Date Formed: <input type="text" name="dateFormed" value={formData.dateFormed} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Members: <input type="text" name="members" value={formData.members} onChange={handleChange} required /></label>
                        </div>
                    </div>
                );
            case 'album':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Release Date: <input type="text" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Genre: <input type="text" name="genre" value={formData.genre} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Artist ID: <input type="text" name="artistId" value={formData.artistId} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Company ID: <input type="text" name="companyId" value={formData.companyId} onChange={handleChange} required /></label>
                        </div>
                    </div>
                );
            case 'company':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Founded Year: <input type="text" name="foundedYear" value={formData.foundedYear} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Country: <input type="text" name="country" value={formData.country} onChange={handleChange} required /></label>
                        </div>
                    </div>
                );
            case 'song':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>Duration: <input type="text" name="duration" value={formData.duration} onChange={handleChange} required /></label>
                        </div>
                        <div className='form-group'>
                            <label>AlbumId: <input type="text" name="albumId" value={formData.albumId} onChange={handleChange} required /></label>
                        </div>
                    </div>
                );
        }
    };


    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => {
                onRequestClose();
                setFormData({});
                setError(null);
                setIsLoading(false);
            }}
            className="modal-content"
            contentLabel={`Add ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        >
            <h2>Add {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {error && (
                <div className="error-message">
                    <p>Error: {error.message}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                {formFields()}
                <div className="button-group">
                    <button className='button add-button' type='submit' disabled={isLoading}>Add</button>
                    <button className='button cancel-button' type='button' onClick={() => {
                        onRequestClose();
                        setFormData({});
                        setError(null);
                        setIsLoading(false);
                    }}>Cancel
                    </button>
                </div>
            </form>
        </ReactModal>
    );
};

export default AddModal;