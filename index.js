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

