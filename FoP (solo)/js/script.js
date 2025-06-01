
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', function (event) {
    const projectName = this.querySelector('p').textContent;
    alert(`You clicked on: ${projectName}`);
  });
});
