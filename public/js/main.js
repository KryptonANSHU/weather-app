const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname')
const city = document.getElementById('city');

const temp = document.getElementById('temp');
const status = document.getElementById('status');
const datahide = document.querySelector('.bottom_layer_inner');


const getinfo = async(event)=>{
    event.preventDefault();              // Prevents from reloading the page after hitting the search button

    console.log(cityname.value);
    if(cityname.value === ""){
        city.innerText = `Write the name before you search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=5565889108f1416cb977f76c63177984`;
            const response = await fetch(url);      //wait till you get the data 
            //console.log(response);      // Response is in Json
            const data = await response.json();
            console.log(data);


            city.innerText = `${data.name} , ${data.sys.country}`;
            temp.innerText = `${data.main.temp}`;
            status.innerText = data.weather[0].main;


            let tempmood = data.weather[0].main;

            //Condition to check status of weather

            if(tempmood=="Clear"){
                status.innerHTML = `<i class="fas fa-sun" style='color: #eccc68'></i>`;
            }
            else if(tempmood = "Clouds"){
                status.innerHTML = `<i class="fas fa-cloud"  style='color: #f1f2f6'></i>`;
            }
            else if(tempmood = "Rain"){
                status.innerHTML = `<i class="fas fa-cloud-rain"  style='color: #a4b0be'></i>`;
            }
            else{
                status.innerHTML = `<i class="fas fa-sun"  style='color: #eccc68'></i>`;
            }

            datahide.classList.remove('data_hide');
        }catch{
            city.innerText = `Enter city name correctly`;
            datahide.classList.add('data_hide');
        }


    }
}
        



submitbtn.addEventListener('click',getinfo);