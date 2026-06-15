// വിൻഡോ ലോഡ് ആകുമ്പോൾ വീഡിയോ സ്പീഡ് പകുതിയാക്കുന്നു (Slow-motion Effect)
window.onload = () => {
    const video = document.getElementById('bgVideo');
    if (video) {
        video.playbackRate = 0.5; // സാധാരണ സ്പീഡിന്റെ പകുതി (0.5x Slow-mo)
    }

    // പഴയ നോട്ട് ലോക്കൽ സ്റ്റോറേജിൽ നിന്ന് എടുക്കാൻ
    const savedNote = localStorage.getItem('orbit_capsule_note');
    if (savedNote) {
        document.getElementById('diary-input').value = savedNote;
    }
};

// Ambient Sound Mixer
function updateVolume(type) {
    const audio = document.getElementById(`audio-${type}`);
    const slider = document.getElementById(`${type}-vol`);
    
    audio.volume = slider.value;
    
    if (slider.value > 0) {
        if (audio.paused) {
            audio.play().catch(err => console.log("Audio play gesture required"));
        }
    } else {
        audio.pause();
    }
}

// Pomodoro Focus Timer
let timerInterval = null;
let timeLeft = 25 * 60; 

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function toggleTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    } else {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert("Time's up! Take a short break.");
                timeLeft = 25 * 60;
                updateTimerDisplay();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

// LocalStorage Diary Saver
function saveNote() {
    const text = document.getElementById('diary-input').value;
    localStorage.setItem('orbit_capsule_note', text);
    
    const status = document.getElementById('save-status');
    status.innerText = "Saving...";
    setTimeout(() => {
        status.innerText = "Saved locally ✓";
    }, 500);
}
