var blog=angular.module("blog",["ngRoute"],["$routeProvider","$locationProvider",function(r,o){o.html5Mode(!0),r.when("/:partial*",{controller:"PageCtrl",templateUrl:function(r){return"/partial/"+r.partial}}).when("/",{controller:"PageCtrl",templateUrl:"/partial/index.html"})}]);blog.controller("PageCtrl",["$scope","$window",function(r,o){r.$on("$routeChangeStart",function(){o.NProgress.start()}),r.$on("$routeChangeSuccess",function(){o.NProgress.done()}),r.$on("$routeChangeError",function(){o.NProgress.done()})}]);