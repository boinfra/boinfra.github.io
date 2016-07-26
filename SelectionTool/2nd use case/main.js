angular.module('noSubmit', ['noSubmitSelectionTool'])

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
    });

angular.bootstrap($('#2ndUseCase'), ['noSubmit']);