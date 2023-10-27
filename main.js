var rawData = {};
var countryLinks = document.querySelectorAll('nav li')
for (var i = 0; i < countryLinks.length; i++) {
    countryLinks[i].addEventListener('click', function (eventInfo) {
        var countryCode = eventInfo.target.getAttribute('data-countryCode')
        getNews(countryCode);
    })
}



// async function netNews() {
//     var apiResponse = await fetch(`url`, { method: 'POST/DELETE' }); 
//     var finalResults = await apiResponse.json();
// }


// AJAX 

function getNews(countryCode) {
    var myHttp = new XMLHttpRequest();
    myHttp.open('GET', `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=3beaad93489441bbb0043e0034f2e226`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function () {


        if (myHttp.readyState == 4) {
            rawData = JSON.parse(myHttp.response).articles;
            console.log(rawData)
            displayData();
        }
    });
}
getNews('us')
function displayData() {
    var cartona = ``;
    for (var i = 0; i < rawData.length; i++) {
        cartona += `<div id="deco" overflow-scroll class=" overflow-hidden bg-white col-md-3 p-2 ">
        <div class=" bg-white">
        <img class="imgs" src ="${rawData[i].urlToImage == null ? "imgs/istockphoto-469154673-612x612.jpg" : rawData[i].urlToImage}"/>
        <h5 style="color:black;" class="text-center" id="textline" >${rawData[i].title}</h5>
        <p id="ptextline" class=" text-center text-secondary ">${rawData[i].description == null ? "The article is being prepared" : rawData[i].description}</p>
        </div>
            </div>`
    }
    document.getElementById('rowData').innerHTML = cartona;
};












// async function getNews(category) {
//     var apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=business&category=business&apiKey=3beaad93489441bbb0043e0034f2e226`)
//     var finalResult = await apiResponse.json();
//     console.log(finalResult);
// }

// async function getAll() {
//     await getNews('general');
//     await getNews('science');
//     await getNews('business');
//     await getNews('sports');
// }
// getAll();




// var rawData = [];
// var myHttp = new XMLHttpRequest();
// myHttp.open('GET', 'https://newsapi.org/v2/everything?q=Apple&from=2023-09-29&sortBy=popularity&apiKey=API_KEY');
// myHttp.send();

// myHttp.addEventListener('readystatechange', function () {

//     if (myHttp.readyState == 4) {
//         rawData = JSON.parse(myHttp.response);
//         console.log(rawData)
//         displayData();
//     }
// });

// function displayData() {
//     var cartona = ``;
//     for (var i = 0; i < rawData.length; i++) {
//         cartona += `<div class="col-md-3">
//         <img class='w-100' src ="${rawData[i].urlToImage}"/>
//         <h2>${rawData[i].title}</h2>
//         <p>${rawData[i].description}</p>
//         </div>`
//     }
//     document.getElementById('rowData').innerHTML = cartona;
// };


// var httpReq = new XMLHttpRequest();
// httpReq.open('GET','https://jsonplaceholder.typicode.com/posts');
// httpReq.send();
// httpReq.addEventListener('readystatechange',function(){
//     if(httpReq.readyState == 4 ){
//         console.log(httpReq.response);
//     }
// })