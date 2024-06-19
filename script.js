document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        const summaryDiv = document.querySelector('.summary');
        const button = document.querySelector('.summaryButton');
        data.forEach(item => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add(item.category.toLowerCase());

            const cardTitle = document.createElement('div');
            cardTitle.classList.add('cardTitle');

            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.alt = `${item.category} icon`;

            const title = document.createElement('p');
            title.textContent = item.category;

            cardTitle.appendChild(icon);
            cardTitle.appendChild(title);

            const cardScore = document.createElement('div');
            cardScore.classList.add('cardScore');

            const score = document.createElement('p');
            score.innerHTML = `${item.score} <span>/ 100<span>`;

            cardScore.appendChild(score);

            cardDiv.appendChild(cardTitle);
            cardDiv.appendChild(cardScore);

            summaryDiv.insertBefore(cardDiv, button);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
});