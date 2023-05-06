const Apiurl = "https://api.weatherapi.com/v1/current.json?key=c62e289870fc465d89432116230405&q="
const search = document.querySelector("#search")
const main = document.querySelector(".main")
const info = document.querySelector("#info")
const getweather = async(username) => {
    const response = await fetch(Apiurl+username);
    const data = await response.json();
    console.log(data);
    const text = `<div>
    <h2>TEMPERATURE: ${data.current.temp_c}</h2>
    <h4>HUMIDITY: ${data.current.humidity}</h4>
   </div>`
   info.innerHTML= text;

}

const submit = () => {
    if(search.value !="") {
        getweather(search.value);
        console.log(search.value);
    }
    else {
        return false
    }
}

search.addEventListener('click',function() {
    submit()
})

