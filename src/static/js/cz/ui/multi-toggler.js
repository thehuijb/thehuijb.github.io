define(['jquery','ui/toggler', 'conditioner'],function($,Toggler,Conditioner) {

	'use strict';

	var exports = function(element) {

		this._element = element;
		this._togglers = [];

		// create new Togglers based on the options defined,
		// these togglers will register to a group automatically since the select has a name attribute
		var items = this._element.querySelectorAll('[value]'),i=0,l=items.length,item,target;
		for (;i<l;i++) {
			item = items[i];
			target = item.getAttribute('data-target');
			if (!target) {
				continue;
			}
			this._togglers[item.getAttribute('value')] = new Toggler(element,{
				'animate':this._element.getAttribute('data-toggler-animate'),
				'events':'',
				'group':this._getGroup(),
				'open':false,
				'target':target
			});
			Conditioner.Observer.inform(this._togglers[item.getAttribute('value')], this);
		}

		// used to open the correct Toggler when the user changes the selection
		$(this._element).bind('click',this._onClick.bind(this));

		// show the default selected item
		this._toggle();
	};

	exports.prototype = {

		_onClick:function() {

			// only needs to toggle on change event
			this._toggle();

		},

		_getGroup:function() {

			if (this._isSelect()) {
				return this._element.getAttribute('name');
			}
			else {
				return this._element.querySelector('input').getAttribute('name');
			}

		},

		_getValue:function() {

			if (this._isSelect()) {
				return $(this._element).val();
			}
			else {
				return $('input:checked',this._element).val();
			}

		},

		_isSelect:function() {
			return $(this._element).is('select');
		},

		_toggle:function() {

			// reads the current value to get the matching Toggler and opens the Toggler
			var toggler = this._togglers[this._getValue()],key;
			if (toggler) {
				toggler.open();
			}
			else {
				for (key in this._togglers) {
					if (!this._togglers.hasOwnProperty(key)){continue;}
					this._togglers[key].close();
				}
			}
		}

	};

	return exports;

});
