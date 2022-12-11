document.getElementById("btn").addEventListener("click", function(){
    
    console.log("clicked");
    const year = document.getElementById("year").value;
    console.log(year);

    let currentyear = new Date().getFullYear();
    console.log(currentyear);

    let age = currentyear-year;
    console.log(age);

    document.getElementById("agetext").innerHTML= "Your age is " + age;

})