// helper.js

function createEventSpy(element, events){
	
	var jasmineEventExtensions = {
		eventSpies : {},
		spyOnEvent : function(eventName) {
			var control = {
				triggered : false
			};
			element.on(eventName, function() {
				control.triggered = true;
			});
			jasmineEventExtensions.eventSpies[eventName] = control;
		}
	};
	element.__eventSpy = jasmineEventExtensions;
	if(events){
		for(var i=0;i<events.length; i++){
			jasmineEventExtensions.spyOnEvent(events[i]);
		}
	}
	return jasmineEventExtensions;
}
	

beforeEach(function() {
	this.addMatchers({
		toHaveBeenTriggered : function(event) {
			var control = this.actual.__eventSpy && this.actual.__eventSpy.eventSpies[event];
			return control && control.triggered;
		}
	});
});
