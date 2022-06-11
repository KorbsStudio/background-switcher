const {app, BrowserWindow} = require('electron')
const glasstron = require('glasstron')

function createWindow () {
  const mainWindow = new glasstron.BrowserWindow({
    width: 1000,
    height: 600,
    center: true,
    resizable: false,
    maximizable: false,
    transparent: false, // Keep this false, to make sure round corners work on Windows 11
    frame: false,
    autoHideMenuBar: true,
    blur: true,
    blurType: 'blurbehind'
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {createWindow()})