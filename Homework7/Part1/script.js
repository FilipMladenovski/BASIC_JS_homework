let animal = {
    name: prompt ("Enter the name of your pet:"),
    kind: true,
   
    speak: function() {
        console.log(`${this.name} says: “hey bro!!!”`);
    }
}
animal.speak();