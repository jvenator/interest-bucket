import BooksBaseController from './base';

export default BooksBaseController.extend({
  actions: {

    cancel: function() {
      this.transitionToRoute('books');
      return false;
    }

  }
});
