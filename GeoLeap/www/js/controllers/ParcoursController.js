angular.module('casa').controller('ParcoursController',
  [ '$scope',
    '$location',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function(
      $scope,
      $location,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {
    $scope.changePaths = function () {
        $scope.paths = {
            p2: {
                color: '#FC0',
                weight: 8,
                latlngs: [{ lat: 52.50, lng: -0.082 }, { lat: 42.91, lng: 12.48 }],
                layer: 'LaBoucleduHautPlan'
            }
        };
    };

    angular.extend($scope, {
        center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 4
        },
        paths: {
            p1: {
                color: '#000',
                weight: 8,
                latlngs: [{ lat: 51.50, lng: -0.082 }, { lat: 41.91, lng: 12.48 }],
                layer: 'LaFubia'
            }
        },
        layers: {
            baselayers: {
                osm: {
                    name: 'Parcours',
                    type: 'xyz',
                    url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: '1234',
                        attribution: 'LaFubia'
                    }
                }
            },
            overlays: {
                LaFubia: {
                    name: 'La Fubia',
                    visible: true,
                    type: 'group'
                },
                LaBoucleduHautPlan: {
                    name: 'La Boucle du Haut Plan',
                    visible: true,
                    type: 'group'
                }
            }
        }
    });
}]);