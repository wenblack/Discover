# Tipos de Medidas
-São fixas e não alteram seu valor 

* Tipos Numéricos:
<inteiro> positivos e negativos inteiros. EX: -4 ou 15
<numeros> decimais. EX: 3.4 , 5 ou -4.4
<dimensão> numeral com  unidade. EX: 90px, 2s , 90deg
<porcentagem> Necessita valor de referencia:Ex:width:50 %

*Unidades Comuns:
<tamanho> usado para distancia : px, em , vw
<angulo> usado para ângulo : deg, rad , turn
<tempo> usado para tempo : s, ms 
<resolucao> resolução para dispositivos : dpi

# Distancias absolutas <tamanho>
Unidade   Equivalência 
cm 1cm  =  96px/2.54
in 1in  =  2.54 = 96px
px 1px  =  1/96th de 1in

* DICA: Sempre utilizar px, não é recomendado usar cm

# Distancias relativas
-São relativas a algum valor, pode ser o elemento pai, root do navegador ou tamanho da tela.

Unidade   Relativo a
em        tamanho da fonte pai
rem       tamanho da font do elemento raiz(root/html)
vw        1 % da largura da tela
vh        1 % da altura  da tela

# Funções
 rgb() = A função rgb () define cores usando o modelo Red-green-blue (RGB).
 DOC:https://www.w3schools.com/cssref/func_rgb.asp

 hsl()  = A função hsl () define cores usando o modelo Hue-saturation-lightness (HSL).
 HSL significa matiz, saturação e luminosidade - e representa uma representação de cores em coordenadas cilíndricas.
 DOC: https://www.w3schools.com/cssref/func_hsl.asp

 url() = Importar arquivo de url externa.
 DOC: https://developer.mozilla.org/en-US/docs/Web/CSS/url()

calc() = A função  calc() CSS permite você executar cálculos quando especificar os valores de propriedades no CSS. 
DOC: https://developer.mozilla.org/pt-BR/docs/Web/CSS/calc()