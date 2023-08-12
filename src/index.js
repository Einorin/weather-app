import "./style.css";
// import backgroundImg from './images/oc-gonzalez-xg8z_KhSorQ-unsplash.jpg'
import cloud from "./images/cloudWhite.svg";
import cloudRain from "./images/cloud-rain.svg";
import cloudSnow from "./images/cloud-snow.svg";
import sun from "./images/sun.svg";
import wind from "./images/wind.svg";

const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=e2952967c6f348b5ae622932230908&q=";

function weatherApiUrl(cityName) {
  return `${baseURL + cityName}&aqi=no`;
}
const weatherIcon = document.querySelector(".weatherIcon");
let newCityName = "manila"; // replace using search
const errorMsg = document.querySelector(".error");

const apiURL = weatherApiUrl(newCityName);
function displayData(cond, loc, city, tempC, feelsLIkeC, tempF, feelsLikeF) {
  return {
    condition: cond,
    location: loc,
    cityLoc: city,
    tempC,
    feelsLIkeC,
    tempF,
    feelsLikeF,
  };
}

async function getData(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const data = await response.json();

    const weatherCondition = data.current.condition.text;
    const countryLocation = data.location.country;
    const cityLocation = data.location.name;
    const tempC = data.current.temp_c;
    const feelsLikeC = data.current.feelslike_c;
    const tempF = data.current.temp_f;
    const feelsLikeF = data.current.feelslike_f;
    return displayData(
      weatherCondition,
      countryLocation,
      cityLocation,
      tempC,
      feelsLikeC,
      tempF,
      feelsLikeF,
    );
  } catch (error) {
    console.error("Error", error);
  }
}
// Default value  when site is opened
getData(apiURL).then((data) => {
  if (data) {
    const weatherCond = document.querySelector(".weatherCondition");
    weatherCond.textContent = data.condition;
    if (data.condition.includes("cloud") || data.condition.includes("Cloud")) {
      weatherIcon.style.backgroundImage = `url(${cloud})`;
    } else if (
      data.condition.includes("sun") ||
      data.condition.includes("Sun") ||
      data.condition.includes("hot")
    ) {
      weatherIcon.style.backgroundImage = `url(${sun})`;
    } else if (
      data.condition.includes("rain") ||
      data.condition.includes("Rain")
    ) {
      weatherIcon.style.backgroundImage = `url(${cloudRain})`;
    } else if (
      data.condition.includes("snow") ||
      data.condition.includes("Snow")
    ) {
      weatherIcon.style.backgroundImage = `url(${cloudSnow})`;
    } else if (data.condition === "Mist" || data.condition === "Fog") {
      weatherIcon.style.backgroundImage = `url(${wind})`;
    } else {
      weatherIcon.style.backgroundImage = `url(${cloud})`;
    }
    const country = document.querySelector(".country");
    country.textContent = data.location;
    const city = document.querySelector(".city");
    city.textContent = data.cityLoc;
    const currC = document.querySelector("#currC");
    currC.textContent = data.tempC;
    const feelsC = document.querySelector("#FeelsC");
    feelsC.textContent = data.feelsLIkeC;
    const currF = document.querySelector("#currF");
    currF.textContent = data.tempF;
    const feelsF = document.querySelector("#FeelsF");
    feelsF.textContent = data.feelsLikeF;
  } else {
    errorMsg.style.visibility = "visible";
    setTimeout(() => {
      errorMsg.style.visibility = "hidden";
    }, 2000);
  }
});

const searchForm = document.querySelector("button");
searchForm.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputSearch = document.querySelector("#search");
  const inputSearchValue = inputSearch.value;
  newCityName = inputSearchValue;

  const apiURLE = weatherApiUrl(newCityName);

  try {
    const data = await getData(apiURLE);
    if (data) {
      const weatherCond = document.querySelector(".weatherCondition");
      weatherCond.textContent = data.condition;
      if (
        data.condition.includes("cloud") ||
        data.condition.includes("Cloud")
      ) {
        weatherIcon.style.backgroundImage = `url(${cloud})`;
      } else if (
        data.condition.includes("sun") ||
        data.condition.includes("Sun") ||
        data.condition.includes("hot")
      ) {
        weatherIcon.style.backgroundImage = `url(${sun})`;
      } else if (
        data.condition.includes("rain") ||
        data.condition.includes("Rain")
      ) {
        weatherIcon.style.backgroundImage = `url(${cloudRain})`;
      } else if (
        data.condition.includes("snow") ||
        data.condition.includes("Snow")
      ) {
        weatherIcon.style.backgroundImage = `url(${cloudSnow})`;
      } else if (data.condition === "Mist" || data.condition === "Fog") {
        weatherIcon.style.backgroundImage = `url(${wind})`;
      } else {
        weatherIcon.style.backgroundImage = `url(${cloud})`;
      }
      const country = document.querySelector(".country");
      country.textContent = data.location;
      const city = document.querySelector(".city");
      city.textContent = data.cityLoc;
      const currC = document.querySelector("#currC");
      currC.textContent = data.tempC;
      const feelsC = document.querySelector("#FeelsC");
      feelsC.textContent = data.feelsLIkeC;
      const currF = document.querySelector("#currF");
      currF.textContent = data.tempF;
      const feelsF = document.querySelector("#FeelsF");
      feelsF.textContent = data.feelsLikeF;
    } else {
      errorMsg.style.visibility = "visible";
      setTimeout(() => {
        errorMsg.style.visibility = "hidden";
      }, 2000);
    }
  } catch (error) {
    errorMsg.style.visibility = "visible";
    setTimeout(() => {
      errorMsg.style.visibility = "hidden";
    }, 3000);
  }
});

// const bodyElement = document.body;
// const image = document.createElement('img')
// image.classList.add('background')
// image.src = backgroundImg
// bodyElement.appendChild(image)
