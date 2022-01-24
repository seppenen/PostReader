 //Filtering posts by value
export const processRows = (data, id = '', userName = '') => {
    if (typeof data !== 'undefined') {
        if (id) {
            return data.filter(post => {
                return post.from_id
                    .includes(id)
            })
        } else if (userName) {
            return data.filter(post => {
                return post.message.toLowerCase()
                    .includes(userName.toLowerCase())
            })
        }
        else if (userName == null || userName.length === 0) {
            return data
        }
    }
}
// Removing duplicates
export const distinct = (obj) => {
    return obj.filter((value, index, self) => index === self
        .findIndex((row) => (row.from_name === value.from_name)))
}
// Sorting object
export const sortArray = (mode, obj ) => {
    switch (mode) {
        case 'nameASC':
            return obj.sort((a, b) => {
                if (a["from_name"] < b["from_name"]) {
                    return -1;
                }
            });
        case 'ASC':
            return obj.sort((a, b) => {
                return new Date(b.created_time) - new Date(a.created_time);
            });
        case 'DESC':
            return obj.sort((a, b) => {
                return new Date(a.created_time) - new Date(b.created_time);

            });
    }
}
export const totalCount = (data, from_id) => {
    return processRows(data,from_id, null)
}
export const updateList = (data, userName) => {
    return processRows(data, null, userName)
}


