// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name}, ${this.age} years old`);
    }
}

const personOne = new Person("John", 19);
personOne.describe(); //John, 19 years old

// #### 2. Tick Tock
//Rewrite the following code to use the "class" syntax. 

 class Clock {
    constructor({ template }) {
      this.template = template;
    
  
        function render() {
          let date = new Date();
      
          let hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          let mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          let secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
    
        this.stop = function() {
            // do nothing!
        };
        this.start = function() {
            render();
        };
    
   }
  
}
  
let clock = new Clock({template: 'h:m:s'});
clock.start();


// #### 3. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. 
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    volumeUpp(n) { 
        if (this.volume + n < 100) {
           this.volume += n; 
        } else if (this.volume + n > 100) 
           {   this.volume = 100; }
       console.log(`Current volume is ${this.volume}`);
    }

    volumeDown(n) {  
        if ((this.volume - n) < 100 && (this.volume - n) > 0 ) {
            this.volume = this.volume - n; 
         } else if (this.volume -n < 0) 
            {  this.volume = 0; }
        console.log(`Current volume is ${this.volume}`);
     
    }
    selectChannel() { //  Math.random() * (max - min) + min; (50 - 1) + 1) = 50
        const randomChannel = Math.round(Math.random() * 50);
        console.log( `Current channel is ${randomChannel}`);
    }
    reset() {
        this.channel = 1;
        this.volume = 50;
        console.log(`TV preferences have been resetted: channel is ${this.channel} and volume is ${this.volume} `);
    }
    status() {
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
    }
}

const tv1 = new TV("Panasonic", 8, 75);

console.log(tv1); //TV { brand: 'Panasonic', channel: 8, volume: 75 }

tv1.status(); //Panasonic at channel 8, volume 75

tv1.volumeUpp(25); // Current volume is 75
tv1.volumeDown(5); // Current volume is 70

tv1.selectChannel(); //prints : Current channel is 40 (a random number)

tv1.reset(); // TV preferences have been resetted: channel is 1 and volume is 50

tv1.status(); // Panasonic at channel 1, volume 50



// #### *Bonus* 4. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    
    }
    getVolume() {
        const volume = (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
        console.log(`The cylinder volume is: ${volume}`); 
    }
}

const cylinder1 = new Cylinder(7, 4);

cylinder1.getVolume(); //The cylinder volume is: 615.7522
