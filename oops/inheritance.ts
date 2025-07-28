// Parent class
class ParentClass {
    farm() {
        console.log("Parent's farm");
    }

    car() {
        console.log("Parent's car");
    }
}

// Child class inherits from ParentClass
class ChildClass extends ParentClass {
    mobile() {
        console.log("Child's mobile");
    }

    home() {
        console.log("Child's home");
    }
}

// Create object of child class
let child = new ChildClass();

// Call child class methods
child.mobile();  // Output: Child's mobile
child.home();    // Output: Child's home

// Call parent class methods using child class object (inheritance)
child.farm();    // Output: Parent's farm
child.car();     // Output: Parent's car

