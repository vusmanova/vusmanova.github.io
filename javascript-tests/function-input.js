window.onload = () => {
    const feetToInchesAction =
        document.getElementById('feetToInchesAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };

    const milesToFeetAction = document.getElementById('milesToFeetAction');

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('milesToFeetInput');
        const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeet.value);
    };

    const areaOfTriangleAction = document.getElementById('areaOfTriangle');

    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInput = document.getElementById('areaOfTriangle');
        const areaOfTriangleDisplay = document.getElementById('areaOfTriangle');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangle.value);
    };

    const areaOfCircleAction = document.getElementById('areaOfCircle');

    areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('areaOfCircle');
        const areaOfCircleDisplay = document.getElementById('areaOfCircle');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircle.value);
    };




const feetToInches = (feet) => {
    return feet * 12;
};


const milesToFeet = (miles) => {
    return miles * 5280; 
}
/*The triangle is tricky because it requires two parameters rather than just one. Think of our add function that we have discussed in class several times:

function add(a, b) {
   return a + b;
}
This function takes two parameters: a and b.

I tell you that you can get the area of a triangle by:

area = base times height divided by two
Perhaps you can see that you can't calculate the area without knowing two things. The user has to enter in both things, and you have to retrieve both bits of user input and pass them as parameters to the function that calculates the triangle's area.

   Area of circle
   const Math = {
    PI: 3.141592653589793,
    manyOtherProperties: 'Math is a big object, I am simulating only part of it'
}

console.log(Math.PI * 2);
 */
}

