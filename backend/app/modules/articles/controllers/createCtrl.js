'use strict';

angular
    .module('articles')
    .controller('createCtrl', function ($scope, $state, $rootScope, $window) {
        $scope.options = {
            "image": null,

            "uploadUrl": 'http://api.vienvong.vn/photos/upload64',
            "resultUpload": {
                'photo': null,
                'thumb': null
            },

            "viewSizeWidth": 480,
            //"viewSizeHeight": 360,
            "viewSizeFixed": true,
            "viewShowFixedBtn": true,
            "viewShowRotateBtn": false,
            "viewShowCropTool": false,

            "outputImageWidth": 480,
            "outputImageHeight": 270,
            "outputImageRatioFixed": true,
            "outputImageType": "jpeg",
            "outputImageSelfSizeCrop": false,

            "watermarkType": "image",
            "watermarkImage": null,
            "watermarkText": null,
            "watermarkTextFont": "Arial",
            "watermarkTextFillColor": "rgba(0,0, 0, 0.8)",
            "watermarkTextStrokeColor": "rgba(0,0, 0, 0.8)",
            "watermarkTextStrokeLineWidth": 1,

            "inModal": false
        };

        $scope.detail = {
            title: null,
            description: null,
            lAvatar: null,
            sAvatar: null,
            content: null,
            permission: 'private',
            share: 'false',
            categories: null,
            keyword: null,
            series: null,
            tags: null
        };
    });