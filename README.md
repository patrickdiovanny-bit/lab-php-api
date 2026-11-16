# Laboratórios de PHP (aula de 16/11/2026)

Desenvolvimento Web em HTML5, CSS, JavaScript e PHP. Laboratórios **individuais**: cada aluno faz o seu.

## Opção 1: no navegador, sem instalar nada (GitHub Codespaces)

Cada aluno trabalha na **própria cópia** (fork) e usa a **própria cota gratuita** do GitHub. Não abra o Codespace direto neste repositório.

1. Entre no GitHub com a sua conta e clique em **Fork** (canto superior direito) → **Create fork**. Você ganha uma cópia em `seu-usuario/lab-php-api`.
2. Na **sua cópia**, clique em **Code → Codespaces → Create codespace on main**.
3. Espere o ambiente abrir (cerca de 1 a 2 minutos na primeira vez). O PHP 8.2 já vem instalado e o servidor liga sozinho.
4. A página `index.html` abre ao lado do editor. Se não abrir, vá na aba **Portas**, ache a porta **8080** e clique no ícone de globo.
5. Edite os arquivos PHP no editor, salve e **atualize a página**. Não precisa de `curl` nem de terminal.
6. Ao terminar, **pare o Codespace** (menu do canto inferior esquerdo → *Stop Current Codespace*) para não gastar a cota. Ele também desliga sozinho após um tempo parado.

Se o servidor não estiver rodando (a página não carrega), abra um terminal e rode: `php -S 0.0.0.0:8080 -t .`
Se o Codespaces não estiver disponível na sua conta (cota esgotada, por exemplo), use a Opção 2.

## Opção 2: no seu computador (XAMPP)

Copie esta pasta para `C:\xampp\htdocs\lab-php-api`, ligue o Apache e abra `http://localhost/lab-php-api/index.html`.
Sem Apache: dentro da pasta, rode `C:\xampp\php\php.exe -S localhost:8000` e abra `http://localhost:8000/index.html`.

> Abrir os arquivos com duplo clique (`file://`) **não** executa o PHP.

## O que fazer

- **Laboratório 1:** crie `lista.php` e abra por `/lista.php`.
- **Laboratório 2:** complete `api/produtos.php` (o `js/app.js` já vem pronto). Teste `api/produtos.php?categoria=casa` direto no navegador e depois a página `index.html`.
- **Laboratório 3:** complete os três `TODO` de `api/contato.php` e use `contato.html`.

## Gabarito

A solução dos três laboratórios está na branch [`resposta`](../../tree/resposta). Tente primeiro sozinho e compare depois.
