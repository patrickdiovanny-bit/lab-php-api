# Laboratórios de PHP (aula de 16/11/2026)

Desenvolvimento Web em HTML5, CSS, JavaScript e PHP. Laboratórios **individuais**: cada aluno faz o seu.

## Opção 1: no navegador, sem instalar nada (GitHub Codespaces)

1. Clique em **Code → Codespaces → Create codespace on main** (ou abra https://codespaces.new/wender-firmino/lab-php-api).
2. Espere o ambiente abrir (cerca de 1 a 2 minutos na primeira vez). O PHP 8.2 já vem instalado e o servidor liga sozinho.
3. A página `index.html` abre ao lado do editor. Se não abrir, vá na aba **Portas**, ache a porta **8080** e clique no ícone de globo.
4. Edite os arquivos PHP no editor, salve e **atualize a página**. Não precisa de `curl` nem de terminal.

Se o servidor não estiver rodando (a página não carrega), abra um terminal e rode: `php -S 0.0.0.0:8080 -t .`

## Opção 2: no seu computador (XAMPP)

Copie esta pasta para `C:\xampp\htdocs\lab-php-api`, ligue o Apache e abra `http://localhost/lab-php-api/index.html`.
Sem Apache: dentro da pasta, rode `C:\xampp\php\php.exe -S localhost:8000` e abra `http://localhost:8000/index.html`.

> Abrir os arquivos com duplo clique (`file://`) **não** executa o PHP.

## O que fazer

- **Laboratório 1:** crie `lista.php` e abra por `/lista.php`.
- **Laboratório 2:** complete `api/produtos.php` (o `js/app.js` já vem pronto). Teste `api/produtos.php?categoria=casa` direto no navegador e depois a página `index.html`.
- **Laboratório 3:** complete os três `TODO` de `api/contato.php` e use `contato.html`.
