angular.module('selectionTool', ['selectionTool.services'])

    .controller('FilterController', ['$scope', 'ConfigService', 'DataService', 'SelectedDataService',
        function ($scope, ConfigService, DataService, SelectedDataService) {
            $scope.data = DataService.getData();
            $scope.displayData = DataService.getData();
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

            $scope.toggleSelected = function (array, element) {
                var displayElement = {};
                for (var i = 0; i < array.length; i++) {
                    if (array[i].id == element.id) {
                        displayElement.id = element.id;
                        displayElement.name = element.name;
                        displayElement.description = element.descriptionid;
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

            .service('ConfigService', function () {
                this.hardCoded = true;
                this.useSubmitButton = true;
            })

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
            })

            .service('DataService', ['ConfigService', 'DemoData', '$http', function (ConfigService, DemoData, $http) {
                this.getData = function () {
                    if (ConfigService.hardCoded) {
                        return [DemoData.getObjectTypes(), DemoData.getLicenses()];
                    }
                    else {
                        /*this.objectTypes = [];
                        this.licenses = [];
                        var self = this;
        
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", "http://localhost:57885/objectTypes", false);
                        xhr.onload = function (e) {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    self.objectTypes = JSON.parse(xhr.responseText);
                                }
                            }
                        };
                        xhr.send(null);
                        xhr.open("GET", "http://localhost:57885/licenses", false);
                        xhr.onload = function (e) {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    self.licenses = JSON.parse(xhr.responseText);
                                }
                            }
                        };
                        xhr.send(null);
        
                        return [this.objectTypes, this.licenses];*/

                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", "http://localhost:17344/Search/SearchOptions", false);
                        xhr.onload = function (e) {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    console.debug(xhr.responseText);
                                }
                            }
                        };
                        xhr.send(null);
                    }
                };
            }]);
