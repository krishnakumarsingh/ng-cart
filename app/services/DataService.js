
class DataService {
    
    constructor() {
        this.mm = {
				    "projectTitle" : "My Website Title",
				    "links" : [
				        {"name" : "Home", "url" : "home", "className" : ""},
				        {"name" : "About", "url" : "about", "className" : ""},
				        {"name" : "Shop", "url" : "shop", "className" : ""},
				        {"name" : "Checkout", "url" : "checkout", "className" : ""}
				    ]
				};
    }
    getFullName() {
        return this.mm;
    }
}

export { DataService }