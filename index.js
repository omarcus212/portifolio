// script.js - Versão estratégica
document.addEventListener('DOMContentLoaded', () => {
    // Toggle dark/light mode
    const toggle = document.getElementById('mode-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light' : '🌙 Dark';
    });

    // Puxar projetos do GitHub com foco estratégico (adiciona demo links se possível)
    const username = 'omarcus212';
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=7`)
        .then(response => response.json())
        .then(data => {

            const container = document.getElementById('projects-container');
            data.forEach(repo => {
                if (repo.name !== 'omarcus212') {
                const card = document.createElement('div');
                card.classList.add('project-card');
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description == 'web' ? 'Projeto backend/frontend com foco em performance e escalabilidade, com post, chat e login.': repo.description || 'Projeto backend/frontend com foco em performance e escalabilidade.'}</p>
                    <p>Tecnologias: ${repo.language}</p>
                    <a href="${repo.html_url}" target="_blank">Ver Código</a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank">Demo</a>` : ''}
                `;
                container.appendChild(card);
                }
            });
            
        })
        .catch(error => console.error('Erro:', error));

    // Navegação smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});