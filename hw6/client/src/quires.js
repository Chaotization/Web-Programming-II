import {gql} from '@apollo/client'

const Get_Artists = gql`
    query  {
        artists {
            _id
            name
            numOfAlbums
            members
            dateFormed
        }
    }`;

const Edit_Artist = gql`
        mutation EditArtist(
        $id: String!
        $name: String 
        $dateFormed: Date
        $members: [String!]
        ){
            editArtist(
                _id: $id
                name: $name
                dateFormed: $dateFormed
                members: $members
            ) {
                _id
                name
                dateFormed
                members
                numOfAlbums
            }
        }`;


const Remove_Artist = gql`
    mutation RemoveArtist($id: String!){
        removeArtist(_id: $id){
            _id
            name
            members
            numOfAlbums
        }
    }`;

const Add_Artist = gql`
    mutation AddArtist(
        $name: String!, 
        $dateFormed: Date!, 
        $members: [String!]!){
            addArtist(
                name: $name, 
                dateFormed: $dateFormed, 
                members: $members
            ){
                _id
                name
                dateFormed
                members
                numOfAlbums
            }
    }`;

const Get_Artist_By_Id = gql`
    query GetArtistById($id: String!){
        getArtistById(_id: $id){
            _id
            name
            dateFormed
            members
            albums{
                _id
                title
                releaseDate
                genre
            }
            numOfAlbums
        }
    }`;

const Get_Albums = gql`
query Query {
    albums {
        _id
        genre
        releaseDate
        title

    }
}`;

const Edit_Album = gql` 
        mutation EditAlbum(
            $id: String!
            $title: String,
            $releaseDate: Date
            $genre: MusicGenre
            $artistId: String
            $companyId: String
        ){
            editAlbum(
                _id: $id, 
                title: $title, 
                releaseDate: $releaseDate, 
                genre: $genre, 
                artistId: $artistId, 
                companyId: $companyId
            ) {
                _id
                title
                releaseDate
                genre
                artist{
                    _id
                    name
                    dateFormed
                }
                recordCompany{
                    _id
                    name
                    foundedYear
                }
                songs{
                    _id
                    title
                    duration
                }
            }
        }`;

const Remove_Album = gql`
    mutation RemoveAlbum($id: String!){
        removeAlbum(_id: $id) {
            _id            
            title
            genre
            artist{
                _id
                name
            }
        }
    }`;

const Get_Album_By_Id = gql`
    query GetAlbumById($id: String!){
        getAlbumById(_id: $id){
            _id
            title
            releaseDate
            genre
            artist{
                _id
                name
                dateFormed
            }
            recordCompany{
                _id
                name
                foundedYear
            }
            songs{
                _id
                title
                duration
            } 
        }
    }`;
const Add_Album = gql`
    mutation AddAlbum(
        $title: String!
        $releaseDate: Date!
        $genre: MusicGenre! 
        $artistId: String!
        $companyId: String!
    ){
        addAlbum(
            title: $title
            releaseDate: $releaseDate
            genre: $genre
            artistId: $artistId
            companyId: $companyId
        ){
            _id
            title
            releaseDate
            genre
            artist{
                _id
                name
                dateFormed
            }
            recordCompany{
                _id
                name
            }
        }
    }`;

const Get_Companies = gql`
    query RecordCompanies {
        recordCompanies {
            _id
            numOfAlbums
            name
            foundedYear
            country
            albums {
                _id
                title
                genre
                releaseDate
            }
        }
    }`;

const Edit_Company = gql`
        mutation EditCompany(
            $id: String!
            $name: String 
            $foundedYear: Int
            $country: String
        ){
            editCompany(
                _id: $id
                name: $name
                foundedYear: $foundedYear
                country: $country
            ) {
                _id
                name
                foundedYear
                country
                albums{
                    _id
                    title
                    releaseDate
                    genre
                }
                numOfAlbums
            }
        }`;

const Remove_Company = gql`
    mutation RemoveCompany($id: String!){
        removeCompany(_id: $id){
            _id
            name
            foundedYear
            country
            albums{
                _id
                title
            }
            numOfAlbums
        }
    }`;

const Add_Company = gql`
    mutation AddCompany(
        $name: String!
        $foundedYear: Int!
        $country: String!
    ){
        addCompany(
            name: $name
            foundedYear: $foundedYear
            country: $country
        ){
            _id
            name
            foundedYear
            country
            albums{
                _id
                title
            }
            numOfAlbums
        }
    }`;

const Get_Company_By_Id = gql`
    query GetCompanyById($id: String!){
        getCompanyById(_id: $id){
            _id
            albums{
                _id
                title
                releaseDate
                genre
            }
            country
            foundedYear
            name
            numOfAlbums
        }
    }`;

const Get_Songs_By_Artist_Id = gql`
     query ($artistId: String!) {
        getSongsByArtistId(artistId: $artistId) {
            _id
            albumId {
                _id
                title
                genre
                releaseDate
            }
          duration
          title
        }
    }`;

const Get_Songs_By_Album_Id = gql`
    query GetSongsByAlbumId($id: String!) {
        getSongsByAlbumId(_id: $id) {
            _id
            albumId {
              title
              releaseDate
              genre
              _id
            }
            duration
            title
        }
    }`;

const Get_Song_By_Id = gql`
    query GetSongById($id: String!) {
        getSongById(_id: $id) {
            _id
            duration
            title
            albumId {
                _id
                genre
                recordCompany {
                    _id
                    name
                    country
                }
                artist {
                    _id
                    name
                    dateFormed
                    members
                  }
            }
        }
    }`;

const Album_By_Genre = gql`
    query AlbumsByGenre($genre: MusicGenre!) {
        albumsByGenre(genre: $genre) {
            _id
            title
            artist {
                _id
                name
                numOfAlbums
                dateFormed
            }
            genre
            recordCompany {
                _id
                name
                country
                foundedYear
                numOfAlbums
            }
            releaseDate
            songs {
                duration
                title
                _id
            }
        }
    }`;

const Company_Founded_By_Year = gql`
    query CompanyByFoundedYear($min: Int!, $max: Int!) {
        companyByFoundedYear(min: $min, max: $max) {
            _id
            albums {
                _id
                title
                genre
                releaseDate
                artist {
                    _id
                    name
                    members
                    dateFormed
                    numOfAlbums
                }
            }
            country
            foundedYear
            name
            numOfAlbums
        }
    }`;

const Search_Artist_By_Artist_Name = gql`
    query SearchArtistByArtistName($searchTerm: String!) {
        searchArtistByArtistName(searchTerm: $searchTerm) {
            _id
            albums {
                _id
                title
                genre
                releaseDate
            }
            dateFormed
            members
            name
            numOfAlbums
        }
    }`;

const Add_Song = gql`
    mutation Mutation($title: String!, $duration: String!, $albumId: String!) {
        addSong(title: $title, duration: $duration, albumId: $albumId) {
            _id
            albumId {
                _id
                genre
                title
                releaseDate
                artist {
                    _id
                    name
                    dateFormed
                    members
                    numOfAlbums
                }
                recordCompany {
                    _id
                    country
                    foundedYear
                    name
                    numOfAlbums
                }
            }
            duration
            title
        }
    }`;

const Edit_Song = gql`
    mutation EditSong($id: String!, $title: String, $duration: String, $albumId: String) {
        editSong(_id: $id, title: $title, duration: $duration, albumId: $albumId) {
            _id
            albumId {
                _id
                title
                genre
                releaseDate
                artist {
                    _id
                    dateFormed
                    name
                    members
                    numOfAlbums
                }
                recordCompany {
                    _id
                    name
                    country
                    foundedYear
                    numOfAlbums
                }
                songs {
                    _id
                    title
                    duration
                }
            }
            duration
            title
        }
    }`;

const Remove_Song = gql`
    mutation RemoveSong($id: String!) {
        removeSong(_id: $id) {
            _id
            duration
            title
            albumId {
                _id
                releaseDate
                title
            }
        }
    }`;

const Search_Song_By_Title = gql`
    query Query($searchTitleTerm: String!) {
        searchSongByTitle(searchTitleTerm: $searchTitleTerm) {
            _id
            duration
            title
            albumId {
              _id
              title
              releaseDate
              genre
            }
        }
    }`;

let queries = {
    Get_Artists,
    Edit_Artist,
    Remove_Artist,
    Add_Artist,
    Get_Artist_By_Id,
    Get_Albums,
    Edit_Album,
    Remove_Album,
    Add_Album,
    Get_Album_By_Id,
    Get_Companies,
    Edit_Company,
    Add_Company,
    Remove_Company,
    Get_Company_By_Id,
    Get_Songs_By_Album_Id,
    Get_Songs_By_Artist_Id,
    Album_By_Genre,
    Company_Founded_By_Year,
    Search_Artist_By_Artist_Name,
    Add_Song,
    Edit_Song,
    Remove_Song,
    Search_Song_By_Title,
    Get_Song_By_Id
};


export default queries;