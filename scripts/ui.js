import { lectures } from './data.js';

export function renderLectureCards() {
    const grid = document.getElementById("cards-grid");
    if (!grid) return;
    grid.innerHTML = "";
    lectures.forEach((lect) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="lecture-header">
                <div class="lecture-circle">${lect.number}</div>
                <p class="title">${lect.title}</p>
            </div>
            <p class="date">${lect.date}</p>
            <button class="btn" data-link="${lect.link}">🎬 Watch recording</button>
        `;
        card.querySelector(".btn").addEventListener("click", () => {
            window.open(lect.link, "_blank", "noopener,noreferrer");
        });
        grid.appendChild(card);
    });
    document.getElementById("lecture-count").textContent = lectures.length;
}