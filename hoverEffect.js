// JavaScript Document// Select all the elements with the class 'socialNetworkNav'
// Select all the images with the class 'socialImage'
const socialImages = document.querySelectorAll('.socialImage');

// Function to add hover effect for image swapping
function addHoverEffect() {
    socialImages.forEach(img => {
        // Add 'mouseenter' event listener to change image on hover
        img.addEventListener('mouseenter', () => {
            // Change the image source to the hover image
            img.src = img.getAttribute('data-hover');
        });

        // Add 'mouseleave' event listener to revert image on mouse leave
        img.addEventListener('mouseleave', () => {
            // Revert the image source back to the original image
            img.src = img.getAttribute('data-original');
        });
    });
}

// Call the function to apply hover effect to all social images
addHoverEffect();


