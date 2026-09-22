document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mode-toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      toggle.textContent = isLight ? '🌙 Escuro' : '☀️ Claro';
    });
  }

  const fallbackProjects = [
    {
      name: 'APIs REST Escaláveis',
      description: 'Projeto focado em backend com autenticação, regras de negócio e integrações em arquitetura moderna.',
      language: 'PHP',
      html_url: 'https://github.com/omarcus212',
      homepage: ''
    },
    {
      name: 'Sistemas de Gestão',
      description: 'Aplicação para controle de processos, dados e operações comerciais com lógica backend bem estruturada.',
      language: 'Java',
      html_url: 'https://github.com/omarcus212',
      homepage: ''
    },
    {
      name: 'Microserviços e Integrações',
      description: 'Estrutura para comunicação entre serviços, rotas de API e fluxo de dados com foco em confiabilidade.',
      language: 'Node.js',
      html_url: 'https://github.com/omarcus212',
      homepage: ''
    }
  ];

  const container = document.getElementById('projects-container');

  const renderProjects = (projects) => {
    if (!container) return;

    container.innerHTML = '';

    const validProjects = projects.filter((project) => {
      const name = project.name || '';
      return name !== 'omarcus212' && name !== 'portifolio';
    });

    validProjects.slice(0, 6).forEach((project) => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-top">
          <span class="project-type">Backend</span>
          <span class="project-language">${project.language || 'Full Stack'}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description || 'Projeto com foco em lógica de negócio, performance e soluções reais para problemas de software.'}</p>
        <div class="project-links">
          <a href="${project.html_url}" target="_blank" rel="noreferrer">Ver código</a>
          ${project.homepage ? `<a href="${project.homepage}" target="_blank" rel="noreferrer">Demo</a>` : ''}
        </div>
      `;
      container.appendChild(card);
    });
  };

  const username = 'omarcus212';

  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('GitHub API indisponível');
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data) && data.length) {
        renderProjects(data);
      } else {
        renderProjects(fallbackProjects);
      }
    })
    .catch(() => {
      renderProjects(fallbackProjects);
    });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
