angular.module('selectionTool', [])
    .controller('FilterController', ['$scope', 'ConfigService', 'DataService', 'SelectedDataService',
        function ($scope, ConfigService, DataService, SelectedDataService) {
            $scope.data = DataService.getData();
            $scope.useSubmitButton = ConfigService.useSubmitButton;
            $scope.jsonOutput = JSON.stringify(SelectedDataService.selectedElements, null, 4);

            $scope.selectAll = function (arrayNum) {
                for (var i = 0; i < $scope.data[arrayNum].length; i++) {
                    $scope.data[arrayNum][i].Selected = true;
                    SelectedDataService.addSelectedElement($scope.data[arrayNum][i]);
                }
            };

            $scope.submit = function () {
                $scope.jsonOutput = JSON.stringify(SelectedDataService.selectedElements, null, 4);
            };

            for (var i = 0; i < $scope.data.length; i++) {
                $scope.selectAll(i);
            }
            if (!ConfigService.useSubmitButton) {
                $scope.submit();
            }

            $scope.selectNone = function (arrayNum) {
                for (var i = 0; i < $scope.data[arrayNum].length; i++) {
                    $scope.data[arrayNum][i].Selected = false;
                    SelectedDataService.removeSelectedElement($scope.data[arrayNum][i]);
                }
            };

            $scope.allSelected = function (arrayNum) {
                var selected = 0;
                $scope.data[arrayNum].forEach(function (element, index, array) {
                    if (element.Selected)
                        selected++;
                });
                return (selected == $scope.data[arrayNum].length);
            };

            $scope.toggleAllSelected = function (arrayNum) {
                if ($scope.allSelected(arrayNum)) {
                    $scope.selectNone(arrayNum);
                }
                else {
                    $scope.selectAll(arrayNum);
                }
                if (!ConfigService.useSubmitButton) {
                    $scope.submit();
                }
            };

            $scope.toggleSelected = function (element) {
                element.Selected = !element.Selected;
                if (element.Selected) {
                    SelectedDataService.addSelectedElement(element);
                }
                else {
                    SelectedDataService.removeSelectedElement(element);
                }
                if (!ConfigService.useSubmitButton) {
                    $scope.submit();
                }
            };
        }]);