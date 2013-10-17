define(['jquery','ui/toggler'],function($,_super) {

	'use strict';

	var exports = function(element,options) {

		this._type = null;

		_super.call(this,element,{
			'animate':options.animate,
			'open':false,
			'target':options.target,
			'group':options.group,
			'events':'change',
			'expected':options.expected
		});

	};

	exports.options = {
		'target':null,
		'group':null,
		'expected':null
	};

	exports.prototype = Object.create(_super.prototype);

	exports.prototype._init = function() {
		this.toggle();
	};

	exports.prototype.toggle = function(param) {
		var bypassAnimation = (param) ? false : true;
		if (this.matchesExpectations()) {
			this.open();
		}
		else {
			this.close(bypassAnimation);
		}
	};

	exports.prototype.getSelectedValue = function() {

		switch(this.getType()) {
		case 'radiogroup':
			var checkables = this._element.getElementsByTagName('input');
			if (checkables.length) {
				return $('input:checked',this._element).val();
			}
			break;
		default:
			return $(this._element).val();
		}
		return null;
	};

	exports.prototype.getSelectedIndex = function() {

		switch(this.getType()) {
		case 'select':
			return this._element.selectedIndex;
		case 'radiogroup':
			var i= 0,checkables = this._element.getElementsByTagName('input'),l=checkables.length;
			if (l) {
				for (;i<l;i++) {
					if (checkables[i].checked) {
						return i;
					}
				}
			}
			break;
		default:
			break;
		}

		return null;
	};

	exports.prototype.matchesExpectations = function() {

		var expected = this._options.expected;

		switch(this.getType()) {
		case 'checkable':

			// if no expected value, expect the checkable to be checked
			if (expected === null) {
				expected = true;
			}

			// if expected has been set match it to the state of the checkable
			return expected === $(this._element).is(':checked');

		case 'select':
		case 'radiogroup':

			// if no expected value set the first index is the expected value
			if (expected === null) {
				return this.getSelectedIndex() === 0;
			}

			var currentValue = this.getSelectedValue();

			// if expected value set and begins with exclamation mark invert the target
			if (typeof expected === 'string') {

				var values = expected.split(','),
					includedValues = ';',
					excludedValues = ';',
					i=0,
					l=values.length,
					includedMatch = false,
					excludedMatch = false;

				// Loop through the expected values and create one string with all the inverse targets
				// and one with the normal targets
				for(; i<l; i++){
					// Check if it is an inverse target
					if (values[i].charAt(0) === '!') {
						// Add a ; at the end so we can tell the various values apart
						excludedValues += values[i].substring(1) + ';';
					} else {
						includedValues += values[i] + ';';
					}
				}
				// Check if we have inverse targets
				if (excludedValues !== ';') {
					// The toggler should be active if the current value isn't in the list of excluded values
					// additional ; is used to test for the single value
					excludedMatch = (excludedValues.indexOf(';' + currentValue + ';') === -1);
				}

				if (includedValues !== ';') {
					// The toggler should be active if the current value is in the list of expected values
					// additional ; is used to test for the single value
					includedMatch = (includedValues.indexOf(';' + currentValue + ';') > -1);
				}

				// The toggler should be active when the current value doesn't match the exclude list or when it does match the include list
				return (includedMatch || excludedMatch);
			}

			// simply compare the expected value to the current value
			return expected === currentValue;

		default:
			break;
		}

		return false;

	};

	// returns the type of the element: select/checkable/radiogroup
	exports.prototype.getType = function() {
		if (!this._type) {
			if (this._element.nodeName === 'SELECT') {
				this._type = 'select';
			}
			else if (this._element.nodeName === 'INPUT') {
				this._type = 'checkable';
			}
			else if (this._element.getElementsByTagName('input').length) {
				this._type = 'radiogroup';
			}
		}
		return this._type;
	};

	return exports;

});
