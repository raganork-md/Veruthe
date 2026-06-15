// 1. Live Hacker Clock Engine
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('cyber-clock').innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// 2. Automated Terminal Activity Spammer
const logs = [
    ">> Fetching protocol sync data packet...",
    ">> Port 8080 handshake successfully cleared.",
    ">> Syncing local mainframe credentials...",
    ">> Warning: Blocked minor connection ping from anonymous port.",
    ">> Automated backup sequence finalized.",
    ">> Core temperature steady at 38°C.",
    ">> Active proxy routing configuration initialized."
];

function appendTerminalLog() {
    const terminal = document.getElementById('terminal-body');
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    
    terminal.innerHTML += `${randomLog}<br>`;
    
    // ഓട്ടോമാറ്റിക്കായി താഴേക്ക് സ്ക്രോൾ ചെയ്യാൻ
    terminal.scrollTop = terminal.scrollHeight;

    // ടെർമിനൽ ഒരുപാട് വലുതാവാതിരിക്കാൻ ഒരു ക്ലീനപ്പ്
    if (terminal.innerHTML.split('<br>').length > 12) {
        terminal.innerHTML = terminal.innerHTML.split('<br>').slice(2).join('<br>');
    }
}
setInterval(appendTerminalLog, 2500);

// 3. Fake Live Hardware Diagnostics Updates
setInterval(() => {
    const cpuVal = Math.floor(Math.random() * (75 - 25) + 25);
    const ramVal = Math.floor(Math.random() * (90 - 50) + 50);

    document.getElementById('cpu-bar').style.width = cpuVal + '%';
    document.getElementById('cpu-text').innerText = cpuVal + '%';

    document.getElementById('ram-bar').style.width = ramVal + '%';
    document.getElementById('ram-text').innerText = ramVal + '%';
}, 2000);

// 4. Test Trigger Event Alert Popup Box
function triggerBreachAlert() {
    alert(">> DIAGNOSTIC REPORT: Core integrity check 100% operational. Zero system errors found.");
        }
