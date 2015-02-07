var Hiragana =[
	'あ','い','う','え','お',
	'か','き','く','け','こ',
	'さ','し','す','せ','そ',
	'た','ち','つ','て','と',
	'な','に','ぬ','ね','の',
	'は','ひ','ふ','へ','ほ',
	'ま','み','む','め','も',
	'や','い','ゆ','え','よ',
	'ら','り','る','れ','ろ',
	'わ','い','う','え','を',
];
$.ajax({
	url: '../data/basic.json',
	type: 'jsonp',
	dataType: 'json',
	success: function(data){
		console.log(data);
	}
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});

var text = "";
if(!localStorage.getItem('result')){
	localStorage.setItem('result',"{}");
}
var result = JSON.parse(localStorage.getItem('result'));
var getOne = function(){
	$.each(Hiragana, function(i, item) {
		if(result[item]){
			if(result[item].count > 9  && result[item].wrong == 0){
				Hiragana.splice(i,1);
			}else if(result[item].count > 9){
				result[item].count = 6;
				result[item].wrong = 0;
			}
		}
	});
	var len = Hiragana.length;
	var i = parseInt(Math.random()*len,10)%len;
	text = Hiragana[i];
};

var change = function(){
	$('input').val('');
	getOne();
	$('h1').html(text);
};

$('input').on('keyup',function(e){
	if(e.keyCode == 13){
		if(!result[text]){
			result[text] = {
				count: 0,
				wrong: 0
			};
		}
		if($('input').val() == text){
			result[text].count++;
		}else {
			result[text].count ++;
			result[text].wrong ++;
		}
		localStorage.setItem('result',JSON.stringify(result));

		console.log(text);
		console.log(result[text]);

		change();
	}
})

change();