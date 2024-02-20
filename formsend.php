<?php

$name =  $_POST['name'];
$email =  $_POST['email'];
$tel =  $_POST['tel'];
$msg = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$msg = htmlspecialchars($msg);

if (mail("paradicedae@gmail.com",
        "Новое письмо с сайта",
        "Имя: " .$name. "\n",
        "Почта: " .$email. "\n",
        "Телефон: " .$tel. "\n",
        "Сообщение: " .$msg. "\n")
) {
    echo ('Письмо отправлено');
} 

else {
    echo ('Письмо не отправлено');
}

?>