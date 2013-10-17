define(['pikaday','modernizr','moment','conditioner', 'jquery'],function(Pikaday,Modernizr,moment,conditioner,$){

	'use strict';

	// http://tools.ietf.org/html/rfc3339 -> topic 5.6 full-date
	var _fullDate = 'YYYY-MM-DD';

	var exports = function(element,options){

		this._element = element;
		this._options = options;

		// create output field (used to pass values to backend)
		this._isoOutput = document.createElement('input');
		this._isoOutput.setAttribute('type','hidden');
		this._isoOutput.id = this._element.id + this._options.outputPostfix;
		this._isoOutput.name = this._element.getAttribute('name') + this._options.outputPostfix;
		this._element.parentNode.appendChild(this._isoOutput);

		// if support for input type date no need to load the datepicker
		// move outside of module after setting up conditioner
		if (!Modernizr.inputtypes.date) {
			this._setupPicker();
			this._element.addEventListener('keyup',this._onSelect.bind(this));
		}
		else {
			this._element.addEventListener('input',this._onSelect.bind(this));

			// ios5 only triggers on blur
			this._element.addEventListener('blur',this._onSelect.bind(this));
		}

		this._init();
	};

	exports.options = {
		'outputPostfix':'_iso',
		'inputFormat':'YYYY-MM-DD',
		'buttonClassName':'calendar',
		'locale':{
			'label':'Calendar',
			'previousMonth':'Previous Month',
			'nextMonth':'Next Month',
			'months':moment.langData('nl')._months,
			'weekdays':moment.langData('nl')._weekdays,
			'weekdaysShort':moment.langData('nl')._weekdaysMin
		}
	};

	exports.prototype = {

		_init: function() {
			conditioner.Observer.publish(this,'select', this.getDate());

			// copy current value
			this._updateOutput();
		},

		_isDateObject: function(object){
			return Object.prototype.toString.call(object) === '[object Date]';
		},

		/**
		 * Setup custom date picker
		 * @private
		 */
		_setupPicker:function() {

			// datepicker
			$(this._element).addClass('fallback');

			// vars
			var self = this,
				maxdate = this._element.getAttribute('max'),
				mindate = this._element.getAttribute('min'),
				yearMin = this._element.getAttribute('data-year-min'),
				yearMax = this._element.getAttribute('data-year-max'),
				value = this._element.getAttribute('value'),
				btn = document.createElement('button');

			var yearRange;
			if (yearMin && yearMax) { // Year range specified?
				yearRange = [yearMin, yearMax];
			}
			else if (mindate && maxdate) {
				// No year range specified, create year range from min and max dates
				yearRange = [mindate.split('-')[0], maxdate.split('-')[0]];
			} else {
				// No year or date range specified, set range to current year - 120 until current year.
				var currentYear = (new Date()).getFullYear();
				yearRange = [currentYear - 120, currentYear];
			}

			// setup date Pikaday picker, copy options from datepicker options
			this._picker = new Pikaday({
				'field':this._element,
				'firstDay':1,
				'trigger':btn,
				'yearRange':yearRange,
				'defaultDate':maxdate ? moment(maxdate).toDate() : new Date(),
				'format':this._options.inputFormat,
				'i18n':{
					'previousMonth':this._options.locale.previousMonth,
					'nextMonth':this._options.locale.nextMonth,
					'months':this._options.locale.months,
					'weekdays':this._options.locale.weekdays,
					'weekdaysShort':this._options.locale.weekdaysShort
				},
				'onSelect':function(){
					self._onSelect();
				}
			});

			// create calendar button, so the user can toggle the calendar before clicking the input
			// creates button, binds click event and attaches the button right after the input element
			btn.setAttribute('className','calendar');
			btn.setAttribute('type','button');
			btn.className = this._options.buttonClassName;
			btn.textContent = this._options.locale.label;
			this._element.parentNode.insertBefore(btn,this._element.nextSibling);

			// set initial state
			if (maxdate !== null && maxdate.length) {
				this.setMax(moment(maxdate).toDate());
			}

			if (mindate !== null && mindate.length) {
				this.setMin(moment(mindate).toDate());
			}

			if (value !== null && value.length) {
				this.setDate(moment(value).toDate());
			}

		},

		reset:function() {
			this._element.value = '';
			this._updateOutput();
		},

		/**
		 * Navigate to the supplied date
		 * @param date {Date}
		 */
		goto:function(date) {
			if (this._picker) {
				this._picker.goto(date);
			}
		},

		/**
		 * Returns the currently selected date
		 * @return date {Date}
		 */
		getDate:function() {

			if (this._picker) {
				return this._picker.getDate();
			}
			return this._element.valueAsDate;
		},

		/**
		 * Select a new date
		 * @param date {Date}
		 */
		setDate:function(date) {

			if (this._picker) {
				this._picker.setDate(date);

				if (!date) {
					this._element.value = '';
				}
			}
			else {
				this._element.value = date ? moment(date).format(_fullDate) : '';
			}

			this._onSelect();

			this._updateOutput();
		},

		getMin: function() {
			if (this._picker ) {
				return this._minDate;
			} else {
				return this._element.min;
			}
		},

		/**
		 * Set supplied date as the minimum date
		 * @param date {Date}
		 */
		setMin:function(date) {
			if (this._picker) {
				this._picker.setMinDate(date);
				this._minDate = date;
			}
			else {
				this._element.min = moment(date).format(_fullDate);
			}

			if (!this._isDateObject(date)) { date = new Date(date); }
			// if already has after date attribute, overwrite
			if (this._element.getAttribute('data-afterdate')) {
				this._element.setAttribute('data-afterdate',date.getTime().toString());
			}

			this._updateOutput();
		},

		getMax: function() {
			if (this._picker) {
				return this._maxDate;
			} else {
				return this._element.max;
			}
		},

		/**
		 * Set supplied date as the maximum date
		 * @param date {Date}
		 */
		setMax:function(date) {
			if (this._picker) {
				this._picker.setMaxDate(date);
				this._maxDate = date;
			}
			else {
				this._element.max = moment(date).format(_fullDate);
			}

			if (!this._isDateObject(date)) { date = new Date(date); }
			// if already has before date attribute, overwrite
			if (this._element.getAttribute('data-beforedate')) {
				this._element.setAttribute('data-beforedate',date.getTime().toString());
			}

			this._updateOutput();
		},

		/**
		 * Triggers 'select' event so other modules can listen and know when a date has been selected
		 */
		_onSelect:function(event) {
			this._updateOutput();
			conditioner.Observer.publish(this,'select',this.getDate());
		},

		_updateOutput:function() {
			if (this._element.value === '') {
				this._isoOutput.value = '';
				return;
			}
			var date = this.getDate();
			if (date) {
				this._isoOutput.value = moment(date).format('YYYY-MM-DD');
			}
			else {
				this._isoOutput.value = '';
			}
		}

	};

	return exports;

});