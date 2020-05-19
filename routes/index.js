var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	conn.query("select * from memeber",function(err,rows){
		var name = rows.name;
		var addr = rows.addr;
		var tell = rows.tell;
	});
  res.render('index',{
	  
	  	title: 'KINAKONE',
    		name:name,
		addr:addr,
		tell:tell,
      contents:{tit: "이미지 제목",
      description: "이미지 설명",
      imgurl: "public/img/"+"추가 이미지 주소"}
	  });
});
router.get('/gallery', function(req, res) {
  res.render('list', {
    title: 'KINAKONE Gallery',
    contents: ejs.render({
      title: "이미지 제목",
      description: "이미지 설명",
      imgurl: "public/img/"+"추가 이미지 주소"
    })
  });
});
router.get('/gallery/:viewId', function(req, res) {
  res.render('/gallery/view', { title: 'KINAKONE Gallery' });
});
router.get('/motion', function(req, res) {
  res.render('index', { title: 'motions' });
});


module.exports = router;
