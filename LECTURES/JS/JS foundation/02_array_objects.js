let ChaiType = ["masalaa chai", "ginger chai", "green tea", "jordar chaai"]

console.log(ChaiType[2]);


// console.log(`total chai type ${ChaiType.length}`);


ChaiType.push('jay')
const poping = ChaiType.pop()
// console.log(poping);


let index = ChaiType.indexOf("green tea")

// console.log(index);
// console.log(ChaiType);
if (index !== -1) {
    ChaiType.splice(index, 1)
}
// console.log(index);


ChaiType.forEach((chai, index) => {
    // console.log(`${index + 1}:${chai}`);

});

let morechaitypes = ["oolong", "white tea"]
let allchai = ["jayma", "kadi tea"]

let mixing = morechaitypes.concat(allchai + ChaiType)
// console.log(mixing);


let newChaistypes = [...ChaiType, "udddi"]
// console.log(newChaistypes);


let chairesipe = {
    name: "masala chai",
    ingredions: {
        leave: "assam",
        milk: "creem",
        suger: "brown",
        spices: ['daalchini', 'ginger']
    },
    instruction: 'boil vater and tea leaves sure spice'
}

console.log(chairesipe.ingredions.spices[1]);

let updateresipe = {
    ...chairesipe,
    instruction: "dont do a all "
}

console.log(chairesipe);
console.log(updateresipe);


let {name,ingredions} = chairesipe
// let [c]
