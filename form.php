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

$motivo = 'Motivo del mensaje:\r\n';

$optWeb ? $motivo .= 'Web\r\n': '';
$optArq ? $motivo .= 'Arquitectura de la Información\r\n': '';
$optBranding ? $motivo .= 'Branding\r\n': '';
$optRedes ? $motivo .= 'Redes\r\n': '';
$optOtros ? $motivo .= 'Otros\r\n': '';



$contenido = 'Nombre: '. $nombre .'\r\nCorreo: '. $correo.'\r\nReferencia: '. $referencia.'\r\n'.$motivo.'Mensaje:\r\n' . $texto;

mail($destino, 'Contacto', $contenido);
header('Location:index.html');

?>
