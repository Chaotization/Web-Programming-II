import React from 'react';
import '../App.css';
import { useMutation } from "@apollo/client";
import queries from "../quires.js";
import ReactModal from "react-modal";
import {useNavigate} from "react-router-dom";

ReactModal.setAppElement('#root');

const DeleteModal = ({ id, isOpen, type, onRequestClose}) => {
    const typeMap = {
        artist: 'artists',
        album: 'albums',
        company: 'companies',
    };

    const handleCompleted = () => {
        onRequestClose();
        navigate(`/${typeMap[type]}`);
    };

    const navigate = useNavigate()

    const [deleteArtist, { loading: loadingArtist, error: errorArtist }] = useMutation(queries.Remove_Artist, {
        onCompleted: handleCompleted,
        update(cache) {
            cache.modify({
                fields: {
                    artists(existingArtistRefs, { readField }) {
                        return existingArtistRefs.filter(
                            artistRef => id !== readField('_id', artistRef)
                        );
                    }
                }
            });
        }
    });

    const [deleteAlbum, { loading: loadingAlbum, error: errorAlbum }] = useMutation(queries.Remove_Album, {
        onCompleted: handleCompleted,
        update(cache) {
            cache.modify({
                fields: {
                    albums(existingAlbumRefs, { readField }) {
                        return existingAlbumRefs.filter(
                            albumRef => id !== readField('_id', albumRef)
                        );
                    }
                }
            });
        }
    });

    const [deleteCompany, { loading: loadingCompany, error: errorCompany }] = useMutation(queries.Remove_Company, {
        onCompleted: handleCompleted,
        update(cache) {
            cache.modify({
                fields: {
                    recordCompanies(existingCompanyRefs, { readField }) {
                        return existingCompanyRefs.filter(
                            companyRef => id !== readField('_id', companyRef)
                        );
                    }
                }
            });
        }
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        let variables = { id }

        switch (type) {
            case 'artist':
                deleteArtist({ variables });
                break;
            case 'album':
                deleteAlbum({ variables });
                break;
            case 'company':
                deleteCompany({ variables });
                break;
        }

        onRequestClose();
    };

    const formFields = {
        artist: <input type="hidden" name="id" value={id} required/>,
        album: <input type="hidden" name="id" value={id} required/>,
        company: <input type="hidden" name="id" value={id} required/>,
    };

    const isLoading = loadingArtist || loadingAlbum || loadingCompany;
    const error = errorArtist || errorAlbum || errorCompany;

    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal-content"
            contentLabel={`Delete ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        >
            <h2>Delete {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {error && <div className="error-message"><p>Error: {error.message}</p></div>}
            <p>Are you sure you want to delete this {type}?</p>
            <form onSubmit={handleSubmit}>
                {formFields[type]}
                <div className="button-group">
                    <button className='button delete-button' type='submit' disabled={isLoading}>Delete</button>
                    <button className='button cancel-button' type='button' onClick={onRequestClose}>Cancel</button>
                </div>
            </form>
        </ReactModal>
    );
}

export default DeleteModal;
