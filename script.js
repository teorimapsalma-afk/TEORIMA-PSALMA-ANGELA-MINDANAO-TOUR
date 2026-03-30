const spots = {

davao:[
{
name:"Samal Island",
price:1200,
img:"davao/Samal.jpeg",
desc:"Samal Island offers white sand beaches and clear waters. It is perfect for island hopping and relaxation."
},
{
name:"People's Park",
price:300,
img:"davao/Park.jpg",
desc:"This park has artistic sculptures and green spaces. It is ideal for walking and sightseeing."
}
],

zamboanga:[
{
name:"Great Santa Cruz Island",
price:1000,
img:"zamboanga/Santa.jpeg",
desc:"This island features rare pink sand beaches. It is a protected and beautiful destination."
},
{
name:"Paseo del Mar",
price:350,
img:"zamboanga/Paseo.jpeg",
desc:"A seaside area known for sunsets and food stalls. It is lively and relaxing."
}
],

cdo:[
{
name:"Seven Seas Waterpark",
price:900,
img:"cdo/Seven.jpeg",
desc:"A large waterpark with slides and pools. It is fun for families and groups."
},
{
name:"White Water Rafting",
price:1500,
img:"cdo/Rafting.jpeg",
desc:"An exciting river adventure activity. It is popular among thrill seekers."
}
],

bukidnon:[
{
name:"Del Monte Plantation",
price:500,
img:"bukidnon/Pine.jpeg",
desc:"A vast pineapple plantation with scenic views. It is perfect for photos and tours."
},
{
name:"Dahilayan Adventure Park",
price:1200,
img:"bukidnon/Adventure.jpeg",
desc:"An adventure park with zipline rides. It offers fun and excitement."
}
],

surigao:[
{
name:"Sugba Lagoon",
price:1000,
img:"surigao/Sugba.jpeg",
desc:"A beautiful lagoon with clear blue water. It is great for swimming and kayaking."
},
{
name:"Siargao Island",
price:1500,
img:"surigao/Siargao.jpeg",
desc:"A famous island for surfing and beaches. It is peaceful and scenic."
}
]

};

let selectedDesc="";

function login(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u && p){
document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";
}
}

function showSpots(place){
let container=document.getElementById("spots");
container.innerHTML="";

spots[place].forEach(s=>{
let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${s.img}">
<h3>${s.name}</h3>
<p>${s.desc}</p>
<p><b>₱${s.price}</b></p>
<button onclick="selectSpot('${s.name}',${s.price},'${s.desc}')">Select</button>
`;

container.appendChild(card);
});
}

function selectSpot(name,price,desc){
document.getElementById("spot").value=name;
document.getElementById("price").value=price;
selectedDesc=desc;
}

document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let spot=document.getElementById("spot").value;
let room=document.getElementById("room").value;
let food=document.getElementById("food").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;

document.getElementById("receipt").innerHTML=`
<h3>Booking Confirmed 🌸</h3>
<p><b>${name}</b></p>
<p>${spot}</p>
<p>${room} | ${food}</p>
<p>${date} - ${time}</p>
`;

let table=document.querySelector("#bookingTable tbody");
let row=table.insertRow();

row.innerHTML=`
<td>${name}</td>
<td>${spot}</td>
<td>${room}</td>
<td>${food}</td>
<td>${date}</td>
<td>${time}</td>
`;
});

