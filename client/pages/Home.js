Template.Home.events({
    'click .btn': ()=> {
        Session.set('nav-toggle','open');
    },
    'click .btn-text': ()=> {
        Session.set('nav-toggle','open');
    }
});