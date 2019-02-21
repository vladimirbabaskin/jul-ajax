function exchange() {
var xhr = new XMLHttpRequest(); //создание AJAX запроса при помощи объекта  XMLHttpRequest()
//подготовка обработки успеха или неудачи запроса
	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		//действие в случае успеха
		//alert('запрос выполнен');
		var json_exchange = xhr.responseText;//это строка с кавычками
		//преобразование JSON в объукт по старинке
		//var exchange_rates = eval(json_exchange);
		var exchange_rates = JSON.parse(json_exchange);//строка без кавычек
		console.log(exchange_rates);
		//TODO вывод всех курсов в таблицу
		var table =
				"<table>" + "<tr><th>Валюта</th><th>Базовая валюта</th><th>Покупка</th><th>Продажа</th></tr>";

				// "<tr>" +
				// "<td>"+exchange_rates[0].ccy+"</td>" +
				// "<td>"+exchange_rates[0].base_ccy+"</td>" +
				// "<td>"+exchange_rates[0].buy+"</td>" +
				// "<td>"+exchange_rates[0].sale+"</td>" +
				// "</tr>"+

				// "<tr>" +
				// "<td>"+exchange_rates[1].ccy+"</td>" +
				// "<td>"+exchange_rates[1].base_ccy+"</td>" +
				// "<td>"+exchange_rates[1].buy+"</td>" +
				// "<td>"+exchange_rates[1].sale+"</td>" +
				// "</tr>"+

				// "<tr>" +
				// "<td>"+exchange_rates[2].ccy+"</td>" +
				// "<td>"+exchange_rates[2].base_ccy+"</td>" +
				// "<td>"+exchange_rates[2].buy+"</td>" +
				// "<td>"+exchange_rates[2].sale+"</td>" +
				// "</tr>"+

				// "<tr>" +
				// "<td>"+exchange_rates[3].ccy+"</td>" +
				// "<td>"+exchange_rates[3].base_ccy+"</td>" +
				// "<td>"+exchange_rates[3].buy+"</td>" +
				// "<td>"+exchange_rates[3].sale+"</td>" +
				// "</tr>"+

				//"</table>";

		for (var i=0; i<exchange_rates.length; i++){
		table+=
				("<tr>" +
			"<td>"+exchange_rates[i].ccy+"</td>" +
			"<td>"+exchange_rates[i].base_ccy+"</td>" +
			"<td>"+exchange_rates[i].buy+"</td>" +
			"<td>"+exchange_rates[i].sale+"</td>" +
			"</tr>")
		}
		table+="</table>";
		console.log(table);
		var id = document.getElementById("exchange");
		console.log(id);
		// console.log(document);
		// console.log(typeof id);
			//id.append();
			console.log(id.innerHTML += table);//вставить таблицу (inner - вставить - HTML)
		//console.log(exchange_rates[0]);
		 //console.log(exchange_rates[0].ccy);
		// 	console.log(exchange_rates[0].base_ccy);
		// console.log(exchange_rates[0].buy);
		// 	console.log(exchange_rates[0].sale);
		// 	console.log(exchange_rates[1]);
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
