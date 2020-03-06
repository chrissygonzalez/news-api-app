// b73f9bef4534497e9cf7d95fb6e945ed
const articlesDiv = document.getElementById('articles');
let btn = document.getElementById('newsButton');

btn.addEventListener("click", getNews);

function getNews(){
    let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b73f9bef4534497e9cf7d95fb6e945ed';
    let req = new Request(url);

    fetch(req)
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response;
        })
        .then(res => {
            // console.log(res.json());
            return res.json();
        }).then(data => {
            console.log(data.articles);
    });
};

function formatArticle(){
    
}