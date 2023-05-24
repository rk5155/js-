
const pathList = [
  'src/contents/root/goodaction2016/privacypolicy/index.html',
  'src/contents/root/goodaction2016/topics/02.html',
  'src/contents/root/tokushu/challenged/index.html',
  'src/contents/root/tokushu/special/012/index.html',
  'src/contents/root/tokushu/special/012/interview/detail01.html',
  'src/contents/root/tokushu/special/012/interview/detail02.html',
  'src/contents/root/tokushu/special/012/interview/detail03.html',
  'src/contents/root/tokushu/special/012/interview/detail04.html',
  'src/contents/root/tokushu/special/012/interview/detail05.html',
  'src/contents/root/tokushu/special/012/interview/detail06.html',
  'src/contents/root/tokushu/special/012/search/index.html',
  'src/contents/root/tokushu/special/013/index.html',
  'src/contents/root/tokushu/special/014/government/detail01.html',
  'src/contents/root/tokushu/special/014/government/detail02.html',
  'src/contents/root/tokushu/special/014/government/government01.html',
  'src/contents/root/tokushu/special/014/government/index.html',
  'src/contents/root/tokushu/special/014/government/info01.html',
  'src/contents/root/tokushu/special/014/index.html',
  'src/contents/root/tokushu/special/015/index.html',
  'src/contents/root/tokushu/special/016/index.html',
  'src/contents/root/tokushu/special/017/index.html',
]
const execSync = require('child_process').execSync;

pathList.forEach(path => {
  let pathSplit = path.split('/')
  pathSplit.pop()
  let mkdirPath = pathSplit.join('/');
  console.log(mkdirPath);
  execSync(`mkdir -p ${mkdirPath}`);
})