angular.module('app', ['selectionTool'])
    .service('ConfigService', function () {
        this.hardCoded = true;
        this.useSubmitButton = false;
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
    .service('DataService', function () {
        this.getData = function () {
            return [
                [
                    {
                        "Id": 12,
                        "Name": "Raw Image",
                        "Description": null
                    },
                    {
                        "Id": 13,
                        "Name": "Segmentation Image",
                        "Description": null
                    },
                    {
                        "Id": 14,
                        "Name": "Models 3D",
                        "Description": null
                    },
                    {
                        "Id": 15,
                        "Name": "Unknown",
                        "Description": null
                    },
                    {
                        "Id": 16,
                        "Name": "Statisctical Model",
                        "Description": null
                    },
                    {
                        "Id": 17,
                        "Name": "Clinical Study Definition",
                        "Description": null
                    },
                    {
                        "Id": 18,
                        "Name": "Clinical Study Data",
                        "Description": null
                    },
                    {
                        "Id": 19,
                        "Name": "None",
                        "Description": null
                    }
                ],
                [
                    {
                        "Id": 1,
                        "Name": "CC_BY_NC_SA_3.0",
                        "Description": null
                    },
                    {
                        "Id": 2,
                        "Name": "CC_BY_NC_3.0",
                        "Description": null
                    },
                    {
                        "Id": 3,
                        "Name": "CC_BY_NC_ND_3.0",
                        "Description": null
                    },
                    {
                        "Id": 4,
                        "Name": "CC_BY_3.0",
                        "Description": null
                    },
                    {
                        "Id": 5,
                        "Name": "CC_BY_SA_3.0",
                        "Description": null
                    },
                    {
                        "Id": 6,
                        "Name": "CC_BY_ND_3.0",
                        "Description": null
                    },
                    {
                        "Id": 7,
                        "Name": "ISLES_CHALLENGE_2015",
                        "Description": null
                    },
                    {
                        "Id": 8,
                        "Name": "ODC_ODBL",
                        "Description": null
                    }
                ]
            ];
        }
    });