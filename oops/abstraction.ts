// abstract class 

abstract class Animal {

    abstract makeSound(): void;      // abstract method

    abstract eat(): void;

    move() {
        console.log("Animal is moving");
    }
}

// create subclass and provide implementation

class Dog extends Animal {

    makeSound(){
        console.log("Dog Sound like woof ... ");
    }

    eat() {
        console.log("Dog eatting");
    }

}

class Cat extends Animal {
    makeSound(): void {
       
    }
    eat(): void {
        
    }
    
}

var ob1 = new Dog();
ob1.move();
ob1.eat();
ob1.makeSound();