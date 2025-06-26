// for in 
// Usually used on Objects
 
const games = {
    rdr : "Red Dead Redemption",
    ff : "Free Fire "
}

for (const key in games) {
    console.log(`${key} : ${games[key]}`);
}