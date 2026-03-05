# Tic Tac Toe

Jogo da velha completo desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe), com foco em **organização de código**, **factory functions** e **module pattern**.

## Objetivo do Projeto

O objetivo principal era praticar:
- Organização de código com Module Pattern e Factory Functions
- Encapsulamento e separação de responsabilidades
- Manipulação do DOM de forma estruturada
- Lógica de jogo (verificação de vitória, empate)
- Gerenciamento de estado da aplicação
- Interfaces entre diferentes módulos do código
- Escopo e closures em JavaScript

## O que é?

Um jogo da velha (tic-tac-toe) totalmente funcional para dois jogadores contendo:
- Sistema de registro de jogadores com nomes personalizados
- Tabuleiro interativo 3x3
- Marcadores X e O para cada jogador
- Sistema de turnos alternados
- Detecção automática de vitória
- Detecção de empate
- Interface para reiniciar o jogo

## Como usar

1. Abra o arquivo `index.html` em seu navegador
2. Digite os nomes dos dois jogadores nos campos de entrada
3. Clique em "Começar" para iniciar o jogo
4. Player 1 (X) e Player 2 (O) clicam alternadamente nas células do tabuleiro
5. O jogo detecta automaticamente vitória ou empate
6. Use o botão "Limpar" para reiniciar

## Funcionalidades

- **Sistema de Jogadores**: Registro de nomes personalizados para ambos os jogadores
- **Tabuleiro Interativo**: Grid 3x3 com células clicáveis
- **Turnos Alternados**: Sistema automático de alternância entre jogadores
- **Detecção de Vitória**: Verifica todas as combinações possíveis (linhas, colunas, diagonais)
- **Detecção de Empate**: Identifica quando o tabuleiro está cheio sem vencedor
- **Validação de Jogadas**: Impede marcação em células já ocupadas
- **Interface Dinâmica**: Feedback visual imediato das jogadas
- **Reset do Jogo**: Permite começar uma nova partida a qualquer momento

## Padrões de Código

- **Module Pattern**: Usado para encapsular funcionalidades e prevenir poluição do escopo global
- **Factory Functions**: Criação de objetos (jogadores, tabuleiro) sem uso de `new`
- **Separation of Concerns**: Módulos separados para renderização, lógica do jogo e interface
- **Closures**: Proteção de variáveis privadas dentro dos módulos

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+) - Module Pattern, Factory Functions, Closures

---

Projeto desenvolvido seguindo: [The Odin Project - Tic Tac Toe](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
