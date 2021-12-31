export const userIdQuery = (userId) => {
    const query = `*[_type=="user" && _id=='${userId}']`

    return query
}