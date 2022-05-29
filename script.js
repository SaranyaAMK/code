var a = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

function render(type) {
	//Initial values
	if(type === 'init'){
		 document.getElementById('grid-1').innerHTML = a.map((shuffle,i) => 
			`<div class='item-${i}'>${shuffle}</div>`).join('')
	}
	//Shuffle onClick
	else if(type === 'shuffle'){ 
	  for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	  }
	  document.getElementById('grid-1').innerHTML = a.map((shuffle,i) => 
		`<div class='item-${i}'>${shuffle}</div>`).join('')
		return a;
	}
	//Sort onClick
	else if(type === 'sort'){
		a.sort(function (a, b) {
		return a - b;
	});
	}
	document.getElementById('grid-1').innerHTML = a.map((sort,i) => 
	  `<div class='item-${i}'>${sort}</div>`).join('')
}

