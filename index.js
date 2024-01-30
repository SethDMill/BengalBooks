var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function() {
    if (document.getElementById('usernameField').value != "" & document.getElementById('passwordField').value != "") {
        localStorage.setItem("username", document.getElementById('usernameField').value);
        let myOrders = [];
        localStorage.setItem("myOrders", JSON.stringify(myOrders));
        window.open("client/pages/home/home.html","_self")
    }
}); 
