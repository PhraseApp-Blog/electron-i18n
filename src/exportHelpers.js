const electron = window.require('electron');
// eslint-disable-next-line
const fs = electron.remote.require('fs');

export const ipcRenderer = electron.ipcRenderer;
export const remote = electron.remote;