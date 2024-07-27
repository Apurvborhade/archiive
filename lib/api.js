export const sendContactForm = async (data) => {
    const response = await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
    })
    if (!response.ok) {
        const error = await response.json();
        console.log(error)
        throw new Error(error.message || 'Something went wrong');
    }
    
    return response.json();
}