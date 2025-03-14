const photo = document.querySelector(".card")
var mov_name = document.querySelector("#search")
const search_button = document.querySelector('.searched')
const result = document.querySelector('#search-page')
const nav = document.querySelector('#fixed-nav')
const search_inp = document.querySelector('#search')
const menu = document.querySelector(".menu")
const menu_page = document.querySelector("#menu-page")
const cross = document.querySelector(".close")
const first_page = document.querySelector("#first-page")
const footer = document.querySelector("#footer")

search_inp.addEventListener("click", () => {
    result.style.display = "none";
    first_page.style.display = "block"
    footer.style.display = "block"
    nav.style.display = "block"
})



menu.addEventListener("click", () => {
    menu_page.style.display = "block"
    first_page.style.display = "none"
    footer.style.display = "none"

})
cross.addEventListener("click", () => {
    menu_page.style.display = "none"
    first_page.style.display = "block"
    footer.style.display = "block"
})

search_button.addEventListener("click", () => {

    photo.innerHTML = " "

    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${mov_name.value.trim()}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.description.forEach(item => {
                photo.innerHTML += `<div class="cardlist">
                        <div class="srch-lt">
                            <img class="search-pic" src="${item['#IMG_POSTER']}">
                        </div>
                        <div class="srch-rt">
                            <div class="srch-up">
                                <div class="srch-one">
                                    <ul class="cast">
                                        <li>Cast & Crew</li>
                                        <li>User Reviews</li>
                                        <li>Trivia</li>
                                        <li>FAQ</li>
                                    </ul>
                                    <ul class="cast">
                                        <li>IMDbPro</li>
                                    </ul>
                                    <div class="topic">
                                        <i class='bx bx-grid-alt' style='color:#f8f5f5'></i>
                                        <p>All Topics</p>
                                    </div>
                                    <i class='share bx bxs-share-alt' style='color:#f3f3f3'></i>
                                </div>
                                <div class="srch-two">
                                    <div class="rate">
                                        <h5>YOUR RATING</h5>
                                        <i class='bx bx-star' style='color:#0562bf'></i><span>RATE</span>
                                    </div>
                                    <div class="popular">
                                        <h5>POPULARITY</h5>
                                        <i class='bx bxs-right-down-arrow-circle' style='color:#ec134b'></i>490
                                    </div>
                                </div>
                            </div>
                            <div class="srch-down">
                                <h1 class="srch-name">${item['#TITLE']}</h1>
                                <h3>Year Of Release: ${item['#YEAR']}</h3>
                                <h2>Actors: ${item['#ACTORS']}</h2>
                                <h4>IMDb Rank: ${item['#RANK']}</h4>
                                <h5 class="id">IMDb_ID: ${item['#IMDB_ID']}</h5>
                            </div>
                        </div>
                    </div>`
            });
        })
    result.style.display = "block";
    first_page.style.display = "none"
    footer.style.display = "none"
    nav.style.display = "block"
})
    .catch((error) => console.log("E: ", error))

