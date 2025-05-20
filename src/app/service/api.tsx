import axios from 'axios'

const API_URL = 'http://localhost:5000'

export const GET_HIRE_DETAILS = async () => {
    try{
        const response = await axios.get(`${API_URL}/api/company`)
        return response.data
    }
    catch(err : any){
        console.log(err.message)
    }
}
