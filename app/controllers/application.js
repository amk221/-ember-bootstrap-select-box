import Controller from '@ember/controller';

const thing1 = {
  id: 1,
  name: 'Thing 1'
};

const thing2 = {
  id: 2,
  name: 'Thing 2'
};

const thing3 = {
  id: 3,
  name: 'Thing 3'
};

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('things', [thing1, thing2, thing3]);

    this.set('model', {
      id: 1,
      thing: thing2
    });
  },

  actions: {
    submit(model) {
      console.log(JSON.stringify(this.get('model')));
      console.log(JSON.stringify(model));
    }
  }
});
