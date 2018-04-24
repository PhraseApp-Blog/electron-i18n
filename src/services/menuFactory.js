const Menu = require('electron').Menu;
const config = require('../configs/app.config');

const darwinTemplate = require('../menus/darwin-menu');
const otherTemplate = require('../menus/other-menu');

const menu = null;
const platform = process.platform;

function MenuFactoryService(menu) {
  this.menu = menu;

  this.buildMenu = buildMenu;
}

function buildMenu(app, mainWindow) {
  if (config.platform === 'darwin') {
    this.menu = Menu.buildFromTemplate(darwinTemplate(app, mainWindow));

    Menu.setApplicationMenu(this.menu);
  } else {
    this.menu = Menu.buildFromTemplate(otherTemplate(app, mainWindow));
    mainWindow.setMenu(this.menu)
  }
}

module.exports = new MenuFactoryService(menu);
