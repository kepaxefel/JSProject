  	show("JavaScript"); // JavaScriptundefined

  	function show(from, to) {
  	  (to == null) ? alert (from + " - ECMA") : alert (from + to);		  
	}

	
	var someone = prompt('Кто пришел?', '');
	checkSomeone (someone);

	function checkSomeone (someone){
		if (someone == '') alert('Вход отменен!');
		if (someone == 'PHP') alert('Нет, не стоит');
		if (someone == 'JavaScript'){
			var pass = prompt ('Введите пароль','');
			if (pass == null) alert ('Вход отменен');
			if (pass == 'Не важно что') alert ('Пароль не верен');
			if (pass == 'ECMA') alert ('Добро пожаловать!');
		}
	}
	
	
