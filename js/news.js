function news(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
	if(xhr.readyState===4&&xhr.status === 200){
	    alert('all news');
	}
	
    };
    xhr.open('GET', 'api/news.php');
    xhr.send();
}

news();
