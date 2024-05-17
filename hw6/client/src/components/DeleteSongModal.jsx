import React, { useState } from 'react';
import '../App.css';
import { useMutation } from "@apollo/client";
import ReactModal from "react-modal";
import queries from "../quires.js";

ReactModal.setAppElement('#root');

const DeleteSongModal = ({ isOpen, onRequestClose, songId, albumId }) => {
    const [modalError, setModalError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCompleted = () => {
        setIsLoading(false);
        onRequestClose();
    };

    const handleError = (error) => {
        console.error("Error:", error.message);
        setModalError(error);
        setIsLoading(false);
    };

    const [deleteSong, { loading, error }] = useMutation(queries.Remove_Song, {
        onCompleted: handleCompleted,
        onError: handleError,
        variables: { id: songId },
        update(cache) {
            cache.modify({
                fields: {
                    songs(existingSongsRefs, { readField }) {
                        return existingSongsRefs.filter(songRef => songId !== readField('_id', songRef));
                    }
                }
            });
        },

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        deleteSong().catch(handleError);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => {
                onRequestClose();
                setIsLoading(false);
                setModalError(null);
            }}
            className="modal-content"
            contentLabel="Delete Song"
        >
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this song?</p>
            {modalError && <p>Error: {modalError.message}</p>}
            <form onSubmit={handleSubmit}>
                <button className='button delete-button' type='submit' disabled={isLoading}>Delete</button>
                <button className='button cancel-button' type='button' onClick={onRequestClose}>Cancel</button>
            </form>
        </ReactModal>
    );
};

export default DeleteSongModal;
