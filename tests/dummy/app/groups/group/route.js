import Ember from 'ember';

export default Ember.Route.extend({

  groupsService: Ember.inject.service(),

  model: function (params) {
    this.set('groupId', params.id);
    return Ember.RSVP.hash({
      users: this.get('groupsService').users(params.id),
      items: this.get('groupsService').getItemsById(params.id)
    });
  },

  actions: {
    remove (user) {
      this.get('groupsService').removeUsers(this.get('groupId'), [user])
        .then((resp) => {
          this.refresh();
        }, (err) => {
          alert(err);
        });
    }
  }
});
