<script>
  // Em um projeto real, você buscaria esses dados de uma API ou CMS
  const projetos = [
    { id: 1, title: 'Projeto 1', imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 2, title: 'Projeto 2', imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 3, title: 'Projeto 3', imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 4, title: 'Projeto 4', imageUrl: 'https://via.placeholder.com/400x300' },
    // Adicione mais projetos
  ];
</script>

<div class="project-grid">
  {#each projetos as projeto}
    <a href="/projetos/{projeto.id}" class="project-card">
      <img src={projeto.imageUrl} alt={projeto.title} />
      <h3>{projeto.title}</h3>
    </a>
  {/each}
</div>

<style>
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .project-card {
    text-decoration: none;
    color: inherit;
    border: 1px solid #ddd;
    overflow: hidden;
  }
  .project-card img {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
  .project-card h3 {
    padding: 0.5rem;
    margin: 0;
  }
</style>
