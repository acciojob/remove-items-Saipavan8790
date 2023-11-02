function removeColor(){
	const select = document.querySelector("select");
	const selectedValue = select.value;
	let options = select.children;
	for(let i=0; i<options.length; i=i+1)
		{
			if(options[i].value == selectedValue)
			{
				options[i].remove();
				break;
			}
		}