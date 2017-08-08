import "./index.css"
class HeaderCtrl {
    constructor($state, $http, dataFactory) {
    	var tt = [];
        this.$state = $state;
        this.$http = $http;
        this.message = "dataFactory.getCustomers()";
        this.data = ["Home", "Shop", "Cart", "Checkout"];
        
        var nav = dataFactory.getCustomers(this.$http);
    	//this.links = dataFactory.getCustomers().links;
    	this.navFn = function(){
    		console.log($state)
    		return nav
    	}

    	/*setTimeout(function(){
    		console.log(nav)
    	}, 3000);*/
    }
    
}

export { HeaderCtrl }
