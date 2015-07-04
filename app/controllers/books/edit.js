import BooksBaseController from './base';

export default BooksBaseController.extend({

  actions: {

    cancel: function() {
      this.transitionToRoute('books.show', this.get('model'));
      return false;
    }

  }
});
