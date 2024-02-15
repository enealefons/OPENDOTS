
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for user dot creation - in a real scenario, this could be dynamic
    const usersContainer = document.getElementById('usersContainer');
    const userDot = document.createElement('div');
    userDot.className = 'user-dot';
    usersContainer.appendChild(userDot);

    // Push-to-talk functionality
    document.addEventListener('keydown', (event) => {
        if (event.key === " "){ // Space bar for push-to-talk
            console.log('Push-to-Talk Activated');
            // Here you would activate the microphone
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === " "){
            console.log('Push-to-Talk Deactivated');
            // Here you would deactivate the microphone
        }
    });
});
