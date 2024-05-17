import React, { useState } from 'react';
import '../App.css';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import queries from '../quires.js';
import EditModal from './EditModal';
import DeleteSongModal from "./DeleteSongModal.jsx";

const Songs = () => {
    const [modalType, setModalType] = useState('');
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [currAlbumId, setCurrAlbumId] = useState(null);
    const { id } = useParams();

    const handleEditModal = (type, id) => {
        setModalType(type);
        setCurrentId(id);
        setEditModal(true);
    }

    const handleDeleteModal = (id, albumId) => {
        setCurrentId(id);
        setCurrAlbumId(albumId)
        setDeleteModal(true);
    }

    const { data, loading, error } = useQuery(queries.Get_Song_By_Id, {
        variables: { id },
        fetchPolicy: 'cache-and-network'
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (data && data.getSongById) {
        const { getSongById } = data;
        return (
            <div className='card' key={getSongById._id}>
                <div className='card-body'>
                    <h3 className='card-title'><span>Title: </span>{getSongById.title}</h3>
                    <p>Duration: {getSongById.duration}</p>
                    {getSongById.albumId && (
                        <>
                            <h4>Album Details</h4>
                            <p>Genre: {getSongById.albumId.genre}</p>
                            <p>
                                Artist:
                                <a href={`/artists/${getSongById.albumId.artist._id}`}>
                                    {getSongById.albumId.artist.name}
                                </a>
                                (Formed on: {getSongById.albumId.artist.dateFormed})
                            </p>
                            <p>
                                Members: {getSongById.albumId.artist.members.join(', ') || "Not available"}
                            </p>
                            <p>
                                Record Company:
                                <a href={`/companies/${getSongById.albumId.recordCompany._id}`}>
                                    {getSongById.albumId.recordCompany.name}
                                </a>
                                (Located in: {getSongById.albumId.recordCompany.country})
                            </p>
                        </>
                    )}
                    <div className="button-group">
                        <button className='button'
                                onClick={() => handleEditModal('song', getSongById._id.toString())}>Edit
                        </button>
                        <EditModal id={currentId} isOpen={editModal} type={modalType}
                                   onRequestClose={() => setEditModal(false)}/>
                        <button className="button"
                                onClick={() => handleDeleteModal('song', song._id.toString(), song.albumId._id.toString())}>Remove
                            Song
                        </button>
                        <DeleteSongModal songId={currentId} albumId={currAlbumId} isOpen={deleteModal}
                                         onRequestClose={() => setDeleteModal(false)}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>No song data available</div>;
    }
}

export default Songs;
