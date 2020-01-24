
function setCurrentStarRating(key, value) {
    for (const property in pp) {
        console.log(`${property}: ${pp[property]}`);
    }
}
var realvalue;
function onStarClickListener(event) {
    const target = event.target;
    // find all sibiling stars
    const sibilingStars = Array.from(target.parentNode.children);
    // find the index of target sibiling
    const targetIndex = sibilingStars.indexOf(target);
    realvalue = targetIndex + 1;
    // set starList value for caption rating
    setCurrentStarRating(target.parentNode.customKey, realvalue);
    // console.log(
    //   ` starlist#` +
    //     target.parentNode.customValue +
    //     ` key:` +
    //     target.parentNode.customKey +
    //     ` ` +
    //     `value: ` +
    //     realvalue
    // );
    // iterate through all sibilings
    // if index is <= clicked star index color gold
    // if > color black
    sibilingStars.forEach((star, index) => {
        if (index <= targetIndex) {
            star.style.color = "goldenrod";
        } else {
            star.style.color = "black";
        }
    });
}
const starname = [
    "firstStarList",
    "secondStarList",
    "thirdStarList",
    "fourthStarList"
];

const pp = {
    starset1: "starrating1",
    starset2: "starrating2",
    starset3: "starrating3",
    starset4: "starrating4"
};

var itkey = 0;
let starnameiterator = 0;
let starvalue = 0;
let starkey = 0;
function createStarList(value) {
    const starlist = document.createElement("div");
    starkey = [Object.keys(pp)[itkey]];
    // Check this starkeys value
    let originalStarValue = pp[starkey];
    // console.log(originalStarValue);
    // This is how to set new values for each key
    starvalue = pp[starkey] = itkey;
    starlist.customKey = starkey;
    starlist.customValue = starvalue;
    itkey++;
    for (let i = 1; i < 6; i++) {
        const star = document.createElement("span");
        star.className = "fa fa-star ";
        star.setAttribute("name", starname[starnameiterator]);
        if (i < value) {
            star.style.color = "goldenrod";
        }
        star.addEventListener("click", onStarClickListener);
        starlist.append(star);
    }
    starnameiterator++;
    return starlist;
}
const predID = ["pred1", "pred2", "pred3", "pred4"];

for (let i = 0; i < 4; i++) {
    var createList = new createStarList(1);
    document.getElementById(predID[i]).append(createList);
}

createStarList(0);
createStarList(2);
createStarList(5);
