const https = require('https');
const request = require('request');
const fs = require('fs');
const path = require("path")

const imgDirPath = `${__dirname}/../img`;

function removeImg(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      var curPath = `${path}/${file}`;
      fs.unlinkSync(curPath);
    });
  }
};

function getImgName(imgObj) {
  return imgObj.large.split('/').slice().pop();
}

function downloadImg(url, fileName) {
  request(url).pipe(fs.createWriteStream(`${imgDirPath}/${fileName}`));
}

request('https://api.douban.com/v2/movie/in_theaters', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  removeImg(imgDirPath);  // clear dir img
  body.subjects.forEach((item, index) => {
    downloadImg(item.images.large, getImgName(item.images));
  })
  console.log('download images done ~');
});