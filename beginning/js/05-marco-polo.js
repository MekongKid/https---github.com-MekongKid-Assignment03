var num = parseInt(prompt(" Enter a number:"));

for(var i=1; i<= 100; i++){
	if(((i%3)==0) && ((i%5)==0)){
		console.log("marcopolo");
	}else if((i%3)==0){
		console.log("marco");
	}else if((i%5)==0){
		console.log("polo");
	}else{
		console.log(i);
	}
};



