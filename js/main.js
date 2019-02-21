function exchange() {
var xhr = new XMLHttpRequest(); //создание AJAX запроса при помощи объекта  XMLHttpRequest()
//подготовка обработки успеха или неудачи запроса
	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		//действие в случае успеха
		//alert('запрос выполнен');
		var json_exchange = xhr.responseText;
		//преобразование JSON в объукт по старинке
		//var exchange_rates = eval(json_exchange);
		var exchange_rates = JSON.parse(json_exchange);
		console.log(exchange_rates);
		//TODO вывод всех курсов в таблицу
		console.log([]);
} else {
		//TODO можно выполнить обработку не 200-го статуса
		alert('возникла проблема');
}
}
};

//подготовка запроса метод "open"
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

//отправка запроса метод "send"
xhr.send();
}

function init_exchange_module(element_id) {
		//поиск тэга для вывода в него
		var el = document.getElementById(element_id);
		//el.innerHTML ='<input type="button" value="получить курс"/>';
		var btn = document.createElement('input');
		btn.type = 'button';
		btn.value = 'получить курс';
		el.appendChild(btn);
		//обработчик события нажатия кнопки
		btn.onclick = function () {
		exchange();
};
}

window.onload = function () {
			init_exchange_module('exchange');
};
