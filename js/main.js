let newsList = []
const apikey = process.env.APIKEY

const callApi = async() => {

    let url = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${callApi}`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    console.log(newsList)

    render(newsList)
}

callApi()

const render = () => {
    let newsHTML = newsList.map(item => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <img src="${item.urlToImage}" class="card-img-top" alt="#">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>
        <div class="bottomCard" style="border:1px solid red">
        <a href="${item.url}" class="card-link">Full Article</a>
        <span>${item.author}</span>
        </div>
        </div>
        </div>`
    })

    document.getElementById("newsListArea").innerHTML = newsHTML
}