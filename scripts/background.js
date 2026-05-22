export function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    let width, height, columns = [];
    const fontSize = 18;
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    function init() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width; canvas.height = height;
        columns = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * -height);
    }

    function draw() {
        ctx.fillStyle = "rgba(8, 12, 18, 0.07)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#8dd0ff";
        ctx.font = `${fontSize}px monospace`;
        columns.forEach((y, i) => {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y);
            columns[i] = y > height ? 0 : y + fontSize;
        });
        requestAnimationFrame(draw);
    }
    window.addEventListener("resize", init);
    init(); draw();
}