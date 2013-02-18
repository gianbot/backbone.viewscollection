// Backbone.ViewsCollection
// -------------------
// Extend standard collection class for our sets of views, ordered
// or unordered. If a `comparator` is specified, the Collection will maintain
// its views in sort order, as they're added and removed.
!function(){

  var Collection = Backbone.ViewsCollection = function(views, options) {
    options || (options = {});
    if (options.view) this.view = options.view;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this.model = this.view;
    this.models = this.views = [];
    this._reset();
    this.initialize.apply(this, arguments);
    if (views) this.reset(views, _.extend({silent: true}, options));
  };

  _.extend(Collection.prototype, Backbone.Collection.prototype, {

    view: Backbone.View,

    sync: function() {
      // View not need to sync...
      return this;
    },

    _prepareModel: function(attrs, options) {
      if (attrs instanceof Backbone.View) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      // Only Backbone.View allowed!
      return false;
    }

  });

}();
