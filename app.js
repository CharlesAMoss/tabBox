(function () {
    var app = angular.module('profile', []);


app.controller('ProfileController', function () {
        this.products = hero;
    }); 
/*
app.controller('StoreController', function () {
        this.products = gems;
    });*/


app.controller("TabController", function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

var hero = [{
        name: 'Green Arrow',
        altName: 'The Emerald Archer',
        alias: 'Oliver Queen',
        dayJob: 'playboy billionaire',
        power: 'human',
        weapons: 'trick arrows',
        sidekick: 'Speedy',
        relationship: 'Black Canary',
        images: 'img/greenarrow.jpg',            
        bio: ''
    }, {
    	name: 'Green Lantern',
        altName: '',
        alias: 'Hal Jordan',
        dayJob: 'test pilot',
        power: 'human',
        weapons: 'power ring',
        sidekick: 'n/a',
        relationship: 'Carol Ferris',
        images: 'img/greenlantern.jpg',
        bio: ''
	}, {
        name: 'The Flash',
        altName: '',
        alias: 'Barry Allen',
        dayJob: 'playboy billionaire',
        power: 'meta-human',
        weapons: 'Super Speed',
        sidekick: 'Wally West',
        relationship: 'n/a',
        images: 'img/theflash.jpg',
        bio: ''
    }];

})();