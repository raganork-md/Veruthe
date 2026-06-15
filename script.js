// മൗസ് മൂവ്മെന്റ് അനുസരിച്ച് ബാക്ക്ഗ്രൗണ്ട് ലെയറുകൾ ചലിപ്പിക്കുന്ന ലോജിക്
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    
    // മൗസിന്റെ സ്ക്രീനിലെ പൊസിഷൻ കണക്കാക്കുന്നു
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    layers.forEach(layer => {
        // HTML ഫയലിലെ 'data-speed' അനുസരിച്ച് ഓരോ ലെയറും വ്യത്യസ്ത സ്പീഡിൽ നീങ്ങുന്നു
        const speed = layer.getAttribute('data-speed');
        
        const xMove = x * speed;
        const yMove = y * speed;

        layer.style.transform = `translateX(${xMove}px) translateY(${yMove}px)`;
    });
});
