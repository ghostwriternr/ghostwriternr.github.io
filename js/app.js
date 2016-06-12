(function() {
    var app = angular.module('ghostPS', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMdIcons', 'ngMessages'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('deep-purple')
                .accentPalette('pink');
        });
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        // home page
            .when('/', {
                templateUrl: 'home.html',
                controller: 'mainController'
            })
            // about page
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            // contact page
            .when('/projects', {
                templateUrl: 'projects.html',
                controller: 'projectsController'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
    app.controller('BackController', function() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 75,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    });
    app.controller('mainController', ['$scope', '$http', '$sce', '$mdDialog', '$mdMedia', '$mdToast',
        function($scope, $http, $sce, $mdDialog, $mdMedia, $mdToast) {
            $scope.pageClass = 'page-home';
        }
    ]);
    app.controller('aboutController', ['$scope', '$http', '$sce', '$mdDialog', '$mdMedia', '$mdToast',
        function($scope, $http, $sce, $mdDialog, $mdMedia, $mdToast) {
            $scope.pageClass = 'page-about';
        }
    ]);
    app.controller('projectsController', ['$scope', '$http', '$sce', '$mdDialog', '$mdMedia', '$mdToast',
        function($scope, $http, $sce, $mdDialog, $mdMedia, $mdToast) {
            $scope.pageClass = 'page-projects';
        }
    ]);
})();
