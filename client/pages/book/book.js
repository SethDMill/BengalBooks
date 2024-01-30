class Review
{
    constructor(username, numStars, text)
    {
        this.username = username;
        this.numStars = numStars;
        this.text = text;
    }
}

const title = localStorage.getItem("bookTitle");
const path = localStorage.getItem("bookPath");
const desc = localStorage.getItem("bookDesc");
const username = localStorage.getItem("username");

const bookList = document.getElementById("bookList");
bookList.innerHTML = "";

var child = document.createElement("div");
child.innerHTML = 
    `<div class="bookListing">
        <img class = "coverImg" src=${path}>
        <div class = "listingInfo">
            <h1 class = "titleText">${title}</h1>
            <p class = "bookDescription">${desc}</p>
            <label style="font-family: Arial; font-size: 16px; margin-left: 20px;">Status: Available</label>
            <button class = "greenButton" onclick = "order()">Order</button>
            <button class = "greenButton" onclick = "postReview()">Post Review</button>
            <label style="font-family: Arial; font-size: 16px; margin-left: 20px;">Rating:</label>
            <input type="number" id="ratingInput" min="0" max="5">
            <label style="font-family: Arial; font-size: 16px; margin-left: 20px;">Text:</label>
            <input type="username" id="reviewInput">
        </div>
    </div>`;
bookList.appendChild(child);

function getCookie(name) {
    name = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i <cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0)==' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length,cookie.length);
        }
    }
    return "";
}

function setCookie(name, value, expirydays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirydays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function deleteCookie(name) {
    setCookie(name,"",-1);
}

/*
deleteCookie(title + "_reviews");

var treviews = [];
treviews.push(new Review ("Seth Miller", 4, "it was good"));
treviews.push(new Review ("Elizabeth Daigle", 1, "it was bad"));
setCookie(title + "_reviews", JSON.stringify(treviews));
*/

var reviews = [];
const reviewList = document.getElementById("reviewList");

function getReviews() {
    const reviewCookie = getCookie(title + "_reviews");
    if (reviewCookie != "") {
        reviewList.innerHTML = "";
        reviews = JSON.parse(reviewCookie);
        reviews.forEach(review => {
            child = document.createElement("div");
            var stars = "";

            for (i = 1; i <= 5; i++) {
                if (i <= review.numStars) {
                    stars = stars + '<span style = "font-size: 30px" class="fa fa-star checked"></span>';
                } else {
                    stars = stars + '<span style = "font-size: 30px" class="fa fa-star"></span>';
                }
            }

            child.innerHTML = 
                `<div class="reviewListing">
                    <div class="rating">
                        ${stars}
                        <h1 class = "reviewerName">${review.username}</h1>
                    </div>
                    <p class = "reviewText">${review.text}</p>
                </div>`;
            reviewList.appendChild(child);
        });
    }
}

getReviews();

function postReview() {
    var reviewInput = document.getElementById('reviewInput').value;
    var ratingInput = document.getElementById('ratingInput').value;
    if (reviewInput != "" & ratingInput != "") {
        var hasReviewed = false;
        reviews.forEach(review => {
            if (review.username == username) {
                hasReviewed = true;
            }
        });

        if (!hasReviewed) {
            reviews.unshift(new Review (username, parseInt(ratingInput), reviewInput));
            setCookie(title + "_reviews", JSON.stringify(reviews), 3);
            getReviews();
        }
    }
}

function order() {
    window.open("../checkout/checkout.html","_self");
}

