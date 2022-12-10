const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const playerCardContainer = document.getElementById('player-card-container');

searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value;
  fetch(`http://localhost:3000/cardinalPlayers?Name=${searchValue}`)
    .then(response => response.json())
    .then(players => {
      playerCardContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = `
          <div class="player-card">
            <img src="${player.imageUrl}" alt="${player.Name}">
            <div class="name">${player.Name}</div>
            <div class="position">${player.Position}</div>
            <div class="stats">${player['2022 Slash']}</div>
            <div class="awards">${player.Awards}</div>
          </div>
        `;
        playerCardContainer.innerHTML += playerCard;
      });
    });
});