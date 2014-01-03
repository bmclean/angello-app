var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {
  $scope.currentStory;

  $scope.createStory = function() {
    $scope.stories.push({
      title:'New Story',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'Back Log',
      type:'Feature',
      reporter:'Pending',
      assignee:'Pending'
    });
  };

  $scope.setCurrentStory = function(story) {
    $scope.currentStory = story;
  };

  $scope.stories = [
    {title:'Story 00', description:'Description pending.', criteria:'Criteria pending.', status:'To Do', type:'Feature', reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
    {title:'Story 01', description:'Description pending.', criteria:'Criteria pending.', status:'Back Log', type:'Feature', reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
    {title:'Story 02', description:'Description pending.', criteria:'Criteria pending.', status:'Code Review', type:'Enhancement', reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
    {title:'Story 03', description:'Description pending.', criteria:'Criteria pending.', status:'Done', type:'Enhancement', reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
    {title:'Story 04', description:'Description pending.', criteria:'Criteria pending.', status:'Verified', type:'Bug', reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
    {title:'Story 05', description:'Description pending.', criteria:'Criteria pending.', status:'To Do', type:'Spike', reporter:'Lukas Ruebbelke', assignee:'Brian Ford'}
  ];
});