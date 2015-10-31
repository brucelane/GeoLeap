angular.module('casa').controller('MapController',
  ['$scope',
    "$http",
    '$location',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    function (
      $scope,
      $http,
      $location,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {
        //


        /* TODO
        http://forum.ionicframework.com/t/ionic-app-caching-images/3488/15
      <img ng-cache ng-src="{{data.image}}" />
      ImgCache.isCached(src, function(path, success) {

                if (success) {
                    ImgCache.useCachedFile(el);
                } else {
                    ImgCache.cacheFile(src, function() {
                        ImgCache.useCachedFile(el);
                    });
                }
            });
       */
        angular.extend($scope, {
            center: {
                lng: 7.20424272,
                lat: 43.83021812,
                zoom: 12
            },
                defaults: {
                    tileLayer: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.png',
                    maxZoom: 18,
                    zoomControlPosition: 'bottomleft'
                },
            vttPaths: { }
        });
        $scope.$on("$ionicView.loaded", function (e) {
           
            $scope.markers = { };
            $scope.locations = LocationsService.savedLocations;
            $http.get('json/sentiers-vtt-nca-1.json').success(function (data) {
                $scope.vttPaths = data;
            });
            for (var i = LocationsService.savedLocations.length - 1; i >= 0; i--) {
                $scope.show(i);
            };

            $scope.goTo(0);

        });
             //$scope.locations = LocationsService.savedLocations;
            /*$scope.map = {
                defaults: {
                    tileLayer: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.png',
                    maxZoom: 18,
                    zoomControlPosition: 'bottomleft'
                },
                markers: {},
                paths: {
                    p1: {
                        color: 'red',
                        weight: 8,
                        latlngs: [
                            { lng: 7.25922327, lat: 43.7706378 },
                            { lng: 7.2592822, lat: 43.77025479 },
                            { lng: 7.25926924, lat: 43.77006933 },
                            { lng: 7.25924181, lat: 43.76996763 }
                        ],
                        message: "<h3>Le Circuit de Lombardie</h3><p>Distance: 4.9km</p>",
                    }
                },

                events: {
                    map: {
                        enable: ['context'],
                        logic: 'emit'
                    }
                },

                

            };*/

        $scope.loadPaths = function loadPaths() {
            $http.get('json/sentiers-vtt-nca-1.json').success(function (data) {
                $scope.vttPaths = data;
            });
        };
        var Location = function () {
            if (!(this instanceof Location)) return new Location();
            this.lat = "";
            this.lng = "";
            this.name = "";
        };
        // legende
        $scope.legend = {
            position: 'bottomleft',
            colors: ['#F00'],
            labels: ['La Fubia']
        };
        /**
         * popupClick
         * @param destinationUrl
         */
        $scope.popupClick = function (destinationUrl) {
            console.log("popupClick url:" + destinationUrl);
            if (destinationUrl === 'undefined') {
                console.log("popupClick url undefined");
            } else {
                $location.path(destinationUrl);
            }
        }
        // icones markers
        var local_icons = {
            default_icon: {},
            leaf_icon: {
                iconUrl: 'img/icones/marker-icon-blue.png',
                iconSize: [38, 95], // size of the icon
                shadowSize: [50, 64], // size of the shadow
                iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
            },
            text_icon: {
                type: 'div',
                iconSize: [230, 0],
                html: 'Using <strong>Bold text as an icon</strong>: Lisbon',
                popupAnchor: [0, 0]
            },
            ici_icon: {
                backgroundColor: 'green',
                iconSize: [138, 95],
                shadowSize: [50, 64],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62]
            },
            blue_icon: {
                iconUrl: 'img/icones/marker-icon-blue.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            },
            orange_icon: {
                iconUrl: 'img/icones/marker-icon-orange.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            },
            green_icon: {
                iconUrl: 'img/icones/marker-icon-green.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            },
            grey_icon: {
                iconUrl: 'img/icones/marker-icon-grey.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            },
            red_icon: {
                iconUrl: 'img/icones/marker-icon-red.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            },
            purple_icon: {
                iconUrl: 'img/icones/marker-icon-purple.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            },
            yellow_icon: {
                iconUrl: 'img/icones/marker-icon-yellow.png',
                shadowUrl: 'img/icones/markers_shadow.png'
            }
        };
        $scope.icons = local_icons;
        /**
         * Center map on specific saved location
         * @param locationKey
         */
        $scope.goTo = function (locationKey) {

            var poi = LocationsService.savedLocations[locationKey];

            /*$scope.map.center = {
                lat: poi.lat,
                lng: poi.lng,
                zoom: 12
            };*/
            // 
            $scope.markers[locationKey] = {
                lat: poi.lat,
                lng: poi.lng,
                message: '<span><a ng-click="popupClick(\'' + poi.url + '\')"><img ng-src="' + poi.vignette + '"></img><h3>' + poi.name + '</h3><br />' + poi.sousTitre + '</a></span><br />',
                icon: eval(poi.icon),
                focus: true,
                draggable: false,
                getMessageScope: function () { return $scope; }
            };

        };
        /**
         * show location
         * @param locationKey
         */
        $scope.show = function (locationKey) {

            var poi = LocationsService.savedLocations[locationKey];

            //console.log("redMarker " + redMarker);icon: {iconUrl: 'img/icones/' + poi.icon}
            $scope.markers[locationKey] = {
                lat: poi.lat,
                lng: poi.lng,
                icon: eval(poi.icon),
                message: '<span><a ng-click="popupClick(\'' + poi.url + '\')"><img ng-click="popupClick(\'' + poi.url + '\')" ng-src="' + poi.vignette + '"></img><h3>' + poi.name + '</h3><br />' + poi.sousTitre + '</a></span><br />',
                focus: false,
                draggable: false,
                getMessageScope: function () { return $scope; }
            };

        };


        /**
         * Center map on user's current position
         */
        $scope.locate = function () {

            $cordovaGeolocation
              .getCurrentPosition()
              .then(function (position) {
                  $scope.map.center.lat = position.coords.latitude;
                  $scope.map.center.lng = position.coords.longitude;
                  $scope.map.center.zoom = 15;

                  $scope.map.markers.now = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                      message: "Vous êtes ici",
                      icon: local_icons.ici_icon,
                      focus: true,
                      draggable: false
                  };

              }, function (err) {
                  // error
                  console.log("Erreur de position!");
                  console.log(err);
              });

        };

    }]);