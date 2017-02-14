/*@Author: Daniel Soares Meurer */
$(window).ready(function() {	
	modefullscreen='nao';	
	$('body').css('overflow','hidden'); 	
	//alert(document.fullscreenElement);
	redefineFullscreenSize();
	//centralizarRevista();
	posicionarSetas();
	
	//$('#prev').css('left',);
	$('#magazine').turn({							
		display: 'double',
		acceleration: true,
		gradients: !$.isTouch,
		elevation:50,
		
		when: {
			turned: function(e, page) {		
				/*$('embed').remove();				
				$('body').append('<embed src="som/page-flip-1.wav" autostart="true" hidden="true" loop="false">');*/
				var totalPg=total_paginas();											
				/*console.log('Current view: ', $(this).turn('view'));*/
				//$('#pagina').html('<span class="paginas" >'+ page + '</span>');
				//alert($(this).turn('view'));
				/*			
				var totalPg=total_paginas();	
				var pgAtual=page;					
				var limite=6;					
				var grupoId=1;					
				var texto= '';
				var inicioGrupo=1;
				var grupoAtual=0;
				var qtdGrupos= totalPg/limite;
				var paginas= new Array();//array para guardar
				var grupopg= new Array();					
				var y=0;
				/*Separa paginas por grupon e identifica o grupo atual de paginas*/
			/*	do {	
					paginas[grupoId]=new Array();					
					for(i=inicioGrupo; i< inicioGrupo+limite; i++){
						y++;							
						paginas[grupoId][y]	= i;
								
						if(page==i){								
							grupoAtual=grupoId;																																														
						}									
					}
					//grupopg[grupoId]=paginas[];					
					inicioGrupo=inicioGrupo+limite;
					grupoId++;
					y=0;	
					
				} while (grupoId <= qtdGrupos);
				/*Fim Separa paginas por grupo*/
				
				/*Adiciona ao paginação apenas paginas do grupo atual  */
			/*	idST='';
				for(y=1; y<=limite; y++){
					if(paginas[grupoAtual][y]==page){
					texto += '<button id="atual" >'+ paginas[grupoAtual][y] + '</button>';
					}else{						
						texto += '<button class="paginas" onClick="mudaPagina('+paginas[grupoAtual][y]+')">'+ paginas[grupoAtual][y] + '</button>';
					}
				} 
				*/
				/* FIM*/
					
				//if(tela=='sim')	{							
					//$('#magazine').turn("zoom", 1.2);	
				//	$('#magazine').css('height',750);
						
				//}	
				//redefineFullscreenSize();		
				var valor=$(this).turn('view')+'/'+totalPg;
				$("#pagina").val(valor);
				
				 atribuir();
				//redefineFullscreenSize();
			}
		}						
	});
	
	/*$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange',function (){
		//redefineFullscreenSize();	
		//$('#magazine').css('cursor','url(http://www.webcis.com.br/images/lupa-clientes.cur), default');
	}); */
	/*	
	$(function (){
		$('#magazine').css('height',750);
	});
	*/	
	$('#magazine').hover(function(){
		
		//$(this).css('cursor','url(http://www.webcis.com.br/images/lupa-clientes.cur), default');
		
	});
	
	function total_paginas(){			
		paginas=$('#magazine').turn('pages');
		return paginas;	
	}		
		
	$(function() {
		$( document ).tooltip();
	});
			 
	$(window).bind('keydown', function(e){
		
		if (e.keyCode==37)
			$('#magazine').turn('previous');
		else if (e.keyCode==39)
			$('#magazine').turn('next');
			
	});	
	
	$('.prev').click(function() {
		
		$('#magazine').turn('previous');  
		  
	});
	
	$('.nex').click(function() {
	  $('#magazine').turn('next');			  		    
	});
	
	$('#first').click(function() {
	  $('#magazine').turn('page', 1);
	});		
	
	$('#last').click(function() {
		pagina_final=$('#magazine').turn('pages');
	  $('#magazine').turn('page', pagina_final);			 
	});
	
	$('#fit_page').click(function() {
		var telaCheia=verificaFullscreen();
		var browser=verificaBrowser();
		if(browser!='ie' && telaCheia==true){
			$('#magazine').turn("zoom", 1.2);	
		}
		else{
			$('#magazine').turn("zoom", 1);	
		}
		$( '#magazine').draggable( "destroy" );	
		$('#nex').css('display', 'block');
		$('#prev').css('display', 'block');	
		$( '#magazine').css('position', 'fixed');
		$( '#magazine').css('top', '80px');
		
		
		
		centralizarRevista();
		/*$( '#magazine').css('left', '20%');
		$( '#magazine').css('width', '878.4px');
		$( '#magazine').css('height', '620.1px');*/
			
	});
		
	$('#zoom_mais').click(function() {
		var zoom_value=$('#magazine').turn("zoom");		
		if(zoom_value < 3){
			var novo_zoom=zoom_value + 1;
			posicionarSetas()
			$('#magazine').turn("zoom", novo_zoom);
			$('#nex').css('display', 'none');
			$('#prev').css('display', 'none');
			
			$( '#magazine').draggable({ cursor: "move"},{revert: false});			
		}				
	});
	
	$('#zoom_menos').click(function() {
		var browser=verificaBrowser();
		var isFullscreen=verificaFullscreen();		
		var zoomNormal=1;		
		
		var zoom_value=$('#magazine').turn("zoom");			
		 
		if(browser!='ie' && isFullscreen==true ){
			zoomNormal=1.2;
			zoom_value=zoom_value.toFixed(1);			
		}
				
		if(zoom_value >zoomNormal){
			var novo_zoom=zoom_value-1;						
			$('#magazine').turn("zoom", novo_zoom);				
			zoom_value=$('#magazine').turn("zoom");
			zoom_value=zoom_value.toFixed(1);
			//zoom_value=zoon_round;
			if(zoom_value==zoomNormal){
				
				$( '#magazine').draggable( "destroy" );	
				$('#nex').css('display', 'block');
				$('#prev').css('display', 'block');	
				$( '#magazine').css('position', 'fixed');
				$( '#magazine').css('top', '80px');
				centralizarRevista();
				posicionarSetas();
				//redefineFullscreenSize();				
			}		
		}
	
	});	
		
	$('#zoom-port').click(function() {
		var browser=verificaBrowser();
		var isFullscreen=verificaFullscreen();		
		var zoomNormal=1;
		if(browser!='ie' && isFullscreen==true ){
			zoomNormal=1.2;
		}
		
		var zoom_value=$('#magazine').turn("zoom");
		//alert($('#magazine').turn("display"));
		$('#nex').css('display', 'none');
		$('#prev').css('display', 'none');
		//$('#menu_container').css('display', 'none');
		if(zoom_value==zoomNormal){			
			$('#magazine').turn("zoom", zoomNormal+1);
			//$('#magazine').turn("display", "single");	
			$( '#magazine').draggable({ cursor: "move"},{revert: false});									
		}
		else if(zoom_value==zoomNormal+1){
			$('#magazine').turn("zoom", zoomNormal+2);						
		}
		else{
			$('#magazine').turn("zoom", zoomNormal);	
			//$('#magazine').turn("destroy").remove();
			$( '#magazine').draggable( "destroy" );
						
			$( '#magazine').css('position', 'absolute');
			$( '#magazine').css('top', '80px');
			posicionarSetas();
			centralizarRevista();	
			//redefineFullscreenSize();
			/*		
			$( '#magazine').css('width', '878.4px');
			$( '#magazine').css('height', '620.1px');	*/
			
			$('#nex').css('display', 'block');
			$('#prev').css('display', 'block');
			//$('#menu_container').css('display', 'block');		
		}	
	});	
	$('#tela').click(function(){posicionarSetas();});
	$(function(){			
		var tela=$('#fullscreen').val();
		bt_fullscreen='<input type="button" id="full_screen_bt" title="Tela cheia" onclick="maxwin()" > </button>';
		bt_normalscreen='<button id="min_screen" title="Sair do modo tela cheia" onclick="minwin()"> </button> ';
		if(navigator.appName=='Microsoft Internet Explorer'){				
			if(tela=='sim'){
				$('#tela').html( bt_normalscreen );
			}
			else{
				$('#tela').html( bt_fullscreen );
			} 
		}					
	});	
	
	$('#pagina').change(function(){
		//alert('sdsd');
		var valor=$(this).val();
		$('#magazine').turn('page',valor);		
	});
	
	/* Evento  de transição de tela cheia para normal*/
	$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange',function(){
		
		//redefineFullscreenSize();
		var isFull=verificaFullscreen();
		if(isFull){
			posicionarSetas();
			$('#magazine').turn('zoom',1.2);
			//posicionarSetas();
		}
		else{
			
			$('#tela').html('<button id="full_screen_bt" title="Tela cheia" onclick="maxwin()" > </button>');
			
			$('#magazine').turn('zoom',1);
			posicionarSetas();
			//posicionarSetas(); 
		}
	});
	/*fim transição */
	closeWin();
	/*
	$(document).keydow(function(e){
		var tecla = (e.keyCode?e.keyCode:e.which);
		alert(tecla);	
	}); */
			
});
//keypress(function(e){
//$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange',function(){posicionarSetas();});

function redefineFullscreenSize(){
	var tela=$('#fullscreen').val();
	var isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
	if(tela=='sim')	{
		//alert('ie');				 		
		//$('#magazine').turn("zoom", 1.2);	
		$('#magazine').css('height',720);
		$('#magazine').css('width',1050);								
	}		
	else if(isFullScreen == true){
		$('#magazine').turn("zoom", 1.2);		
						 		
		//$('#magazine').turn("zoom", 1.2);	
		/*$('#magazine').css('height',720);
		$('#magazine').css('width',1050);*/						
	}		
	else{	
							
		$('#magazine').css('height',620);
		$('#magazine').css('width',878.4);	
	}
	//centralizarRevista();	
}
	
function mudaPagina(pagina){
	
	pagina_final=$('#magazine').turn('pages');
	if((pagina!=1)&&(pagina!=pagina_final) && (pagina%2!=0)){
	$('#magazine').turn('page',pagina+1);
	}		
	else{		
		$('#magazine').turn('page',pagina);	
	}	
};

function centralizarRevista(){
	largWindow=$(window).width();
	var tela=$('#fullscreen').val();
	var isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
	if(tela=='sim')	{			
		largMagazine=1050;
	}
	else if(isFullScreen == true){	
		largMagazine=1050;
	}
	else{
		largMagazine=878.4;
	}		
	var larguraTela=$(window).width();
	var restoTela=larguraTela-largMagazine;
	var ladosTela=restoTela/2;
	var positionLeft=ladosTela;
	
	$( '#magazine').css('left', positionLeft);	
}

function atribuir(){
	valor=$('#pagina').val();
	str=valor.replace(',','-');	
	$('#pagina').val(str);
}

function minwin(){
	if(navigator.appName=='Microsoft Internet Explorer'){
		var tela=$('#fullscreen').val();
		if(tela=='sim')	{		
			self.close();					
		}
		
	}
	else{		
		//modefullscreen='nao';
		if (document.exitFullscreen) {			
			document.exitFullscreen();
			$('#tela').click(function(){$(this).html('<button id="full_screen_bt" title="Tela cheia" onclick="maxwin()" > </button>');});		
			posicionarSetas();
			$('#magazine').turn("zoom", 1);
			//centralizarRevista();
			
		}
		else if (document.mozCancelFullScreen) {
			//alert(1);			
			document.mozCancelFullScreen();
			
			//redefineFullscreenSize();
			$('#tela').click(function(){$(this).html('<button id="full_screen_bt" title="Tela cheia" onclick="maxwin()" > </button>');});
			posicionarSetas();
			$('#magazine').turn("zoom", 1);
			//alert(2);
			//redefineFullscreenSize();
			//centralizarRevista();
			
			//alert(3);
		}
		else if (document.webkitCancelFullScreen) {								
			document.webkitCancelFullScreen();
			//posicionarSetas();	
							
			$('#tela').click(function(){$(this).html('<button id="full_screen_bt" title="Tela cheia" onclick="maxwin()" > </button>');});
							
			$('#magazine').turn("zoom", 1);
			//centralizarRevista();
			//redefineFullscreenSize();
			posicionarSetas();
			$('#magazine').turn("zoom", 1);
			
		}
		
		posicionarSetas();
		//$('#magazine').turn("zoom", 1);	
		
		//redefineFullscreenSize();
	}
	//centralizarRevista();
	posicionarSetas();
	
}



function verificaFullscreen(){
	if(navigator.appName=='Microsoft Internet Explorer'){
		var tela=$('#fullscreen').val();		
		if(tela=='sim')	{		
			return true;					
		}		
	}
	else{
		var isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
		if(isFullScreen){
			return true;
		}
		else{
			return(false);
		}		
	}		
}

function verificaBrowser(){
	if(navigator.appName=='Microsoft Internet Explorer'){
		return 'ie';
	}
	else{
		return 'outro';
	}
}

function maxwin() {	
	if(navigator.appName=='Microsoft Internet Explorer'){		
		paginaAtual=$('#magazine').turn('page');
		window.open ("index.php?fullscreen=sim&page="+paginaAtual,"","fullscreen=yes");  		
	}
	else{		
		
		var docElm = document.documentElement;
		if (docElm.requestFullscreen) {
			$('#tela').click(function(){$(this).html('<button id="min_screen" title="Sair do modo tela cheia" onclick="minwin()"> </button> ');});
			docElm.requestFullscreen();		
			posicionarSetas();	
			$('#magazine').turn("zoom", 1.2);
		}
		else if (docElm.mozRequestFullScreen) {			
			docElm.mozRequestFullScreen();
			$('#tela').click(function(){$(this).html('<button id="min_screen" title="Sair do modo tela cheia" onclick="minwin()"> </button> ');});
			posicionarSetas();
			$('#magazine').turn("zoom", 1.2);
			
		}
		else if (docElm.webkitRequestFullScreen) {
			
			docElm.webkitRequestFullScreen();
			$('#tela').click(function(){$(this).html('<button id="min_screen" title="Sair do modo tela cheia" onclick="minwin()"> </button> ');});			
			posicionarSetas();
			$('#magazine').turn("zoom", 1.2);
			
		}
		
		//centralizarRevista();	
		//redefineFullscreenSize();					
	}	
}	

function posicionarSetas(){
	largWindow=$(window).width();
	var tela=$('#fullscreen').val();
	var isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
	if(tela=='sim')	{			
		largMagazine=1050;
	}
	else if(isFullScreen){
		largMagazine=1050;
	}
	else{
		largMagazine=878.4;
	}
	
	sobra=largWindow-(largMagazine);
	lado=sobra/2;
	positionBase=lado-35;
	positionLeft=positionBase;
	positionRight=lado+largMagazine+5;
	//alert(positionRight+' , '+positionBase);
	$('#prev').css('left',positionBase);
	$('#nex').css('left',positionRight);	
	$('#nex').css('display', 'block');
	$('#prev').css('display', 'block');
}

function closeWin(){
	var browser=verificaBrowser();
	var telaCheia=verificaFullscreen();
	if(browser=='ie' && telaCheia==true){
		document.onkeyup=function(e){
			if(e.which == 27){
				self.close();
			}
		}
	}
	
}
