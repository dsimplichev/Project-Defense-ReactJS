import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/used-cars'

export const getAll = async () => {
  const result= await request('GET', baseUrl);

  
  return Object.values(result);
};


export const create = async (carData) => {
    const result = await request('POST', baseUrl, carData);
    
    return result;
}