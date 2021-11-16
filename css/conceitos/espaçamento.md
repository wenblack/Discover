# Tipos de espaçamento e Layout em Front-End

## Padding
* Espaçamento interno 

```css
*{
    /*Shorthand*/
    padding : 1px 1px 1px 1px;/*top right bottom left*/
    padding : 1px 1px 1px; /*top left-right bottom*/
    padding : 1px 1px;/*top-bottom left-right*/
    padding : 1px; /*All*/
}
```
*DICA: Padding pode causar diferença na largura de um elemento

## Margin
* Espaçamento externo, entre elementos

```css
*{
    /*Shorthand*/
    margin : 1px 1px 1px 1px;/*top right bottom left*/
    margin : 1px 1px 1px; /*top left-right bottom*/
    margin : 1px 1px;/*top-bottom left-right*/
    margin : 1px; /*All*/
}
```
*DICA: Em elementos block a margin bottom do primeiro e a top do próximos se juntam

## Layout: Display block e Inline
**Block**                          **Inline**
--------------------   | -------------------------------
Ocupa toda a linha     | Um elemento ao lado do outro
---------------------  | -------------------------------
wid e heig respeitados | wid e heig não funcionam
---------------------  | -------------------------------
todos os espaçamentos  | Somente valores horizontais 
funcionam              | funcionam.
(margin,paddin, border)|
---------------------  | -------------------------------


