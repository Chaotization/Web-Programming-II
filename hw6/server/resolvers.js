import {GraphQLError} from 'graphql';
import redis from 'redis';
import {
    albums as albumsCollection,
    artists as artistsCollection,
    recordCompanies as companyCollection,
    songs as songsCollection
} from './config/mongoCollections.js';
import {
    checkArray,
    checkDate,
    checkDuration,
    checkFoundedYear,
    checkGenre,
    checkId,
    checkString,
    checkYear
} from "./validator.js";
import {ObjectId} from "mongodb";


const client = redis.createClient();
client.connect().then(() => {
});

export const resolvers = {
    Query: {
        artists: async () => {
            const exists = await client.exists('Allartists');
            if (exists) {
                return await client.json.get('Allartists');
            } else {
                const artists = await artistsCollection();
                const allArtists = await artists.find({}).toArray();
                if (!allArtists) {
                    throw new GraphQLError(`Internal Server Error`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                await client.json.set('Allartists', '$', allArtists);
                await client.expire('Allartists', 3600);
                return allArtists;
            }
        },

        albums: async () => {
            const exists = await client.exists('Allalbums');
            if (exists) {
                return await client.json.get('Allalbums');
            } else {
                const albums = await albumsCollection();
                const allAlbums = await albums.find({}).toArray();
                if (!allAlbums) {
                    throw new GraphQLError(`Internal Server Error`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                await client.json.set('Allalbums', '$', allAlbums);
                await client.expire('Allalbums', 3600);
                return allAlbums;
            }
        },

        recordCompanies:
            async () => {
                const exists = await client.exists('Allrecordcompanies');
                if (exists) {
                    return await client.json.get('Allrecordcompanies');
                } else {
                    const recordCompanies = await companyCollection();
                    const companies = await recordCompanies.find({}).toArray();
                    if (!companies) {
                        throw new GraphQLError(`Internal Server Error`, {
                            extensions: {code: 'INTERNAL_SERVER_ERROR'}
                        });
                    }
                    await client.json.set('Allrecordcompanies', '$', companies);
                    await client.expire('Allrecordcompanies', 3600);

                    return companies;
                }
            },

        getArtistById:
            async (_, args) => {
                let id = checkId(args._id);
                const exists = await client.exists(`artist-${id}`);
                if (exists) {
                    return await client.json.get(`artist-${id}`);
                } else {
                    const artists = await artistsCollection();
                    const artist = await artists.findOne({_id: new ObjectId(id)});

                    if (!artist) {
                        throw new GraphQLError('Artist Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }
                    await client.json.set(`artist-${id}`, '$', artist);
                    return artist;
                }
            },

        getAlbumById:
            async (_, args) => {
                let id = checkId(args._id);
                const exists = await client.exists(`album-${id}`);
                if (exists) {
                    return await client.json.get(`album-${id}`)
                } else {
                    const albums = await albumsCollection();
                    const album = await albums.findOne({_id: new ObjectId(id)});

                    if (!albums) {
                        throw new GraphQLError('Album Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }
                    await client.json.set(`album-${id}`, '$', album);
                    return album;
                }
            },

        getCompanyById:
            async (_, args) => {
                let id = checkId(args._id);
                const exists = await client.exists(`company-${id}`);
                if (exists) {
                    return await client.json.get(`company-${id}`);
                } else {
                    const companies = await companyCollection();
                    const company = await companies.findOne({_id: new ObjectId(id)});

                    if (!company) {
                        throw new GraphQLError('Company Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }
                    await client.json.set(`company-${id}`, '$', company);
                    return company;
                }
            },

        getSongsByArtistId:
            async (_, args) => {
                let id = checkId(args.artistId);
                const artists = await artistsCollection();
                const albums = await albumsCollection();
                const songs = await songsCollection();
                const exists = await client.exists(`artist-song-${id}`);
                if (exists) {
                    return await client.json.get(`artist-song-${id}`);
                } else {
                    const artist = await artists.findOne({_id: new ObjectId(id)});
                    const allSongs = [];
                    for (const albumId of artist.albums) {
                        const album = await albums.findOne({_id: new ObjectId(albumId)});
                        for (const songId of album.songs) {
                            const song = await songs.findOne({_id: new ObjectId(songId)});
                            allSongs.push(song);
                            await client.json.set(`song-${songId.toString()}`, '$', song);
                        }
                    }

                    if (!allSongs || allSongs.length === 0) {
                        throw new GraphQLError('Song Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }
                    await client.json.set(`artist-song-${id}`, '$', allSongs);
                    await client.expire(`artist-song-${id}`, 3600);
                    return allSongs;
                }
            },

        albumsByGenre:
            async (_, args) => {
                let genre = checkGenre(args.genre);
                const exists = await client.exists(genre);
                if (exists) {
                    return await client.json.get(`${genre}`);
                }else {
                    const albums = await albumsCollection();
                    const allAlbums = await albums.find({genre: genre}).toArray();

                    if (!allAlbums || allAlbums.length === 0) {
                        throw new GraphQLError('Albums Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    await client.json.set(genre, '$', allAlbums);
                    await client.expire(genre, 3600);
                    return allAlbums;
                }
            },

        companyByFoundedYear:
            async (_, args) => {
                let {min, max} = checkYear(args.min, args.max);
                const exists = await client.exists(`company-range-${min}-${max}`);
                if (exists) {
                    return await client.json.get(`company-range-${min}-${max}`);
                } else {
                    const companies = await companyCollection();
                    const allCompanies = await companies.find({foundedYear: {$gte: min, $lte: max}}).toArray();

                    if (!allCompanies || allCompanies.length === 0) {
                        throw new GraphQLError('Companies Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    await client.json.set(`company-range-${max}`, '$', allCompanies);
                    await client.expire(`company-range-${min}-${max}`, 3600);
                    return allCompanies;
                }
            },

        searchArtistByArtistName:
            async (_, args) => {
                let searchTerm = checkString(args.searchTerm, 'searchTerm');
                const exists = await client.exists(`artist-${searchTerm}`);
                if (exists) {
                    return await client.json.get(`artist-${searchTerm}`);
                } else {
                    const artists = await artistsCollection();
                    const allArtists = await artists.find({name: searchTerm}).toArray();

                    if (!allArtists || allArtists.length === 0) {
                        throw new GraphQLError('Name Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    await client.json.set(`artist-${searchTerm}`, '$', allArtists);
                    return allArtists;
                }
            },

        getSongById:
            async (_, args) => {
                let id = checkId(args._id);
                const exists = await client.exists(`song-${id}`);
                if (exists) {
                    return await client.json.get(`song-${id}`);
                } else {
                    const songs = await songsCollection();
                    const song = await songs.findOne({_id: new ObjectId(id)});

                    if (!song) {
                        throw new GraphQLError('Song Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    await client.json.set(`song-${id}`, '$', song);
                    return song;
                }
            },

        getSongsByAlbumId:
            async (_, args) => {
                let id = args._id;
                const exists = await client.exists(`song-album-${id}`);

                if (exists) {
                    return await client.json.get(`song-album-${id}`);
                } else {
                    const songs = await songsCollection();
                    const albums = await albumsCollection();

                    const album = await albums.findOne({_id: new ObjectId(id)});

                    if (!album) {
                        throw new GraphQLError('Album Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    let allSongs = [];
                    for (let songId of album.songs) {
                        let exists = await client.exists(`song-${songId.toString()}`)
                        if(exists){
                            let song = await client.json.get(`song-${songId.toString()}`);
                            allSongs.push(song);
                        }else{
                            let song = await songs.findOne({_id: new ObjectId(songId)});
                            await client.json.set(`song-${songId.toString()}`, '$', song);
                            allSongs.push(song);
                        }
                    }

                    if (!allSongs || allSongs.length === 0) {
                        throw new GraphQLError('Song Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    await client.json.set(`song-album-${id}`, '$', allSongs);
                    return allSongs;
                }
            },

        searchSongByTitle:
            async (_, args) => {
                let title = checkString(args.searchTitleTerm, 'Song Title');
                const exists = await client.exists(`song-${title}`);
                if (exists) {
                    return await client.json.get(`song-${title}`);
                } else {
                    const songs = await songsCollection();
                    const song = await songs.find({title: title}).toArray();

                    if (!song || song.length === 0) {
                        throw new GraphQLError('Song Not Found', {
                            extensions: {code: 'NOT_FOUND'}
                        });
                    }

                    await client.json.set(`song-${title}`, '$', song);
                    await client.expire(`song-${title}`, 3600);
                    return song;
                }
            },
    },

    Song: {
        albumId: async (parentValue) => {
            const albums = await albumsCollection();
            const album =  await albums.findOne({_id: new ObjectId(parentValue.albumId)});
            if(!album){
                throw new GraphQLError('Song Not Found', {
                    extensions: {code: 'NOT_FOUND'}
                });
            }
            return album
        }
    },

    Album: {
        artist: async (parentValue) => {
            const artists = await artistsCollection();
            console.log(parentValue.artistId.toString());
            const artist = await artists.findOne({_id: new ObjectId(parentValue.artistId)});
            if(!artist){
                throw new GraphQLError('Artist Not Found', {
                    extensions: {code: 'NOT_FOUND'}
                });
            }
            return artist;
        },
        recordCompany: async (parentValue) => {
            const companies = await companyCollection();
            console.log(parentValue.recordCompanyId.toString())
            const company = await companies.findOne({_id: new ObjectId(parentValue.recordCompanyId)});
            if(!company){
                throw new GraphQLError('Company Not Found', {
                    extensions: {code: 'NOT_FOUND'}
                });
            }
            return company;
        },

        songs: async (parentValue) => {
            const songs = await songsCollection();
            const allSongs = await songs.find({albumId: new ObjectId(parentValue._id)}).toArray();
            if (!allSongs) {
                throw new GraphQLError('Songs Not Found', {
                    extensions: {code: 'NOT_FOUND'}
                });
            }
            return allSongs;
        }
    },

    Artist: {
        albums: async (parentValue) => {
            const albums = await albumsCollection();
            const allAlbums =  await albums.find({artistId: new ObjectId(parentValue._id)}).toArray();
            if(!allAlbums){
                throw new GraphQLError('Albums Not Found', {
                    extensions: {code: 'NOT_FOUND'}
                });
            }
            return allAlbums;
        },

        numOfAlbums:
            async (parentValue) => {
                const albums = await albumsCollection();
                return await albums.count({artistId: new ObjectId(parentValue._id)});
            }
    },

    RecordCompany: {
        albums: async (parentValue) => {
            const albums = await albumsCollection();
            const allAlbums =  await albums.find({recordCompanyId: new ObjectId(parentValue._id)}).toArray();
            if(!allAlbums){
                throw new GraphQLError('Albums Not Found', {
                    extensions: {code: 'NOT_FOUND'}
                });
            }
            return allAlbums;
        },

        numOfAlbums: async (parentValue) => {
            const albums = await albumsCollection();
            return await albums.count({recordCompanyId: new ObjectId(parentValue._id)});
        }
    },



    Mutation: {
        addArtist: async (_, args) => {
            const artists = await artistsCollection();

            let name = checkString(args.name, 'Artist Name');
            let dateFormed = checkDate(args.dateFormed);
            let members = checkArray(args.members);
            const newArtist = {
                _id: new ObjectId(),
                name: name,
                dateFormed: dateFormed,
                members: members,
                albums: []
            }
            let insertedInfo = await artists.insertOne(newArtist);
            if (!insertedInfo.acknowledged || !insertedInfo.insertedId) {
                throw new GraphQLError(`Could not Add Artist`, {
                    extensions: {code: 'INTERNAL_SERVER_ERROR'}
                });
            }
            await client.json.del('Allartists');
            await client.json.del(`artist-${newArtist.name}`);
            await client.json.set(`artist-${newArtist._id.toString()}`, '$', newArtist);
            return newArtist;
        },

        editArtist:
            async (_, args) => {
                let id = checkId(args._id);

                const artists = await artistsCollection();
                const exists = artists.findOne({_id: new ObjectId(id)});

                if (!exists) {
                    throw new GraphQLError(
                        `Could not Find Artist with an ID of ${id}`,
                        {
                            extensions: {code: 'BAD_USER_INPUT'}
                        }
                    );
                }

                let updateArtist = {};
                if (args.name) {
                    updateArtist.name = checkString(args.name, 'Artist Name');
                }

                if (args.dateFormed) {
                    updateArtist.dateFormed = checkDate(args.dateFormed);
                }

                if (args.members && args.members.length > 0) {
                    updateArtist.members = checkArray(args.members);
                }

                const updateInfo = await artists.updateOne({_id: new ObjectId(id)}, {$set: updateArtist});

                if (!updateInfo.acknowledged || updateInfo.matchedCount !== 1) {
                    throw new GraphQLError(`Could not Update Artist`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                const artist = await artists.findOne({_id: new ObjectId(id)});
                await client.json.del('Allartists');
                await client.json.del(`artist-${artist.name}`);
                await client.json.set(`artist-${id}`, '$',artist)
                return artist;
            },

        removeArtist:
            async (_, args) => {
                let id = checkId(args._id);

                const artists = await artistsCollection();
                const albums = await albumsCollection();
                const companies = await companyCollection();
                const songs = await songsCollection();
                const artist = await artists.findOne({_id: new ObjectId(id)});

                if (!artist) {
                    throw new GraphQLError(
                        `Could not Find Artist with an ID of ${id}`,
                        {
                            extensions: {code: 'BAD_USER_INPUT'}
                        }
                    );
                }


                for (const albumId of artist.albums) {
                    const album = await albums.findOne({_id: albumId});
                    await client.json.del(`album-${albumId}`);
                    if (!album) {
                        throw new GraphQLError(
                            `Could not Find Album with an ID of ${albumId}`,
                            {
                                extensions: {code: 'BAD_USER_INPUT'}
                            }
                        );
                    }

                    const deleteAlbumInCompany = await companies.updateOne({_id: album.recordCompanyId}, {$pull: {albums: albumId}});
                    const deleteAlbum = await albums.deleteOne({_id: albumId});

                    if (!deleteAlbumInCompany.acknowledged || deleteAlbumInCompany.matchedCount !== 1 || !deleteAlbum.acknowledged || deleteAlbum.deletedCount !== 1) {
                        throw new GraphQLError(`Could not Delete Album or Album In Company`,  {extensions: {code: 'INTERNAL_SERVER_ERROR'}});
                    }

                    for (const songId of album.songs) {
                        const deleteSong = await songs.deleteOne({_id: songId});
                        await client.json.del(`song-${songId.toString()}`);
                        if (!deleteSong.acknowledged || deleteSong.deletedCount !== 1) {
                            throw new GraphQLError(`Could not Delete Song`, {extensions: {code: 'INTERNAL_SERVER_ERROR'}});
                        }
                        await client.json.del(`song-${songId}`);
                    }
                    await client.json.del('Allartists');
                    await client.json.del(`artist-${id}`);

                }

                const deleteInfo = await artists.deleteOne({_id: new ObjectId(id)});

                if (!deleteInfo.acknowledged || deleteInfo.deletedCount !== 1) {
                    throw new GraphQLError(`Could not Delete Artist`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                await client.json.del('Allartists');
                await client.json.del(`artist-${artist.name}`);
                await client.json.del(`artist-${id}`);
                return artist;
            },

        addCompany:
            async (_, args) => {
                let name = checkString(args.name, 'Company Name');
                let foundedYear = checkFoundedYear(args.foundedYear);
                let country = checkString(args.country, 'Country');

                const companies = await companyCollection();

                const newCompany = {
                    _id: new ObjectId(),
                    name: name,
                    foundedYear: foundedYear,
                    country: country,
                    albums: []
                }

                let insertedInfo = await companies.insertOne(newCompany);

                if (!insertedInfo.acknowledged || !insertedInfo.insertedId) {
                    throw new GraphQLError(`Could not Add Company`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                await client.json.del('Allrecordcompanies');
                await client.json.del(`company-range-${newCompany.foundedYear}`);
                await client.json.set(`company-${newCompany._id.toString()}`, '$', newCompany);
                return newCompany;
            },

        editCompany:
            async (_, args) => {
                let id = checkId(args._id);

                const companies = await companyCollection();
                let exists = await companies.findOne({_id: new ObjectId(id)});

                if (!exists) {
                    throw new GraphQLError(
                        `Could not Find Company with an ID of ${id}`,
                        {
                            extensions: {code: 'BAD_USER_INPUT'}
                        }
                    );
                }

                let updatedCompany = {};
                if (args.name) {
                    updatedCompany.name = checkString(args.name, 'Company Name');
                }

                if (args.foundedYear) {
                    updatedCompany.foundedYear = checkFoundedYear(args.foundedYear);
                }

                if (args.country) {
                    updatedCompany.country = checkString(args.country, 'Country');
                }

                const updatedInfo = await companies.updateOne({_id: new ObjectId(id)}, {$set: updatedCompany});

                if (!updatedInfo.acknowledged || updatedInfo.matchedCount !== 1) {
                    throw new GraphQLError(`Could not Update Company`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                const company = await companies.findOne({_id: new ObjectId(id)});
                await client.json.del('Allrecordcompanies');
                await client.json.del(`company-range-${company.foundedYear}`);
                await client.json.set(`company-${id}`, '$', company);
                return company;
            },

        removeCompany:
            async (_, args) => {
                let id = checkId(args._id);

                const companies = await companyCollection();
                const albums = await albumsCollection();
                const artists = await artistsCollection();
                const songs = await songsCollection();
                let company = await companies.findOne({_id: new ObjectId(id)});

                if (!company) {
                    throw new GraphQLError(
                        `Could not Find Company with an ID of ${args.id}`,
                        {
                            extensions: {code: 'BAD_USER_INPUT'}
                        }
                    );
                }

                for (let albumId of company.albums) {
                    const album = await albums.findOne({_id: albumId});
                    const deleteAlbumInArtist = await artists.updateOne({_id: album.artistId}, {$pull: {albums: albumId}});
                    await client.json.del(`album-${albumId}`);
                    if (!deleteAlbumInArtist.acknowledged || deleteAlbumInArtist.matchedCount !== 1) {
                        throw new GraphQLError(`Could not Delete Album In Artist`, {
                            extensions: {code: 'INTERNAL_SERVER_ERROR'}
                        });
                    }

                    const deletedAlbum = await albums.deleteOne({recordCompanyId: new ObjectId(id)});
                    if (!deletedAlbum.acknowledged || deletedAlbum.deletedCount !== 1) {
                        throw new GraphQLError(`Could not Delete Album`, {
                            extensions: {code: 'INTERNAL_SERVER_ERROR'}
                        });
                    }

                    for (let songId of album.songs) {
                        const deleteSong = await songs.deleteOne({_id: songId});
                        songId = songId.toString();
                        if (!deleteSong.acknowledged || deleteSong.deletedCount !== 1) {
                            throw new GraphQLError(`Could not Delete Song`, {extensions: {code: 'INTERNAL_SERVER_ERROR'}});
                        }
                        await client.json.del(`song-${songId}`);
                    }

                    albumId = albumId.toString();
                    await client.json.del('Allrecordcompanies');
                    await client.json.del(`company-${id}`);
                }


                const deletedInfo = await companies.deleteOne({_id: new ObjectId(id)});
                if (!deletedInfo.acknowledged || deletedInfo.deletedCount !== 1) {
                    throw new GraphQLError(`Could not Delete Company`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }

                await client.json.del('Allrecordcompanies');
                await client.json.del(`company-range-${company.foundedYear}`);
                await client.json.del(`company-${id}`);
                return company;
            },

        addAlbum:
            async (_, args) => {
                let title = checkString(args.title, 'Album Title');
                let releaseDate = checkDate(args.releaseDate);
                let genre = checkGenre(args.genre);
                let artistId = checkId(args.artistId);
                let companyId = checkId(args.companyId);

                const albums = await albumsCollection();
                const artists = await artistsCollection();
                const companies = await companyCollection();

                const checkArtist = await artists.findOne({_id: new ObjectId(artistId)});
                if (!checkArtist) {
                    throw new GraphQLError(`Could not find Artist with an ID of ${artistId}`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }

                const checkCompany = await companies.findOne({_id: new ObjectId(companyId)});
                if (!checkCompany) {
                    throw new GraphQLError(`Could not find Company with an ID of ${companyId}`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }

                const newAlbum = {
                    _id: new ObjectId(),
                    title: title,
                    releaseDate: releaseDate,
                    genre: genre,
                    artistId: new ObjectId(artistId),
                    recordCompanyId: new ObjectId(companyId),
                    songs: [],
                }

                let insertedInfo = await albums.insertOne(newAlbum);

                if (!insertedInfo.acknowledged || !insertedInfo.insertedId) {
                    throw new GraphQLError(`Could not Add Album`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }

                const artist = await artists.updateOne({_id: new ObjectId(artistId)}, {$push: {albums: new ObjectId(newAlbum._id)}});
                const company = await companies.updateOne({_id: new ObjectId(companyId)}, {$push: {albums: new ObjectId(newAlbum._id)}});

                if (!artist.acknowledged || artist.matchedCount !== 1) {
                    throw new GraphQLError(
                        `Could not Update Artist`,
                        {
                            extensions: {code: 'INTERNAL_SERVER_ERROR'}
                        }
                    );
                }

                if (!company.acknowledged || company.matchedCount !== 1) {
                    throw new GraphQLError(
                        `Could not Update Company`,
                        {
                            extensions: {code: 'INTERNAL_SERVER_ERROR'}
                        }
                    );
                }
                console.log(newAlbum._id.toString());
                await client.json.del('Allalbums');
                await client.json.del(newAlbum.genre);
                await client.json.set(`album-${newAlbum._id.toString()}`, '$', newAlbum);
                return newAlbum;
            },


        editAlbum:
            async (_, args) => {
                let id = checkId(args._id);

                const albums = await albumsCollection();
                const artists = await artistsCollection();
                const companies = await companyCollection();
                const exists = await albums.findOne({_id: new ObjectId(id)});

                if (!exists) {
                    throw new GraphQLError(
                        `Could not Find Album with an ID of ${id}`,
                        {
                            extensions: {code: 'BAD_USER_INPUT'}
                        }
                    );
                }

                let updatedAlbum = {};
                if (args.title) {
                    updatedAlbum.title = checkString(args.title, 'Album Title');
                }

                if (args.releaseDate) {
                    updatedAlbum.releaseDate = checkDate(args.releaseDate);
                }

                if (args.genre) {
                    updatedAlbum.genre = checkGenre(args.genre);
                }


                let artistId, companyId;

                if (args.artistId) {
                    artistId = checkId(args.artistId);
                    const artist = await artists.findOne({_id: new ObjectId(artistId)});
                    if (!artist) {
                        throw new GraphQLError(`Could not find Artist with an ID of ${artistId}`, {
                            extensions: {code: 'BAD_USER_INPUT'}
                        });
                    }

                    if (exists.artistId !== artistId) {
                        const removeAlbumOnOldArtist = await artists.updateOne({_id: new ObjectId(exists.artistId)}, {$pull: {albums: new ObjectId(id)}});
                        if (!removeAlbumOnOldArtist.acknowledged || removeAlbumOnOldArtist.matchedCount !== 1) {
                            throw new GraphQLError(
                                `Could not remove Album from Prior Artist`,
                                {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                            );
                        }else{
                            const oldArtist = await artists.findOne({_id: new ObjectId(exists.artistId)});
                            await client.json.del(`artist-${exists.artistId}`);
                            await client.json.set(`artist-${artistId}`, '$', oldArtist);
                        }


                        const addAlbumInNewArtist = await artists.updateOne({_id: new ObjectId(artistId)}, {$push: {albums: new ObjectId(id)}});
                        if (!addAlbumInNewArtist.acknowledged || addAlbumInNewArtist.matchedCount !== 1) {
                            throw new GraphQLError(
                                `Could not add Album to New Artist`,
                                {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                            );
                        }else{
                            const newArtist = await artists.findOne({_id: new ObjectId(artistId)});
                            await client.json.set(`artist-${artistId}`, '$', newArtist);
                        }

                    }

                    updatedAlbum.artistId = new ObjectId(artistId);
                }

                if (args.companyId) {
                    companyId = checkId(args.companyId);
                    const company = await companies.findOne({_id: new ObjectId(companyId)});
                    if (!company) {
                        throw new GraphQLError(`Could not find Company with an ID of ${companyId}`, {
                            extensions: {code: 'BAD_USER_INPUT'}
                        });
                    }

                    if (exists.recordCompanyId !== companyId) {
                        const removeAlbumInOldCompany = await companies.updateOne({_id: new ObjectId(exists.recordCompanyId)}, {$pull: {albums: new ObjectId(id)}});

                        if (!removeAlbumInOldCompany.acknowledged || removeAlbumInOldCompany.matchedCount !== 1) {
                            throw new GraphQLError(
                                `Could not remove Album from Prior Company`,
                                {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                            );
                        }else{
                            const oldCompany = await companies.findOne({_id: new ObjectId(exists.recordCompanyId)});
                            await client.json.del(`company-${exists.recordCompanyId}`);
                        }


                        const addAlbumInNewCompany = await companies.updateOne({_id: new ObjectId(companyId)}, {$push: {albums: new ObjectId(id)}});
                        if (!addAlbumInNewCompany.acknowledged || addAlbumInNewCompany.matchedCount !== 1) {
                            throw new GraphQLError(
                                `Could not add Album to New Company`,
                                {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                            );
                        }else{
                            const newCompany = await companies.findOne({_id: new ObjectId(companyId)});
                            await client.json.set(`company-${companyId}`, '$', newCompany);
                        }


                    }

                    updatedAlbum.recordCompanyId = new ObjectId(companyId);
                }


                const updatedInfo = await albums.updateOne({_id: new ObjectId(id)}, {$set: updatedAlbum});
                if (!updatedInfo.acknowledged || updatedInfo.matchedCount !== 1) {
                    throw new GraphQLError(`Could not Update Album`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }

                const album = await albums.findOne({_id: new ObjectId(id)});


                await client.json.del('Allalbums');
                await client.json.del(album.genre);
                await client.json.set(`album-${id}`, '$', album);
                return album;
            },

        removeAlbum:
            async (_, args) => {
                let id = checkId(args._id);

                const albums = await albumsCollection();
                const artists = await artistsCollection();
                const companies = await companyCollection();
                const songs = await songsCollection();
                const exists = await albums.findOne({_id: new ObjectId(id)});

                if (!exists) {
                    throw new GraphQLError(
                        `Could not Find Album with an ID of ${id}`,
                        {
                            extensions: {code: 'BAD_USER_INPUT'}
                        }
                    );
                }

                const deleteAlbumInArtist = await artists.updateOne({_id: new ObjectId(exists.artistId)}, {$pull: {albums: new ObjectId(id)}});

                if (!deleteAlbumInArtist.acknowledged || deleteAlbumInArtist.matchedCount !== 1) {
                    throw new GraphQLError(
                        `Could not remove Album related to Artist`,
                        {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                    );
                }
                await client.json.del(`artist-${exists.artistId}`);

                const deleteAlbumInCompany = await companies.updateOne({_id: new ObjectId(exists.recordCompanyId)}, {$pull: {albums: new ObjectId(id)}});

                if (!deleteAlbumInCompany.acknowledged || deleteAlbumInCompany.matchedCount !== 1) {
                    throw new GraphQLError(
                        `Could not remove Album from Company`,
                        {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                    );
                }

                await client.json.del(`company-${exists.recordCompanyId}`);

                for (const songId of exists.songs) {
                    const deletedSong = await songs.deleteOne({_id: new ObjectId(songId)});
                    await client.json.del(`song-${songId}`);
                    if (!deletedSong.acknowledged || deletedSong.deletedCount !== 1) {
                        throw new GraphQLError(
                            `Could not remove Song from Album`,
                            {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                        );
                    }
                }

                const deletedInfo = await albums.findOneAndDelete({_id: new ObjectId(id)});

                if (!deletedInfo) {
                    throw new GraphQLError(`Could not Delete Album`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                await client.json.del('Allalbums');
                await client.json.del(`${exists.genre}`);
                await client.json.del(`album-${id}`);
                return deletedInfo;
            },

        addSong:
            async (_, args) => {
                let title = checkString(args.title, 'Song Title');
                let duration = checkDuration(args.duration);
                let id = checkId(args.albumId);

                const albums = await albumsCollection();
                const songs = await songsCollection();

                const checkAlbum = await albums.findOne({_id: new ObjectId(id)});

                if (!checkAlbum) {
                    throw new GraphQLError(`Could not find Album with an ID of ${id}`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }

                const newSong = {
                    _id: new ObjectId(),
                    title: title,
                    duration: duration,
                    albumId: new ObjectId(id)
                }

                let insertedInfo = await songs.insertOne(newSong);

                if (!insertedInfo.acknowledged || !insertedInfo.insertedId) {
                    throw new GraphQLError(`Could not Add Album`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                const album = await albums.updateOne({_id: new ObjectId(id)}, {$push: {songs: newSong._id}})

                if (!album.acknowledged || album.matchedCount !== 1) {
                    throw new GraphQLError(`Could not Update Song in Album`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }


                await client.json.set(`song-${newSong._id.toString()}`, '$', newSong);
                await client.json.del(`album-${id}`);
                await client.json.del(`song-album-${id}`);
                await client.json.del(`song-${newSong.title}`);
                await client.json.del('Allalbums');
                return newSong;
            },

        editSong:
            async (_, args) => {
                let id = checkId(args._id);

                const songs = await songsCollection();
                const albums = await albumsCollection();

                const exists = await songs.findOne({_id: new ObjectId(id)});

                if (!exists) {
                    throw new GraphQLError(`Could not find Song with an ID of ${id}`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }

                let updatedSong = {};

                if (args.title) {
                    updatedSong.title = checkString(args.title, 'Song Title');
                }

                if (args.duration) {
                    updatedSong.duration = checkDuration(args.duration);
                }

                if (args.albumId) {
                    let albumId = checkId(args.albumId);
                    const album = await albums.findOne({_id: new ObjectId(albumId)});

                    if (!album) {
                        throw new GraphQLError(`Could not find Album with an ID of ${id}`, {
                            extensions: {code: 'BAD_USER_INPUT'}
                        });
                    }

                    if (exists.albumId.toString() !== albumId) {
                        const removeSongInOldAlbum = await albums.updateOne({_id: exists.albumId}, {$pull: {songs: new ObjectId(id)}});
                        if (!removeSongInOldAlbum.acknowledged || removeSongInOldAlbum.matchedCount !== 1) {
                            throw new GraphQLError(
                                `Could not remove Album from Prior Company`,
                                {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                            );
                        }else{
                                const oldAlbum = await albums.findOne({_id: new ObjectId(exists.albumId)});
                                await client.json.set(`song-${exists.exists.albumId}`, '$', oldAlbum);
                        }

                        const addSongInNewAlbum = await albums.updateOne({_id: new ObjectId(albumId)}, {$push: {songs: new ObjectId(id)}});
                        if (!addSongInNewAlbum.acknowledged || addSongInNewAlbum.matchedCount !== 1) {
                            throw new GraphQLError(
                                `Could not add Album to New Company`,
                                {extensions: {code: 'INTERNAL_SERVER_ERROR'}}
                            );
                        }else{
                            const newAlbum = await albums.findOne({_id: new ObjectId(albumId)});
                            await client.json.set(`song-${albumId}`, '$', newAlbum);
                        }
                    }
                    updatedSong.albumId = new ObjectId(albumId);
                }

                const updatedInfo = await songs.updateOne({_id: new ObjectId(id)}, {$set: updatedSong});

                if (!updatedInfo.acknowledged || updatedInfo.matchedCount !== 1) {
                    throw new GraphQLError(`Could not Update Song`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }

                const song = await songs.findOne({_id: new ObjectId(id)});
                const albumId = song.albumId.toString();
                await client.json.set(`song-${id}`, '$', song);
                await client.json.del(`album-${albumId}`);
                await client.json.del(`song-album-${albumId}`);
                await client.json.del(`song-${song.title}`);
                await client.json.del('Allalbums');
                return song;
            },

        removeSong:
            async (_, args) => {
                let id = checkId(args._id);

                const songs = await songsCollection();
                const albums = await albumsCollection();
                const song = await songs.findOne({_id: new ObjectId(id)});

                if (!song) {
                    throw new GraphQLError(`Could not find Song with an ID of ${id}`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }

                const album = await albums.findOne({_id: song.albumId});

                if (!album) {
                    throw new GraphQLError(`Could not find Album with an ID of ${song.albumId.toString()}`, {
                        extensions: {code: 'BAD_USER_INPUT'}
                    });
                }

                const deleteSongInAlbum = await albums.updateOne({_id: song.albumId}, {$pull: {songs: new ObjectId(id)}});

                if (!deleteSongInAlbum.acknowledged || deleteSongInAlbum.matchedCount !== 1) {
                    throw new GraphQLError(`Could not Remove Song in Album`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }

                const deletedInfo = await songs.findOneAndDelete({_id: new ObjectId(id)});

                if (!deletedInfo) {
                    throw new GraphQLError(`Could not Remove Song`, {
                        extensions: {code: 'INTERNAL_SERVER_ERROR'}
                    });
                }
                const albumId = song.albumId.toString();
                await client.json.del(`song-${id}`);
                await client.json.del(`album-${albumId}`);
                await client.json.del(`song-album-${albumId}`);
                await client.json.del(`song-${song.title}`);
                await client.json.del('Allalbums');
                return deletedInfo;
            }
    }
}