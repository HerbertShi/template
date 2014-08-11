<?php
	require_once('config.php');

	$advertising = urldecode($_POST['advertising']);
	$meaning = urldecode($_POST['meaning']);
	$name = urldecode($_POST['name']);
	$phone = $_POST['phone'];


	$con = mysql_connect($db_host,$db_users,$db_pass);
	mysql_select_db($db_name, $con);
	mysql_query("SET NAMES UTF8");
	$sql = "insert into nx_ad values (0,'".$advertising.
	"','".$meaning.
	"','".$name.
	"','".$phone.
	"' ) ";
	$res = mysql_query($sql,$con); 
	
	echo $res;
?>