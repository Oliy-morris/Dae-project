// UserProfile class definition
class UserProfile {
    constructor(username, email, profilePicture, favoriteItems) {
        this.username = username;
        this.email = email;
        this.isLoggedIn = true; // Default value
        this.profilePicture = profilePicture;
        this.favoriteItems = favoriteItems || [];
    }

    // Method to add a favorite item
    addFavoriteItem(item) {
        if (!this.favoriteItems.includes(item)) {
            this.favoriteItems.push(item);
            console.log(`${item} added to favorites.`);
        } else {
            console.log(`${item} is already a favorite.`);
        }
    }

    // Method to remove a favorite item
    removeFavoriteItem(item) {
        const index = this.favoriteItems.indexOf(item);
        if (index !== -1) {
            this.favoriteItems.splice(index, 1);
            console.log(`${item} removed from favorites.`);
        } else {
            console.log(`${item} is not in favorites.`);
        }
    }




    // Method to calculate total favorite items
    calculateTotalItems(additionalItems) {
        return this.favoriteItems.length + additionalItems;
    }
}
// UserManager module definition
const UserManager = (() => {
    const users = [];

    return {
        addUser(userProfile) {
            users.push(userProfile);
            console.log(`User added: ${userProfile.username}`);
        },
        getUserByEmail(email) {
            return users.find(user => user.email === email);
        },
        removeUser(email) {
            const index = users.findIndex(user => user.email === email);
            if (index !== -1) {
                users.splice(index, 1);
                console.log(`User removed: ${email}`);
            } else {
                console.log(`User not found: ${email}`);
            }
        },
        getAllUsers() {
            return users;
        }
    };
})();

// Main script logic
document.addEventListener('DOMContentLoaded', (event) => {
    // Define maximum users constant
    const MAX_USERS = 100;

    // Existing setup for greeting, profile, and dropdown
    alert('Hello, Welcome to Ollie\'s Archives');

    const greetingElement = document.getElementById('greetingMessage');
    if (greetingElement) {
        greetingElement.textContent = 'Hello, Welcome to Ollie\'s Archives!';
    }

    // Instantiate the UserProfile class
    const userProfile = new UserProfile(
        'Ollie',
        'loganllama15@gmail.com',
        'rose-1.jpg',
        ['Painting', 'Drawing', 'Writing', 'Poetry']
    );

    // Add user to UserManager
    UserManager.addUser(userProfile);

    console.log('Max Users Allowed:', MAX_USERS); // Example use of MAX_USERS for debugging or display

    const profilePictureElement = document.getElementById('profilePicture');
    if (profilePictureElement) {
        profilePictureElement.src = userProfile.profilePicture;

        const totalFavoriteItems = userProfile.favoriteItems.length;
        const additionalItems = 5;
        const totalItems = userProfile.calculateTotalItems(additionalItems);

        console.log('Total Items:', totalItems); // Returns and logs the result

        // Create or update total items element
        let totalItemsElement = document.getElementById('totalItems');
        if (!totalItemsElement) {
            // If the element doesn't exist, create it
            totalItemsElement = document.createElement('p');
            totalItemsElement.id = 'totalItems';
            document.body.appendChild(totalItemsElement);
        }
        totalItemsElement.textContent = `Total Items: ${totalItems}`;
    }

    if (profilePictureElement) {
        profilePictureElement.addEventListener('mouseover', () => {
            profilePictureElement.style.border = '2px solid blue'; // Example action
        });
        profilePictureElement.addEventListener('mouseout', () => {
            profilePictureElement.style.border = ''; // Removes the border
        });
    } else {
        console.error('Element with ID "profilePicture" not found.');
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

    const categories = ['Painting', 'Drawing', 'Sculpture']; // Example categories
    const accessedItems = []; // Array to store accessed items
    const usedItems = []; // Array to store used items

    userProfile.favoriteItems.forEach((item) => {
        console.log(`Accessed Item: ${item}`); // Access the item
        if (categories.includes(item)) {
            usedItems.push(item); // Store the item in usedItems if it meets the condition
            console.log(`Used Item: ${item}`); // Log the used item
        } else {
            accessedItems.push(item); // Store the item in accessedItems if it does not meet the condition
            console.log(`Ignored Item: ${item}`); // Log ignored item
        }
    });

    console.log('Accessed Items:', accessedItems);
    console.log('Used Items:', usedItems);

    // Calculate and display average favorite items
    const averageFavoriteItems = totalItems / 2; // Example divisor
    console.log('Average Favorite Items:', averageFavoriteItems);

    const averageItemsElement = document.createElement('p');
    averageItemsElement.id = 'averageItems';
    averageItemsElement.textContent = `Average favorite items: ${averageFavoriteItems}`;
    document.body.appendChild(averageItemsElement);

    // Update Profile Picture Function
    function updateProfilePicture(imageSrc) {
        const profilePictureElement = document.getElementById('profilePicture');
        if (profilePictureElement) {
            profilePictureElement.src = imageSrc;
            return `Profile picture updated to ${imageSrc}`;
        } else {
            return 'Profile picture element not found.';
        }
    }

    // Example usage
    const updateMessage = updateProfilePicture('new-image.jpg');
    console.log(updateMessage); // Output: 'Profile picture updated to new-image.jpg'

    // Handle update profile button click
    const updateProfileButton = document.getElementById('updateProfileButton');
    if (updateProfileButton) {
        updateProfileButton.addEventListener('click', () => {
            const newImageSrc = 'new-image.jpg'; // Replace this with the desired image source
            const updateMessage = updateProfilePicture(newImageSrc);
            console.log(updateMessage); // Log the message to the console
        });
    } else {
        console.error('Update Profile Button not found.');
    }

    // Define profileButton and profileDropdown
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
    } else {
        console.error('Profile button or dropdown not found.');
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

    // Set timeout for image loading or other actions
    const imageLoadingTimeout = setTimeout(() => {
        console.log('Image loading completed.');
    }, 3000); // Timeout for 3 seconds
});

// Blog Logic
const posts = [
    { title: "My First Blog Post", content: "Welcome to my blog!", date: "2024-11-18" },
    { title: "Another Day", content: "Reflections on creativity.", date: "2024-11-19" },
];

const blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p><small>${post.date}</small></p>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postDiv);
    });
 // Blog Logic
const posts = [
    { title: "My First Blog Post", content: "Welcome to my blog!", date: "2024-11-18" },
    { title: "Another Day", content: "Reflections on creativity.", date: "2024-11-19" },
];

const blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p><small>${post.date}</small></p>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postDiv);
    });
} else {
    console.error('Blog container element with ID "blog-container" not found.');
}
}