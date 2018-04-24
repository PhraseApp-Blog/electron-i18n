const electron = require('electron');
const path = require('path');
const url = require('url');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } =
  require('electron-devtools-installer');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const menuFactoryService = require('./src/services/menuFactory');
const i18n = require('./src/configs/i18next.config');
const config = require('./src/configs/app.config');

const iconPath = path.join(__dirname, '/assets/phrase-app-icon.png');

let win;

function createAppWindow() {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    'minWidth': 800,
    'minHeight': 600,
    icon: iconPath,
    title: config.title,
  });

  const baseUrl = `http://localhost:${config.port}`;

  // and load the index.html of the app.
  const startUrl = baseUrl || url.format({
    pathname: path.join(__dirname, '../build/index.html'),
    protocol: 'file:',
    slashes: true,

  });
  win.loadURL(startUrl);

  // Emitted when the window is closed.
  win.on('closed', function() {
    win = null;
  });

  installExtensions();
  menuFactoryService.buildMenu(app, win);
}

app.on('ready', createAppWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createAppWindow()
  }
});


function installExtensions() {
  if (process.env.NODE_ENV === 'development') {
    // Open the DevTools.
    win.webContents.openDevTools();

    // Install extensions
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));

    installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));
  }
}

ipcMain.on('get-initial-translations', (event, arg) => {
  const initial = {
    'en': {
      'translation': i18n.getResourceBundle('en', 'translation')
    }
  };
  event.returnValue = initial;
});





