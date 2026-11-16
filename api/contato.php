<?php
header("Content-Type: application/json");
function responder($status, $dados) {
    http_response_code($status);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}
// TODO 1: se o método não for POST, responda 405 e encerre
$texto = file_get_contents("php://input");
$dados = json_decode($texto, true);
$nome = "";
// TODO 2: se $dados for vetor e tiver a chave nome, guarde-o em $nome
// TODO 3: se $nome não for texto ou estiver vazio (trim), responda 400 (erro: "Falta nome")
responder(201, ["ok" => true, "nome" => trim($nome)]);
