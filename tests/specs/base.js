describe("First suite - Initializing:", function(){

    var A;

    it('Can be extendible', function(){
      A = Backbone.ViewsCollection.extend();
      expect(A).toBeDefined();
    });

    var baseViewsCollection = new Backbone.ViewsCollection();
    it('Have a views array', function(){
      // Test a empty array
      expect(baseViewsCollection.views.length).toBe(0);
    });
    it("Can be resetted", function(){
      baseViewsCollection.reset();
      expect(baseViewsCollection.views.length).toBe(0);
    });
    baseViewsCollection.reset();
    it('Can add a view', function(){
      expect(baseViewsCollection.views.length).toBe(0);
      baseViewsCollection.add(new Backbone.View());
      expect(baseViewsCollection.views.length).toBe(1);
    })
    baseViewsCollection.reset();
    it("Can't add a model", function(){
      baseViewsCollection.add(new Backbone.Model());
      expect(baseViewsCollection.views.length).not.toBe(1);
      console.log(baseViewsCollection.views);
    })

});