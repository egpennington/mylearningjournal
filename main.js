import initialPosts from "/data/postArr.js"

const heroPostArea = document.getElementById("hero-post-area")
let postsArray = [...initialPosts]

function renderHeroPost() {
    const heroPostArea = document.getElementById("hero-post-area")
    if (!heroPostArea) return

    const latest = postsArray[0]

    heroPostArea.innerHTML = `
        <div class="hero-card" style="background-image: url('${latest.image}')">
            <div class="hero-overlay">
                <p class="hero-date">${latest.date}</p>
                <h1 class="hero-title">${latest.title}</h1>
                <p class="hero-snippet">${latest.body.slice(0, 250)}...</p>
            </div>
        <div>
        `
}

function renderPosts() {
    const cardHolder = document.getElementById("card-holder-el")
    if (!cardHolder) return

    let html = ""
    
    for (let post of postsArray) {
        html += `
        <div class="card">
            <img src="${post.image}">
            <p>${post.date}</p>
            <h2>${post.title}</h2>
            <div class="card-body">${post.body}</div>
            <button class="read-more-btn" data-id="${post.id}">Read More</button>
        </div>
        `
    }
    cardHolder.innerHTML = html
}

document.addEventListener("DOMContentLoaded", () => {
    const postBlogForm = document.getElementById("postBlogForm")
    if (!postBlogForm) return
    const imageInput = document.getElementById("imageInput")
    const titleInput = document.getElementById("title")
    const dateInput = document.getElementById("date")
    const bodyInput = document.getElementById("body")

    postBlogForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("click")
        const file = imageInput.files[0]
        const title = titleInput.value
        const date = dateInput.value || new Date().toLocaleDateString()
        const body = bodyInput.value

        const imageURL = URL.createObjectURL(file)

        const newPost = {
            id: postsArray.length + 1,
            date: date,
            image: imageURL,
            title: title, 
            body: body
        }

        postsArray.unshift(newPost)
        renderPosts()
        renderHeroPost()
        postBlogForm.reset()

        console.log(postsArray)
    })
})    

document.getElementById("copyright-year").textContent= new Date().getFullYear()

document.addEventListener("DOMContentLoaded", () => {
    renderPosts()
    renderHeroPost()
})
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event