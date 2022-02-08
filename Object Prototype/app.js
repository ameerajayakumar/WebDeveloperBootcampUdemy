String.prototype.yell = function() {
    //console.log(this.toUpperCase());
    return `OMGGGG !! ${this.toUpperCase()}!!!! ARGGHHH`; 
    //"luna & halo".yell() --> 'OMGGGG !! LUNA & HALO!!!! ARGGHHH'
}; 

Array.prototype.pop = function() {
    return 'NO WAY! I WANT TO KEEP THIS ELEMENT!';
};

/*
Prototype is the template object(Arrays) which contains some properties/methods
String.prototype is the actual String prototype object and __proto__ is the reference to this String prototype
*/