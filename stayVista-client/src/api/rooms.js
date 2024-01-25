import axiosSecure from "."

// fetch all room data from database
export const getAllRooms = async () => {
    const {data} = await axiosSecure('/rooms')

    return data;
}

//  fetch single room data from database
export const getRoom = async (id) => {
    const {data} = await axiosSecure(`/room/${id}`)

    return data;
}