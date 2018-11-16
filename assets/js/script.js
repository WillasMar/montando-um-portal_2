var slideItem = 0;
var aux = 0;
var posicao = -1;
var bolinhaPos = 0;

window.onload = function(){

	setInterval(PassarSlide, 9000);

	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slide = document.getElementsByClassName('slide');
	var slideArea = document.getElementsByClassName('slideShowArea');
	var cont = 0;

	for(i=0; i<slide.length; i++){
		slide[i].style.width = slideWidth + 'px';
		cont++;
	}

	for(i in slideArea){
		slideArea[0].style.width = slideWidth * cont + 'px';
	}
}

function PassarSlide(){
	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slide = document.getElementsByClassName('slide');
	var slideArea = document.getElementsByClassName('slideShowArea');
	var bolinha = document.getElementsByClassName('bolinha');

	for(i=0; i<bolinha.length; i++){
		bolinha[i].style.background = '#000';
	}

	if(aux == 0){
		slideItem++;
		bolinhaPos = slideItem;

		if(slideItem == slide.length - 1){
			aux = 1;
		}
	}else{
		slideItem--;
		bolinhaPos = slideItem;

		if(slideItem == 0){
			aux = 0;
		}
	}

	slideArea[0].style.marginLeft = '-' + (slideWidth * slideItem) + 'px';
	bolinha[bolinhaPos].style.background = '#FFF';
}

function MudarSlide(pos){
	slideItem = pos;
	bolinhaPos = pos;
	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slideArea = document.getElementsByClassName('slideShowArea');
	var slide = document.getElementsByClassName('slide');
	var bolinha = document.getElementsByClassName('bolinha');

	for(i=0; i<bolinha.length; i++){
		bolinha[i].style.background = '#000';
	}

	if(slideItem == slide.length - 1){
		aux = 1;
	}else if(slideItem == 0){
		aux = 0;
	}

	slideArea[0].style.marginLeft = '-' + (slideWidth * slideItem) + 'px';
	bolinha[bolinhaPos].style.background = '#FFF';
}

function mostrarMenu(){
	var menu = document.getElementById("menuMobile");

	if(menu.style.display == 'none'){
		menu.style.display = 'block';
	} else if(menu.style.display == 'block'){
		menu.style.display = 'none';
	} else{
		menu.style.display = 'block';
	}
}