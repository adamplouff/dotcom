// delete the contents of ./static then copy the contents of ./../static-assets to ./../static. then copy the contents of ./../src/adamplouff_vault to ./../static

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const staticPath = path.resolve(__dirname, '../static');
const staticAssetsPath = path.resolve(__dirname, '../static-assets');
const obsidianAssetsPath = path.resolve(__dirname, '../src/adamplouff_vault/_assets');

fse.emptyDir (staticPath, (err) => {
  if (err) return console.error(err)
  console.log('emptied static')
  fse.copy(staticAssetsPath, staticPath, (err) => {
    if (err) return console.error(err)
    console.log('copied static-assets to static')
    fse.copy(obsidianAssetsPath, staticPath, (err) => {
      if (err) return console.error(err)
      console.log('copied obsidian assets to static')
    })
  })
})
