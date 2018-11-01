function MyRuleCssjs () {};
MyRuleCssjs.prototype = {
	css: function (selector, aPropsValues) {
		var rule = selector + '{';
		for (prop of Object.keys(aPropsValues)) {
			rule += '\n\t' + prop + ': ' + aPropsValues[prop] + ';';
		}

		rule += '\n}';

		this.addRuleClass(rule);
	},
	createStyleMyRuleCss: function () {
		var style = document.createElement('style');
		style.id = 'myrulejs-style';
		style.type = 'text/css';
		style.innerHTML = '';
		document.getElementsByTagName('head')[0].appendChild(style);

		return style;
	},
	addRuleClass: function (rule) {
		var style = document.getElementById('myrulejs-style');

		if (style === null) {
			style = this.createStyleMyRuleCss();
		}

		style.innerHTML += '\n' + rule;
	}
};