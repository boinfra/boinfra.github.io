angular.module('selectionTool', ['selectionTool.services'])

    .controller('FilterController', ['$scope', '$http', 'ConfigService', 'SelectedDataService',
        function ($scope, $http, ConfigService, SelectedDataService) {
            $scope.data = [];
            $http.get("https://localhost/selectionTool/data").success(function (data) {
                $scope.data = JSON.parse(JSON.stringify(data));
                $scope.displayData = JSON.parse(JSON.stringify(data));
                for (var i = 0; i < $scope.data.length; i++) {
                    $scope.selectAll(i);
                }
                if (!ConfigService.useSubmitButton) {
                    $scope.submit();
                }
            });
            $scope.useSubmitButton = ConfigService.useSubmitButton;
            $scope.jsonOutput = angular.toJson(SelectedDataService.selectedElements, 4);

            $scope.selectAll = function (arrayNum) {
                for (var i = 0; i < $scope.data[arrayNum].length; i++) {
                    $scope.data[arrayNum][i].selected = true;
                    SelectedDataService.addSelectedElement($scope.displayData[arrayNum][i]);
                }
            };

            $scope.submit = function () {
                $scope.jsonOutput = angular.toJson(SelectedDataService.selectedElements, 4);
            };

            for (var i = 0; i < $scope.data.length; i++) {
                $scope.selectAll(i);
            }
            if (!ConfigService.useSubmitButton) {
                $scope.submit();
            }

            $scope.selectNone = function (arrayNum) {
                for (var i = 0; i < $scope.data[arrayNum].length; i++) {
                    $scope.data[arrayNum][i].selected = false;
                    SelectedDataService.removeSelectedElement($scope.displayData[arrayNum][i]);
                }
            };

            $scope.allSelected = function (arrayNum) {
                var selected = 0;
                $scope.data[arrayNum].forEach(function (element, index, array) {
                    if (element.selected)
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

            $scope.toggleSelected = function (array, displayArray, element) {
                var displayElement = {};
                for (var i = 0; i < array.length; i++) {
                    if (array[i].id == element.id) {
                        displayElement = displayArray[i];
                        i = array.length;
                    }
                }
                element.selected = !element.selected;
                if (element.selected) {
                    SelectedDataService.addSelectedElement(displayElement);
                }
                else {
                    SelectedDataService.removeSelectedElement(displayElement);
                }
                if (!ConfigService.useSubmitButton) {
                    $scope.submit();
                }
            };
        }]);; angular.module('selectionTool.services', [])

            .service('SelectedDataService', function () {
                this.selectedElements = [];

                this.addSelectedElement = function (element) {
                    var index = this.selectedElements.indexOf(element);
                    if (index == -1) {
                        this.selectedElements.push(element);
                    }
                };

                this.removeSelectedElement = function (element) {
                    var index = this.selectedElements.indexOf(element);
                    if (index > -1) {
                        this.selectedElements.splice(index, 1);
                    }
                };
            });
