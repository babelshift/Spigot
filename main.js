const { app, BrowserWindow, ipcMain, net, shell } = require("electron");
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

  // win.setMenu(null)

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// When user clicks to see app details, we need to load store details for that game
ipcMain.on("getAppStoreDetails", (event, args) => {
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

// When user clicks to play game, launch Steam and bring to foreground
ipcMain.on("playGame", (event, args) => {
  shell.openExternal(`steam://run/${args.appId}`, { activate: true });
});

// When user clicks to view on Steam store, launch Steam and bring to foreground
ipcMain.on("viewInSteam", (event, args) => {
  shell.openExternal(`steam://store/${args.appId}`, { activate: true });
});

// When user clicks app details, we need to load player counts for that game
ipcMain.on("getPlayerCount", (event, args) => {
  let responseBody = "";

  const request = net.request("https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=" + args.appId);
  request.on('response', (response) => {
    response.on("data", (data) => {
      responseBody += data.toString();
    });
    response.on("end", () => {
      let responseJson = JSON.parse(responseBody);
      responseJson.appId = args.appId;
      win.webContents.send("getPlayerCountResponse", responseJson);
    });
  });
  request.end();
});