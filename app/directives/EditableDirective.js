app.directive("ltcEditable", function($document) {
  return {
    scope: {
      text: "=ngModel"
    },
    restrict: 'A', // restrict directive to use as attribute
    link: function (scope, element, attrs) {
      // restrict this directive to span elements
      if(element[0].nodeName !== 'SPAN') {
         return;
      }

      // store refererences
      var $ = angular.element;
      var body = $($document[0].body);
      var input = $('<input type="text"/>');

      // initial value
      element.text(scope.text);

      // shit happens
      element.on("dblclick", function() {
        // class name classOff will prevent editable behaviour if element has that class
        if(!element.hasClass(attrs['classOff'])) {
           // swap span for input
          input.val(element.text());
          element.parent().append(input);
          input[0].focus();
          element.text('');

          // nice ux :)
          input.on("keydown", function(event) {
            if(event.which == 13 || event.which == 27) {
              input.triggerHandler('blur');
            }
          });

          // handle click outside
          body.on('click', function(event) {
            if(event.target !== input[0]) {
              input.triggerHandler('blur');
            }
          });

          // on blur, store value and clean up after ourselves
          input.on('blur', function(event) {
            // unregister listeners!
            body.off();
            input.off();

            // set value - could validate before!
            element.text(input.val());

            // clean up
            input.remove();
          });
        }
      });
    }
  };
});