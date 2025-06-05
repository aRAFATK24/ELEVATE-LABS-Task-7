
async function fetchUserData() {
    const userContainer = document.getElementById('userContainer');
    
    try {
      
        userContainer.innerHTML = '<p>Loading user data...</p>';
        
       
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
       
        const users = await response.json();
        
        
        displayUserData(users);
    } catch (error) {
        // Handle errors
        userContainer.innerHTML = `<p class="error">Failed to load user data: ${error.message}</p>`;
        console.error('Error fetching user data:', error);
    }
}


function displayUserData(users) {
    const userContainer = document.getElementById('userContainer');
    
    if (users.length === 0) {
        userContainer.innerHTML = '<p>No user data available.</p>';
        return;
    }
    
    
    const userHTML = users.map(user => `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
        </div>
    `).join('');
    
    userContainer.innerHTML = userHTML;
}


document.getElementById('reloadBtn').addEventListener('click', fetchUserData);


document.addEventListener('DOMContentLoaded', fetchUserData);
