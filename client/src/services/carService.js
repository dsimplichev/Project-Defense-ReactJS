const baseUrl = 'http://localhost:3030/jsonstore'
export const create = async (carData) => {
   const response = await fetch(`${baseUrl}/used-cars`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
            
         },
         body:JSON.stringify(carData)
    });

    const result = await response.json();

    return result;
}