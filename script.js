// Global variable to store songs
const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        url: 'https://example.com/song1.mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        url: 'https://example.com/song2.mp3'
    }
];

function displaySongs() {
    const songsContainer = document.getElementById("songs-container");
    songsContainer.innerHTML = "";
    songs.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.className = "song";
        songDiv.innerHTML = `<h3>${song.title}</h3>
                             <p>${song.artist}</p>
                             <audio controls>
                                 <source src="${song.url}" type="audio/mp3">
                                 Your browser does not support the audio element.
                             </audio>
                             <button onclick="downloadSong('${song.url}')">Download</button>`;
        songsContainer.appendChild(songDiv);
    });
}

function downloadSong(url) {
    // Simulate the download process (open in a new tab/window)
    window.open(url, '_blank');
}

// Initial display
displaySongs();
