const { app, BrowserWindow , ipcMain} = require('electron');
ipcMain.on("msg",(event,data)=> {
  event.sender.send("ter", loo())
 
})





const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


var createWindow = () => {
  // Create the browser window.
   mainWindow = new BrowserWindow({
    width: 1028,
    height:700,
    minWidth: 1028,
    minHeight:700,
    maxWidth: 1028,
    maxHeight:700,
    show: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'starter.html'));
  mainWindow.webContents.executeJavaScript(console.log('result'))

  mainWindow.webContents.on('did-finish-load' , function() {
    
    mainWindow.show()
  })

  mainWindow.removeMenu();
  // Open the DevTools.
   hh = mainWindow.webContents;

//  mainWindow.webContents.openDevTools();
};

function loo() {
 mainWindow.webContents.undo()
}

function soo() {
  mainWindow.webContents.redo()
 }



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});



app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
