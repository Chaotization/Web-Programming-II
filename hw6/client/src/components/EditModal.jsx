import React, {useEffect, useState} from 'react';
import '../App.css';
import { useMutation } from "@apollo/client";
import queries from '../quires';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

const EditModal = ({id, isOpen, type, onRequestClose}) => {
    const [formData, setFormData] = useState({
        id: id,
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


    useEffect(() => {
        if (!isOpen) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                id: id,
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
            }));
        }
    }, [isOpen, id]);


    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleCompleted = () => {
        onRequestClose();
        setFormData({ id: ''});
        setIsLoading(false);
        setError(null);
    };

    const handleError = (error) => {
        console.error("Error:", error.message);
        setError(error);
        setIsLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: name === 'foundedYear' ? parseInt(value) : value
        }));
    };


    const [editArtist, { loading: loadingArtist, error: errorArtist }] = useMutation(queries.Edit_Artist,{
        onCompleted: handleCompleted,
        onError: handleError,
        update(cache, { data: { editArtist } }) {
            const { artists } = cache.readQuery({ query: queries.Get_Artists });
            const updatedArtists = artists.map(artist => {
                if (artist._id.toString() === id) {
                    return editArtist;
                }
                return artist;
            });
            cache.writeQuery({
                query: queries.Get_Artists,
                data: { artists: updatedArtists }
            });
        }
    });

    const [editAlbum, { loading: loadingAlbum, error: errorAlbum }]  = useMutation(queries.Edit_Album, {
        onCompleted: handleCompleted,
        onError: handleError,
        update(cache, {data: {editAlbum}}) {
            const {albums} = cache.readQuery({query: queries.Get_Albums});
            const updatedAlbums = albums.map(album => {
                if (album._id.toString() === id) {
                    return editAlbum;
                }
                return album;
            });
            cache.writeQuery({
                query: queries.Get_Albums,
                data: {albums:  updatedAlbums}
            })
        }
    });

    const [editCompany, { loading: loadingCompany, error: errorCompany }] = useMutation(queries.Edit_Company, {
        onCompleted: handleCompleted,
        onError: handleError,
        update(cache, {data: {editCompany}}) {
            const {recordCompanies} = cache.readQuery({query: queries.Get_Companies});
            const updatedCompanies = recordCompanies.map(company => {
                if (company._id.toString() === id) {
                    return editCompany;
                }
                return company;
            });
            cache.writeQuery({
                query: queries.Get_Companies,
                data: { recordCompanies: updatedCompanies }
            })
        }
    });

    const [editSong, {loading: loadingSong, error: errorSong, cache}] = useMutation(queries.Edit_Song, {
        onCompleted: (data) => {
            handleCompleted(data);
            updateCache(data.editSong);
        },
        onError: handleError,
    });

    const updateCache = (updatedSong) => {
        cache.writeQuery({
            query: queries.Get_Song_By_Id,
            variables: { id },
            data: {
                getSongById: updatedSong,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const variables = { ...formData };

        switch (type) {
            case 'artist':
                editArtist({ variables });
                break;
            case 'album':
                editAlbum({ variables });
                break;
            case 'company':
                editCompany({ variables });
                break;
            case 'song':
                editSong({variables});
                break;
        }
        onRequestClose();
    };

    const formFields = () => {
        switch (type) {
            case 'artist':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Id: <input type="text" name="id" value={id} required readOnly/></label>
                        </div>
                        <div className='form-group'>
                            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange}
                                                /></label>
                        </div>
                        <div className='form-group'>
                            <label>Date Formed: <input type="text" name="dateFormed" value={formData.dateFormed}
                                                       onChange={handleChange} /></label>
                        </div>
                        <div className='form-group'>
                            <label>Members: <input type="text" name="members" value={formData.members}
                                                   onChange={handleChange} /></label>
                        </div>
                    </div>
                );
            case 'album':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Id: <input type="text" name="id" value={id} required readOnly/></label>
                        </div>
                        <div className='form-group'>
                            <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange}
                                                 /></label>
                        </div>
                        <div className='form-group'>
                            <label>Release Date: <input type="text" name="releaseDate" value={formData.releaseDate}
                                                        onChange={handleChange} /></label>
                        </div>
                        <div className='form-group'>
                            <label>Genre: <input type="text" name="genre" value={formData.genre} onChange={handleChange}
                                                 /></label>
                        </div>
                        <div className='form-group'>
                            <label>Artist ID: <input type="text" name="artistId" value={formData.artistId}
                                                     onChange={handleChange} /></label>
                        </div>
                        <div className='form-group'>
                            <label>Company ID: <input type="text" name="companyId" value={formData.companyId}
                                                      onChange={handleChange} /></label>
                        </div>
                    </div>
                );
            case 'company':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Id: <input type="text" name="id" value={id} required readOnly/></label>
                        </div>
                        <div className='form-group'>
                            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange}
                                                required/></label>
                        </div>
                        <div className='form-group'>
                            <label>Founded Year: <input type="text" name="foundedYear" value={formData.foundedYear}
                                                        onChange={handleChange} /></label>
                        </div>
                        <div className='form-group'>
                            <label>Country: <input type="text" name="country" value={formData.country}
                                                   onChange={handleChange} /></label>
                        </div>
                    </div>
                );
            case 'song':
                return (
                    <div>
                        <div className='form-group'>
                            <label>Id: <input type="text" name="id" value={id} required readOnly/></label>
                        </div>
                        <div className='form-group'>
                            <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange}
                                                 /></label>
                        </div>
                        <div className='form-group'>
                            <label>Duration: <input type="text" name="duration" value={formData.duration}
                                                    onChange={handleChange}/></label>
                        </div>
                        <div className='form-group'>
                            <label>AlbumId: <input type="text" name="albumId" value={formData.albumId}
                                                   onChange={handleChange} /></label>
                        </div>
                    </div>
                );
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal-content"
            contentLabel={`Edit ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        >
            <h2>Edit {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {error && <div className="error-message"><p>Error: {error.message}</p></div>}
            <form onSubmit={handleSubmit}>
                {formFields()}
                <div className="button-group">
                    <button className='button edit-button' type='submit' disabled={isLoading}>Edit</button>
                    <button className='button cancel-button' type='button' onClick={onRequestClose}>Cancel</button>
                </div>
            </form>
        </ReactModal>
    );
};


export default EditModal;