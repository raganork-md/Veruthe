// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
    });
});

// Modal Controls
function openModal() {
    document.getElementById('avatarModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('avatarModal').style.display = 'none';
}

function selectClass(className) {
    alert(`Awesome! You selected the ${className} class. Your journey begins!`);
    closeModal();
}

// Tab Switching System (ഡൈനാമിക് കണ്ടന്റ് മാറ്റാൻ)
function switchTab(tabName) {
    const contentArea = document.getElementById('content-area');
    
    // ആക്ടീവ് സ്റ്റേറ്റ് മാറ്റാൻ
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    
    if (tabName === 'anime') {
        contentArea.innerHTML = `
            <div class="content-page">
                <h2>⚔️ Featured Anime Heroes</h2>
                <p>Explore the strongest warriors in the universe. Updated daily from the latest shards of reality.</p>
                <ul style="margin-top:15px; list-style:none; line-height:2;">
                    <li>• <strong>Goku</strong> - Universe 7's mightiest Saiyan.</li>
                    <li>• <strong>Naruto Uzumaki</strong> - The Seventh Hokage.</li>
                    <li>• <strong>Luffy</strong> - King of the Pirates.</li>
                </ul>
            </div>`;
    } else if (tabName === 'games') {
        contentArea.innerHTML = `
            <div class="content-page">
                <h2>🎮 Active Game Quests</h2>
                <p>Embark on dynamic missions and claim your legendary ranking rewards.</p>
                <ul style="margin-top:15px; list-style:none; line-height:2;">
                    <li>• <strong>Quest #1:</strong> Defeat the Phantom Shogun (RPG Track)</li>
                    <li>• <strong>Quest #2:</strong> Achieve Grandmaster in Ranked Matches</li>
                </ul>
            </div>`;
    } else if (tabName === 'latest') {
        contentArea.innerHTML = `
            <div class="content-page">
                <h2>📢 Latest & Upcoming Releases</h2>
                <p>Stay updated with the freshest seasonal drops and upcoming events across the globe.</p>
                <ul style="margin-top:15px; list-style:none; line-height:2;">
                    <li>• <strong>July 2026:</strong> Cyber Nexus - Open Beta Launch</li>
                    <li>• <strong>August 2026:</strong> Shinobi Chronicles - Season 4 Premiere</li>
                </ul>
            </div>`;
    }
}
