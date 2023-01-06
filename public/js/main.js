const submitBtn = document.getElementById("submitBtn");
var city = document.getElementById("cityName");
const output = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const day = document.getElementById('day')
const curdate = document.getElementById('today_date')

const dataHide = document.querySelector(".middle_layer")

const getInfo = async (event) => {
  event.preventDefault();
  const val = city.value;

  if (val === "") {
    output.innerText = `Please Enter the City Name before Searching`;
    dataHide.classList.add("data_hide")
  } else {
    try {
      let api = `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=4fe416276b0cd9fdf5361865727b892b`;
      const data = await fetch(api);
      const curdata = await data.json();
      const arrData = [curdata];
      output.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;
      if (tempMood === "Clear") {
        temp_status.innerHTML =
          "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML =
          "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML =
          "<i class = 'fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
      } else{
        temp_status.innerHTML =
          "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
      }
    } catch {
      output.innerText = `Plz Enter the Valid City Name`;
      dataHide.classList.add("data_hide")
    }
  }
};

submitBtn.addEventListener("click", getInfo);

const date = new Date()

const arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const curday = arr[date.getDay()]

day.innerText = `${curday}`

const currentDate = date.getDate()

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const curmonth = month[date.getMonth()]

curdate.innerText = `${currentDate} ${curmonth}`