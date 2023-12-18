import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/comments'

export const create = async (carId, username, text) => {
   const newComment = await request.post(baseUrl, {
    carId,
    username,
    text,
   })
   return newComment;

}


