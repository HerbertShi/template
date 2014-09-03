<?php
    require_once('config.php');

    $ids = $_POST['ids'];


    $con = mysql_connect($db_host,$db_users,$db_pass);
    mysql_select_db($db_name, $con);
    mysql_query("SET NAMES UTF8");
    $sql = "update nx_ad set voteCount = voteCount+1 where id in (0".$ids.")";

    $res = mysql_query($sql,$con); 
    mysql_close($con);
    echo $res;

?>