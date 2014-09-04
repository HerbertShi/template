<?php
    require_once('config.php');

    $con = mysql_connect($db_host,$db_users,$db_pass);
    mysql_select_db($db_name, $con);
    mysql_query("SET NAMES UTF8");
    $sql = "select * from nx_ad where advertising <> '' group by concat(advertising,meaning,name,phone) ORDER BY createDate DESC";
    $res = mysql_query($sql,$con);

    while($rs = mysql_fetch_assoc($res))
    {
        $info[]=array(
            "id" => $rs["id"],
            "advertising" => $rs["advertising"],
            "meaning" => $rs["meaning"],
            "name" => $rs["name"],
            "phone" => $rs["phone"],
            "createDate" => $rs["createDate"]
        );
    }


    mysql_close($con);
    echo json_encode($info);

?>