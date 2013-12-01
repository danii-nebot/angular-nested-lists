app.controller('ListController', function ($scope, dataModel) {
  $scope.data = dataModel.data;
  $scope.newCategoryName = "";
  $scope.newTaskName = "";
  $scope.selectedCategory = $scope.data[0];
  $scope.errorNewCategory = false;
  $scope.errorNewTask = false;

  $scope.completeTask = function(item) {
    item.completed = true;
  };

  $scope.uncompleteTask = function(item) {
    item.completed = false;
  };

  $scope.deleteTask = function(category, item) {
    category.items.splice(category.items.indexOf(item), 1);
  };

  $scope.toggleCategory = function(category) {
    category.expanded = !category.expanded;
  };

  $scope.addCategory = function() {
    if ($scope.newCategoryName) {
      var newCategory = { name: $scope.newCategoryName, expanded: false };
      newCategory.items = [];
      $scope.data.push(newCategory);
      $scope.errorNewCategory = false;
    } else {
      $scope.errorNewCategory = true;
    }
  };

  $scope.addTask = function() {
    if ($scope.newTaskName) {
      var newTask = { name: $scope.newTaskName, completed: false };
      $scope.selectedCategory.items.push(newTask);
      $scope.selectedCategory.expanded=true;
      $scope.errorNewTask = false;
    } else {
      $scope.errorNewTask = true;
    }
  };
});