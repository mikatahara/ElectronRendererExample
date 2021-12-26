/*
 * renderer1.js
 * 
 * Copyright (c) 2021 Mikata Hara
 * Licensed under the MIT License (see LICENSE.txt in this project)
 *
 */
 
const { ipcRenderer } = require('electron');
console = require('electron').remote.require('console');
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

const btn = document.getElementById('btnpx');
var mCount = 0;
var t = null;

btn.addEventListener('click', () => {
  console.log('--- Send message from Renderer to Main');
  ipcRenderer.send('Shiwasu', { message: 'This is Kisaragi' });
  for(var i=0; i<10000; i++) mCount++;
})

ipcRenderer.on('Kisaragi', (event, arg) => {
  console.log('Receive message from Main');
  console.log(arg);
  console.log("mCount=", mCount);
  clearInterval(t);
})
