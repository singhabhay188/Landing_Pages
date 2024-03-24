const teams = document.querySelectorAll('.team');
const movementScale = 0.01; // Adjust the movement scale as needed

teams.forEach((team) => {
    const imgContainer = team.querySelector('.img');
    team.addEventListener('mousemove', (e) => {
        const rect = team.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        let offsetX = centerX + (e.clientX - centerX) * movementScale;
        let offsetY = centerY + (e.clientY - centerY) * movementScale;
        
        imgContainer.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    });
});