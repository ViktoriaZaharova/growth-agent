<?php

$recepient = "info@agentrosta.ru"; //заменить на свой почтовый ящик
$sitename = "АГЕНТ РОСТА";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["mail"]);
$message = trim($_POST["message"]);

$message = "Телефон: $phone \nE-mail: $email \nВаши пожелания: $message";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");