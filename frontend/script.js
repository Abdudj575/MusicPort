document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('soundwaveCanvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let bars = [];
    const barWidth = 3; // Width of each soundwave bar
    const gap = 1;      // Gap between bars
    const baseHeight = 20; // Minimum height of bars
    const maxAmplitude = 100; // Max additional height for bars
    const speed = 0.05; // Speed of the wave movement
    let frame = 0;

    // Function to get rainbow color based on position
    function getRainbowColor(position, total) {
        const hue = (position / total * 360 + frame * 2) % 360; // Shift hue over time
        return `hsl(${hue}, 100%, 50%)`;
    }

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Recalculate bars based on new width
        bars = [];
        const numBars = Math.ceil(width / (barWidth + gap));
        for (let i = 0; i < numBars; i++) {
            bars.push({
                x: i * (barWidth + gap),
                height: baseHeight // Initial height
            });
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, width, height); // Clear the canvas

        frame++;

        // Draw the soundwave bars
        for (let i = 0; i < bars.length; i++) {
            const bar = bars[i];
            
            // Calculate wave effect using sine for smooth oscillation
            const waveOffset = Math.sin((bar.x + frame * speed) * 0.02) * maxAmplitude;
            
            // Generate some random noise for a more organic feel, but keep it subtle
            const noise = (Math.random() * 0.5 - 0.25) * (maxAmplitude / 2);
            
            // Combine base height, wave, and noise
            const currentHeight = baseHeight + Math.max(0, waveOffset + noise);

            // Center the wave vertically
            const y = (height / 2) - (currentHeight / 2);

            ctx.fillStyle = getRainbowColor(i, bars.length);
            ctx.fillRect(bar.x, y, barWidth, currentHeight);
        }
    }

    // Initial setup
    resizeCanvas();
    animate();

    // Handle window resizing
    window.addEventListener('resize', resizeCanvas);
});