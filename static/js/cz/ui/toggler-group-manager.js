define(['conditioner'],function(conditioner){

	'use strict';

	var TogglerGroupManager = function() {};

	TogglerGroupManager.prototype = {

		_groups:[],

		registerToggler:function(toggler) {

			// add toggler to correct group
			var group = toggler.getGroup();
			if (!this._groups[group]) {
				this._groups[group] = [toggler];
			}
			else {
				this._groups[group].push(toggler);
			}

			// listen to open events
			var self = this;
			conditioner.Observer.subscribe(toggler,'open',function(){
				self._onTogglerOpened(toggler);
			});
		},

		_onTogglerOpened:function(toggler) {

			var group = this._groups[toggler.getGroup()],i=0,l=group.length;
			for (;i<l;i++) {
				if (group[i]!==toggler && group[i].getTarget() !== toggler.getTarget()) {
					group[i].close();
				}
			}

		}

	};

	var _instance = null;
	return {
		getInstance:function() {
			if (!_instance) {_instance = new TogglerGroupManager();}
			return _instance;
		}
	};

});