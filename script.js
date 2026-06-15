// 1. Live Ambient Sound Mixer Controller
function updateVolume(type) {
    const audio = document.getElementById(`audio-${type}`);
    const slider = document.getElementById(`${type}-vol`);
    
    audio.volume = slider.value;
    
    // വോളിയം 0-ൽ കൂടുതൽ ആണെങ്കിൽ പ്ലേ ചെയ്യുക, ഇല്ലെങ്കിൽ പോസ് ചെയ്യുക
    if (slider.value > 0) {
        if (audio.paused) {
            audio.play().catch(err => console.log("Audio play gesture required"));
        }
    } else {
        audio.pause();
    }
}

// 2. Pomodoro Focus Timer Logic
let timerInterval = null;
let timeLeft = 25 * 60; // 25 മിനിറ്റ് സെക്കൻഡിൽ

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

// 3. LocalStorage Diary Saver
function saveNote() {
    const text = document.getElementById('diary-input').value;
    localStorage.setItem('orbit_capsule_note', text);
    
    const status = document.getElementById('save-status');
    status.innerText = "Saving...";
    setTimeout(() => {
        status.innerText = "Saved locally ✓";
    }, 500);
}

// പേജ് ലോഡ് ആകുമ്പോൾ പഴയ നോട്ട് തിരികെ എടുക്കാൻ
window.onload = () => {
    const savedNote = localStorage.getItem('orbit_capsule_note');
    if (savedNote) {
        document.getElementById('diary-input').value = savedNote;
    }
};
