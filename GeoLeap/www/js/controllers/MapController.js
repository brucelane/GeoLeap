//http://tombatossals.github.io/angular-leaflet-directive/examples/json/paths.json
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
            vttPaths: {}
        });
        $scope.$on("$ionicView.loaded", function (e) {

            $scope.markers = {};
            $scope.locations = LocationsService.savedLocations;

            for (var i = LocationsService.savedLocations.length - 1; i >= 0; i--) {
                $scope.show(i);
            };

            $scope.goTo(0);
            console.log("loaded");
            $scope.loadPaths();
        });

        /*
    "p1": {
        "color": "red",
        "weight": 8,
        "latlngs": [
            { "lat": 51.50, "lng": -0.082 },
            { "lat": 48.83, "lng": 2.37 },
            { "lat": 41.91, "lng": 12.48 }
        ],"ALT_MAXI": 280.0, "DIFFICULTE": "Vert", "ALT_DEP": 280.0, "NUM_FFC": "03", "ID_NCA": "0606503", "DENIVELE": 38.0, "DISTANCE": 3.6},
{"NOM": "Le Tour du Mont Chauve", "INSEE": "06006", "DEPART": 
"Avenue Joseph Bailet / Parking Saint Rosalie", "COMMUNE": "ASPREMONT",
        "message": "<h3>Route from London to Rome</h3><p>Distance: 1862km</p>"
    }
        */
        $scope.loadPaths = function loadPaths() {
                console.log("loadPaths");
            $http.get('json/sentiers-vtt-nca-1.json').success(function (data) {
                console.log("loadPaths ok");

                $scope.vttPaths = {};//
                for (var i = 0; i < data.docs.length; i++) {
                    //for (var j = 0; j < data.docs[i].geometry.coordinates.length; j++) {
                        var parcours = data.docs[i].geometry.coordinates[0];
                        var latlong = parcours[0];
                        if (latlong[0] !== undefined) {
                            $scope.markers[i] = {
                                lat: latlong[1],
                                lng: latlong[0],
                                message: "<span><h3>" + data.docs[i].NOM +
                                    "</h3><p>Commune: " + data.docs[i].COMMUNE + "</p><p>Distance: " + data.docs[i].DISTANCE + "km</p><p>Départ: "
                                    + data.docs[i].DEPART + "</p><p>Altitude maximum: "
                                    + data.docs[i].ALT_MAXI + "m</p><p>Difficulté: " + data.docs[i].DIFFICULTE + ", dénivelé: " + data.docs[i].DENIVELE + "</p></span><br />",
                                icon: local_icons.purple_icon,
                                focus: true,
                                draggable: false,
                                getMessageScope: function () { return $scope; }
                            };
                        }
                    console.log(i);
                    /*NEARLY THERE $scope.vttPaths["p" + i] = {
                        weight: 42, color: "green", message: "<h3>" + data.docs[i].NOM +
                            "</h3><p>Commune: " + data.docs[i].COMMUNE + "</p><p>Distance: " + data.docs[i].DISTANCE + "km</p><p>Départ: "
                            + data.docs[i].DEPART + "</p><p>Altitude maximum: "
                            + data.docs[i].ALT_MAXI + "m</p><p>Difficulté: " + data.docs[i].DIFFICULTE + ", dénivelé: " + data.docs[i].DENIVELE + "</p>"
                    };
                    $scope.vttPaths["p" + i].latlngs = parcours.map(function (ll) { return { "lat": latlong[1], "lng": latlong[0] } })*/
                    //}

                }

            });
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
                // $location.path(destinationUrl);
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

            /*var poi = LocationsService.savedLocations[locationKey];

            // 
            $scope.markers[locationKey] = {
                lat: poi.lat,
                lng: poi.lng,
                message: '<span><img ng-src="' + poi.vignette + '"></img><h3>' + poi.name + '</h3><br />' + poi.sousTitre + '</span><br />',
                icon: eval(poi.icon),
                focus: true,
                draggable: false,
                getMessageScope: function () { return $scope; }
            };*/

        };
        /**
         * show location
         * @param locationKey
         */
        $scope.show = function (locationKey) {
            /*
            var poi = LocationsService.savedLocations[locationKey];
            $scope.markers[locationKey] = {
                lat: poi.lat,
                lng: poi.lng,
                icon: eval(poi.icon),
                message: '<span><img ng-click="popupClick(\'' + poi.url + '\')" ng-src="' + poi.vignette + '"></img><h3>' + poi.name + '</h3><br />' + poi.sousTitre + '</span><br />',
                focus: false,
                draggable: false,
                getMessageScope: function () { return $scope; }
            };*/

        };


        /**
         * Center map on user's current position
         */
        $scope.locate = function () {

            $cordovaGeolocation
              .getCurrentPosition()
              .then(function (position) {
                  $scope.center.lat = position.coords.latitude;
                  $scope.center.lng = position.coords.longitude;
                  $scope.center.zoom = 12;

                  $scope.markers.now = {
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