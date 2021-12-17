# BackGround CSS Exemplo
```css
*{
    
    background-color:;/*Cor de fundo*/
    background-image:url('Alguma URl');/*Escolher imagem de fundo*/
    background-repeat:no-repeat;/*Imagem aparece mais de 1x*/
    background-position:center;/*Posicionamento da imagem*/
    background-size:contain;/*Contain:Se ajusta Cover: Estica*/
    background-origin:content-box;/*Onde inicia content ou border*/
    background-clip:content-box;;/*Corta o background*/
    background-attachment:fixed; /*Background fixo ou total*/

    /*Gradiente :Angulo, 2 ou 3 cores*/
    background:linear-gradient(45deg,red, yellow);

    /*Shorthand*/
    background: blue url() no-repeat center / contain content-box content-box fixed ;

    /*multiplos Backgrounds: Utilizar virgula*/
    background: linear-gradient(45deg,red, yellow), blue url() no-repeat center / contain content-box content-box fixed ; 
      
}
```
