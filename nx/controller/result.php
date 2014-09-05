<?php
    require_once('config.php');

    $startIndex = $_POST['startIndex'];
    $pageSize = $_POST['pageSize'];

    $con = mysql_connect($db_host,$db_users,$db_pass);
    mysql_select_db($db_name, $con);
    mysql_query("SET NAMES UTF8");
    $sql = "select * from nx_ad where advertising <> '' group by concat(advertising,meaning,name,phone) ORDER BY voteCount DESC limit ".$startIndex.",".$pageSize;
    $res = mysql_query($sql,$con);

    while($rs = mysql_fetch_assoc($res))
    {
        $info[]=array(
            "id" => $rs["id"],
            "advertising" => $rs["advertising"],
            "meaning" => $rs["meaning"],
            "name" => $rs["name"],
            "phone" => $rs["phone"],
            "createDate" => $rs["createDate"],
            "voteCount" => $rs["voteCount"],
            "t" => $rs["t"]
        );
    }

    $sql = "select count(id) as n,sum(voteCount) as t from nx_ad ";
    $res = mysql_query($sql,$con);
    $count = mysql_fetch_array($res);
    $data = array(
        "table"=>$info,
        "pager"=>$count["n"],
        "t" => $count["t"]
    );

    mysql_close($con);
    echo json_encode($data);

?>