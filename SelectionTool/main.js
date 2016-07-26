angular.module('app', ['selectionTool'])

    .provider('DemoData', function DemoDataProvider() {
        function DemoData() {
            this.getObjectTypes = function () {
                return [
                    {
                        "data": "Subject",
                        "Name": "Subject"
                    },
                    {
                        "data": "Study",
                        "Name": "Study"
                    },
                    {
                        "data": "RawImage",
                        "Name": "Raw Image"
                    },
                    {
                        "data": "SegmentationImage",
                        "Name": "Segmentation Image"
                    },
                    {
                        "data": "ClinicalStudyData",
                        "Name": "Clinical Study Data"
                    },
                    {
                        "data": "ClinicalStudyDefinition",
                        "Name": "Clinical Study Definition"
                    },
                    {
                        "data": "StatisticalModel",
                        "Name": "Statistical Model"
                    },
                    {
                        "data": "GenomicData",
                        "Name": "Genomic Data"
                    },
                    {
                        "data": "GenomicSeries",
                        "Name": "Genomic Series"
                    },
                    {
                        "data": "GenomicPlatform",
                        "Name": "Genomic Platform"
                    }
                ];
            };

            this.getLicenses = function () {
                return [
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
                ];
            };
        };

        this.$get = function demoDataFactory() {
            return new DemoData();
        };
    });