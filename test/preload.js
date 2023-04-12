const { ipcRenderer } = require('electron');

// Adiciona um evento de clique em cada item de site da lista
const sites = document.querySelectorAll('.site-item');
sites.forEach(site => {
  site.addEventListener('click', () => {
    ipcRenderer.send('siteSelecionado', site.dataset.site);
    window.close();
  });
});
