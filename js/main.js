

// search部分开始
 var search = document.getElementsByClassName('search-input')[0].getElementsByTagName('input')[0];
 var label = document.getElementsByClassName('search-input')[0].getElementsByTagName('label')[0];
 // search.onfocus = function(){
 // 	if(this.value == "华硕笔记本电脑" && this.style.color != '#000'){
 // 		this.value = '';
 // 		this.style.color = '#000';
 // 	}
 // }
 // search.onblur = function(){
 // 	if(this.value == ''){
 // 		this.value = '华硕笔记本电脑';
 // 		this.style.color = "rgb(153, 153, 153)";
 // 	}
 // }
 search.oninput = function(){
 	if (this.value == '') {
 		label.style.display = "block";
 	}else{
 		label.style.display = "none";
 		this.style.color = "#000";
 	}
 }
// search部分结束