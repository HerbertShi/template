<?php
	require_once('config.php');

	$story = urldecode($_POST['story']);
	$name = urldecode($_POST['name']);
	$phone = $_POST['phone'];


	$con = mysql_connect($db_host,$db_users,$db_pass);
	mysql_select_db($db_name, $con);
	mysql_query("SET NAMES UTF8");
	$sql = "insert into nx_story values (0,'".$story.
	"','".$name.
	"','".$phone.
	"' ) ";
	$res = mysql_query($sql,$con); 
	
	echo $res;
?>