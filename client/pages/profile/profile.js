const showUsername = document.getElementById("showUsername");
showUsername.innerText = "Orders for " + localStorage.getItem("username") + ":";
let myOrders = JSON.parse(localStorage.getItem("myOrders"));

function showListings(listingsToShow) {
    const bookList = document.getElementById("bookList");
    
    listingsToShow.forEach(listing => {
        const child = document.createElement("div");
        child.innerHTML = 
            `<div class="bookListing">
                <img class = "coverImg" src=${listing.coverImagePath}>
                <div class = "listingInfo">
                    <h1 class = "titleText">${listing.title}</h1>
                    <p class = "bookDescription">${listing.desc}</p>
                </div>
            </div>`;
        bookList.appendChild(child);
    });
} showListings(myOrders);