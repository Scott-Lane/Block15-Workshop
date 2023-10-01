
const customer = { 
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

customer.email = "Jak3Smith1992@email.com";
customer.phone = 3195551234;
customer.zipCode = "63132";
customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];

//console.log(object.favoriteFlavors);

//for(const info in object) {
    //console.log(object[info]);
//}

delete customer ["zipCode"];
delete customer ["favoriteStore"];

//console.log(object);


customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32 

console.log(customer);