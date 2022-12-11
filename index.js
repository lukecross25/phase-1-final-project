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
`;

      // Add event listeners for the vote buttons
      const favoriteButton = card.querySelector('.favorite-button');
      favoriteButton.addEventListener('click', () => {
        favoriteCount++;
        // Update the vote count display
        card.querySelectorAll('div')[1].innerHTML = `
          <p>Vote for Favorite: ${favoriteCount}</p>
          <p>Vote for 2023 All Star: ${allStarCount}</p>
          `;
        });
  
        const allStarButton = card.querySelector('.allStar-button');
        allStarButton.addEventListener('click', () => {
          allStarCount++;
          // Update the vote count display
          card.querySelectorAll('div')[1].innerHTML = `
            <p>Vote for Favorite: ${favoriteCount}</p>
            <p>Vote for 2023 All Star: ${allStarCount}</p>
          `;
        });
  // Add the card to the container
  container.appendChild(card);
});
});
});
