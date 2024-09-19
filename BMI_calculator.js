var weight = 64;
var hight = 5.8;
hight = hight*0.3048

var BMI = weight/(hight*hight);

if ( BMI < 18.5){
    console.log(" You are under weight ")
}
else if( BMI>= 18.5 && BMI <= 24.9) {
    console.log( "You are normal")
}
else if(BMI>=25 && BMI<=29.9){
    console.log("You are over weight")
}

else {
    console.log(" You are obese")
}