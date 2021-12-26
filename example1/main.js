/*
 * main.js
 * 
 * Copyright (c) 2021 Mikata Hara
 * Licensed under the MIT License (see LICENSE.txt in this project)
 *
 */
 
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron')

let window

app.on('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
      //      backgroundThrottling: false,
      //      autoplayPolicy: 'no-user-gesture-required'
    }
  })

  window.loadURL('file://' + __dirname + '/index.html');

  window.on('closed', () => {
    window = null
  })
})

ipcMain.on('Shiwasu', async (event, arg) => {
  console.log('Receive message from Renderer')
  console.log(arg)
//  console.log("mCount=", mCount);
  var count = 5;
  var t = setInterval(function () {
    console.log(count--);
    if (count == 0) {
      console.log('--- Send message from Main to Renderer');
      event.sender.send('Mutsuki', { message: 'This is Mutsuki' });
      clearInterval(t);
    }
  }, 1000);
});

ipcMain.on('Yayoi', async (event, arg) => {
  console.log('Receive message from Renderer')
  console.log(arg)
//  console.log("mCount=", mCount);
  var count = 5;
  var t = setInterval(function () {
    console.log(count--);
    if (count == 0) {
      console.log('--- Send message from Main to Renderer');
      event.sender.send('Kisaragi', { message: 'This is Yayoi' });
      clearInterval(t);
    }
  }, 1000);
});

