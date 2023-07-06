const getDataApi = (abc) => {
    return fetch(abc)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};
export default getDataApi;