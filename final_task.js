let readlineSync = require("readline-sync");
var OwnerName = readlineSync.question("Enter OwnerName--");
console.log("Hello🙋🏻‍♂️",OwnerName);
console.log("***😍Welcome To Uber😍***");
console.log("*** Four Riders👮‍♂️👮‍♂️👮‍♂️👮‍♂️ Is Available Now***\n");

var t_a1 = 0
var t_a2 = 0
var t_a3 = 0
var t_a4 = 0


function Rider_First() {
    let Rider_first_inf ={Name:"Tushar Gupta",
    Age:23,
    Mobile_Number:2345678910,
    Car_Model:"Maruti🚔",
    Car_Number:"KA2365",
    Location:"UB City Mall",
    Available:"24 Hours",
    Distance:"25KM"
    }
    console.log(Rider_first_inf)
}
Rider_First();
console.log("**********************************\n");


function Rider_Second() {
    var Rider_second_inf = {Name:"Kabir singh",
    Age:22,
    Mobile_Number:2345478911,
    Car_Model:"Tata🚔",
    Car_Number:"KA2385",
    Location:"Huskur",
    Available:"24 Hours",
    Distance:"1.5KM"
    }
    console.log(Rider_second_inf)
}
Rider_Second();
console.log("**********************************\n");



function Rider_Third() {
    var Rider_third_inf = {Name:"Pramod Pathak",
    Age:26,
    Mobile_Number:2045478934,
    Car_Model:"Honda🚔",
    Car_Number:"KA2375",
    Location:"Chandapura",
    Available:"24 Hours",
    Distance:"7KM"

    }
    console.log(Rider_third_inf)
}
Rider_Third();
console.log("**********************************\n");


function Rider_Fourth() {
    var Rider_fourth_inf = {Name:"Surya Rajput ",
    Age:21,
    Mobile_Number:2045478954,
    Car_Model:"Suzuki🚔",
    Car_Number:"KA2312",
    Location:"Electronic City",
    Available:"24 Hours",
    Distance:"13KM"
    }
    console.log(Rider_fourth_inf)
}
Rider_Fourth();
console.log("**********************************\n");


function main(){
    let choose_r = readlineSync.question("choose rider ---")
    if(choose_r == "r1"){
        Rider_First()
        let ask_km = readlineSync.question("choose km ---")
        var amount = 0
        var amount = ask_km * 5
        t_a1 = t_a1 + amount
        let choose_again = readlineSync.question("Choose Again If You Want 1.booking\n 2.cancel\n--")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            main();
        }else{
            console.log("finan cancel");
        }
    }else if(choose_r =="r2"){
        Rider_Second()
        let ask_km = readlineSync.question("choose km ---")
        var amount = 0
        var amount = ask_km * 5
        t_a2 = t_a2 + amount
        let choose_again = readlineSync.question("Choose Again If You Want 1.booking\n 2.cancel\n--")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            main();
        }else{
            console.log("final canceled");
        }
    }else if(choose_r =="r3"){
        Rider_Third()
        let ask_km = readlineSync.question("choose km ---");
        var amount = 0
        var amount = ask_km * 5
        t_a3 = t_a3 + amount
        let choose_again = readlineSync.question("Choose Again If You Want 1.booking\n2.cancel\n---");
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            main();
        }else{
            console.log("Final canceled");
        }
    }else if(choose_r == "r4"){
        Rider_Fourth()
        let ask_km = readlineSync.question("choose km ---")
        var amount = 0
        var amount = ask_km * 5
        t_a4 = t_a4 + amount
        let choose_again = readlineSync.question("Choose Again If You Want 1.booking\n 2.cancel\n--")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            main();
        }else{
            console.log("Final Canceled");
        }
    }
}

let user = readlineSync.question("Choose Booking Or Cancel 1.booking\n 2. cancel\n:-");
if(user == "booking"){
    main();
}else{
    console.log("Okey canceled");
    let choose_again = readlineSync.question("choose again if you want to book --")
    if(choose_again == "booking"){
        main();
    }else{
        console.log("Final canceled");
        
    }
}

var check_amount = readlineSync.question("Do You Want To Check Amount 1.yes\n 2.no\n --")
if("yes" == check_amount){
    function amount_fun(){
        
        // Rider_First()
        console.log("Rider_First Total Amount is ",t_a1,"Rs.\n");
        
        // Rider_Second()
        console.log("Rider_Second Total Amount is ",t_a2,"Rs.\n");
        
        // Rider_Third()
        console.log("Rider_Third Total Amount is ",t_a3,"Rs.\n");
        
        // Rider_Fourth()
        console.log("Rider_Fourth Total Amount is ",t_a4,"Rs.\n");
    }
    amount_fun()
}else{
    console.log("Okey Bye Bye");
}

