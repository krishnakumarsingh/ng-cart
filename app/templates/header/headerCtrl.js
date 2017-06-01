import "./index.css"
import datas from 'json-loader!../../data/navList.json'
class HeaderCtrl {
    constructor($state, $http, DataService) {
        this.$state = $state;
        this.data = datas;
    	this.links = datas.links;
    }
}

export { HeaderCtrl }
