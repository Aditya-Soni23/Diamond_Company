function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  }
  // Select all links with the class 'btn-card'
  const btnCards = document.querySelectorAll('.btn-card');

  // Function to play sound and open link in a new tab
  function playSoundAndOpen(event) {
    event.preventDefault(); // Prevent default link action

    // Play the sound
    const sound = new Audio('tin.mp3');
    sound.play();

    // Open the link in a new tab after the sound finishes playing
    sound.onended = () => {
      window.open(event.target.href, '_blank');
    };
  }

  // Loop through all the btn-card links and add event listener
  btnCards.forEach(link => {
    // Add target="_blank" dynamically
    link.setAttribute('target', '_blank');

    // Add the click event listener to play sound and open the link
    link.addEventListener('click', playSoundAndOpen);
  });

  // Function to filter the cards based on the search input
  function searchProducts() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const productName = card.querySelector('h3').textContent.toLowerCase();
      
      if (productName.includes(searchQuery)) {
        card.style.display = ''; // Show the card
      } else {
        card.style.display = 'none'; // Hide the card if it doesn't match
      }
    });
  }

  // Add an event listener to the search bar
  document.getElementById('searchBar').addEventListener('input', searchProducts);

