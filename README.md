# myRuleCssjs
> my js my rules css

Create rules css using js.
Para quem n�o quer usar Pr�-processador CSS (para n�o repetir blocos de c�digos css) � uma alternativa para salvar partes css em vari�veis.

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
