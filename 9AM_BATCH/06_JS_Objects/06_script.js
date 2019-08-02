// Object Creation
let employee = {
    name : 'John',
    age : 40,
    salary : 85000,
    company : 'Infosys'
};

// access the object
console.log(employee);

// access the properties of an Object
console.log(`Name : ${employee.name}`);
console.log(`Age : ${employee.age}`);

// Access the non Existing Property
console.log(employee.location); // undefined

// dot notation , [] notation
let mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000,
    isInsured : false
};

console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);

// diff between dot , [] notation
let propName = 'brand';
console.log(`Dynamic Prop : ${mobile.propName}`); // undefined
console.log(`Dynamic Prop : ${mobile[propName]}`); // Apple

// CREATE Operation
let fridge = {};
// Add Property (CREATE)
fridge.eggs = 20;
fridge.veg = 'Tomotos';

// Access the property (READ)
console.log(`Eggs : ${fridge.eggs}`);

// update the property (UPDATE)
fridge.eggs = 40;
console.log(fridge);

// delete the property (DELETE)
delete fridge.veg;
console.log(fridge);

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania Medical College',
    address : {
        street : 'Jubliee Hills',
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// access the nested Object
console.log(student.address);

// add property to nested Object
student.address.houseNumber = '1-4-3';
console.log(student.address);










