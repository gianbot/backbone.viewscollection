describe("First suite - Initializing:", function() {

    var A;
    var baseViewsCollection = new Backbone.ViewsCollection();
    
    baseViewsCollection.on('all', function(){
        console.log('event', arguments);
    })
    
    it('Can be extendible', function() {
        A = Backbone.ViewsCollection.extend();
        expect(A).toBeDefined();
    });
    it("Don't have a toJSON method", function() {
        expect(A.toJSON).toBeUndefined();
    })
    it('Have a views array', function() {
        // Test a empty array
        expect(baseViewsCollection.views.length).toBe(0);
    });
    it("Can be resetted", function() {
        baseViewsCollection.add(new Backbone.View());
        baseViewsCollection.reset();
        expect(baseViewsCollection.views.length).toBe(0);
    });
    it('Can add a view', function() {
        baseViewsCollection.reset();
        expect(baseViewsCollection.views.length).toBe(0);
        baseViewsCollection.add(new Backbone.View());
        expect(baseViewsCollection.views.length).toBe(1);
    })
    it("Can't add a model", function() {
        
        baseViewsCollection.reset();
        expect(baseViewsCollection.views.length).toBe(0);
        baseViewsCollection.add(new Backbone.Model());
        expect(baseViewsCollection.views.length).not.toBe(1);
    })
    
    it("Create a default view", function(){
        baseViewsCollection.reset();
        var view = baseViewsCollection.create();
        expect(baseViewsCollection.views.length).toBe(1);
        expect(view).toBeDefined();
    });
}); 