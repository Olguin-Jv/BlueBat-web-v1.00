<?php

    $destino = 'info@bluebat.co';
    $nombre = $_Post['nombre'];
    $correo = $_Post['correo'];
    $referencia = $_Post['referencia'];
    $optWeb = $_Post['opt-web'];
    $optArq = $_Post['opt-arq'];
    $optBranding = $_Post['opt-branding'];
    $optRedes = $_Post['opt-redes'];
    $optOtros = $_Post['opt-otros'];
    $mensaje = $_Post['textarea'];
    $contenido = 'Nombre: '. $nombre .'\nCorreo: '. $correo.'\nReferencia: '. $referencia.'\nTipo de proyecto:\nWeb: '.$optWeb.'\nArquitectura: '.$optArq.'\nBranding: '.$optBranding.'\nRedes: '.$optRedes.'Otros: '.$optOtros.'\n Mensaje: ' . $mensaje;

    mail($destino, 'Contacto', $contenido);

    header('Location:index.html');

?>