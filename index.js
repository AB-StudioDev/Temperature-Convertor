function rollbtn(){
const numdice = document.getElementById("numdice").value;
const image = document.getElementById("image");
const diceresult = document.getElementById("diceresult");
const values= []
const imagess =[]
for(let i = 0 ;i<numdice ; i++){
    const value = Math.floor(Math.random()*6)+1; 
values.push(value)
imagess.push(`<img src="images/dice${value}.png" >`);

diceresult.innerText=`dice: ${values.join(", ")}`
image.innerHTML=imagess.join(" ")
}

}