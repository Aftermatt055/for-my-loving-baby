const gifUrls = [
    'https://media.giphy.com/media/DKZE9aH0EBJVUHkruS/giphy.gif?cid=ecf05e47xi5qirkyakzlmy86hn5q8hh6l34fiaipmhw6bxjm&ep=v1_gifs_related&rid=giphy.gif&ct=g', // heart eyes cat
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHFxbHpqd2FuMHM2ZjZyaWExOHphcHZxaWtubjNlYTgwcjFhN3VmYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1JmGiBtqTuehfYxuy9/giphy.gif', // floating hearts
    'https://media.giphy.com/media/PDKhKYQZsh97tPVUxj/giphy.gif?cid=790b7611lqqlzjwan0s6f6ria18zapvqiknn3ea80r1a7ufb&ep=v1_gifs_search&rid=giphy.gif&ct=g', // love hearts
    // Add more GIF URLs as needed
];

function createGifSticker() {
    const gif = document.createElement('img');
    gif.className = 'gif-sticker';
    gif.src = gifUrls[Math.floor(Math.random() * gifUrls.length)];
    
    // Random position
    gif.style.left = Math.random() * (window.innerWidth - 150) + 'px';
    gif.style.top = Math.random() * (window.innerHeight - 150) + 'px';
    
    document.body.appendChild(gif);
    
    // Remove the GIF after animation
    setTimeout(() => {
        gif.remove();
    }, 3000);
}

function startGifCelebration() {
    // Create new GIF every 300ms
    const interval = setInterval(() => {
        createGifSticker();
    }, 300);
    
    // Stop creating GIFs after 5 seconds
    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}

// Add this to your existing yes button click handler
document.querySelector('.yes-btn').addEventListener('click', () => {
    startGifCelebration();
    // ... your existing yes button click handling code ...
}); 