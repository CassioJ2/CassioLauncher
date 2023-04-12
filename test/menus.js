const { Menu, BrowserWindow, ipcMain } = require('electron');

function criarMenu() {
  // Cria o menu de sites
  const menuSites = Menu.buildFromTemplate([
    {
      label: 'Sites',
      submenu: [
        {
          label: 'Selecionar Site',
          click: () => {
            // Cria uma nova janela para exibir as opções do site
            const siteWindow = new BrowserWindow({
              width: 500,
              height: 300,
              webPreferences: {
                nodeIntegration: true,
                plugins: true,
              }
            });

            // Carrega um arquivo HTML que exibe as opções do site
            siteWindow.loadFile('../html/sites.html');
          }
        }
      ]
    }
  ]);

  // Define o menu de sites como o menu da aplicação
  Menu.setApplicationMenu(menuSites);
}

module.exports = { criarMenu };
