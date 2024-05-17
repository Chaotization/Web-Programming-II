import React, {useState} from 'react';
import '../App.css';
import {Link, useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';
import queries from '../quires.js';
import AddModal from './AddModal.jsx';
import EditModal from "./EditModal.jsx";
import DeleteModal from "./DeleteModal.jsx";
import Search from "./Search.jsx";


const Artist = () => {
    const [modalType, setModalType] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const {id} = useParams();

    const handleAddModal = (type) => {
        setModalType(type);
        setAddModal(true);
    };

    const handleEditModal = (type, id) => {
        setModalType(type);
        setCurrentId(id);
        setEditModal(true);
    };

    const handleDeleteModal = (type, id) => {
        setModalType(type);
        setCurrentId(id);
        setDeleteModal(true);
    };

    const {data: getArtists, loading: loadingArtists, error: errorArtists} = useQuery(
        id ? queries.Get_Artist_By_Id : queries.Get_Artists,
        {
            variables: id ? {id} : undefined,
            fetchPolicy: 'cache-and-network'
        }
    );

    const {data: songData, loading: loadingSongs, error: errorSongs} = useQuery(queries.Get_Songs_By_Artist_Id,
        {
            variables: {artistId: id},
            skip: !id,
            fetchPolicy: 'cache-and-network'
        }
    );

    if (loadingArtists || loadingSongs) {
        return <div>Loading...</div>;
    }

    if (errorArtists) {
        return <div>{(errorArtists).message}</div>;
    }

    if (id && getArtists.getArtistById) {
        const {getArtistById} = getArtists;
        const songs = songData ? songData.getSongsByArtistId : [];
        return (
            <div className='card' key={getArtistById._id.toString()}>
                <div className='card-body'>
                <h3 className='card-title'><span>Name: </span>{getArtistById.name}</h3>
                    <p>Date Formed: {getArtistById.dateFormed}</p>
                    <p>Members: {getArtistById.members.join(', ')}</p>
                    <p>Number Of Albums: {getArtistById.numOfAlbums}</p>
                    <div>
                        <h4>Albums:</h4>
                        {getArtistById.albums && getArtistById.albums.length > 0 ? (
                            <ol>
                                {getArtistById.albums.map((album) => (
                                    <li key={album._id.toString()}>
                                        <Link to={`/albums/${album._id.toString()}`}>
                                            <p>Title: {album.title} - Release Date: {album.releaseDate} ...More Detail</p>
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        ) : <p>No albums available.</p>}
                        <div>
                            <h4>Songs:</h4>
                            {Array.isArray(songs) && songs.length > 0 ? (
                                <ol>
                                    {songs.map((song) => (
                                        <li key={song._id.toString()}>
                                            <Link to={`/songs/${song._id.toString()}`}>
                                                <p>Title: {song.title} - Duration: {song.duration} ...More Detail</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ol>
                            ) : <p>No Song available.</p>}
                        </div>
                        <br/>
                        <button className="button"
                                onClick={() => handleEditModal('artist', getArtistById._id.toString())}>Edit Artist
                        </button>
                        <EditModal id={currentId} isOpen={editModal} type={modalType}
                                   onRequestClose={() => setEditModal(false)}/>
                        <button className="button"
                                onClick={() => handleDeleteModal('artist', getArtistById._id.toString())}>Remove Artist
                        </button>
                        <DeleteModal id={currentId} isOpen={deleteModal} type={modalType}
                                     onRequestClose={() => setDeleteModal(false)}/>
                    </div>
                </div>
            </div>
        );
    } else if (getArtists && getArtists.artists) {
        const {artists} = getArtists;
        return (
            <div>
                <button className='add-modal-button' onClick={() => handleAddModal('artist')}>Add Artist</button>
                <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
                <br/><br/>
                <h3>Artists:</h3>
                <br/>
                <div className="card-container">
                    {artists.map((artist) => (
                        <div className='card' key={artist._id.toString()}>
                            <div className='card-body'>
                                <h4 className='card-title'>
                                    <Link to={`/artists/${artist._id.toString()}`}>
                                        <span>Name: </span>{artist.name}
                                    </Link>
                                </h4>
                                <span>Date Formed:</span> {artist.dateFormed}
                                <br/><br/>
                                <span>Members:</span> {artist.members.join(', ')}
                                <br/><br/>
                                <span>Number Of Albums:</span> {artist.numOfAlbums}
                                <br/><br/>
                                <button className="button"
                                        onClick={() => handleEditModal('artist', artist._id.toString())}>Edit Artist
                                </button>
                                <EditModal id={currentId} isOpen={editModal} type={modalType}
                                           onRequestClose={() => setEditModal(false)}/>
                                <button className="button"
                                        onClick={() => handleDeleteModal('artist', artist._id.toString())}>Remove Artist
                                </button>
                                <DeleteModal id={currentId} isOpen={deleteModal} type={modalType}
                                             onRequestClose={() => setDeleteModal(false)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (<div>
        <button className="button" onClick={() => handleAddModal('artist')}>Add Artist</button>
            <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
        </div>);
    }
}

export default Artist;
