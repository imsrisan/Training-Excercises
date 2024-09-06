

const searchCity = document.getElementById("search");
const table = document.getElementById("table");

searchCity.addEventListener("click",fetchData);
    
    async function fetchData(){    
    const cityName = document.getElementById("city-name").value.trim();
    try{


        table.innerHTML = "";
    

        if(cityName === "" || !isNaN(cityName)){
            window.alert("This is not a city");
            return;
        }
       
        const cityApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${cityName}?key=KPS9UTV6FX3SC6A8FAES3UGE5&unitGroup=metric`;

        // const cityApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=1&combinationMethod=aggregate&includeAstronomy=true&contentType=json&unitGroup=metric&locationMode=single&key=DVPGSWQAZJN5J322M24TKMC43&dataElements=default&locations=${cityName}`;
       
        
        const response = await fetch (cityApi);
    
        if(!response.ok){
            throw new Error(`could not fetch details for the ${cityName}`);
        }
    
        const data = await response.json();
        console.log(data);
        console.log(cityName);
        console.log(data.currentConditions.humidity);
        console.log(data.currentConditions.temp+"°C");

        
        const tableContent1 = document.createElement("tr");
        const city = document.createElement("th");
        city.textContent = "City Name:"
        const cityname = document.createElement("td");
        cityname.textContent = `${cityName}`;
        tableContent1.appendChild(city);
        tableContent1.appendChild(cityname);
        
        
        const tableContent2 = document.createElement("tr");
        const temperature = document.createElement("th");
        temperature.textContent = "Temperature:"
        const tempData = document.createElement("td");
        tempData.textContent = `${data.currentConditions.temp}°C`;
        tableContent2.appendChild(temperature);
        tableContent2.appendChild(tempData);
        
        
        
        const tableContent3 = document.createElement("tr");


        const humidity = document.createElement("th");
        humidity.textContent = "Humidity:"
        const humiData = document.createElement("td");
        humiData.textContent = `${Number(data.currentConditions.humidity).toFixed(0)}%`;
        tableContent3.appendChild(humidity);
        tableContent3.appendChild(humiData);
        
        

        table.appendChild(tableContent1);
        table.appendChild(tableContent2);
        table.appendChild(tableContent3);

        const lon = Number(data.longitude).toFixed(2);
        const lat = Number(data.latitude).toFixed(2);

        console.log(lat);
        console.log(lon);

        
        const icon = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc0e302589cbccec59a95eed7d75a97f`;
        const responseIcon = await fetch(icon);
        const newCity = await responseIcon.json();
        const iconId = newCity.weather[0].icon;
        console.log(newCity);

        const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`


        const image = document.createElement("img");

        image.src = iconUrl;
        
        const tableContent4 = document.createElement("tr");
        const weathericon_n = document.createElement("th");
        weathericon_n.textContent = "Weather icon:";
        tableContent4.appendChild(weathericon_n);

        const weatherSymbol = document.createElement("td");
        weatherSymbol.appendChild(image);
        tableContent4.appendChild(weatherSymbol);

        table.appendChild(tableContent4);
        

    }
    catch(error){
        console.log(`could not fetch details for ${cityName}`);
    }
}