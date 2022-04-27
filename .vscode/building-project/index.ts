
const container = [
    {
    id:1,
    img: "meme.png",
    },

    {
        id:2,
        img:'meme2.png',

    },
];

const inp = document.getElementById('TText');
const inps = document.getElementById('BText');
const img  = document.getElementById('img');

const btn = document.querySelector(".btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
   console.log('hello');
   ShowMeme(currentItem);
});

function ShowMeme(){
    const item = container[currentItem];

    //getting items from Array
    img.src = item.img;
}


//Button to allow to display random image 

btn.addEventListener('click', function() {
  currentItem =  Math.floor(Math.random() * container.length);
  ShowMeme(currentItem);
});