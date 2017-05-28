
class HeaderCtrl {
    constructor($state, $http, DataService) {
        this.$state = $state;
        this.message = "DataService.getFullName()";
        this.data = ["Home", "Shop", "Cart", "Checkout"];
        this.nav = DataService.getFullName();
    	this.links = DataService.getFullName().links;
    }
}

export { HeaderCtrl }
