<?php 
header('Content-Type: text/html; charset=UTF-8');
?>


<?php

$pg=1;
$endereco='mobile.php';
if(isset($_GET['pg']) and $_GET['pg']!=0){
	$pg=$_GET['pg'];
}
$k=$pg+1;
$diretorio = scandir('pages');
$total = count(scandir('pages'))-2;

?>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src='zoom-master/jquery.zoom.js'></script>
<script>
	$(document).ready(function(){
	
		$('.zoom').zoom({ on:'click', magnify	: 2 });
		
		var largura = $(window).width();
//alert(largura);
		novaLargura= (largura/100)*2;
		//alert(novaLargura);
		novaLargura=(largura-novaLargura)-50;
		//alert(novaLargura);
		$('#paginaimagem').css('width', novaLargura);
		$('#select_page').change(function(){
			var pagina_selecionada = $(this).val();
			window.location.assign("<?php echo $endereco.'?pg='; ?>"+pagina_selecionada);
		});
	});
</script>
<style>
	/* styles unrelated to zoom */
	* { border:0; margin:0; padding:0; }
	p { position:absolute; top:3px; right:28px; color:#555; font:bold 13px/1 sans-serif;}

	/* these styles are for the demo, but are not required for the plugin */
	.zoom {
		display:inline-block;
		position: relative;
	}
	
	/* magnifying glass icon */
	.zoom:after {
		content:'';
		display:block; 
		width:33px; 
		height:33px; 
		position:absolute; 
		top:0;
		right:0;
		background:url(icon.png);
	}

	.zoom img {
		display: block;
	}

	.zoom img::selection { background-color: transparent; }

	#ex2 img:hover { cursor: url(grab.cur), default; }
	#ex2 img:active { cursor: url(grabbed.cur), default; }
	
	
	#paginacao{
		width: 100%;
		background: #0178a3;
		height: 60pt;
		font-size: 50pt;
		color: white;
	}
	
	#paginacao a{
		color: white;
		padding: 10pt 10pt 10pt 10pt;
		text-decoration: none;
		font-weight: light;
	}
	
	#paginacao img{
		height: 50pt;
		padding: 0 0 0 0;
		margin: 0 0 0 0;
		
		vertical-align: middle;
		
	}
	
	#paginacao strong a {
		background: #fff;
		color: #10385b;		
		padding: 10pt 10pt 10pt 10pt;
		text-decoration: underline;
		font-weight: 900;
	}
	
	#select_page{
		color: #fff;
		background: #0178a3;
		width: 70px;
		height: 50px;
		font-size: 40px;
		padding: 0 0 0 0;
		margin: 0 0 0 0;
		
	}
	
	
	
	
</style>
<?php

echo '<center>';


$primeira = "<a class='bt' href='{$endereco}?pg=1'><img  src='img/start.png'></a>";
$anterior=1;
if($pg>1){
	$anterior=$pg-1;
}
$voltar="<a class='bt' href='{$endereco}?pg={$anterior}'><img  src='img/reward.png'> </a>| ";
$proxima=$total;
if($pg<$total){
	$proxima = $pg+1;
}
$paginas_select="<select id='select_page'>";
for($i=1; $i<=$total; $i++){
	if($i==$pg){
		$selected= "selected";
	}
	else{
		$selected='';
	}
	$paginas_select.= "<option value='{$i}' {$selected} >{$i}</option>";
	
}
$paginas_select.="</select>";
$avancar=" |<a class='bt' href='{$endereco}?pg={$proxima}'><img  src='img/forward.png'></a>";
$ultima="<a class='bt' href='{$endereco}?pg={$total}'><img  src='img/end.png'></a>";
?>
<div id='paginacao'>
<?php echo $primeira;
	echo $voltar;
	echo $paginas_select;
	echo  $avancar;
	echo $ultima;
?>
</div>
<br><br>
<?php echo '<span id="paginaimg"><div  class="zoom"><img  id="paginaimagem" src="pages/'.$diretorio[$k].'" ></div></span>';?> 

</center>
