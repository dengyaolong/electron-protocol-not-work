const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    mainWindow.loadURL('file://'+__dirname+'/index.html')
    app.setAsDefaultProtocolClient('protocolnotwork')
}

app.on('open-url', function (ev, urlString) {
    console.log(urlString)
})

app.on('ready', createWindow)

