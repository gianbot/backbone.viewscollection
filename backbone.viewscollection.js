// Backbone.ViewsCollection
// -------------------
// Extend standard collection class for our sets of views, ordered
// or unordered. If a `comparator` is specified, the Collection will maintain
// its views in sort order, as they're added and removed.
! function() {

    var Collection = Backbone.ViewsCollection = function(views, options) {
        options || ( options = {});
        if (options.view)
            this.view = options.view;
        if (options.comparator !==
            void 0)
            this.comparator = options.comparator;
        this.model = this.view;
        this.models = this.views = [];
        this._reset();
        this.initialize.apply(this, arguments);
        if (views)
            this.reset(views, _.extend({
                silent : true
            }, options));
    };

    _.extend(Collection.prototype, Backbone.Collection.prototype, {

        view : Backbone.View,

        sync : function() {
            // View not need to sync...
            return this;
        },
        
        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function(model, options) {
          options = options ? _.clone(options) : {};
          // TODO: default view creation...
          if(!model){
              model = new this.view();
          }
          if (!(model = this._prepareModel(model, options))) return false;
          this.add(model, options);
          return model;
        },

        _prepareModel : function(attrs, options) {
            if ( attrs instanceof Backbone.View) {
                if (!attrs.viewCollection)
                    attrs.viewCollection = this;
                return attrs;
            }
            // Only Backbone.View allowed!
            return false;
        },

        // Internal method to remove a model's ties to a collection.
        _removeReference : function(model) {
            if (this === model.viewCollection)
                delete model.viewCollection;
            model.off('all', this._onModelEvent, this);
        },
    });
    
    var unusedMethods = ['toJSON', 'fetch'];

    // Unused method
    _.each(unusedMethods, function(meth){
        delete(Collection.prototype['meth']);
    });
    // Copy extend form Backbone.Collection
    Collection.extend = Backbone.Collection.extend;

}();
