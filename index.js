// Get the menu button, menu container, and message element
const menuButton = document.getElementById('menu-button');
const menuContainer = document.querySelector('.menu-container');
const messageElement = document.querySelector('.message');

// Add event listener for the menu button click
menuButton.addEventListener('click', () => {
    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('see');
    
    // Toggle the 'fade' class on the message element to change its opacity
    messageElement.classList.toggle('fade');
});
