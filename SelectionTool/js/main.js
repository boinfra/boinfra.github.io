angular.module('app', ['selectionTool'])

    .config(['$httpProvider', '$logProvider', 'DemoDataProvider', function ($httpProvider, $logProvider, DemoDataProvider) {

        $logProvider.debugEnabled(true);

        var interceptor = ['$rootScope', '$q', '$location', function ($rootScope, $q, $location) {

            var demoData = DemoDataProvider.$get();

            return {
                'request': function (request) {
                    if (request.url.indexOf("https://localhost/selectionTool/data") > -1) {
                        request.timeout = 1;
                    }
                    return request;
                },
                'responseError': function (response) {
                    if (response.config.url.indexOf("https://localhost/selectionTool/data") > -1) {
                        response.data = [demoData.getObjectTypes(), demoData.getLicenses()];
                        response.status = 200;
                    }
                    return response;
                }
            };
        }];
        $httpProvider.interceptors.push(interceptor);
    }])

    .provider('DemoData', function DemoDataProvider() {
        function DemoData() {
            this.getObjectTypes = function () {
                return [
                    {
                        "id": 1,
                        "name": "Subject",
                        "description": null
                    },
                    {
                        "id": 2,
                        "name": "Study",
                        "description": null
                    },
                    {
                        "id": 3,
                        "name": "Raw Image",
                        "description": null
                    },
                    {
                        "id": 4,
                        "name": "Segmentation Image",
                        "description": null
                    },
                    {
                        "id": 5,
                        "name": "Clinical Study Data",
                        "description": null
                    },
                    {
                        "id": 6,
                        "name": "Clinical Study Definition",
                        "description": null
                    },
                    {
                        "id": 7,
                        "name": "Statistical Model",
                        "description": null
                    },
                    {
                        "id": 8,
                        "name": "Genomic Data",
                        "description": null
                    },
                    {
                        "id": 9,
                        "name": "Genomic Series",
                        "description": null
                    },
                    {
                        "id": 10,
                        "name": "Genomic Platform",
                        "description": null
                    }
                ];
            };

            this.getLicenses = function () {
                return [
                    {
                        "id": 1,
                        "name": "CC_BY_NC_SA_3.0",
                        "description": null
                    },
                    {
                        "id": 2,
                        "name": "CC_BY_NC_3.0",
                        "description": null
                    },
                    {
                        "id": 3,
                        "name": "CC_BY_NC_ND_3.0",
                        "description": null
                    },
                    {
                        "id": 4,
                        "name": "CC_BY_3.0",
                        "description": null
                    },
                    {
                        "id": 5,
                        "name": "CC_BY_SA_3.0",
                        "description": null
                    },
                    {
                        "id": 6,
                        "name": "CC_BY_ND_3.0",
                        "description": null
                    },
                    {
                        "id": 7,
                        "name": "ISLES_CHALLENGE_2015",
                        "description": null
                    },
                    {
                        "id": 8,
                        "name": "ODC_ODBL",
                        "description": null
                    }
                ];
            };
        };

        this.$get = function demoDataFactory() {
            return new DemoData();
        };
    })

    .service('ConfigService', function () {
        this.hardCoded = true;
        this.useSubmitButton = true;
    });

angular.module('2ndUseCase', ['selectionTool'])

    .config(['$httpProvider', '$logProvider', 'DemoDataProvider', function ($httpProvider, $logProvider, DemoDataProvider) {

        $logProvider.debugEnabled(true);

        var interceptor = ['$rootScope', '$q', '$location', function ($rootScope, $q, $location) {
            var demoData = DemoDataProvider.$get();
            return {
                'request': function (request) {
                    if (request.url.indexOf("https://localhost/selectionTool/data") > -1) {
                        request.timeout = 1;
                    }
                    return request;
                },
                'responseError': function (response) {
                    if (response.config.url.indexOf("https://localhost/selectionTool/data") > -1) {
                        response.data = [demoData.getObjectTypes(), demoData.getLicenses()];
                        response.status = 200;
                    }
                    return response;
                }
            };
        }];
        $httpProvider.interceptors.push(interceptor);
    }])

    .provider('DemoData', function DemoDataProvider() {
        function DemoData() {
            this.getObjectTypes = function () {
                return [
                    {
                        "id": 1,
                        "name": "Subject",
                        "description": null
                    },
                    {
                        "id": 2,
                        "name": "Study",
                        "description": null
                    },
                    {
                        "id": 3,
                        "name": "Raw Image",
                        "description": null
                    },
                    {
                        "id": 4,
                        "name": "Segmentation Image",
                        "description": null
                    },
                    {
                        "id": 5,
                        "name": "Clinical Study Data",
                        "description": null
                    },
                    {
                        "id": 6,
                        "name": "Clinical Study Definition",
                        "description": null
                    },
                    {
                        "id": 7,
                        "name": "Statistical Model",
                        "description": null
                    },
                    {
                        "id": 8,
                        "name": "Genomic Data",
                        "description": null
                    },
                    {
                        "id": 9,
                        "name": "Genomic Series",
                        "description": null
                    },
                    {
                        "id": 10,
                        "name": "Genomic Platform",
                        "description": null
                    }
                ];
            };

            this.getLicenses = function () {
                return [
                    {
                        "id": 1,
                        "name": "CC_BY_NC_SA_3.0",
                        "description": null
                    },
                    {
                        "id": 2,
                        "name": "CC_BY_NC_3.0",
                        "description": null
                    },
                    {
                        "id": 3,
                        "name": "CC_BY_NC_ND_3.0",
                        "description": null
                    },
                    {
                        "id": 4,
                        "name": "CC_BY_3.0",
                        "description": null
                    },
                    {
                        "id": 5,
                        "name": "CC_BY_SA_3.0",
                        "description": null
                    },
                    {
                        "id": 6,
                        "name": "CC_BY_ND_3.0",
                        "description": null
                    },
                    {
                        "id": 7,
                        "name": "ISLES_CHALLENGE_2015",
                        "description": null
                    },
                    {
                        "id": 8,
                        "name": "ODC_ODBL",
                        "description": null
                    }
                ];
            };
        };

        this.$get = function demoDataFactory() {
            return new DemoData();
        };
    })

    .service('ConfigService', function () {
        this.hardCoded = true;
        this.useSubmitButton = false;
    });

angular.module('3rdUseCase', ['selectionTool'])

    .config(['$httpProvider', '$logProvider', 'DemoDataProvider', function ($httpProvider, $logProvider, DemoDataProvider) {

        $logProvider.debugEnabled(true);

        var interceptor = ['$rootScope', '$q', '$location', function ($rootScope, $q, $location) {
            var demoData = DemoDataProvider.$get();
            return {
                'request': function (request) {
                    if (request.url.indexOf("https://localhost/selectionTool/data") > -1) {
                        request.timeout = 1;
                    }
                    return request;
                },
                'responseError': function (response) {
                    if (response.config.url.indexOf("https://localhost/selectionTool/data") > -1) {
                        response.data = demoData.getObjectTypes();
                        response.status = 200;
                    }
                    return response;
                }
            };
        }];
        $httpProvider.interceptors.push(interceptor);
    }])

    .provider('DemoData', function DemoDataProvider() {
        function DemoData() {
            this.getObjectTypes = function () {
                return [
                    {
                        "id": 1,
                        "name": "Subject",
                        "description": null
                    },
                    {
                        "id": 2,
                        "name": "Study",
                        "description": null
                    },
                    {
                        "id": 3,
                        "name": "Raw Image",
                        "description": null
                    },
                    {
                        "id": 4,
                        "name": "Segmentation Image",
                        "description": null
                    },
                    {
                        "id": 5,
                        "name": "Clinical Study Data",
                        "description": null
                    },
                    {
                        "id": 6,
                        "name": "Clinical Study Definition",
                        "description": null
                    },
                    {
                        "id": 7,
                        "name": "Statistical Model",
                        "description": null
                    },
                    {
                        "id": 8,
                        "name": "Genomic Data",
                        "description": null
                    },
                    {
                        "id": 9,
                        "name": "Genomic Series",
                        "description": null
                    },
                    {
                        "id": 10,
                        "name": "Genomic Platform",
                        "description": null
                    }
                ];
            };
        };

        this.$get = function demoDataFactory() {
            return new DemoData();
        };
    })

    .service('ConfigService', function () {
        this.hardCoded = true;
        this.useSubmitButton = false;
    });

angular.element(document).ready(function () {
    angular.bootstrap(document.getElementById('2ndUseCase'), ['2ndUseCase']);
});
angular.element(document).ready(function () {
    angular.bootstrap(document.getElementById('3rdUseCase'), ['3rdUseCase']);
});