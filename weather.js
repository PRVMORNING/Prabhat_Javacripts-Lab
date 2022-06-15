const openApi={

 key:"9f7a3abe3962fa68a67ff1c583dc7a49",
 url: 'https://api.openweathermap.org/data/2.5/'

};

const searchBox=document.querySelector('.searchcity');
searchBox.addEventListener('keypress',getWeatherDetails);
function getWeatherDetails(evnt){
    getWeatherInfo(evnt.value);
}

function getWeatherDetails(evnt){
    if(evnt.keyCode==13){
        getWeatherInfo(searchBox.value);
    }
}



   function dateBuilder(currentdate)
    {
      let months=[ 'January', 'February','March','April','May','June','July','August','September','October','November','December'];
      let days=['Sunday','Monday','Tuseday','Wednesday','Thursday','Friday','Saturday'];

      let day=days[currentdate.getDay()];
      let date=currentdate.getDate();
      let month=months[currentdate.getMonth()];
      let year=currentdate.getFullYear();

     return `${day} ${date} ${month} ${year}`;

   }

function getWeatherInfo(cityName)
  {
    fetch(`${openApi.url}weather?q=${cityName}&units=metric&appid=${openApi.key}`)

    .then(weather=>
        {
        return weather.json();

    })
    .then(response=>
        {
        console.log(response);
        displayResponse(response);

        })
  }

  
function displayResponse(weather)
{
  
  let town=document.querySelector('.location.city');
  //for checking retrived data from api
  console.log(weather.name);
  console.log(weather.sys.country);

  town.innerText= `${weather.name} ${weather.sys.country}`;
 

  let now=new Date();
  let date=document.querySelector('.location.date');
  date.innerText=dateBuilder(now);   

  let temp=document.querySelector('.current.temp');
  temp.innerHTML=`${Math.round(weather.main.temp)}<span>&deg;C</span>`;

  let weather_el=document.querySelector('.current.weather');
  weather_el.innerText=weather.weather[0].main;

  let high_low=document.querySelector('.current.High-Low');
  high_low.innerHTML=`${Math.round(weather.main.temp_min)}<span>&deg;</span>C/${Math.round(weather.main.temp_max)}<span>&deg;</span>C`;
 }



