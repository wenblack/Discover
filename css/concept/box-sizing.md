# Box Sizing
* Uso: Alterar o comportamento padrão de cada elemento html.
<br>

Por padrão o Html conta o Padding a partir do conteúdo. O que acaba fazendo com que o padding seja ignorado e aumentando o tamanho do layout. Por isso, é muito comum vermos sites alterando todos o box-sizing (tipo ou tamanhos dos elementos ) para border-box
<br>

Exemplos:
```css
*{
    box-sizing: border-box
}

```