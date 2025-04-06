Object.prototype.chai = function () {
    console.log("CHAI AUR CODE");
}


const tea = {
    name: "ice creem",
    type: "cool"
}


tea.chai()


const myTeas = ["lemon tea","orange tea"]
myTeas.chai()

if (!Array.prototype.map){
    //fallback
    Array.prototype.fill = function(){
        console.log("jay swaminarayan");
        
    }
}

