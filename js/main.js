function exchange(){
var xhr=new XMLHttpReguest();

//подготовка обработки успеха или неудачи запроса
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
	if(xhr.status===200){
	    //действие в случае успеха
	    alert('запрос выполнен');
	}else{
	    //TODO можно выполнить обработку не 200 статуса
	    alert('возникла проблема');
	}
    }
};

//подготовка запроса
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

//отправка запроса
xhr.send();
}