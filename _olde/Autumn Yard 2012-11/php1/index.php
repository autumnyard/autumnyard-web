<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PHP Test</title>
  </head>
  <body>
  <?php
	$NUMBER=16;
	$TXT="The URL should be: http://personales.alumno.upv.es/pabdelao/index.php?NUMBER=";
	echo $TXT . $NUMBER;
	$conn = ftp_connect("95.23.138.30") or die("Could not connect");
	/*
	$file = fopen("info.txt","a");
	echo fprintf($file,"   %u",$NUMBER);
	fclose($file);
	*/
  ?>
  </body>
</html>