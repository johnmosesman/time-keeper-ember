import Ember from 'ember';

export default Ember.Component.extend({
  placeholder: function() {
    return "ex: " + this.get('category').get('amount') / 2 + " hours";
  }.property('category.amount'),

  amount: function() {
    if (!Ember.isEmpty(this.get('category').get('records').get('firstObject'))) {
      return this.get('category').get('records').get('firstObject').get('amount');
    }
  }.property('category.records.firstObject.amount'),

  actions: {
    save: function() {
      var amount = this.get('amount');
      var category = this.get('category');

      if (Ember.isEmpty(category.get('records'))) {
        console.log("Create record");

        this.store.createRecord('record', {
          amount: amount,
          category: category
        }).save();
      }
      else {
        console.log("Update record");

        var record = category.get('records').get('firstObject');
        record.set('amount', amount);
        record.save();
      }
    }
  }
});