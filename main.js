var app = new Vue({
  el: '.container',
  data: {
    bank: 'Bank',
    support: 'Support portal',
    login: 'Login',
    signature: 'Forgot your password?',
    link: 'Reset it here.',
    email: null,
    password: null,
    errors: []
  },

  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.email) {
        this.errors.push("");
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Invalid Username');
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});


var lengthPassword = document.querySelector('.field-password');
lengthPassword.onkeyup = function() {
  if (lengthPassword.value.length < 6 ){
    lengthPassword.classList.add("invalid");
  }else{
    lengthPassword.classList.remove("invalid");
    lengthPassword.classList.add("valid");

  }
  };

