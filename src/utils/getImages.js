const request = require('request');
const fs = require('fs');

const imgDirPath = `${__dirname}/../assets/img`;

function removeImg(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      const curPath = `${path}/${file}`;
      fs.unlinkSync(curPath);
    });
  }
}

function getImgName(imgObj) {
  return imgObj.large.split('/').slice().pop();
}

function downloadImg(url, fileName) {
  request(url).pipe(fs.createWriteStream(`${imgDirPath}/${fileName}`));
}

request('https://api.douban.com/v2/movie/in_theaters', { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  removeImg(imgDirPath); // clear dir img
  if (body.subjects) {
    body.subjects.forEach((item) => {
      downloadImg(item.images.large, getImgName(item.images));
    });
    console.log('download images done ~');
  }
});
