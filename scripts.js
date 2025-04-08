// Function to handle play and stop of sound on character click
function toggleSound(characterId) {
    const audio = document.getElementById(`audio${characterId}`);
    
    if (audio.paused) {
        audio.play();  // Play the audio
    } else {
        audio.pause();  // Pause the audio
        audio.currentTime = 0;  // Reset the audio to the beginning
    }
}

// Add event listeners to each character
document.getElementById('char1').addEventListener('click', () => toggleSound(1));
document.getElementById('char2').addEventListener('click', () => toggleSound(2));
document.getElementById('char3').addEventListener('click', () => toggleSound(3));
document.getElementById('char4').addEventListener('click', () => toggleSound(4));
document.getElementById('char5').addEventListener('click', () => toggleSound(5));
document.getElementById('char6').addEventListener('click', () => toggleSound(6));