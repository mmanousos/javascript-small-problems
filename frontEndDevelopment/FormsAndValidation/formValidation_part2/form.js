$(function() {
  let $form = $('form');
  let $input = $('input');

  let App = {
    handleBlur: function(event) {
      let $control = $(event.target);
      if ($form[0].checkValidity()) {
        $('.error').text('');
      }
      this.validateControl($control);
    },
    handleFocus: function(event) {
      let $control = $(event.target);
      this.locateError($control).hide();
    },
    blockNonAlpha: function(event) {
      if (event.key.match(/[^a-z'\s]/gi)) {
        event.preventDefault();
      }
    },
    blockAlpha: function(event) {
      if (event.key.match(/[^\d]/g)) {
        event.preventDefault();
      }
    },
    handleSubmit: function(event) {
      event.preventDefault();
      if ($form[0].checkValidity()) {
        $('.error').text('');
      } else {
        $('.error').first().text('Fix errors before submitting this form.');
        this.validateFormInputs();
      }
    },
    locateError: function($control) {
      return $control.next('.error');
    },
    locateText: function($control) {
      return $control.parent('dd').prev().find('label').text();
    },
    validateFormInputs: function() {
      let self = this;
      $input.each(function() {
        self.validateControl($(this));
      });
    },
    validateKeypress: function(event) {
      let $control = $(event.target);
      let $currentValue = $control.val();
      if ($control[0].validity.patternMismatch) {
        console.log($currentValue);
        console.log($currentValue.slice(0, $currentValue.length-1));
        $control.val($currentValue.slice(0, $currentValue.length));  
      } else {
        $control.val($currentValue);
        console.log($currentValue.slice(0, $currentValue.length - 2)); 
      }
    },
    validateControl: function($control) {
      if ($control[0].validity.valueMissing) {
        this.handleValueAbsence($control);
        return false;
      } else if ($control[0].validity.patternMismatch) {
        this.handlePatternMismatch($control);
        return false;
      }
      return true;
    },
    handleValueAbsence: function($control) {
      let labelText = this.locateText($control);
      let $error = this.locateError($control);
      let errorMsg = `${labelText} is a required field.`
      
      this.markInvalid($control);
      this.displayError($error, errorMsg);
    },
    markInvalid: function($control) {
      $control.addClass('invalid');
    },
    displayError: function($error, errorMsg) {
      $error.text(errorMsg).show();
    },
    handlePatternMismatch: function($control) {
      let labelText = this.locateText($control);
      let $error = this.locateError($control);
      let errorMsg = `Please enter a valid ${labelText}.`
      if ($control.attr('id') === 'password') {
        errorMsg = 'Password must be between 10-20 characters.'
      }
      this.markInvalid($control);
      this.displayError($error, errorMsg);
    },
    init: function() {
      $form.on('submit', this.handleSubmit.bind(this));
      $input.on('focus', this.handleFocus.bind(this));
      $input.on('blur', this.handleBlur.bind(this));
      $('#first-name, #last-name').on('keypress', this.blockNonAlpha.bind(this));
      $('[id*="credit-card"]').on('keypress', this.blockAlpha.bind(this));
    },
  };

  App.init();
});