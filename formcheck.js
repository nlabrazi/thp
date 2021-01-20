/**************/
/*            */
/*  Variable  */
/*            */
/**************/

let formValue =  document.getElementsByTagName("input");
let submit = document.getElementById('submitBtn');
let checkbox = document.getElementById('form2Example3');
let emailRegex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;




/**************/
/*            */
/*  Function  */
/*            */
/**************/

// a = 0

function isInputEmpty(){
	for(let i = 0; i<= formValue.length; i++){
		if(formValue[i].value == ""){
			alert('Tous les champs sont requis');
			return false;
		}
		console.log("les champs sont remplis");
		return true;
	}
}
function nameOk(){
	for(let i = 0; i<= formValue.length; i++){
		if(formValue[0].value.length > 2){
			console.log('Le prenom est ok');
			return true;
		}
		alert('Veuillez verifier votre prenom');
		return false;
	}
}

function isEmailSame(){
	for(let i = 0; i<= formValue.length; i++){
		if(formValue[2].value == formValue[3].value){
			console.log('les emails sont les mêmes');
			return true;
		}
		alert('Les emails doivent correspondre');
		return false;
	}
}

function isEmailGood(){
	for(let i = 0; i<= formValue.length; i++){
		if(emailRegex.test(formValue[2].value)){
			console.log("L'email est au bon format");
			return true;
		}
		alert("L'email n'est pas au bon format");
		return false;
	}
}

function isPasswordSame(){
	for(let i = 0; i<= formValue.length; i++){
		if(formValue[5].value == formValue[6].value){
			console.log('les mdp sont les mêmes');
			return true;
		}
		alert('Les mdp doivent correspondre');
		return false;
	}
}

function isPasswordLong(){
	for(let i = 0; i<= formValue.length; i++){
		if(formValue[5].value.length > 5){
			console.log('le mdp est assez long');
			return true;
		}
		console.log(formValue[5].value.length);
		alert('Le mdp doit contenir au moins 6 caractères');
		return false;
	}
}

function isAdult(){
	for(let i = 0; i<= formValue.length; i++){
		if(formValue[4].value >17){
			console.log("C'est un adulte");
			return true;
		}
		else if(!Number.isInteger(formValue[4].value)){
			alert("Veuillez vérifier votre age");
			return false;
		}
		alert('Vous êtes trop jeune');
		return false;
	}
}

function isCguCheck(){
	if(checkbox.checked == true){
		console.log("CGU acceptées");
		return true;
	}
	alert('Veuillez accepter les CGU')
	return false;
}



/**************/
/*            */
/*  Callback  */
/*            */
/**************/

submit.addEventListener('click', ()=>{isInputEmpty();});
submit.addEventListener('click', ()=>{nameOk();});
submit.addEventListener('click', ()=>{isEmailSame();});
submit.addEventListener('click', ()=>{isEmailGood();});
submit.addEventListener('click', ()=>{isPasswordSame();});
submit.addEventListener('click', ()=>{isPasswordLong();});
submit.addEventListener('click', ()=>{isAdult();});
submit.addEventListener('click', ()=>{isCguCheck();});
