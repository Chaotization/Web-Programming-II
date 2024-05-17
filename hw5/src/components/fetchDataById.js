import axios from "axios";

const FetchDataById = async (endpoint, id) => {
    try {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/${endpoint}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching data for ${endpoint} ID ${id}:`, error);
        return null;
    }
};

export default FetchDataById;
