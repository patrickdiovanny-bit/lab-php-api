<?php
// Laboratório 1: lista de produtos com frete grátis
// Etapa 1: crie o vetor $produtos com 3 itens (nome e preco)
// Etapa 2: foreach mostrando <p>nome - preco</p>
// Etapa 3: se o preço for 100 ou mais, acrescente ' (frete grátis)' antes de fechar o </p>
$produtos = [
    ["nome" => "Camiseta", "preco" => "49.99"],
    ["nome" => "Caneca", "preco" => "29.9"],
    ["nome" => "Tênis", "preco" => "199.9"],
];

foreach ($produtos as $p) {
    echo "<p>" . $p['nome'] . " - " . $p['preco'];
        $extra = "  ";
        if ($p['preco'] >= 100) {
            $extra = " (frete grátis)";
    }
    echo $extra . "</p>";
}



?>