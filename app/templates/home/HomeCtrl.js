import './index.css'
import datas from 'json-loader!../../data/navList.json'
//import '../../js/carousel.js'

class HomeCtrl {
    constructor($state, $http, $scope) {
        this.$state = $state;
        this.message = 'Angular with Webpack and Babel!1';
        
        
    }
}

export { HomeCtrl }
