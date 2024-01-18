import { apiGet } from '../../_helpers';

// logic configuration
const config = {
    URL: "http://localhost:4000/stores"
};

// call API to load store data
const fetchStores = async () => {
    const { data, error } = await apiGet<any>(config.URL);
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Fetched data:', data);
    }
    return data;
};

export const listLogic = {
    fetchStores
};