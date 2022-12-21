// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');

  fetch('http://localhost:3000/cardinalPlayers')
  .then(response => response.json())
  .then(data => {
    data.forEach(player => {
      // Create a counter variable for each player
      let favoriteCount = 0;
      let allStarCount = 0;

      // Create a new card element for each player
      const card = createCardElement(player, favoriteCount, allStarCount);
      
      // Add the card to the container
      container.appendChild(card);
    });
  });
});

// Function to create a card element for a player
function createCardElement(player, favoriteCount, allStarCount) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Insert player data into the card
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

  // Add event listeners for the vote buttons
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

// Function to update the vote count display on a card
function updateVoteCountDisplay(card, favoriteCount, allStarCount) {
  card.querySelectorAll('div')[1].innerHTML = `
    <p>Vote for Favorite: ${favoriteCount}</p>
    <p>Vote for 2023 All Star: ${allStarCount}</p>
  `;
}
