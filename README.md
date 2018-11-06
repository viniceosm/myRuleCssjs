# myRuleCssjs

> my js my rules css

Create rules css using js.

Para não repetir blocos de códigos CSS e não quer usar Pré-processador CSS é uma alternativa para salvar partes CSS em variáveis.

css:

```css
.box-login-google {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

js:

```javascript
new MyRuleCssjs().css('.box-login-google', `
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`);
```

[See example google box using lib](https://viniceosm.github.io/myRuleCssjs/example-box-google.html)
