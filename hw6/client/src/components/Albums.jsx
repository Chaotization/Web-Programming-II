import React, {useState} from 'react';
import '../App.css';
import {Link, useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';
import queries from '../quires.js';
import AddModal from './AddModal.jsx';
import EditModal from "./EditModal.jsx";
import DeleteModal from "./DeleteModal.jsx";
import DeleteSongModal from "./DeleteSongModal.jsx";

const Album = () => {
    const [modalType, setModalType] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [currAlbumId, setCurrAlbumId] = useState(null);
    const [deleteSongModal, setDeleteSongModal] = useState(false);
    const {id} = useParams();

    const handleAddModal = (type) => {
        setModalType(type);
        setAddModal(true);
    };

    const handleEditModal = (type, id) => {
        setModalType(type);
        setCurrentId(id);
        setEditModal(true);
    }

    const handleDeleteModal = (type, id) => {
        setModalType(type);
        setCurrentId(id);
        setDeleteModal(true);
    }

    const handleDeleteSongModal = (type, id, albumId) => {
        setCurrentId(id);
        setCurrAlbumId(albumId);
        setDeleteSongModal(true);
    }


    const {data: getAlbums, loading: loadingAlbums, error: errorAlbums} = useQuery(id ? queries.Get_Album_By_Id : queries.Get_Albums, {
        variables: id ? {id} : undefined,
        fetchPolicy: 'cache-and-network'
    });

    const { data: getSongs, loading: loadingSongs, error: errorSongs } = useQuery(queries.Get_Songs_By_Album_Id,
        {
            variables: { id: id },
            skip: !id,
            fetchPolicy: 'cache-and-network'
        }
    );

    if (loadingAlbums || loadingSongs) {
        return <div>Loading</div>
    }


    if (id && getAlbums.getAlbumById) {
        const {getAlbumById} = getAlbums;
        const songs = getSongs ? getSongs.getSongsByAlbumId : [];
        return (
            <div className='card' key={getAlbumById._id.toString()}>
                <div className='card-body'>
                    <button className="add-modal-button" onClick={() => handleAddModal('song')}>Add Song
                    </button>
                    <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
                    <h3 className='card-title'><span>Title: </span>{getAlbumById.title}</h3>
                    <span>Release Date:</span> {getAlbumById.releaseDate}
                    <br/><br/>
                    <span>Genre:</span> {getAlbumById.genre}
                    <br/><br/>
                    {getAlbumById.artist ? (
                        <ol>
                            <h4>Artist</h4>
                            <li key={getAlbumById.artist._id.toString()}>
                                <Link to={`/artists/${getAlbumById.artist._id.toString()}`}>
                                    <p>Name: {getAlbumById.artist.name} - Date
                                        Formed: {getAlbumById.artist.dateFormed} ...More Detail</p>
                                </Link>
                            </li>
                        </ol>
                    ) : (
                        <span>Artist: No artist available.</span>
                    )}
                    <br/><br/>
                    {getAlbumById.recordCompany ? (
                        <ol>
                            <h4>Record Company</h4>
                            <li key={getAlbumById.recordCompany._id.toString()}>
                                <Link to={`/companies/${getAlbumById.recordCompany._id.toString()}`}>
                                    <p>Name: {getAlbumById.recordCompany.name} - Date
                                        Formed: {getAlbumById.recordCompany.foundedYear} ...More Detail</p>
                                </Link>
                            </li>
                        </ol>
                    ) : (
                        <span>Artist: No company available.</span>
                    )}
                    <br/><br/>
                    <div>
                    <h4>Songs:</h4>
                    {Array.isArray(songs) && songs.length > 0 ? (
                        <ol>
                            {songs.map((song) => (
                                <div key={song._id.toString()}>
                                    <li key={song._id.toString()}>
                                        <Link to={`/songs/${song._id.toString()}`}>
                                            <p>Title: {song.title} - Duration: {song.duration} ...More Detail</p>
                                        </Link>
                                        <button className="button"
                                                onClick={() => handleDeleteSongModal('song', song._id.toString(), song.albumId._id.toString())}>Remove
                                            Song
                                        </button>
                                        <DeleteSongModal songId={currentId} albumId={currAlbumId}
                                                         isOpen={deleteSongModal}
                                                         onRequestClose={() => setDeleteSongModal(false)}/>
                                    </li>

                                </div>
                            ))}
                        </ol>
                    ) : <p>No Song available.</p>}
                    </div>
                    <br/>
                    <br/>
                    <button className="button"
                            onClick={() => handleEditModal('album', getAlbumById._id.toString())}>Edit Album
                    </button>
                    <EditModal id={currentId} isOpen={editModal} type={modalType}
                               onRequestClose={() => setEditModal(false)}/>
                    <button className="button"
                            onClick={() => handleDeleteModal('album', getAlbumById._id.toString())}>Remove
                        Album
                    </button>
                    <DeleteModal id={currentId} isOpen={deleteModal} type={modalType}
                                 onRequestClose={() => setDeleteModal(false)}/>

                </div>
            </div>
        );
    } else if (getAlbums && getAlbums.albums) {
        const {albums} = getAlbums;
        return (
            <div>
                <button className="add-modal-button" onClick={() => handleAddModal('album')}>Add Album</button>
                <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
                <br/><br/>
                <h3>Albums:</h3>
                <br/>
                <div className="card-container">
                    {albums.map((album) => (
                        <div className='card' key={album._id.toString()}>
                            <div className='card-body'>
                                <h4 className='card-title'>
                                <Link to={`/albums/${album._id.toString()}`}>
                                        <span>Title: </span>{album.title}
                                    </Link>
                                </h4>
                                <span>Genre:</span> {album.genre}
                                <br/><br/>
                                {album.artist ? (
                                    <div>
                                        <h4>Artist: </h4>
                                        <ol>
                                            <li><p>Name: {album.artist.name} - Date
                                                Formed: {album.artist.dateFormed} </p></li>
                                        </ol>
                                    </div>
                                ) : (
                                    <span>Artist: No artist available.</span>
                                )}
                                <br/><br/>
                                <button className="button" onClick={() => handleEditModal('album', album._id.toString())}>Edit Album
                                </button>
                                <EditModal id={currentId} isOpen={editModal} type={modalType}
                                           onRequestClose={() => setEditModal(false)}/>
                                <button className="button" onClick={() => handleDeleteModal('album', album._id.toString())}>Remove
                                    Album
                                </button>
                                <DeleteModal id={currentId} isOpen={deleteModal} type={modalType}
                                             onRequestClose={() => setDeleteModal(false)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }else {
        return (
            <div>
                <button className="button" onClick={() => handleAddModal('album')}>Add Album</button>
                <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
            </div>
        )
    }
}

export default Album;