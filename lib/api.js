import axios from "axios";


export const sendContactForm = async (data) => {
    try {
        const response = await axios.post('/api/contact', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        throw new Error('Something went wrong');
    }
}