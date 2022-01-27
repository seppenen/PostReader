 //Process object filters
export const processRows = (data, id , userName, content ) => {
    if (typeof data !== 'undefined') {
        if (id) {
            return data.filter(post => {
                return post.from_id
                    .includes(id)
            })
        } else if (content) {
            return data.filter(post => {
                return post.message.toLowerCase()
                    .includes(content.toLowerCase())
            })
        }
        else if (userName) {
            return data.filter(post => {
                return post.from_name.toLowerCase()
                    .includes(userName.toLowerCase())
            })
        }
        else if (userName == null || userName.length === 0) {
            return data
        }
    }
}
// Removes duplicates
export const distinct = (obj) => {
    //Compare index of both objects and return if true.
    return obj.filter((value, index, self) => index === self
        .findIndex((row) => (row.from_name === value.from_name)))
}
// Sort object A-Z Z-A
export const sortArray = (mode, obj ) => {
    switch (mode) {
        case 'ASC':
            return obj.sort((a, b) => {
                return new Date(b.created_time) - new Date(a.created_time);
            });
        case 'DESC':
            return obj.sort((a, b) => {
                return new Date(a.created_time) - new Date(b.created_time);
            });
        default:
            return  obj.sort((a, b) => a.from_name > b.from_name)
    }
}
export const totalCount = (data, from_id) => {
    return processRows(data,from_id, null, null).length
}
export const updateUserList = (data, userName) => {
    return processRows(data, null, userName, null)
}
 export const updatePostList = (data, content) => {
     return processRows(data, null,null, content)
 }


