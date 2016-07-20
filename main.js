//"use strict";

const electron = require("electron")
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const Datastore = require("nedb")

//global.jQuery = require('jquery');
//require('bootstrap');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        fullscreen: false,
        width: 1200,
        height: 800,
        frame: true,
        resizable: true,
        title: "ropetiski-helper"
    })

    // and load the index.html of the app.
    //mainWindow.loadURL('file://${__dirname}/index.html')
    mainWindow.loadURL("C:/Users/archi/Desktop/ropetiski-helper/src/index.html")

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", function(){

    /*
    var games_db = new Datastore({
        filename: "./data/games.json",
        timestampData: true,
        autoload: true
    })

    /*
    // Initialize db
    var doc = { hello: 'world'
        , n: 5
        , today: new Date()
        , nedbIsAwesome: true
        , notthere: null
        , notToBeSaved: undefined  // Will not be saved
        , fruits: [ 'apple', 'orange', 'pear' ]
        , infos: { name: 'nedb' }
    };

    games_db.insert(doc, function (err, newDoc) {
        // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
    });
    */


    // TODO: if db doesn't exist, generate from json
    /*
    db.count({}, function (err, count) {
        if(count <= 0){

        }
    });
    */

    createWindow();
})

// Quit when all windows are closed.
app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//require("./js/index.js")
