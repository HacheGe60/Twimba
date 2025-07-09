import { tweetsData } from "./data.js";

const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-btn");

tweetBtn.addEventListener("click", function () {
    console.log(tweetInput.value);
});

function getFeedHtml() {
    let feedHtml = "";
    tweetsData.forEach(function (tweet) {
        feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment-dots"></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart"></i>
                                ${tweet.retweets}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet"></i>
                                ${tweet.likes}
                            </span>
                        </div>   
                    </div>            
                </div>
            </div>
        `;
    });

    return feedHtml;
}

function render() {
    document.querySelector("#feed").innerHTML = getFeedHtml();
}

render();