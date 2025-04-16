const postBlogForm = document.getElementById("postBlogForm")
const imageInput = document.getElementById("imageInput")
const titleInput = document.getElementById("title")
const dateInput = document.getElementById("date")
const bodyInput = document.getElementById("body")
const posts = []

document.getElementById("copyright-year").textContent= new Date().getFullYear()

postBlogForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("click")
    const file = imageInput.files[0]
    const title = titleInput.value
    const date = dateInput.value || new Date().toLocaleDateString()
    const body = bodyInput.value

    const imageURL = URL.createObjectURL(file)

    const newPost = {
        id: posts.length + 1,
        date: date,
        image: imageURL,
        title: title,
        body: body
    }

    console.log(newPost)

    postBlogForm.reset()

})