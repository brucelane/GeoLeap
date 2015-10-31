// lire http://blogs.msdn.com/b/eternalcoding/archive/2013/06/27/babylon-js-a-complete-javascript-framework-for-building-3d-games-with-html-5-and-webgl.aspx
angular.module('casa').controller('BJSController',
  ['$scope',
    '$cordovaGeolocation',
    '$cordovaFile',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    function (
      $scope,
      $cordovaGeolocation,
      $cordovaFile,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService
      ) {
        var canevas = angular.element(document.getElementById('canvas'));
        //$scope.ctx = canevas[0].getContext("2d");

        var canvas = canevas[0];
        //var controlPanel = $("#controlPanel")[0];
        var _routeChanged = false;
        var _tileEngine;
        var _currentLatitude = 43.6961;
        var _currentLongitude = 7.28;
        var _currentAccuracy = 51;


        // http://ionicframework.com/docs/api/directive/ionView/
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
            // babylon.js
            // Check support
            if (!BABYLON.Engine.isSupported()) {
                document.getElementById("notSupported").className = "";
                document.getElementById("opacityMask").className = "";
            } else {

                // Babylon
                var engine = new BABYLON.Engine(canvas, true);

                _tileEngine = new BINGWEBGL.Engine(engine);

                // Creating scene
                scene = _tileEngine.createScene(engine);
                scene.activeCamera.attachControl(canvas);

                // Once the scene is loaded, just register a render loop to render it
                engine.runRenderLoop(function () {
                    scene.render();
                });

                // Resize
                window.addEventListener("resize", function () {
                    engine.resize();
                });
            var from = [ 43.6834623,7.2030226];
            var to = [ 7.27947957, 43.69429928 ];
            var directions = directionsToQuery(from, to);
            _tileEngine.getDirections(directions, _tileEngine._levelOfDetail);
            _tileEngine._vehicleSpeed = 1;

                // get the default directions from dropdown
                /*var directions = $("#ddlRecommended").val();
                getDirectionsFromDropdown();
                _tileEngine.getDirections(directions, _tileEngine._levelOfDetail);*/
            }

            //startAnimation();
        });
        $scope.$on("$ionicView.loaded", function (e) {
            

        });

        $scope.$on("$ionicView.beforeLeave", function (e) {

        });

        // UI
        var panelIsClosed = true;
        /*$("#btnOptions").on("click", function () {
            if (panelIsClosed) {
                panelIsClosed = false;
                controlPanel.style.webkitTransform = "translateY(0px)";
                controlPanel.style.transform = "translateY(0px)";
            } else {
                panelIsClosed = true;
                controlPanel.style.webkitTransform = "translateY(300px)";
                controlPanel.style.transform = "translateY(300px)";
            }
        });

        $("#btnPlay").on("click", function () {
            pauseRoutePlayback(false);
        });


        $("#btnPause").on("click", function () {
            pauseRoutePlayback(true);
        });

        $("#btnFastForward").on("click", function () {
            _tileEngine._vehicleSpeed++;

            if (_tileEngine._vehicleSpeed > 4)
                _tileEngine._vehicleSpeed = 1;

            $("#divPlaybackSpeed").html(_tileEngine._vehicleSpeed + "x");
        });

        $("#lnkGoThere1").on("click", goThere);
        $("#lnkGoThere2").on("click", goThere);

        function goThere() {
            var from = ($("#txtFrom").val());
            var to = ($("#txtTo").val());
            var directions = directionsToQuery(from, to);
            _tileEngine.getDirections(directions, _tileEngine._levelOfDetail);
            _tileEngine._vehicleSpeed = 1;
            $("#divPlaybackSpeed").html(_tileEngine._vehicleSpeed + "x");
            pauseRoutePlayback(false);
        }

        $("#ddlRecommended").on("change", function () {
            getDirectionsFromDropdown();
        });


        function getDirectionsFromDropdown() {
            var directions = $("#ddlRecommended").val();
            var query = directionsFromQuery(directions);
            //$("#txtFrom").val(unescape(query.from));
            $("#txtFrom").val(_currentLatitude + "," + _currentLongitude);
            $("#txtTo").val(unescape(query.to));
        }


        function pauseRoutePlayback(pauseIt) {
            if (pauseIt) {
                _tileEngine._playbackRoutePath = false;
                $("#btnPlay").show();
                $("#btnPause").hide();
            } else {
                _tileEngine._playbackRoutePath = true;
                $("#btnPause").show();
                $("#btnPlay").hide();
            }
        }*/

        // acceleration
        function accelOnSuccess(acceleration) {
            $scope.msg = 'acceleration timeStamp: ' + acceleration.timestamp.toString() + ' x:' + acceleration.x.toString() + ' y:' + acceleration.y.toString() + ' z:' + acceleration.z.toString();
        };

        function accelOnError() {
            $scope.erreur.innerHTML = 'acceleration error ';
        };

        // get current location   
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getPosition);
            } else {
            }
        }
        function getPosition(location) {
            _currentLatitude = location.coords.latitude;
            _currentLongitude = location.coords.longitude;
            _currentAccuracy = location.coords.accuracy;
        }
        getLocation();
        // populate the ddl
        var select = document.getElementById('ddlRecommended');
        var options = ["Musée1", "Musée2"];
        var i;
        for (i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = "wp.0=" + _currentLatitude + "," + _currentLongitude + "&wp.1=" + _currentLatitude + i + "," + _currentLongitude + i;
            select.appendChild(el);
        }
        /* <option value="wp.0=43.70915179,7.26954701&wp.1=43.69765927,7.2774058">musee</option>*/
        function getJson() {
            /*$.getJSON("json/pois.json", function (obj) {

                $.each(obj.features, function (key, value) {
                    $("#ddlRecommended").append("<option value=\"wp.0=" + _currentLatitude + "," + _currentLongitude + "&wp.1=" + value.geometry.coordinates[1] + "," + value.geometry.coordinates[0] + "\">" + value.properties.NOM + "</option>");
                });

            });

            $.ajax({
                url: "json/pois.json",
                dataType: 'json',
                success: function (data) {
                    var myDDL = document.getElementById("ddlRecommended");
                    var opt = document.createElement("option");
                    opt.textContent = "Point de départ";
                    opt.value = "wp.0=" + _currentLatitude + "," + _currentLongitude + "&wp.1=" + _currentLatitude + "," + _currentLongitude;
                    myDDL.options.add(opt);
                    for (i = 0; i < jsonObj.features.length; i++) {
                        var option = document.createElement("option");
                        option.text = jsonObj.features[i].properties.NOM;
                        option.value = jsonObj.features[i].geometry.coordinates[0];
                        try {
                            myDDL.options.add(option);
                        }
                        catch (e) {
                            alert(e);
                        }
                    }
                }
            });*/
        }
        getJson();

    }]);

// boussole
/*function onSuccess(heading) {
    var element = document.getElementById('infos');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    $scope.erreur.innerHTML = 'Compass error: ' + compassError.code;
};

var options = {
    frequency: 3000
}; // Update every 3 seconds


//var watchID = navigator.compass.watchHeading(onSuccess, onError, options);


}, 500);*/
/////////////////////////////////////////////////////////////////
//
// Bing WebGL using Babylon JS 
//
// demo by Andy Beaulieu - http://www.andybeaulieu.com
//
// see www.babylonjs.com for more info on Babylon JS
//
// LICENSE: This code is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
// without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. ANY 
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS
// OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF 
// LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/////////////////////////////////////////////////////////////////
