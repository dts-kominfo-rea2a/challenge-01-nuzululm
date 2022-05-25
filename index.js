// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name    : "Monica",
    gender  : "Female",
    age     : 17,
    email   : "monica@dingdong.com",
    favoriteColor : [],
    isHavePet : true,
    education : [
        {
            name    : "SD 01", 
            city    : "Jakarta", 
            graduate: 2016
        },
        {
            name    : "SMP 02", 
            city    : "Jakarta", 
            graduate: 2019
        },
        {
            name    : "SMA 03", 
            city    : "Tangerang"
        }
    ],
    favoriteRestaurant : []
};

const secondUser = {
    name    : "Wendy",
    gender  : "Male",
    age     : 23,
    email   : "wendy@dingdong.com",
    favoriteColor : [],
    isHavePet : false,
    education : [
        {
            name: "SD 02", 
            city: "Jakarta", 
            graduate: 2010
        },
        {
            name: "SMP 03", 
            city: "Bogor", 
            graduate: 2013
        },
        {
            name: "SMA 01", 
            city: "Surabaya", 
            graduate: 2016
        },
        {
            name: "Universitas Maju", 
            city: "Tangerang"
        }
    ],
    favoriteRestaurant : []
};

//firstUser
let firstColorSet = new Set();

firstColorSet.add("Yellow");
firstColorSet.add("Pink");
firstColorSet.add("White");
firstColorSet.add("Purple");
firstColorSet.add("Yellow");

firstUser.favoriteColor = Array.from(firstColorSet);;

let firstRestaurantSet = new Set();

firstRestaurantSet.add("Bento");
firstRestaurantSet.add("Sushi");
firstRestaurantSet.add("Pancake");
firstRestaurantSet.add("Eggy");
firstRestaurantSet.add("Tempura");
firstRestaurantSet.add("Bento");
firstRestaurantSet.add("Eggy");
firstRestaurantSet.add("Padang");
firstRestaurantSet.add("Tteok");
firstRestaurantSet.add("Sushi");
firstRestaurantSet.add("Sushi");

firstUser.favoriteRestaurant = Array.from(firstRestaurantSet);

//secondUser
let secondColorSet = new Set();

secondColorSet.add("Blue");
secondColorSet.add("Black");
secondColorSet.add("Grey");
secondColorSet.add("Grey");

secondUser.favoriteColor = Array.from(secondColorSet);

let secondRestaurantSet = new Set();

secondRestaurantSet.add("Tempura");
secondRestaurantSet.add("Bento");
secondRestaurantSet.add("Sushi");
secondRestaurantSet.add("Pancake");
secondRestaurantSet.add("Padang");
secondRestaurantSet.add("Katsu");
secondRestaurantSet.add("Geprek");
secondRestaurantSet.add("Pancake");
secondRestaurantSet.add("Eggy");

secondUser.favoriteRestaurant = Array.from(secondRestaurantSet);


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};