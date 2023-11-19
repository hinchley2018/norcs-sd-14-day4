let numbers = [4, 6, 10]
let total = 0
//Sum up the numbers using for loop
//Setup
for(let i = 0; i < numbers.length; i++){
    //meat and potatoes
    //add the element at that index to the total
    total = total + numbers[i]
}
console.log(total)

//Sum up the numbers using for each
console.log("output from forEach")
//reset back to zero so we know total is correct
total = 0
numbers.forEach(function(elem){
    console.log("log elem in forEach", elem)
    total = total + elem
})

console.log("foreach total", total)


//explain object
let flights = [
    {
        seatsAvailable: ["26A", "26D", "24B"],
        firstClass: false,
        snacks: ["Ranch doritoes", "apple juice", 'peanuts'],
        announcenments: [
            "Welcome to flight 8912 from Houston to Kansas",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 260,
        flightNumber: "United-8912",
        destination: "Kansas",
        price: 532
    },
    
    {
        seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
        row: "26",
        firstClass: false,
        snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
        announcenments: [
            "Welcome to flight 2445 from Houston to Denver",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 260,
        flightNumber: "Delta-2445",
        destination: 'denver',
        price: 274
    },
    {
        seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
        row: "26",
        firstClass: false,
        snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
        announcenments: [
            "Welcome to flight 1312 from Houston to Dallas",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 260,
        flightNumber: "Delta-1312",
        destination: 'dallas',
        price: 189
    },
    {
        seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
        row: "26",
        firstClass: false,
        snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
        announcenments: [
            "Welcome to flight 7890 from Houston to London",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 890,
        flightNumber: "United-7890",
        destination: 'london',
        price: 274,
        stops: [{airport: "LaGuardia", durationInMinutes: 90 }]
    }
]
//Sum up the flights prices
//go through list of flight objects and add up the prices
let flightTotal = 0;
//recipe for a foreach
//function - keyword to define recipe
//arg - data passed to function/ in the funciton def its the arg i'm using

function myForEach(array, cb_fn){
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        cb_fn(element)
    }
}
// debugger
myForEach(flights, function(f){
    
    flightTotal = flightTotal + f.price
})

// flights.forEach(function(f){
//     //just remember its an object
//     debugger
//     flightTotal = flightTotal + f.price
// })
// flightTotal = 0
// //() => {} function(){}
// flights.forEach((f) => {flightTotal = flightTotal + f.price})
console.log(flightTotal)

let onlyDestination = []
//list out only destination with for loop
for(let i = 0 ; i < flights.length; i++){
    onlyDestination.push(flights[i].destination)
}
console.log("forloop", onlyDestination )
//list out destination with .forEach
onlyDestination = flights.map((f) => {return f.destination})
console.log("foreach", onlyDestination )

//changing shape form list of objects to a list of strings
let flightNumbers = flights.map((f) => {return f.flightNumber})
console.log(flightNumbers)


function myMap(array, cb_fn){
    let a2 = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        cb_fn(element)
    }
    return a2
}
//transform in a different way
let numbersToDouble = [4, 6, 10]
//double the numbers
let doubled = numbersToDouble.map((n) => n**2)
console.log(doubled)

let numbersToFilter = [1,2,3]
numbersToFilter.filter((n) => n > 2)

let emails =["jon@gmail.com", "jon@live.com", "jon@yahoo.com", "jon@hotmail.com", "jon@junk.com"]

let gmails = emails.filter((e) => e.includes("gmail.com"))

//Return a list of flight destinations to make it easy to display
let destinations = []

console.log(destinations)
//using map to return destinations
let d2 = null
console.log("output from map", d2)

let flightsUl = document.querySelector("#flights")

//Filter only to one brand of dog food
let products = [
    {
        name: "pedigree dog food 30lbs",
        brand: "pedigree"
    },
    {
        name: "blue ribbon dog food 25lbs",
        brand: "blue ribbon"
    }
]
//filtered results using for loop to filter
let filteredResults = []
let selectedBrand = "blue ribbon"

console.log("for loop to filter", filteredResults)

let f2 = products.filter((p) => p.brand === "pedigree")
console.log("using .filter", f2)


//How would we exlude flights more expensive than $300?
//How would we exlude flights that have stops?

//Most of our other examples were code-alongs in the activities in canvas