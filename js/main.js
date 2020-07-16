let newsList = []
let page = 1
    // const apikey = process.env.APIKEY

const callApi = async() => {

    let selectedCategory = document.getElementById("categories").value
    let url = `https://newsapi.org/v2/top-headlines?country=za&category=${selectedCategory}&page=${page}&`
    let data = await fetch(url)
    let result = await data.json()
    newsList = newsList.concat(result.articles)
    console.log(newsList)

    render(newsList)
}

callApi()

// const selectCategory = async() => {

//     let selectedCategory = document.getElementById("categories").value

//     let url = `https://newsapi.org/v2/top-headlines?country=za&category=${selectedCategory}&apiKey=e3354d322964457abf2789261b06ab1e`
//     let data = await fetch(url)
//     let result = await data.json()
//     newsList = result.articles

//     render(newsList)
// }

const search = async() => {
    let keyWord = document.getElementById("search").value

    let url = `https://newsapi.org/v2/top-headlines?&q=${keyWord}&apiKey=e3354d322964457abf2789261b06ab1e`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    render(newsList)
}

const viewMore = async() => {
    page++
    callApi()
}

const render = (newsList) => {
    // let publishedAt = moment(item['publishedAt']).fromNow()
    let newsHTML = newsList.map(item => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <img src="${item.urlToImage}" class="card-img-top" alt="#">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>
        <div class="bottomCard" >
        <a href="${item.url}" class="card-link">Full Article</a>
        <span>${item.author}</span>
        <span>${moment(item.publishedAt).fromNow()}</span>
        </div>
        </div>
        </div>`
    })

    document.getElementById("newsListArea").innerHTML = newsHTML
}