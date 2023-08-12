import "./style.css";
// import backgroundImg from './images/oc-gonzalez-xg8z_KhSorQ-unsplash.jpg'

const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=e2952967c6f348b5ae622932230908&q=";

function weatherApiUrl(cityName) {
  return `${baseURL + cityName}&aqi=no`;
}

let newCityName = "manila"; // replace using search

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
    console.log(data.condition);
    console.log(data.location);
    console.log(data.cityLoc);
    console.log(data.tempC);
    console.log(data.feelsLIkeC);
    console.log(data.tempF);
    console.log(data.feelsLikeF);
  } else {
    console.log("Data does not exist");
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
      console.log(data.condition);
      console.log(data.location);
      console.log(data.cityLoc);
      console.log(data.tempC);
      console.log(data.feelsLIkeC);
      console.log(data.tempF);
      console.log(data.feelsLikeF);
    } else {
      console.log("Data does not exist");
    }
  } catch (error) {
    console.error("Error", error);
  }
});

// const bodyElement = document.body;
// const image = document.createElement('img')
// image.classList.add('background')
// image.src = backgroundImg
// bodyElement.appendChild(image)
