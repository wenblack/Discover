# TIPOS DE SELETORES E SUAS FORÇAS:

* Globais/Universal - `*` 
* Elemento - `h1, h2,div`
* ID - `#container, #header`
* Classe - `.container, .header`
* Atributo, Pseudo-classe, Pseudo-elemento e etc

Multiplicador de força dos elementos:

0000.  Universal/ Global, pseudoclasse negativa
0001.  Elemento , pseudo-elementos
0010.  Classe e atribu
0100.  ID 
1000.  Inline 

DICA:Combinar mais de um tipo aumenta o multiplicador, só usar o important quando o css não for meu

# At-rules

*Comportamento do CSS. Começa com `@` seguido de indentificador e valor 

Exemplos:

-@import - inclui um CCS externo
-@media - regra condicional de tela de dispositivo
-@font-face - fonte externa
-@key-frames -Animação 

# Shorthand

Declarar varios atributos de um elemento CSS em uma unica linha. 

Docs: https://developer.mozilla.org/pt-BR/docs/Web/CSS/Shorthand_properties

# Vendor Prefixes
* webkit - Chrome, Safari, IOS, Android 
* moz - Mozilla
* ms- IE
* o - Opera

Docs: http://ireade.github.io/which-vendor-prefix/

# Força de tipos

* 1. Inline
* 2. Interno
* 3. Externo