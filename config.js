

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        Window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
