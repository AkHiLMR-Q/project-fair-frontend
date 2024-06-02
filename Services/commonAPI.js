//API CALLING

import axios from 'axios'

export const commonAPI=async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{
            "content-type":'application/json'
        }
    }

return await axios(reqConfig).then((response)=>{
    return response
})
.catch((error)=>{
    return error
})

}

// try {
//     const response = await axios(reqConfig);
//     return response.data;
// } catch (error) {
//     throw error;
// }