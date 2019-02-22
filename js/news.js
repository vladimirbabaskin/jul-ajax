function news() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    var json = xhr.responseText;
	    var news = JSON.parse(json);
	    var news_tag = document.getElementById('news');
	    news_tag.innerHTML = '';
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

document.forms.addnews.onsubmit = function (event) {
    var title = this.elements.title.value;
    var text = this.elements.text.value;
    var data = 'title=' + title + '&text=' + text;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    alert(xhr.responseText);
	    news();
	}
    };
    xhr.open('POST', 'newsapi.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
    event.preventDefault();
    return false;
};
 