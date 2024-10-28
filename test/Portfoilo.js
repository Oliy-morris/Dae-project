document.addEventListener('DOMContentLoaded', (event) => {
    // Existing setup for greeting, profile, and dropdown
    alert('Hello, Welcome to Ollie\'s Archives');

    const greetingElement = document.getElementById('greetingMessage');
    if (greetingElement) {
        greetingElement.textContent = 'Hello, Welcome to Ollie\'s Archives!';
    }

    const navLinks = ['Home', 'Experiences and Expressions', 'Contact'];
    console.log('Navigation Links:', navLinks);

    const userProfile = {
        username: 'Ollie',
        email: 'loganllama15@gmail.com',
        isLoggedIn: true,
        profilePicture: 'rose-1.jpg',
        favoriteItems: ['Painting', 'Drawing', 'Writing', 'Poetry'],
    };
    console.log('User Profile:', userProfile);

    const profilePictureElement = document.getElementById('profilePicture');
    if (profilePictureElement) {
        profilePictureElement.src = userProfile.profilePicture;
    }

    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        usernameElement.textContent = `Username: ${userProfile.username}`;
    }

    const emailElement = document.getElementById('email');
    if (emailElement) {
        emailElement.textContent = `Email: ${userProfile.email}`;
    }

    const favoriteItemsElement = document.getElementById('favoriteItems');
    if (favoriteItemsElement) {
        favoriteItemsElement.textContent = `Favorite Items: ${userProfile.favoriteItems.join(', ')}`;
    }

    console.log('User Profile:', userProfile);
    const totalFavoriteItems = userProfile.favoriteItems.length;
    const additionalItems = 5;
    const totalItems = totalFavoriteItems + additionalItems;

    const totalItemsElement = document.createElement('p');
    totalItemsElement.id = 'totalItems';
    totalItemsElement.textContent = `Total Items: ${totalItems}`;
    document.body.appendChild(totalItemsElement);

    const averageFavoriteItems = totalItems / 2; // Example divisor
    console.log('Average Favorite Items:', averageFavoriteItems);

    const averageItemsElement = document.createElement('p');
    averageItemsElement.id = 'averageItems';
    averageItemsElement.textContent = `Average favorite items: ${averageFavoriteItems}`;
    document.body.appendChild(averageItemsElement);

    // Handle profile button and dropdown
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileButton && profileDropdown) {
        profileButton.addEventListener('click', () => {
            profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
                profileDropdown.style.display = 'none';
            }
        });
    }

    // Handle page title
    const pageTitle = document.querySelector('h2');
    if (pageTitle) {
        switch (document.title) {
            case 'Home - Ollie\'s Archives':
                pageTitle.textContent = 'Home Page Content';
                break;
            case 'Experience\'s and Expression\'s - Ollie\'s Archives':
                pageTitle.textContent = 'Experience\'s and Expression\'s Content';
                break;
            case 'Contact - Ollie\'s Archives':
                pageTitle.textContent = 'Contact Page Content';
                break;
            default:
                pageTitle.textContent = 'Welcome to Ollie\'s Archives';
                break;
        }
    }

    // Removed gallery image click handling for enlargement
    // document.querySelectorAll('.gallery img').forEach(img => {
    //     img.addEventListener('click', () => {
    //         if (img.classList.contains('enlarged')) {
    //             img.classList.remove('enlarged');
    //             img.style.maxWidth = "100%";
    //         } else {
    //             document.querySelectorAll('.gallery img').forEach(img => {
    //                 img.classList.remove('enlarged');
    //                 img.style.maxWidth = "100%";
    //             });
    //             img.classList.add('enlarged');
    //             img.style.maxWidth = "80%"; // Adjust as needed
    //         }
    //     });

        // New JavaScript for gallery thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail img');
        const mainImage = document.getElementById('mainImage');
    
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                // Add active class to the clicked thumbnail
                thumbnail.classList.add('active');
                // Change the main image source to the clicked thumbnail's source
                mainImage.src = thumbnail.src;
            });
        });
    
        // Optionally set the first thumbnail as active on load
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
            mainImage.src = thumbnails[0].src;
        }

     // Setup each gallery by calling the function with appropriate selectors
     setupGallery('mainImage1', '.gallery-container:nth-of-type(1) .thumbnail img');
    });