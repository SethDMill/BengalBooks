class Book
{
    constructor(title, coverImagePath, desc)
    {
        this.title = title;
        this.coverImagePath = coverImagePath;
        this.desc = desc;
    }
}

const title = localStorage.getItem("bookTitle");
const path = localStorage.getItem("bookPath");
const desc = localStorage.getItem("bookDesc");

var backButton = document.getElementById('backButton');
backButton.addEventListener('click', function() {
    let myOrders = JSON.parse(localStorage.getItem("myOrders"));
    myOrders.push(new Book(title, path, desc));
    localStorage.setItem("myOrders", JSON.stringify(myOrders));
    window.open("../home/home.html","_self");
}); 

