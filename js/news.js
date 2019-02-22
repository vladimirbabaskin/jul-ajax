function news() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    var json = xhr.responseText;
	    console.log(json);
	    var news = JSON.parse(json);
	    var news_tag = document.getElementById('news');
	    document.getElementById('news').innerHTML='';
	    news.forEach(function (val) {
		var section = document.createElement('section');
		section.innerHTML = '<h3>' + val.title + '</h3><p>' + val.text + '</p>';
		document.getElementById('news').appendChild(section);
	    });
	}

    };
    xhr.open('GET', 'newsapi.php');
    xhr.send();
}

news();
