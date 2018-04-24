const config = require('../configs/app.config');

module.exports = (app, mainWindow, i18n) => {
  let menu = [
    {
      label: i18n.t('PhraseApp i18n'),
      submenu: [
        {
          label: i18n.t('About PhraseApp i18n'),
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.t('Hide App'),
          accelerator: 'Command+H',
          role: 'hide'
        },
        {
          label: i18n.t('Hide Others'),
          accelerator: 'Command+Shift+H',
          role: 'hideothers'
        },
        {
          label: i18n.t('Show All'),
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.t('Quit'),
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: i18n.t('View'),
      submenu: [
        {
          label: i18n.t('Reload'),
          accelerator: 'Command+R',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.reload();
            }
          }
        },
        {
          label: i18n.t('Full Screen'),
          accelerator: 'Ctrl+Command+F',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
          }
        },
        {
          label: i18n.t('Minimize'),
          accelerator: 'Command+M',
          role: 'minimize'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.t('Toggle Developer Tools'),
          accelerator: 'Alt+Command+I',
          click: (item, focusedWindow) => {
            focusedWindow.webContents.toggleDevTools();
          }
        }
      ]
    },
    {
      label: i18n.t('Help'),
      submenu: [
        {
          label: i18n.t('About App'),
          click: function (item, focusedWindow) {
            if (focusedWindow) {
            }
          }
        }
      ]
    }
  ];

  const languageMenu = config.languages.map((languageCode) => {
      return {
        label: i18n.t(languageCode),
        type: 'radio',
        checked: i18n.language === languageCode,
        click: () => {
          i18n.changeLanguage(languageCode);
        }
      }
  });


  menu.push({
    label: i18n.t('Language'),
    submenu: languageMenu
  });

  return menu;
};

