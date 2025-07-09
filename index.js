import { tweetsData } from "./data.js";

const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-btn");

tweetBtn.addEventListener("click", function () {
    console.log(tweetInput.value);
});