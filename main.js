console.log('main process working');

const path = require('path');
const url = require('url');
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let win;

const createWindow = () => {
  win = new BrowserWindow();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'public/views/index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  });
};

app.on('ready', createWindow);
