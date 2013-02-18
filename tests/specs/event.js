describe("Event triggering and handling", function(){
	
	it("Handling a 'reset' event", function(){
		var baseViewsCollection = new Backbone.ViewsCollection();
		
		var spyCollection = createEventSpy(baseViewsCollection, ['reset']);
		//spyCollection.spyOnEvent('reset');
		
		baseViewsCollection.reset();
		
		expect(baseViewsCollection).toHaveBeenTriggered('reset');
	});
	
	it('Event on a view bubbled in the collection', function(){
		var baseViewsCollection = new Backbone.ViewsCollection();
		var view = new Backbone.View();
		
		var spyCollection = createEventSpy(baseViewsCollection, ['all', 'customEvent']);
		var spyView = createEventSpy(view, ['all', 'customEvent']);
		
		baseViewsCollection.add(view);
			
		view.trigger('customEvent');
		
		expect(view).toHaveBeenTriggered('all');
		expect(view).toHaveBeenTriggered('customEvent');
		expect(baseViewsCollection).toHaveBeenTriggered('all');
		expect(baseViewsCollection).toHaveBeenTriggered('customEvent');
		
	})
	
})
