const UIcelsius = document.querySelector('#result-celsius');
const UIfahrenheit = document.querySelector('#result-fahrenheit');
const UIkelvin = document.querySelector('#result-kelvin');
const UIrankine = document.querySelector('#result-rankine');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

//Gathering videos
const defaultVideo = document.querySelector('#default-video');
const summerVideo = document.querySelector('#summer-video');
const autumnVideo = document.querySelector('#auttum-video');
const winterVideo = document.querySelector('#winter-video');

//Initially hide every video except defaut
summerVideo.style.display = 'none';
autumnVideo.style.display = 'none';
winterVideo.style.display = 'none';

//Defining Calculating elements
const calculateBtn = document.querySelector('.calculateBtn');
const temperatureUnit = document.querySelector('#tempUnit');

//Listen for value when calculated clicked
calculateBtn.addEventListener('click',calculateResult);
//Listen for value when option is clicked
temperatureUnit.addEventListener('click',changeUIUnit);

//Defining variables in global scope so that it can be use in outer function.
let celsius,fahrenheit,kelvin,rankine;

//Calculate function
function calculateResult(e){
    //getting the input value
    let inputNumber = parseInt(UIinputValue.value);

    //getting the values from option
    let optionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();

    //Checking the input and assigning if statement according to that
    if(optionValue == "select your desire temperature unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Temperature Value');

    }else
        if(optionValue == "celsius"){
            celsius = inputNumber;
            fahrenheit = ((inputNumber * 9/5)+32).toFixed(2);
            kelvin = (inputNumber + 273.15).toFixed(2);
            rankine =(inputNumber * 9/5 + 491.67).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "fahrenheit"){
            celsius = ((inputNumber-32)*5/9).toFixed(2);
            fahrenheit = inputNumber;
            kelvin = (((inputNumber-32)*5/9)+273.15).toFixed(2);
            rankine =(inputNumber+ 491.67).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "kelvin"){
            celsius = (inputNumber - 273.15).toFixed(2);
            fahrenheit = ((inputNumber - 273.15)*9/5 + 32).toFixed(2);
            kelvin = inputNumber;
            rankine =(inputNumber * 1.8).toFixed(2);
            UIresultOutput();
        }
        if(optionValue == "rankine"){
            celsius = ((inputNumber - 491.67)*5/9).toFixed(2);
            fahrenheit = (inputNumber - 459.67).toFixed(2);
            kelvin = (inputNumber*5/9).toFixed(2);
            rankine =inputNumber;
            UIresultOutput();
        }

    e.preventDefault();
};

//Dynamically Unit changing function
function changeUIUnit(){
    let UIoptionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'celsius'){
            UIinputValueUnit.innerHTML ='&deg;C';
        }
        if(UIoptionValue == 'fahrenheit'){
            UIinputValueUnit.innerHTML ='&deg;F';
        }
        if(UIoptionValue == 'kelvin'){
            UIinputValueUnit.innerHTML ='&deg;K';
        }
        if(UIoptionValue == 'rankine'){
            UIinputValueUnit.innerHTML ='&deg;R';
        }
}

//Appending result into UI function
function UIresultOutput(){
    UIcelsius.value = celsius;
    UIfahrenheit.value = fahrenheit;
    UIkelvin.value = kelvin;
    UIrankine.value = rankine;
    if(celsius >= 30){
        summerVideo.style.display = 'block';
        autumnVideo.style.display = 'none';
        winterVideo.style.display = 'none';
        defaultVideo.style.display = 'none';
    }
   else if(celsius >= 20  &&  celsius <= 29){
        summerVideo.style.display = 'none';
        autumnVideo.style.display = 'block';
        winterVideo.style.display = 'none';
        defaultVideo.style.display = 'none';
    }
    else {
        summerVideo.style.display = 'none';
        autumnVideo.style.display = 'none';
        winterVideo.style.display = 'block';
        defaultVideo.style.display = 'none';
    }

    //clear Input
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}