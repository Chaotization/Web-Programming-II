export const checkString = (id) => {
    if (typeof id !== 'string') {
        throw "Error: Must provide a string id";
    }
    if (id.trim().length === 0) {
        throw "Error: Must provide a non-empty string";
    }
    return id;
};