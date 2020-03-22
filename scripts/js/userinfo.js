let name = sessionStorage.getItem("player_name");
let point = sessionStorage.getItem("Points");
let total_time = sessionStorage.getItem("Time");


document.querySelector(".user_name").innerHTML = name;
document.querySelector(".points").innerHTML = point;
document.querySelector(".time_end").innerHTML = total_time;