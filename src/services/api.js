const getDataApi = () => {
    return fetch('')
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};
export default getDataApi;