<?php

$destino = 'j.vito@bluebat.co';
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$correo = isset($_POST['correo']) ? $_POST['correo'] : '';
$referencia = isset($_POST['referencia']) ? $_POST['referencia'] : '';
$optWeb = isset($_POST['opt-web']) ? $_POST['opt-web'] : '';
$optArq = isset($_POST['opt-arq']) ? $_POST['opt-arq'] : '';
$optBranding = isset($_POST['opt-branding']) ? $_POST['opt-branding'] : '';
$optRedes = isset($_POST['opt-redes']) ? $_POST['opt-redes'] : '';
$optOtros = isset($_POST['opt-otros']) ? $_POST['opt-otros'] : '';
$texto = isset($_POST['textarea']) ? $_POST['textarea'] : '';

$motivo = 'Motivo del mensaje:</br><ul>';

$optWeb ? $motivo .= '<li>Web</li></li>': '';
$optArq ? $motivo .= '<li>Arquitectura de la Información</li>': '';
$optBranding ? $motivo .= '<li>Branding</li>': '';
$optRedes ? $motivo .= '<li>Redes</li>': '';
$optOtros ? $motivo .= '<li>Otros</li>': '';
$motivo .= '</ul>';

$headers = "From: " . $correo ."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// $contenido = 'Nombre: '. $nombre .'\r\nCorreo: '. $correo.'\r\nReferencia: '. $referencia.'\r\n'.$motivo.'Mensaje:\r\n' . $texto;

$contenido = '<html><body>';
$contenido .= '<p>Nombre: '.$nombre.'</p>';
$contenido .= '<p>Correo: '.$correo.'</p>';
$contenido .= '<p>Referencia: '.$referencia.'</p>';
$contenido .= $motivo;
$contenido .= '<p>Mensaje: </br>'.$texto.'</p>';

mail($destino, 'Contacto', $contenido, $headers);
header('Location:index.html');


?>
