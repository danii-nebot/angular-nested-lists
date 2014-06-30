app.directive("editable", function($document){
  return {
    scope: {
      text: "=ngModel"
    },
    link: function (scope, element, attrs) {

      var $ = angular.element;
      var body = $($document[0].body);

      // initial value
      element.text(scope.text);

      var input = $('<input type="text"/>');

      // shit happens
      element.on("dblclick", function() {
        if(!element.hasClass(attrs['classOff'])) {
           // swap span for input
          initial = element.text();
          input.val(initial);
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