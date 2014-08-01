<?php
header("Content-type: text/html; charset=utf-8");
if($_GET['pass'] != '13524161046'){
	die('抱歉;你无权访问此页面~');
}

if(isset($_GET['page'])){        
	$page = $_GET['page'];       
}else{
	$page = 1;                   
}

require_once('config.php');
$con = mysql_connect($db_host,$db_users,$db_pass);
mysql_select_db($db_name, $con);
mysql_query("SET NAMES UTF8");
$res  = mysql_query('select * from members',$con);
$count = mysql_num_rows($res);       

$page_size = 20;                        
$all_page = ceil($count/$page_size);   
$start = ($page-1)*$page_size;          
$sql = "select * from members limit $start, $page_size";        
$res = mysql_query($sql,$con); 
mysql_close($con);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-compatible" content="IE=EmulateIE8" />
<title>活动报名列表</title>
</head>
<body>

<table border='1'>
<tr><td>名字</td><td>手机</td><td>添加时间</td></tr>
<?php
while($row = mysql_fetch_assoc($res)){
	echo "<tr>";
	echo "<td>".$row['name']."</td>";
	echo "<td>".$row['mobile']."</td>";
	echo "<td>".$row['add_time']."</td>";
	echo "</tr>";
}
?>
<table>
<?php
for($i = 1; $i <= $all_page; $i++){        
	if($i == $page){                    
		echo $i."\n";
	}else{
		echo "<a href='?page=$i&pass=13524161046'>$i</a>\n";
	}
}
?>
</body>
</html>
