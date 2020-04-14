const { app, BrowserWindow, ipcMain, net } = require("electron");
const path = require("path");

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js") // use a preload script
    }
  });

  //   win.setMenu(null)

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on("toMain", (event, args) => {
  let responseBody = "";

  const request = net.request("https://store.steampowered.com/api/appdetails/?appids=" + args.appId);
  request.on('response', (response) => {
    response.on("data", (data) => {
      responseBody += data.toString();
    });
    response.on("end", () => {
      win.webContents.send("fromMain", JSON.parse(responseBody));
    });
  });
  request.end();
});