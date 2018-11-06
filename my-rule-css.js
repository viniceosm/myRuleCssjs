function MyRuleCssjs () {};
MyRuleCssjs.prototype = {
	css: function (selector, aPropsValues) {
		aPropsValues = aPropsValues.split('\n');

		aPropsValues = aPropsValues.filter(function(pv){ return pv.trim() !== '' });

		for (i in aPropsValues) {
			aPropsValues[i] = aPropsValues[i].trim();
		}

		aPropsValues = aPropsValues.join('\n');

		var rule = selector + '{\n' + aPropsValues + '\n}';

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