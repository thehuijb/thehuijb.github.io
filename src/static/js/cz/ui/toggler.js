define(['jquery','conditioner','ui/toggler-group-manager'],function($,conditioner,TogglerGroupManager) {

	'use strict';

	var exports = function(element,options) {

		this._options = options;
		this._element = element;

		// setup target target
		this._target = this._options.target ? $(this._options.target) : $(this._element).next();

		// check if this toggler should be part of a group
		if (this._options.group) {
			TogglerGroupManager.getInstance().registerToggler(this);
		}

		// if has events defined (by default this is 'click')
		if (this._options.events) {
			$(this._element).bind(this._options.events,this.toggle.bind(this));
		}

		// set the initial state of the toggler
		this._init();
	};

	exports.options = {
		'animate':false,
		'open':false,
		'target':null,
		'group':null,
		'events':'click'
	};

	exports.prototype = {

		_init:function() {
			if (!this._options.open) {
				this.close(true);
			}
		},

		toggle:function() {
			if (this.isClosed()) {
				this.open();
			}
			else {
				this.close(false);
			}
		},

		open:function() {
			if (this._options.animate) {
				this._target.slideDown('slow');
			} else {
				this._target.show();
			}
			this._element.setAttribute('data-toggle-state', 'open');
			conditioner.Observer.publish(this,'open',this);
		},

		close:function(bypassAnimation) {
			// If animations are switched on we need to know the current height so we can restore
			// the element to this height later on
			if (this._options.animate && !bypassAnimation) {
				this._target.slideUp('slow');
			} else {
				this._target.hide();
			}
			this._element.setAttribute('data-toggle-state', 'closed');
			conditioner.Observer.publish(this,'close',this);
		},

		isClosed:function() {
			return $(this._target).css('display') === 'none';
		},

		getCalculatedTarget:function() {
			return this._target;
		},

		getGroup:function() {
			return this._options.group;
		},

		getTarget:function() {
			return this._options.target;
		}
	};

	return exports;

});
