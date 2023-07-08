export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '81b4a225b9msh47e6d4f147d3fc2p177408jsn80bd9a6c5bce',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers : headers,
    })

    const result = await response.json();
    return result;
    
}