﻿angular.module('casa').controller('ParcoursController',
  ['$scope',
    '$location',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function (
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
                    weight: 3,
                    latlngs: [{ lng: 7.16600951, lat: 43.73685397 }, { lng: 7.16633247, lat: 43.73670047 }, { lng: 7.16660957, lat: 43.73656884 }, { lng: 7.16710834, lat: 43.73639973 }, { lng: 7.16728325, lat: 43.73634981 }, { lng: 7.16784982, lat: 43.73625004 }, { lng: 7.16913505, lat: 43.73593562 }, { lng: 7.16994569, lat: 43.73570353 }, { lng: 7.17027564, lat: 43.73558578 }, { lng: 7.17062687, lat: 43.73548831 }, { lng: 7.17078645, lat: 43.73544418 }, { lng: 7.17116504, lat: 43.73529911 }, { lng: 7.17143233, lat: 43.73518935 }, { lng: 7.17152738, lat: 43.73513769 }, { lng: 7.17170274, lat: 43.73502905 }, { lng: 7.171956, lat: 43.73479374 }, { lng: 7.17214139, lat: 43.73454969 }, { lng: 7.17231377, lat: 43.7344043 }, { lng: 7.17248334, lat: 43.73419519 }, { lng: 7.17260531, lat: 43.73395105 }, { lng: 7.1726953, lat: 43.73371278 }, { lng: 7.17264176, lat: 43.73214616 }, { lng: 7.17266283, lat: 43.7319459 }, { lng: 7.17263823, lat: 43.73121309 }, { lng: 7.17265756, lat: 43.73080741 }, { lng: 7.17281221, lat: 43.73023187 }, { lng: 7.17296449, lat: 43.72982504 }, { lng: 7.17299997, lat: 43.72967836 }, { lng: 7.17299848, lat: 43.72952189 }, { lng: 7.17297714, lat: 43.72947961 }, { lng: 7.17283943, lat: 43.72935609 }, { lng: 7.17273182, lat: 43.72930018 }, { lng: 7.17261331, lat: 43.72928008 }, { lng: 7.17247941, lat: 43.72930021 }, { lng: 7.17223171, lat: 43.72938912 }, { lng: 7.1720613, lat: 43.72943435 }, { lng: 7.17174075, lat: 43.72945432 }, { lng: 7.17161201, lat: 43.72941383 }, { lng: 7.17153663, lat: 43.72934301 }, { lng: 7.17144466, lat: 43.7292821 }, { lng: 7.17132103, lat: 43.72922958 }, { lng: 7.17122336, lat: 43.72922112 }, { lng: 7.17110897, lat: 43.72922879 }, { lng: 7.17080922, lat: 43.72934435 }, { lng: 7.17041028, lat: 43.72950787 }, { lng: 7.17012459, lat: 43.72962509 }, { lng: 7.16980335, lat: 43.72974247 }, { lng: 7.16960597, lat: 43.72979407 }, { lng: 7.16952207, lat: 43.72964716 }, { lng: 7.16950615, lat: 43.72960016 }, { lng: 7.16345138, lat: 43.73794113 }, { lng: 7.16358079, lat: 43.7379281 }, { lng: 7.16378829, lat: 43.73796086 }, { lng: 7.16390213, lat: 43.73795008 }, { lng: 7.16405297, lat: 43.73789019 }, { lng: 7.16423309, lat: 43.73788847 }, { lng: 7.16440746, lat: 43.73781569 }, { lng: 7.16451074, lat: 43.73777565 }, { lng: 7.16500986, lat: 43.73746331 }, { lng: 7.16517077, lat: 43.73742676 }, { lng: 7.16526445, lat: 43.7373693 }, { lng: 7.16546429, lat: 43.73720633 }, { lng: 7.16564203, lat: 43.73707401 }, { lng: 7.1658923, lat: 43.73692671 }, { lng: 7.16600951, lat: 43.73685397 }, { lng: 7.16345138, lat: 43.73794113 }, { lng: 7.1631163, lat: 43.73805206 }, { lng: 7.16292812, lat: 43.73814085 }, { lng: 7.16264938, lat: 43.73828922 }, { lng: 7.16257705, lat: 43.738339 }, { lng: 7.16246725, lat: 43.73842672 }, { lng: 7.16226128, lat: 43.73847867 }, { lng: 7.16216631, lat: 43.73852067 }, { lng: 7.16207911, lat: 43.73858028 }, { lng: 7.16197999, lat: 43.73869089 }, { lng: 7.16190911, lat: 43.73873709 }, { lng: 7.16171477, lat: 43.73878061 }, { lng: 7.1610675, lat: 43.73883465 }, { lng: 7.16069817, lat: 43.73883954 }, { lng: 7.1602271, lat: 43.73870439 }, { lng: 7.15970543, lat: 43.7385585 }, { lng: 7.15928262, lat: 43.7384295 }, { lng: 7.15908421, lat: 43.73849348 }, { lng: 7.15899774, lat: 43.73847597 }, { lng: 7.15898375, lat: 43.7385276 }, { lng: 7.15889634, lat: 43.73862003 }, { lng: 7.158655, lat: 43.73881738 }, { lng: 7.16087688, lat: 43.73958518 }, { lng: 7.1611392, lat: 43.73968872 }, { lng: 7.16148736, lat: 43.73988941 }, { lng: 7.16168904, lat: 43.74002735 }, { lng: 7.16650746, lat: 43.73792766 }, { lng: 7.16600951, lat: 43.73685397 }, { lng: 7.16650746, lat: 43.73792766 }, { lng: 7.16630447, lat: 43.7379749 }, { lng: 7.16603269, lat: 43.7380586 }, { lng: 7.16591887, lat: 43.73811204 }, { lng: 7.16571123, lat: 43.73825072 }, { lng: 7.16559786, lat: 43.73830965 }, { lng: 7.16547641, lat: 43.73834556 }, { lng: 7.16495566, lat: 43.73842633 }, { lng: 7.16465892, lat: 43.73844762 }, { lng: 7.1643099, lat: 43.73845291 }, { lng: 7.16405134, lat: 43.7384558 }, { lng: 7.16395603, lat: 43.73844453 }, { lng: 7.16388039, lat: 43.73841799 }, { lng: 7.16378138, lat: 43.73833177 }, { lng: 7.16349177, lat: 43.73798171 }, { lng: 7.16345138, lat: 43.73794113 }, { lng: 7.16650746, lat: 43.73792766 }, { lng: 7.1666657, lat: 43.73789 }, { lng: 7.16684579, lat: 43.73787331 }, { lng: 7.16691475, lat: 43.7378803 }, { lng: 7.16698428, lat: 43.73790799 }, { lng: 7.16701691, lat: 43.7379378 }, { lng: 7.16705653, lat: 43.73801853 }, { lng: 7.16705133, lat: 43.73824606 }, { lng: 7.16707695, lat: 43.7383152 }, { lng: 7.16726708, lat: 43.73848852 }, { lng: 7.16776478, lat: 43.73886938 }, { lng: 7.16786582, lat: 43.73891918 }, { lng: 7.1679993, lat: 43.73895497 }, { lng: 7.1681623, lat: 43.73897138 }, { lng: 7.16830849, lat: 43.73896606 }, { lng: 7.16847884, lat: 43.73894889 }, { lng: 7.16892195, lat: 43.73887681 }, { lng: 7.16908387, lat: 43.73887993 }, { lng: 7.16922018, lat: 43.73892912 }, { lng: 7.16943088, lat: 43.73906613 }, { lng: 7.16987069, lat: 43.73902854 }, { lng: 7.1702847, lat: 43.73896582 }, { lng: 7.17042066, lat: 43.73897076 }, { lng: 7.17046661, lat: 43.73903291 }, { lng: 7.17041105, lat: 43.73911453 }, { lng: 7.17028461, lat: 43.73919485 }, { lng: 7.16990153, lat: 43.73947969 }, { lng: 7.16969584, lat: 43.73949665 }, { lng: 7.16929193, lat: 43.73960592 }, { lng: 7.16921081, lat: 43.73964995 }, { lng: 7.16905025, lat: 43.73981719 }, { lng: 7.16893445, lat: 43.73998271 }, { lng: 7.16888383, lat: 43.74002707 }, { lng: 7.16888371, lat: 43.74002716 }, { lng: 7.16884146, lat: 43.74006449 }, { lng: 7.16879226, lat: 43.74011726 }, { lng: 7.16870521, lat: 43.74016487 }, { lng: 7.16867237, lat: 43.74017556 }, { lng: 7.16866095, lat: 43.74020797 }, { lng: 7.16859384, lat: 43.74022859 }, { lng: 7.16843598, lat: 43.74026326 }, { lng: 7.16835671, lat: 43.74027196 }, { lng: 7.16816522, lat: 43.74028922 }, { lng: 7.16808065, lat: 43.74030914 }, { lng: 7.16760311, lat: 43.74046752 }, { lng: 7.16750825, lat: 43.74049392 }, { lng: 7.16743415, lat: 43.74051259 }, { lng: 7.16726188, lat: 43.74052921 }, { lng: 7.16718727, lat: 43.74054465 }, { lng: 7.1671143, lat: 43.74056813 }, { lng: 7.16703483, lat: 43.7406065 }, { lng: 7.16695363, lat: 43.74063421 }, { lng: 7.16677421, lat: 43.74065925 }, { lng: 7.1666018, lat: 43.74069103 }, { lng: 7.16652769, lat: 43.7407142 }, { lng: 7.16633707, lat: 43.74078218 }, { lng: 7.16629927, lat: 43.74080534 }, { lng: 7.16625624, lat: 43.74084982 }, { lng: 7.16626213, lat: 43.74089952 }, { lng: 7.16626835, lat: 43.74095327 }, { lng: 7.1663865, lat: 43.74103624 }, { lng: 7.1664578, lat: 43.74105205 }, { lng: 7.16654022, lat: 43.74104854 }, { lng: 7.16700987, lat: 43.74099077 }, { lng: 7.16715431, lat: 43.741016 }, { lng: 7.16704877, lat: 43.7410672 }, { lng: 7.16696035, lat: 43.74112253 }, { lng: 7.16647467, lat: 43.74114673 }, { lng: 7.16638935, lat: 43.74114513 }, { lng: 7.16630705, lat: 43.74112862 }, { lng: 7.16624617, lat: 43.74112634 }, { lng: 7.16620099, lat: 43.74114116 }, { lng: 7.1661236, lat: 43.74119909 }, { lng: 7.1660543, lat: 43.74130014 }, { lng: 7.16601212, lat: 43.74133368 }, { lng: 7.16594556, lat: 43.74133651 }, { lng: 7.16588085, lat: 43.74133133 }, { lng: 7.16582745, lat: 43.74131999 }, { lng: 7.16578594, lat: 43.74130201 }, { lng: 7.16574593, lat: 43.7412717 }, { lng: 7.16564077, lat: 43.74121243 }, { lng: 7.16557566, lat: 43.74119473 }, { lng: 7.16537705, lat: 43.74119327 }, { lng: 7.16521856, lat: 43.74120029 }, { lng: 7.16516265, lat: 43.74119644 }, { lng: 7.16509145, lat: 43.74117873 }, { lng: 7.16502806, lat: 43.7411561 }, { lng: 7.1649814, lat: 43.7411313 }, { lng: 7.16476033, lat: 43.74096903 }, { lng: 7.16458447, lat: 43.74090141 }, { lng: 7.16450999, lat: 43.74083867 }, { lng: 7.16446983, lat: 43.7408264 }, { lng: 7.1644204, lat: 43.74083184 }, { lng: 7.16440146, lat: 43.74084987 }, { lng: 7.1643931, lat: 43.74087718 }, { lng: 7.16441134, lat: 43.74090742 }, { lng: 7.16450512, lat: 43.7409551 }, { lng: 7.16456572, lat: 43.74097245 }, { lng: 7.16465646, lat: 43.74102719 }, { lng: 7.16480442, lat: 43.74122945 }, { lng: 7.16490537, lat: 43.74131812 }, { lng: 7.16498945, lat: 43.74136278 }, { lng: 7.1650662, lat: 43.74139368 }, { lng: 7.16515912, lat: 43.74142011 }, { lng: 7.16519264, lat: 43.74143771 }, { lng: 7.16521779, lat: 43.74146117 }, { lng: 7.16522054, lat: 43.74152895 }, { lng: 7.16518479, lat: 43.7415989 }, { lng: 7.16495835, lat: 43.74153478 }, { lng: 7.16486737, lat: 43.74150322 }, { lng: 7.16456301, lat: 43.74132304 }, { lng: 7.16435333, lat: 43.74118941 }, { lng: 7.16414226, lat: 43.74103393 }, { lng: 7.16390317, lat: 43.74091336 }, { lng: 7.16382742, lat: 43.74086555 }, { lng: 7.16362878, lat: 43.74076075 }, { lng: 7.16354861, lat: 43.74073369 }, { lng: 7.16335415, lat: 43.74066198 }, { lng: 7.16296003, lat: 43.74055125 }, { lng: 7.16268174, lat: 43.74048564 }, { lng: 7.1625192, lat: 43.74042421 }, { lng: 7.16234039, lat: 43.74037077 }, { lng: 7.16215516, lat: 43.74029939 }, { lng: 7.16207232, lat: 43.74026081 }, { lng: 7.1619329, lat: 43.74017008 }, { lng: 7.16174329, lat: 43.74006454 }, { lng: 7.16168879, lat: 43.74002727 }
                    ],
                    layer: 'LaBoucleduHautPlan'
                }
            };
        };

        angular.extend($scope, {
            center: {
                lng: 7.20424272,
                lat: 43.83021812,
                zoom: 12
            },
            paths: {
                p1: {
                    color: '#F00',
                    weight: 3,
                    latlngs: [{ lng: 7.20424272, lat: 43.83021812 }, { lng: 7.20425195, lat: 43.83015922 }, { lng: 7.2042365, lat: 43.83011362 },
    { lng: 7.20422332, lat: 43.83007471 }, { lng: 7.20417222, lat: 43.82998927 }, { lng: 7.20398436, lat: 43.82982169 },
    { lng: 7.20395979, lat: 43.82974153 }, { lng: 7.20397177, lat: 43.82970141 }, { lng: 7.20401681, lat: 43.82965372 },
    { lng: 7.20416254, lat: 43.82955347 }, { lng: 7.20425078, lat: 43.82951762 }, { lng: 7.20433858, lat: 43.82950973 },
    { lng: 7.20475848, lat: 43.82958275 }, { lng: 7.20499339, lat: 43.82961153 }, { lng: 7.20519584, lat: 43.8295884 },
    { lng: 7.20541204, lat: 43.82953229 }, { lng: 7.20548561, lat: 43.82953396 }, { lng: 7.205523, lat: 43.82955144 },
    { lng: 7.2055182, lat: 43.82958767 }, { lng: 7.20549294, lat: 43.82961659 }, { lng: 7.20538367, lat: 43.82965415 },
    { lng: 7.2051201, lat: 43.82970938 }, { lng: 7.20504458, lat: 43.82971499 }, { lng: 7.20490595, lat: 43.82972575 },
    { lng: 7.20484153, lat: 43.82973004 }, { lng: 7.20479999, lat: 43.82974065 }, { lng: 7.20474664, lat: 43.82977696 },
    { lng: 7.20470601, lat: 43.82985062 }, { lng: 7.20470708, lat: 43.82994971 }, { lng: 7.20474601, lat: 43.83022487 },
    { lng: 7.20479442, lat: 43.83015541 }, { lng: 7.20481144, lat: 43.83004841 }, { lng: 7.2048094, lat: 43.82988538 },
    { lng: 7.20483282, lat: 43.82984843 }, { lng: 7.20487201, lat: 43.82983971 }, { lng: 7.20511427, lat: 43.82983306 },
    { lng: 7.20517587, lat: 43.82982438 }, { lng: 7.20521627, lat: 43.82984895 }, { lng: 7.20530491, lat: 43.82983562 },
     { lng: 7.20550445, lat: 43.82977295 }, { lng: 7.20568039, lat: 43.82969406 }, { lng: 7.20597811, lat: 43.82961228 },
      { lng: 7.20599842, lat: 43.82960068 }, { lng: 7.20615997, lat: 43.82951244 }, { lng: 7.20651202, lat: 43.82927265 },
      { lng: 7.20676, lat: 43.82917476 }, { lng: 7.20686025, lat: 43.82913305 }, { lng: 7.20701682, lat: 43.82909546 },
      { lng: 7.20717425, lat: 43.82906956 }, { lng: 7.20731844, lat: 43.82906669 }, { lng: 7.20736269, lat: 43.82909292 },
      { lng: 7.20751034, lat: 43.82910259 }, { lng: 7.20762231, lat: 43.82909779 }, { lng: 7.20776362, lat: 43.82907695 },
       { lng: 7.20786601, lat: 43.82907995 }, { lng: 7.20794389, lat: 43.82915795 }, { lng: 7.20797209, lat: 43.82925288 },
       { lng: 7.20803082, lat: 43.82934649 }, { lng: 7.20812069, lat: 43.82944616 }, { lng: 7.20828718, lat: 43.82948339 },
       { lng: 7.20843149, lat: 43.82949939 }, { lng: 7.20859617, lat: 43.82951451 }, { lng: 7.2088327, lat: 43.82953395 },
       { lng: 7.20903809, lat: 43.82954732 }, { lng: 7.20913988, lat: 43.82954296 }, { lng: 7.20927938, lat: 43.8295 },
       { lng: 7.20949789, lat: 43.82942408 }, { lng: 7.2096404, lat: 43.82941796 }, { lng: 7.20978291, lat: 43.82941185 },
       { lng: 7.2098859, lat: 43.82942222 }, { lng: 7.21003859, lat: 43.82941567 }, { lng: 7.21022181, lat: 43.82940781 },
       { lng: 7.21039245, lat: 43.82937092 }, { lng: 7.21057265, lat: 43.82932621 }, { lng: 7.21097318, lat: 43.82922769 },
       { lng: 7.21119423, lat: 43.82910897 }, { lng: 7.21121877, lat: 43.82908 }, { lng: 7.21125188, lat: 43.82906278 },
       { lng: 7.21137793, lat: 43.82905847 }, { lng: 7.21147053, lat: 43.82905486 }, { lng: 7.21163923, lat: 43.82901345 },
        { lng: 7.21219654, lat: 43.82887598 }, { lng: 7.21247403, lat: 43.82882401 }, { lng: 7.21259443, lat: 43.82883134 },
        { lng: 7.21280314, lat: 43.82886317 }, { lng: 7.21303033, lat: 43.82889752 }, { lng: 7.21309253, lat: 43.82890698 },
        { lng: 7.21321014, lat: 43.82891112 }, { lng: 7.21326575, lat: 43.82890836 }, { lng: 7.21334761, lat: 43.82890375 },
         { lng: 7.21343801, lat: 43.82889178 }, { lng: 7.21363028, lat: 43.82886552 }, { lng: 7.21375228, lat: 43.82884889 },
          { lng: 7.21383322, lat: 43.82884542 }, { lng: 7.21394757, lat: 43.82884087 }, { lng: 7.21397871, lat: 43.82886159 },
          { lng: 7.2140345, lat: 43.82894151 }, { lng: 7.21407483, lat: 43.82895669 }, { lng: 7.21413073, lat: 43.82895666 },
          { lng: 7.21417492, lat: 43.82894184 }, { lng: 7.21421576, lat: 43.82892814 }, { lng: 7.21424035, lat: 43.82890882 },
          { lng: 7.21431929, lat: 43.82884663 }, { lng: 7.21455777, lat: 43.82871888 }, { lng: 7.21460065, lat: 43.82869516 },
          { lng: 7.21467694, lat: 43.82866587 }, { lng: 7.21475583, lat: 43.82865462 }, { lng: 7.21491248, lat: 43.82866178 },
          { lng: 7.21504203, lat: 43.82868174 }, { lng: 7.21516449, lat: 43.82871552 }, { lng: 7.21530582, lat: 43.82879863 },
          { lng: 7.21545423, lat: 43.82891804 }, { lng: 7.2155429, lat: 43.8289741 }, { lng: 7.21573172, lat: 43.82907447 },
          { lng: 7.21606305, lat: 43.82917953 }, { lng: 7.21617977, lat: 43.82922519 }, { lng: 7.21672591, lat: 43.82938748 },
          { lng: 7.21741039, lat: 43.82954013 }, { lng: 7.21775291, lat: 43.82959313 }, { lng: 7.21793266, lat: 43.82961462 },
          { lng: 7.21816064, lat: 43.82966226 }, { lng: 7.2182946, lat: 43.82968283 }, { lng: 7.21848761, lat: 43.8297125 },
          { lng: 7.21898291, lat: 43.82973459 }, { lng: 7.21917336, lat: 43.82974841 }, { lng: 7.21928475, lat: 43.82975642 },
          { lng: 7.21956803, lat: 43.82973568 }, { lng: 7.2196361, lat: 43.82974854 }, { lng: 7.21965904, lat: 43.82978524 },
          { lng: 7.21964134, lat: 43.82980485 }, { lng: 7.21943294, lat: 43.82985176 }, { lng: 7.21908625, lat: 43.82997414 },
          { lng: 7.21877703, lat: 43.83004009 }, { lng: 7.2185376, lat: 43.83006409 }, { lng: 7.21808979, lat: 43.83008802 },
          { lng: 7.21770421, lat: 43.83007492 }, { lng: 7.21749285, lat: 43.83004009 }, { lng: 7.2174558, lat: 43.83004997 },
          { lng: 7.21743533, lat: 43.83007835 }, { lng: 7.21744724, lat: 43.83010823 }, { lng: 7.21748461, lat: 43.83012646 },
          { lng: 7.21780916, lat: 43.83017762 }, { lng: 7.21829064, lat: 43.83030147 }, { lng: 7.2188071, lat: 43.83040542 },
          { lng: 7.2192981, lat: 43.83044636 }, { lng: 7.21959309, lat: 43.83045136 }, { lng: 7.21970038, lat: 43.83046099 },
          { lng: 7.21974789, lat: 43.8304814 }, { lng: 7.21978107, lat: 43.83052145 }, { lng: 7.21978338, lat: 43.83056337 },
          { lng: 7.21976021, lat: 43.83059223 }, { lng: 7.21972103, lat: 43.83059743 }, { lng: 7.21957121, lat: 43.83057493 },
          { lng: 7.21942064, lat: 43.8305676 }, { lng: 7.21893414, lat: 43.83060122 }, { lng: 7.21864207, lat: 43.83060151 },
          { lng: 7.21818543, lat: 43.83055423 }, { lng: 7.21749152, lat: 43.83047214 }, { lng: 7.21705762, lat: 43.83039989 },
          { lng: 7.2167673, lat: 43.83032417 }, { lng: 7.21670614, lat: 43.83032563 }, { lng: 7.21667111, lat: 43.83034959 },
          { lng: 7.21668614, lat: 43.83038257 }, { lng: 7.21673908, lat: 43.83040383 }, { lng: 7.21708408, lat: 43.83047494 },
          { lng: 7.2174141, lat: 43.83056392 }, { lng: 7.21768815, lat: 43.83065548 }, { lng: 7.21815568, lat: 43.83078688 },
          { lng: 7.21862861, lat: 43.83094166 }, { lng: 7.21907486, lat: 43.83103989 }, { lng: 7.21924578, lat: 43.83106302 },
          { lng: 7.21930927, lat: 43.8311005 }, { lng: 7.21931823, lat: 43.83113384 }, { lng: 7.21930466, lat: 43.8311567 },
          { lng: 7.21927742, lat: 43.83117085 }, { lng: 7.21922033, lat: 43.8311734 }, { lng: 7.21893301, lat: 43.83108881 },
          { lng: 7.21859734, lat: 43.83103281 }, { lng: 7.21807382, lat: 43.83095531 }, { lng: 7.21761478, lat: 43.83089695 },
          { lng: 7.21723234, lat: 43.83086451 }, { lng: 7.21673045, lat: 43.83079256 }, { lng: 7.21639493, lat: 43.83072456 },
          { lng: 7.21591046, lat: 43.83065384 }, { lng: 7.2156947, lat: 43.83061243 }, { lng: 7.21525253, lat: 43.83052746 },
          { lng: 7.21494039, lat: 43.83050317 }, { lng: 7.21476703, lat: 43.8304897 }, { lng: 7.21451933, lat: 43.83052522 },
           { lng: 7.21419815, lat: 43.83062773 }, { lng: 7.21396795, lat: 43.83069298 }, { lng: 7.21382137, lat: 43.83071757 },
           { lng: 7.21370681, lat: 43.83071041 }, { lng: 7.21334349, lat: 43.83061925 }, { lng: 7.21311439, lat: 43.83059139 },
           { lng: 7.21284021, lat: 43.83060776 }, { lng: 7.21278046, lat: 43.83061131 }, { lng: 7.21255181, lat: 43.83066035 },
           { lng: 7.21246265, lat: 43.8306942 }, { lng: 7.21237545, lat: 43.83075024 }, { lng: 7.21229005, lat: 43.83083452 },
           { lng: 7.21218181, lat: 43.831014 }, { lng: 7.21211187, lat: 43.83110158 }, { lng: 7.21206557, lat: 43.83115135 },
           { lng: 7.2042426, lat: 43.83021815 }, { lng: 7.20424272, lat: 43.83021812 }, { lng: 7.2042426, lat: 43.83021815 },
           { lng: 7.20421747, lat: 43.83024886 }, { lng: 7.20415979, lat: 43.8302601 }, { lng: 7.20408313, lat: 43.83023332 },
           { lng: 7.20401931, lat: 43.83017811 }, { lng: 7.20394879, lat: 43.8300826 }, { lng: 7.20387385, lat: 43.83001159 },
           { lng: 7.20380894, lat: 43.82997535 }, { lng: 7.20367975, lat: 43.82987759 }, { lng: 7.20362974, lat: 43.82984077 },
            { lng: 7.20356652, lat: 43.82979365 }, { lng: 7.20356331, lat: 43.82978386 }, { lng: 7.20354163, lat: 43.82972612 },
            { lng: 7.20353787, lat: 43.82960731 }, { lng: 7.2035069, lat: 43.82954182 }, { lng: 7.20347121, lat: 43.82951345 },
            { lng: 7.20339115, lat: 43.82949131 }, { lng: 7.20320252, lat: 43.82948236 }, { lng: 7.20305421, lat: 43.82947997 },
            { lng: 7.2028919, lat: 43.8294565 }, { lng: 7.20271544, lat: 43.82939301 }, { lng: 7.20258518, lat: 43.82933135 },
            { lng: 7.20256399, lat: 43.82931414 }, { lng: 7.20253386, lat: 43.82929367 }, { lng: 7.20249836, lat: 43.82926801 },
            { lng: 7.20245639, lat: 43.82923899 }, { lng: 7.20241174, lat: 43.82920736 }, { lng: 7.20236055, lat: 43.82917149 },
            { lng: 7.20230172, lat: 43.82913321 }, { lng: 7.20223681, lat: 43.82909696 }, { lng: 7.20216622, lat: 43.82906814 },
            { lng: 7.20209375, lat: 43.8290475 }, { lng: 7.20202553, lat: 43.82903391 }, { lng: 7.20196777, lat: 43.82902713 },
            { lng: 7.20193647, lat: 43.82902473 }, { lng: 7.20190896, lat: 43.82902309 }, { lng: 7.20185277, lat: 43.82902075 },
            { lng: 7.20179913, lat: 43.82901921 }, { lng: 7.20174798, lat: 43.82901758 }, { lng: 7.20170054, lat: 43.8290158 },
            { lng: 7.20165683, lat: 43.82901388 }, { lng: 7.20162064, lat: 43.82901258 }, { lng: 7.20157087, lat: 43.82902982 },
             { lng: 7.2014953, lat: 43.82905165 }, { lng: 7.20141724, lat: 43.82907359 }, { lng: 7.20132024, lat: 43.82909175 },
             { lng: 7.20130064, lat: 43.82909611 }, { lng: 7.20127091, lat: 43.82909815 }, { lng: 7.20124458, lat: 43.82909556 },
             { lng: 7.20122537, lat: 43.8290882 }, { lng: 7.20120177, lat: 43.82907198 }, { lng: 7.20119313, lat: 43.82905609 },
             { lng: 7.20425409, lat: 43.83022515 }, { lng: 7.2042426, lat: 43.83021815 }, { lng: 7.20425409, lat: 43.83022515 },
         { lng: 7.20424272, lat: 43.83021812 }, { lng: 7.2065469, lat: 43.83135302 }, { lng: 7.20643048, lat: 43.83134298 },
         { lng: 7.2060552, lat: 43.83123193 }, { lng: 7.20588619, lat: 43.83114675 }, { lng: 7.20584019, lat: 43.83113258 },
         { lng: 7.2057371, lat: 43.83110571 }, { lng: 7.20546478, lat: 43.8310063 }, { lng: 7.20524401, lat: 43.8309126 },
         { lng: 7.20506892, lat: 43.83084301 }, { lng: 7.20486786, lat: 43.83074667 }, { lng: 7.20465397, lat: 43.83061842 },
         { lng: 7.20447949, lat: 43.83052726 }, { lng: 7.20446641, lat: 43.8305197 }, { lng: 7.20434301, lat: 43.83028007 },
         { lng: 7.20432348, lat: 43.83026741 }, { lng: 7.20425409, lat: 43.83022515 }, { lng: 7.21206557, lat: 43.83115135 },
{ lng: 7.21206566, lat: 43.83115194 }, { lng: 7.21206526, lat: 43.83115168 }, { lng: 7.21206526, lat: 43.83115168 },
{ lng: 7.21206557, lat: 43.83115135 }, { lng: 7.20961619, lat: 43.83162008 }, { lng: 7.20961631, lat: 43.83162002 },
{ lng: 7.20975142, lat: 43.83154954 }, { lng: 7.20991325, lat: 43.83150734 }, { lng: 7.2099996, lat: 43.83148488 },
{ lng: 7.21021229, lat: 43.83145529 }, { lng: 7.21116448, lat: 43.83139668 }, { lng: 7.21140032, lat: 43.83137295 },
{ lng: 7.21163282, lat: 43.83134954 }, { lng: 7.21185728, lat: 43.83128562 }, { lng: 7.21192871, lat: 43.83125443 },
{ lng: 7.21204216, lat: 43.83117652 }, { lng: 7.21206526, lat: 43.83115168 }, { lng: 7.21261706, lat: 43.83161295 },
{ lng: 7.21249862, lat: 43.83159574 }, { lng: 7.21240588, lat: 43.8315777 }, { lng: 7.2123108, lat: 43.83155425 },
{ lng: 7.21220314, lat: 43.8315396 }, { lng: 7.21209179, lat: 43.83152649 }, { lng: 7.21195839, lat: 43.83152258 },
{ lng: 7.21186622, lat: 43.8315114 }, { lng: 7.21177225, lat: 43.83147827 }, { lng: 7.21165363, lat: 43.8314228 },
{ lng: 7.21154717, lat: 43.8313582 }, { lng: 7.21261706, lat: 43.83161295 }, { lng: 7.21264485, lat: 43.83161699 },
{ lng: 7.21274864, lat: 43.83162736 }, { lng: 7.21274864, lat: 43.83162736 }, { lng: 7.21264485, lat: 43.83161699 },
{ lng: 7.21261706, lat: 43.83161295 }, { lng: 7.20863015, lat: 43.83222402 }, { lng: 7.20863032, lat: 43.83222423 },
{ lng: 7.20863032, lat: 43.83222423 }, { lng: 7.20859936, lat: 43.83222543 }, { lng: 7.20849331, lat: 43.83215472 },
{ lng: 7.20808882, lat: 43.83197028 }, { lng: 7.2078332, lat: 43.83188012 }, { lng: 7.20758068, lat: 43.83181508 },
{ lng: 7.20751717, lat: 43.83181482 }, { lng: 7.20739815, lat: 43.83183834 }, { lng: 7.20734406, lat: 43.83184764 },
 { lng: 7.20730759, lat: 43.83184274 }, { lng: 7.20728747, lat: 43.83183991 }, { lng: 7.20724617, lat: 43.831837 },
 { lng: 7.20707127, lat: 43.83177797 }, { lng: 7.20700128, lat: 43.83175724 }, { lng: 7.20689517, lat: 43.83161805 },
 { lng: 7.20680808, lat: 43.83155112 }, { lng: 7.20658492, lat: 43.83137769 }, { lng: 7.206547, lat: 43.83135302 },
{ lng: 7.20863032, lat: 43.83222423 }, { lng: 7.20871849, lat: 43.83233232 }, { lng: 7.20869852, lat: 43.83241893 },
{ lng: 7.20864334, lat: 43.83256412 }, { lng: 7.20854455, lat: 43.83265377 }, { lng: 7.20836623, lat: 43.83273696 },
 { lng: 7.20807597, lat: 43.83291031 }, { lng: 7.20793951, lat: 43.83312293 }, { lng: 7.21417458, lat: 43.83230388 },
 { lng: 7.21406468, lat: 43.83224924 }, { lng: 7.21389434, lat: 43.83217176 }, { lng: 7.21375283, lat: 43.8320888 },
 { lng: 7.2137013, lat: 43.83203165 }, { lng: 7.21363463, lat: 43.83193276 }, { lng: 7.21360916, lat: 43.83183633 },
 { lng: 7.2136012, lat: 43.83173916 }, { lng: 7.21359359, lat: 43.83164621 }, { lng: 7.21350911, lat: 43.83161592 },
 { lng: 7.21340094, lat: 43.8315824 }, { lng: 7.21322035, lat: 43.83159439 }, { lng: 7.21287704, lat: 43.83162185 },
 { lng: 7.21274864, lat: 43.83162736 }, { lng: 7.21417458, lat: 43.83230388 }, { lng: 7.21422749, lat: 43.83233844 },
 { lng: 7.21427108, lat: 43.83238034 }, { lng: 7.21432, lat: 43.83241353 }, { lng: 7.21432, lat: 43.83241353 },
 { lng: 7.21425496, lat: 43.83235555 }, { lng: 7.21417458, lat: 43.83230388 }, { lng: 7.21432, lat: 43.83241353 },
 { lng: 7.21432833, lat: 43.83241918 }, { lng: 7.21435731, lat: 43.83246353 }, { lng: 7.21432, lat: 43.83241353 },
 { lng: 7.2143305, lat: 43.83242289 }, { lng: 7.21435699, lat: 43.8324635 }, { lng: 7.21446228, lat: 43.83254753 },
 { lng: 7.21456918, lat: 43.83263148 }, { lng: 7.21461415, lat: 43.83268627 }, { lng: 7.2147372, lat: 43.83295969 },
 { lng: 7.21484728, lat: 43.83306876 }, { lng: 7.21495993, lat: 43.83315598 }, { lng: 7.21514328, lat: 43.8333353 },
 { lng: 7.21526079, lat: 43.83343169 }, { lng: 7.21531449, lat: 43.83349729 }, { lng: 7.21532105, lat: 43.83352568 },
  { lng: 7.21533406, lat: 43.83369662 }, { lng: 7.21538102, lat: 43.83384708 }, { lng: 7.21536903, lat: 43.83391206 },
  { lng: 7.21532872, lat: 43.83400838 }, { lng: 7.21533936, lat: 43.83410936 }, { lng: 7.21546304, lat: 43.83450296 },
  { lng: 7.21554288, lat: 43.83514901 }, { lng: 7.21551599, lat: 43.83578468 }, { lng: 7.2154719, lat: 43.83616934 },
  { lng: 7.21540494, lat: 43.83648023 }, { lng: 7.21535032, lat: 43.83661782 }, { lng: 7.21524768, lat: 43.83674251 },
  { lng: 7.21512923, lat: 43.83693894 }, { lng: 7.21499944, lat: 43.83715394 }, { lng: 7.20793951, lat: 43.83312293 },
  { lng: 7.20811075, lat: 43.8330112 }, { lng: 7.2083311, lat: 43.83290987 }, { lng: 7.2087033, lat: 43.83274049 },
  { lng: 7.20893968, lat: 43.8326034 }, { lng: 7.20926851, lat: 43.83245372 }, { lng: 7.20938231, lat: 43.83237632 },
  { lng: 7.20940904, lat: 43.83231672 }, { lng: 7.20937711, lat: 43.8322044 }, { lng: 7.20934859, lat: 43.83210457 },
   { lng: 7.20932429, lat: 43.83204513 }, { lng: 7.20932834, lat: 43.8319143 }, { lng: 7.20939838, lat: 43.83178363 },
   { lng: 7.20952672, lat: 43.83166692 }, { lng: 7.2096154, lat: 43.83162024 }, { lng: 7.20961603, lat: 43.83161992 },
{ lng: 7.20777376, lat: 43.83323599 }, { lng: 7.20787438, lat: 43.83316542 }, { lng: 7.20793951, lat: 43.83312293 },
{ lng: 7.21499944, lat: 43.83715394 }, { lng: 7.21499926, lat: 43.83715425 }, { lng: 7.2149988, lat: 43.83715413 },
{ lng: 7.21499944, lat: 43.83715394 }, { lng: 7.21499977, lat: 43.83715544 }, { lng: 7.21500371, lat: 43.83716079 },
{ lng: 7.2150286, lat: 43.83719456 }, { lng: 7.2150325, lat: 43.83742765 }, { lng: 7.21503338, lat: 43.83748253 },
{ lng: 7.21502794, lat: 43.837708 }, { lng: 7.21500231, lat: 43.83778746 }, { lng: 7.21491413, lat: 43.83796256 },
{ lng: 7.21489303, lat: 43.83799232 }, { lng: 7.21484233, lat: 43.83806844 }, { lng: 7.21481398, lat: 43.83814359 },
{ lng: 7.2147387, lat: 43.83823889 }, { lng: 7.21471532, lat: 43.83825612 }, { lng: 7.21463763, lat: 43.83827947 },
{ lng: 7.21400666, lat: 43.83846634 }, { lng: 7.21380472, lat: 43.83851955 }, { lng: 7.21338694, lat: 43.83861124 },
 { lng: 7.21331459, lat: 43.83864149 }, { lng: 7.21331169, lat: 43.83864271 }, { lng: 7.21325801, lat: 43.8386764 },
{ lng: 7.21294123, lat: 43.83788588 }, { lng: 7.21295289, lat: 43.83779256 }, { lng: 7.21288259, lat: 43.83708776 },
 { lng: 7.21284094, lat: 43.83698685 }, { lng: 7.21275629, lat: 43.83693431 }, { lng: 7.21254519, lat: 43.83686041 },
  { lng: 7.2122282, lat: 43.83680458 }, { lng: 7.21198314, lat: 43.83677993 }, { lng: 7.21182013, lat: 43.83674852 },
  { lng: 7.2117456, lat: 43.83672064 }, { lng: 7.21167394, lat: 43.83667745 }, { lng: 7.21158311, lat: 43.83659232 },
  { lng: 7.21146121, lat: 43.83643624 }, { lng: 7.21133233, lat: 43.83633483 }, { lng: 7.21118801, lat: 43.83628233 },
  { lng: 7.21097401, lat: 43.83628853 }, { lng: 7.21079632, lat: 43.83635179 }, { lng: 7.21057714, lat: 43.83640726 },
  { lng: 7.21038893, lat: 43.836412 }, { lng: 7.21033051, lat: 43.83641352 }, { lng: 7.21014564, lat: 43.83639665 },
  { lng: 7.20987663, lat: 43.83634868 }, { lng: 7.20973358, lat: 43.83630405 }, { lng: 7.20939272, lat: 43.83609496 },
   { lng: 7.20930103, lat: 43.83600512 }, { lng: 7.20918612, lat: 43.83585063 }, { lng: 7.20906918, lat: 43.83559524 },
   { lng: 7.20902096, lat: 43.83551137 }, { lng: 7.20899221, lat: 43.83546148 }, { lng: 7.20893737, lat: 43.83527385 },
   { lng: 7.2088345, lat: 43.83506105 }, { lng: 7.20861298, lat: 43.83478489 }, { lng: 7.20846141, lat: 43.83461935 },
   { lng: 7.20830058, lat: 43.83446377 }, { lng: 7.20821158, lat: 43.83437787 }, { lng: 7.208143, lat: 43.83431147 },
   { lng: 7.20794525, lat: 43.83407775 }, { lng: 7.20792065, lat: 43.83404193 }, { lng: 7.20780235, lat: 43.83392059 },
   { lng: 7.20776027, lat: 43.83385693 }, { lng: 7.20774192, lat: 43.83380614 }, { lng: 7.20774129, lat: 43.83369797 },
   { lng: 7.20779226, lat: 43.8332811 }, { lng: 7.2077736, lat: 43.83323603 }, { lng: 7.21294123, lat: 43.83788588 },
    { lng: 7.21293858, lat: 43.83790555 }, { lng: 7.21291547, lat: 43.83792987 }, { lng: 7.21280907, lat: 43.83797274 },
    { lng: 7.2126923, lat: 43.83797635 }, { lng: 7.21252354, lat: 43.83793331 }, { lng: 7.21244003, lat: 43.83793203 },
    { lng: 7.21241562, lat: 43.8379555 }, { lng: 7.21238892, lat: 43.83798177 }, { lng: 7.21239904, lat: 43.83803455 },
     { lng: 7.21241566, lat: 43.83805733 }, { lng: 7.2125544, lat: 43.83813218 }, { lng: 7.21292698, lat: 43.83830522 },
      { lng: 7.21314256, lat: 43.83844288 }, { lng: 7.2131849, lat: 43.83849351 }, { lng: 7.21324215, lat: 43.83856069 },
{ lng: 7.21293878, lat: 43.8379055 }, { lng: 7.21294123, lat: 43.83788588 }, { lng: 7.21324193, lat: 43.83856079 },
{ lng: 7.21324219, lat: 43.83856109 }, { lng: 7.21326326, lat: 43.83861916 }, { lng: 7.21325801, lat: 43.8386764 },
{ lng: 7.21325801, lat: 43.8386764 }, { lng: 7.21325782, lat: 43.83867652 }, { lng: 7.21325801, lat: 43.8386764 },
 { lng: 7.213258, lat: 43.83867655 }],
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
        // icones markers
        var local_icons = {
            default_icon: {},
            leaf_icon: {
                iconUrl: 'img/icones/marker-icon-blue.png',
                iconSize: [38, 95], // size of the iconsubdomains: '1234',
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
        /*
            Legende
        */
        $scope.legend = {
            position: 'bottomleft',
            colors: ['#F00'],
            labels: ['La Fubia']
        };
        /**
        * Center map on user's current position
        */
        $scope.locate = function () {

            $cordovaGeolocation
              .getCurrentPosition()
              .then(function (position) {
                  map.center.lat = position.coords.latitude;
                  map.center.lng = position.coords.longitude;
                  map.center.zoom = 15;

                  map.markers.now = {
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