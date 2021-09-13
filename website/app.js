/* Global Variables */
let d = new Date();

let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
const apiKey = "b826043f7ed0ad161632bf65d0a4f019";
// Create a new date instance dynamically with JS
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", async () => {
   const zipcode= document.getElementById("zip").value
   
  try {
    const Temp = await getTempreture(zipcode);
    //console.log(Temp); 

    const uiData = await sendData(Temp, content);
  } catch (error) {
    console.log(error);
  }
});
//function that get Data from Api
async function getTempreture(zipcode) {
  const content = document.getElementById("feelings").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey} `;
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => sendData(data.main.temp, content));
}

//function that send data to Node js(post)
async function sendData(Tempreture, feelings) {
   fetch("/saveData", {
    method: "POST",
    credentials: "same-origin",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({
      date: newDate,
      temp: Tempreture,
      content: feelings,
    }),
  });
  fetch("/getObJ",{ credentials: "same-origin" })
  .then(fData=>fData.json())
  .then(fData=>createUI(fData))
}

// function that display data inner html 
async function createUI(fdata) {
  temp_View = document.getElementById("temp");
  feel_View = document.getElementById("content");
  date_View = document.getElementById("date");
  text_Aria = document.getElementById("feeling");
  temp_View.innerHTML = `Temp is: ${fdata.temp}`;
  feel_View.innerHTML = `Feeling is: ${fdata.content}`;
  date_View.innerHTML = `Date is: ${fdata.date}`;
}
// function that decrease the height 
function styleTextArea() {
  text_Aria = document.getElementById("feelings");
  text_Aria.style.height = "180px";
  Button = document.getElementById("generate");
  Button.style.height = "80px";
}
styleTextArea();