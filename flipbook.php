<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<?  $fullscreen='nao';
	$page=false;
	if(isset($_GET['fullscreen'])){
		$fullscreen=$_GET['fullscreen'];
	}
	
	if(isset($_GET['page'])){
		$page=$_GET['page'];
	}
?>
<html >
<head>
<title>Suportes EOS</title>
<meta name="author" content="Daniel Meurer" >
<meta name="keywords" content="comercial,frigelar" >
<meta http-equiv="Content-type" content="text/html; charset=iso-8859-1" >
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/turn.min.js"></script>
<script type="text/javascript" src="js/zoom.min.js"></script>
<script type="text/javascript" src="js/revista.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css"  href="visual.css" >
<link rel="stylesheet" type="text/css" media="all" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" >
<?  $fullscreen='nao';
	$page=false;
	if(isset($_GET['fullscreen'])){
		$fullscreen=$_GET['fullscreen'];
	}
	
	if(isset($_GET['page'])){
		$page=$_GET['page'];
	}
	//var_dump( $_GET['page']);
	$carregarPage='';
	if(isset($page) and ($page>1)){?>
	<script language="javascript">	
		function definePaginaInicial(){
			$('#magazine').turn('page',<?echo $page;?>);		
		}	
	</script>
	<? $carregarPage='onload="definePaginaInicial()"' ;?>
	
<?}?>
<style type="text/css">
.oculta {
   display:none;
}

.normal {
   display:block;
}
</style>
<script  type="text/javascript" language="javascript">

window.onload = function() {
   document.getElementById( "site" ).className = "normal";
   document.getElementById("carregando").className="oculta";
}
</script>
</head>
<body   <? echo $carregarPage ;?> >	
<div class="oculta" id="site">
<!-- código do site carregado -->
	<div id="menu_container">	
		<center>
		<table id="menu" border="0" cellpadding="10" >
			<tr>					
				<td><img height="50" alt="Frigelar" src="img/logo.png" ></td>
				<td width="100"></td>
				<td><div id="first" title="Ir para primeira pagina."> </div></td>
				<td><div id="antes" class="prev" title="Pagina anterior"> </div></td>
				<td><input id="pagina" type="text" size="5" value='0'></td>
				<td><div id="depois" class="nex" title="Proxíma pagina"> </div></td>
				<td><div id="last" title="Ir para última pagina.">  </div></td>	
				<td><div id="fit_page" title="Tamanho normal">   </div></td>						
				<td><div id="zoom_mais" title="Zoom +">   </div></td>
				<td><div id="zoom_menos" title="Zoom -">  </div></td>
				
				<td></td>
			</tr>	
		</table> 
		</center>
	</div>

	<center>
	<div id="zoom-port">
		<div id="magazine">
			<? 
			
			
			$diretorio = scandir('pages');
			$num = count($diretorio) -2;
			for ($i=1 ;$i <= $num; $i++){
				echo '<div style="background:url(pages/'.$diretorio[$i+1].');
				background-repeat: no-repeat; 
				background-size: 100% 100%;				
				-webkit-background-size: 100% 100%;
				-o-background-size: 100% 100%;
				-khtml-background-size: 100% 100%;
				-moz-background-size: 100% 100%;				
				"><div class="bt"></div></div>';	
			/*	echo '<div style="background:url(pages/mala_bimestral_comercial'.$i.'.jpg); 
				background-repeat: no-repeat; 
				background-size: 100% 100%;				
				-webkit-background-size: 100% 100%;
				-o-background-size: 100% 100%;
				-khtml-background-size: 100% 100%;
				-moz-background-size: 100% 100%;				
				"><div class="bt"></div></div>'; */
			}
			
			?>	
		</div>
		
	</div>
	</center>
	<center>
	<div id="prev" class="prev" title="Pagina anterior" > </div>   </center>
	<center>
	<div id="nex" class="nex" title="Próxima pagina" > </div>		
	 
	</center>
	<input type="hidden" id="fullscreen" value= " <? echo $fullscreen ; ?> " >
	
		
<!-- Fim código do site-->
</div>
<div class="normal"  id="carregando" align="center">
<!-- Carregando... -->
	<br><br><br><br><br><br><br>
	<center>
		<img src="img/loading.gif" alt="">
		<br>
		<span style="color: #FFF; Font-family: Arial;">Aguarde carregando...</span>
	</center>
	
<!--... -->
</div>
</body>
</html>
