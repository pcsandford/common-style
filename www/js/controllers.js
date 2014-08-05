'use strict';

angular.module('styleGuideApp.controllers')
  .controller('ReadeMeCtrl', ['$scope',
    function($scope) {

    }
  ])
  .controller('CommonHeaderCtrl', ['$scope',
    function($scope) {
      $scope.authStatus = 1;
      $scope.isAdmin = true;
      // Company
      $scope.companyLoaded = true;
      $scope.selectedCompanyName = 'Rise Vision';
      $scope.subCompanySelected = true;
      // User
      $scope.userProfileName = 'Alfredo Sanchez';
      $scope.userProfileEmail = 'alfredo.sanchez90@example.com';
      $scope.userProfilePicture = 'http://api.randomuser.me/portraits/med/men/33.jpg';
      // Messages
      $scope.messages = ['<li class="system-message">Lorem ipsum dolor sit amet</li>', '<li class="system-message">Consectetur adipiscing elit</li>', '<li class="system-message">Suspendisse convallis leo sed</li>'];
      // Navigation choices
      $scope.navOptions = [{
        title: 'Store',
        link: ''
      }, {
        title: 'Account',
        link: ''
      }, {
        title: 'Sellers',
        link: ''
      }, {
        title: 'Platform',
        link: 'http://rva.risevision.com/',
        target: '_blank'
      }];
    }
  ])
  .controller('ComponentsCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {

      $scope.activeComponent = $routeParams.id ? $routeParams.id : 'action-bar';

      $scope.getTemplate = function (id) {
        // $scope.uiComponents[]
      };

      $scope.uiComponents = {
        'action-bar': {
          title: 'Action-bar',
          template: 'components/bootstrap-based/action-bar.html'
        },
        'typeahead-multiselect': {
          title: 'Typeahead Multiselect',
          template: 'components/bootstrap-based/ui-select2.html'
        },
        'alignment': {
          title: 'Alignment',
          template: 'bower_components/widget-settings-ui-components/demos/alignment-demo.html'
        },
        'color-picker': {
          title: 'Color Picker',
          template: 'bower_components/widget-settings-ui-components/demos/color-picker-demo.html'
        },
        'column-setting': {
          title: 'Column Setting',
          template: 'bower_components/widget-settings-ui-components/demos/column-setting-demo.html'
        },
        'financial-selector': {
          title: 'Financial Selector',
          template: 'bower_components/component-financial-selector/demos/financial-selector-demo.html'
        },
        'scroll-setting': {
          title: 'Scroll Setting',
          template: 'bower_components/widget-settings-ui-components/demos/scroll-setting-demo.html'
        },
        'table-setting': {
          title: 'Table Setting',
          template: 'bower_components/widget-settings-ui-components/demos/table-setting-demo.html'
        },
        'tooltip': {
          title: 'Tooltip',
          template: 'bower_components/widget-settings-ui-components/demos/tooltip-demo.html'
        },
        'font-style': {
          title: 'Font Style',
          template: 'bower_components/widget-settings-ui-components/demos/font-style-demo.html'
        },
        'font-size': {
          title: 'Font Size Picker',
          template: 'bower_components/bootstrap-form-components/demos/font-size-picker-demo.html'
        }
      };

      $scope.things = ['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp', 'Chocolate', 'Beef', 'Drawer', 'Brocolli', 'Tomato', 'Plate', 'Zebra'];

      $scope.color = "transparent";
      $scope.column = {
        name: "Example"
      };
      $scope.scroll = {};
      $scope.table = {};
      $scope.instruments = [
        "AA.N",
        "AXP.N",
        "BA.N",
        "BAC.N",
        "CAT.N",
        "CSCO.O",
        "CVX.N",
        "MMM.N",
        "MRK.N",
        "MSFT.O",
        "PFE.N",
        "PG.N",
        "T.N",
        "TRV.N",
        "UTX.N",
        "VZ.N",
        "WMT.N",
        "XOM.N"
      ];

      $scope.alignText = 'right';

      // console.log(fontSizePicker);
      // $(".font-size-picker").fontSizePicker({
      //   "font-size": "18"
      // });
    }
  ]);
