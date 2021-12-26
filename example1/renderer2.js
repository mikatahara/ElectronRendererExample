/*
 * renderer2.js
 * 
 * Copyright (c) 2021 Mikata Hara
 * Licensed under the MIT License (see LICENSE.txt in this project)
 *
 */
ipcRenderer.on('Mutsuki', (event, arg) => {
  console.log('Receive message from Main');
  console.log(arg);
  console.log("mCount=", mCount);

  var count = 5;
  var t = setInterval(function () {
    console.log(count--);
    if (count == 0) {
      console.log('--- Send message from Main to Renderer');
      ipcRenderer.send('Yayoi', { message: 'This is Mitsuki' });
      clearInterval(t);
        for(var i=0; i<10000; i++) mCount++;
    }
  }, 1000);
})
