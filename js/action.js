requirejs(['data/basic.js'],
function   () {
    var text = "";
    if(!localStorage.getItem('result')){
    	localStorage.setItem('result',"{}");
    }
    var result = JSON.parse(localStorage.getItem('result'));
    var getOne = function(){
    	$.each(basicData, function(i, item) {
    		if(result[item]){
    			if(result[item].count > 9  && result[item].wrong == 0){
    				basicData.splice(i,1);
    			}else if(result[item].count > 9){
    				result[item].count = 6;
    				result[item].wrong = 0;
    			}
    		}
    	});
    	var len = basicData.length;
    	var i = parseInt(Math.random()*len,10)%len;
    	text = basicData[i];
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
    			$('h1').css({
    				color: '#60C337'
    			});
    		}else {
    			result[text].count ++;
    			result[text].wrong ++;
    			$('h1').css({
    				color: 'red'
    			});
    		}
    		localStorage.setItem('result',JSON.stringify(result));

    		console.log(text);
    		console.log(result[text]);

    		setTimeout(function(){
    			$('h1').css({
    				color: '#333'
    			});
    			change();
    		},500)

    	}
    });

    change();
});

