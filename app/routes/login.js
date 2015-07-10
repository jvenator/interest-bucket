import Ember from 'ember';

export default Ember.Route.extend({
  authenticator: 'authenticator:torii',

    actions: {
      githubLogin: function() {
        this.get('session').authenticate('simple-auth-authenticator:torii', 'github-oauth2').
          then(function () {
            alert("logged in");
          });
        return;
      }
    }
});
