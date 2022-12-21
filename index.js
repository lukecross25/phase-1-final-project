// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');

  fetch('http://localhost:3000/cardinalPlayers')
    .then(response => response.json())
    .then(data => {
      data.forEach(player => {
           let favoriteCount = 0;
           let allStarCount = 0;
      const card = createCardElement(player, favoriteCount, allStarCount);
      container.appendChild(card);
    });
  });
});


function createCardElement(player, favoriteCount, allStarCount) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
  <img src="${player.imageUrl}" alt="${player.name}">
    <h3>${player.name}</h3>
      <p>Position: ${player.position}</p>
        <p>Stats: ${player.stats}</p>
          <p>Awards: ${player.awards}</p>
            <div>
              <button class="favorite-button">Vote for Favorite</button>
              <button class="allStar-button">Vote for 2023 All Star</button>
            </div>
             <div>
               <p>Vote for Favorite: ${favoriteCount}</p>
               <p>Vote for 2023 All Star: ${allStarCount}</p>
             </div>
       <p class="allStar-message"></p>
  `;

  const favoriteButton = card.querySelector('.favorite-button');
  favoriteButton.addEventListener('click', () => {
    if (favoriteCount < 1) {
      favoriteCount++;
      updateVoteCountDisplay(card, favoriteCount, allStarCount);
    }
  });

  const allStarButton = card.querySelector('.allStar-button');
      allStarButton.addEventListener('mouseover', () => {
      if (allStarCount < 1) {
        allStarCount++;
        updateVoteCountDisplay(card, favoriteCount, allStarCount);
        card.querySelector('.allStar-message').innerHTML = 'Congratulations! You have voted for the 2023 All Star team!';
      }
    });
  return card;
}

function updateVoteCountDisplay(card, favoriteCount, allStarCount) {
  card.querySelectorAll('div')[1].innerHTML = `
    <p>Vote for Favorite: ${favoriteCount}</p>
    <p>Vote for 2023 All Star: ${allStarCount}</p>
  `;
}
