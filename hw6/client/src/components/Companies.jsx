import React, {useState} from 'react';
import '../App.css';
import {Link, useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';
import queries from '../quires.js';
import AddModal from './AddModal.jsx';
import EditModal from "./EditModal.jsx";
import DeleteModal from "./DeleteModal.jsx";

const Companies = () => {
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
    }

    const handleDeleteModal = (type, id) => {
        setModalType(type);
        setCurrentId(id);
        setDeleteModal(true);
    }

    const {data, loading, error} = useQuery(id ? queries.Get_Company_By_Id : queries.Get_Companies, {
        variables: id ? {id} : {},
        fetchPolicy: 'cache-and-network'
    });

    if (loading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    if (id && data.getCompanyById) {
        const {getCompanyById} = data;
        return (
            <div className='card' key={getCompanyById._id.toString()}>
                <div className='card-body'>
                    <h3 className='card-title'><span>Name: </span>{getCompanyById.name}</h3>
                    <span>Founded Year:</span> {getCompanyById.foundedYear}
                    <br/><br/>
                    <span>Num Of Albums:</span> {getCompanyById.numOfAlbums}
                    <br/><br/>
                    <h4>Album:</h4>
                    {getCompanyById.albums && getCompanyById.albums.length > 0 ? (
                        <ol>
                            {getCompanyById.albums.map((album) => (
                                <li key={album._id.toString()}>
                                    <Link to={`/albums/${album._id.toString()}`}>
                                        <p>Title: {album.title} - Release Date: {album.releaseDate} ...More Detail</p>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    ) : <p>No albums available.</p>}
                    <br/>
                    <br/>
                    <button className="button" onClick={() => handleEditModal('company', getCompanyById._id.toString())}>Edit
                        Company
                    </button>
                    <EditModal id={currentId} isOpen={editModal} type={modalType}
                               onRequestClose={() => setEditModal(false)}/>
                    <button className="button"
                            onClick={() => handleDeleteModal('company', getCompanyById._id.toString())}>Remove
                        Company
                    </button>
                    <DeleteModal id={currentId} isOpen={deleteModal} type={modalType}
                                 onRequestClose={() => setDeleteModal(false)}/>
                </div>
            </div>
        );
    } else if (data && data.recordCompanies) {
        const {recordCompanies} = data;
        return (
            <div>
                <button className='add-modal-button' onClick={() => handleAddModal('company')}>Add Record Company</button>
                <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
                <br/><br/>
                <h3>Companies:</h3>
                <br/>
                <div className="card-container">
                    {recordCompanies.map((company) => (
                        <div className='card' key={company._id.toString()}>
                            <div className='card-body'>
                                <h4 className='card-title'>
                                    <Link to={`/companies/${company._id.toString()}`}>
                                        <span>Name: </span>{company.name}
                                    </Link>
                                </h4>
                                <span>Country:</span> {company.country}
                                <br/><br/>
                                <span>Num Of Albums:</span> {company.numOfAlbums}
                                <br/><br/>
                                {company.albums && company.albums.length > 0 ? (
                                    <ol>
                                        <span>Albums:</span>
                                        {company.albums.map((album) => (
                                            <div key={album._id.toString()}>
                                                <li>
                                                <p>Title: {album.title}</p>
                                                </li>
                                            </div>
                                        ))}
                                    </ol>
                                ) : (
                                    <span>Albums: No album available.</span>
                                )}
                                <br/><br/>
                                <button className="button" onClick={() => handleEditModal('company', company._id.toString())}>Edit Company
                                </button>
                                <EditModal id={currentId} isOpen={editModal} type={modalType}
                                           onRequestClose={() => setEditModal(false)}/>
                                <button className="button" onClick={() => handleDeleteModal('company', company._id.toString())}>Remove
                                    Company
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
                <button className="button" onClick={() => handleAddModal('company')}>Add Record Company</button>
                <AddModal isOpen={addModal} type={modalType} onRequestClose={() => setAddModal(false)}/>
            </div>
        )
    }
}

export default Companies;