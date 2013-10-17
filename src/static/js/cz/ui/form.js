define(['jquery','conditioner','parsley'],function($, conditioner) {

	'use strict';

	/**
	 * see http://parsleyjs.org/documentation.html for parsley docs
	 * @param element
	 * @param options
	 */
	var exports = function(element,options) {

		this._element = element;
		this._options = options;

		// load validation
		if (this._options.validation.enabled) {
			this._setupValidation();
		}

		var self = this;
		function keyPressHandler(event) {
			self._keyPress(event);
		}

		this._element.addEventListener('keypress', keyPressHandler);
	};

	exports.options = {
		validation:{
			enabled:true,
			trigger:'change',
			messages:{},
			label:{
				valid:'valid'
			},
			classNames:{
				markerValid:'validity-marker-valid',
				wrapper:'form-item',
				success:'validity-valid',
				error:'validity-invalid',
				list:'validity-list',
				listItem:'validity-list-item'
			}
		}
	};

	exports.prototype = {

		_keyPress: function(event) {
			// First check to make sure the enter key was pressed
			if (event.keyCode === 13) {
				// Get the target element
				var target = event.target;
				// Rudimenatry check to see if the collectiviteit search element is where the enter key was pressed
				if (target.tagName.toLowerCase() === 'input' && target.type.toLowerCase() === 'search') {
					// Cancel the event, we don't want to submit the form at this moment
					event.cancelBubble = true;
					event.returnValue = false;

					if (event.stopPropagation) {
						event.stopPropagation();
						event.preventDefault();
					}
				}
			}
		},

		_validate:function() {
			return $(this._element).parsley('validate');
		},

		_isWebForm:function() {
			return this._element.nodeName !== 'FORM';
		},

		_onWebFormSubmit:function(e) {

			e.stopPropagation();
			var valid = this._validate();
			if (!valid) {
				e.preventDefault();
				return;
			}

			// fire submit event
			conditioner.Observer.publish(this,'submit',this);

			// get original onclick handler
			var handler = e.target.getAttribute('data-submit-handler');
			if (handler) {
				// not sure if this will implode the universe or create an accidental black hole or two, either way, this is bad
				/* jshint -W054 */
				(new Function( 'return ' + handler ))();
			}
			else {
				// post should be handled by other module
				e.preventDefault();
			}
		},

		_setupWebForm:function() {

			// set as data type form
			this._element.setAttribute('data-webform','true');

			// listen to click event on submit buttons to allow triggering manual validation
			var btns = this._element.querySelectorAll('button[data-type=submit]'),
				i=0,
				l=btns.length,
				btn,onclick;

			for (;i<l;i++) {
				btn = btns[i];
				onclick = btn.getAttribute('onclick');
				btn.addEventListener('click',this._onWebFormSubmit.bind(this));
				if (onclick) {
					btn.setAttribute('data-submit-handler',onclick);
					btn.setAttribute('onclick','return false;');
				}
			}

		},

		_toggleSubmit:function(enabled) {

			var btns = this._element.querySelectorAll('button[data-type=submit]'),l=btns.length,i=0,btn;
			for (;i<l;i++) {
				btn = btns[i];
				if (!enabled) {
					btn.setAttribute('disabled','disabled');
				}
				else {
					btn.removeAttribute('disabled');
				}
			}

		},

		_setupValidation:function() {

			// prevent default HTML5 form validation if this is not a fake form
			if (this._isWebForm()) {
				this._setupWebForm();
			}
			else {
				this._element.setAttribute('novalidate','novalidate');
			}

			// setup options quick reference
			var opts = this._options.validation;

			// setup parsley to automatically do form validation based on the data attributes applied to the form elements
			$(this._element).parsley({
				animate:false,
				validationMinlength:1,
				trigger:opts.trigger,
				successClass:opts.classNames.success,
				errorClass:opts.classNames.error,
				messages:opts.messages,
				validators:opts.validators,
				formatters:opts.formatters,
				errors:{
					classHandler:function(field) {
						return $(field).parent('.' + opts.classNames.wrapper);
					},
					errorsWrapper:'<ul class="' + opts.classNames.list + '"></ul>',
					errorElem:'<li class="' + opts.classNames.listItem + '"></li>'
				}
			});
		}

	};

	return exports;

});
