<?php

$recepient = "example@info.com"; //заменить на свой почтовый ящик
$sitename = "АГЕНТ РОСТА";

$phone = trim($_POST["phone"]);
$email = trim($_POST["mail"]);

$message = "Телефон: $phone \nE-mail: $email";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");