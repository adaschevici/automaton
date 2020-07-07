const { ipcRenderer } = require('electron')

ipcRenderer.on('clicked-link', (event, arg) => {
  console.log('preload: received sendbackhtml')
  const browserLink = document.querySelector("a[id='bylineInfo']")
  console.log(browserLink)
  browserLink.click()
})

ipcRenderer.on('sendbackhtml', (event, arg) => {
  console.log('Clicked link')
  ipcRenderer.send('hereishtml', document.documentElement.innerHTML)
})
