class Book
{
    constructor(title, coverImagePath, desc)
    {
        this.title = title;
        this.coverImagePath = coverImagePath;
        this.desc = desc;
    }
}

let allListings = [];

const tempTitles = [
    "Interaction Design: Beyond Human-Computer Interaction 5th Edition",
    "Artificial Intelligence: A Modern Approach",
    "Artificial Intelligence Textbook For Class IX",
    "Calculus: An Intuitive and Physical Approach (Second Edition)",
    "English Grammar Handbook",
    "Living Language Spanish All the Way Manual: Learn at Home or On the Go",
];
const tempPaths = [
    "../../books/interaction_design.jpg",
    "../../books/Ai_pearson.jpg",
    "../../books/classix.jpeg",
    "../../books/calculus.jpg",
    "../../books/english.jpg",
    "../../books/spanish.jpg",
];
const tempDescriptions = [
    "Hugely popular with students and professionals alike, the Fifth Edition of Interaction Design is an ideal resource for learning the interdisciplinary skills needed for interaction design, human-computer interaction, information design, web design, and ubiquitous computing.",
    "Explores the full breadth and depth of the field of artificial intelligence (AI)",
    "Be the leading thinkers in the Age of Machine Intelligence",
    "In-depth explorations of the derivative, the differentiation and integration of the powers of x, and theorems on differentiation and antidifferentiation lead to a definition of the chain rule and examinations of trigonometric functions, logarithmic and exponential functions, techniques of integration, polar coordinates, much more.",
    "This book features clear explanations on parts of speech, spelling and punctuation, syntax, types of verbs, verb tenses and conjugations. There are plenty of practical examples and an alphabetical index for ease of use, making it an outstanding reference tool.",
    "Learn the Spanish language."
];

for (i = 0; i < tempTitles.length; i++) {
    allListings[i] = new Book(tempTitles[i], tempPaths[i], tempDescriptions[i]);
}

function showListings(listingsToShow) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    
    listingsToShow.forEach(listing => {
        const child = document.createElement("div");
        child.innerHTML = 
            `<div class="bookListing">
                <img class = "coverImg" src=${listing.coverImagePath}>
                <div class = "listingInfo">
                    <h1 class = "titleText">${listing.title}</h1>
                    <p class = "bookDescription">${listing.desc}</p>
                    <button class = "showOverview"onclick="showBook('${listing.title}', '${listing.coverImagePath}', '${listing.desc}')">
                        View Book
                    </button>
                </div>
            </div>`;
        bookList.appendChild(child);
    });
} showListings(allListings);

function showBook(title, path, desc) {
    localStorage.setItem("bookTitle", title);
    localStorage.setItem("bookPath", path);
    localStorage.setItem("bookDesc", desc);
    window.open("../book/book.html","_self");
};

function search() {
    thingToSearch = document.getElementById("searchInput").value;
    
    var foundListings = [];
    allListings.forEach(listing => {
        if (listing.title.toLowerCase().includes(thingToSearch.toLowerCase())) {
            foundListings.push(listing);
        }
    });
    showListings(foundListings);

}

$("#searchBar").on("change keyup paste", function(){
    search();
});

/*
    bookOverview.title = title;
    bookOverview.path = path;
    bookOverview.desc = desc;

let bookList = document.getElementById("bookList");
let newImg = document.createElement("img");
newImg.src = "../../books/Ai_pearson.jpg";
bookList.appendChild(newImg);


const bookList = document.getElementById("bookList");
const child = document.createElement("div");
child.innerHTML = `<div class="listing"><img src="../../books/Ai_pearson.jpg" height=100 width=100></div>`;
bookList.appendChild(child);

function showListings() {
    bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    
    for (i = 0; i < allListings.length; i++) {
        console.log("")
        const child = document.createElement("div");
        child.innerHTML = 
            `<div class="listing">
                <img src=${allListings[i].coverImagePath} height=100 width=100">
            </div>`;
        bookList.appendChild(child);
    }
} 
showListings();



function Search(listingsToSearch) {
    var thingToSearch = document.getElementById("searchInput").value;
    let foundListings = [];

    listingsToSearch.forEach(listing => {
        if (listing.title.toLowerCase().includes(thingToSearch.toLowerCase())) {
            foundListings.push(listing);
        }
    });

    makeListings(foundListings);
}

$("#searchBar").on("change keyup paste", function() {
    Search(allListings);
});*/








