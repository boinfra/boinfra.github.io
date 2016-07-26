angular.module('onlyTypes', ['onlyTypesSelectionTool'])

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
    });


angular.element(document).ready(function () {
    angular.bootstrap(document.getElementById('3rdUseCase'), ['onlyTypes']);
});
