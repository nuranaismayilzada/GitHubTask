// let sun = document.querySelector(".fa-regular")
// let sunBlack = document.querySelector(".black")
// let body = document.querySelector("#github")
// sun.addEventListener("click", () => {
//     body.style.backgroundColor = "#536872"
//     sun.style.display = "none"
//     sunBlack.style.display = "block";
// })
// sunBlack.addEventListener("click", () => {
//     body.style.backgroundColor = "#141C2F"
//     sun.style.display = "block"
//     sunBlack.style.display = "none";
// })

// let form = document.querySelector("click", (e) => {
//     e.preventDefault()
// })
// let searchBtn = document.querySelector(".searchBtn")
// let searchInput = document.querySelector(".search")
// let avatar = document.querySelector(".avatar")
// let name = document.querySelector(".name")
// let bio = document.querySelector(".bio")
// let repos = document.querySelector(".repos")
// let locationn = document.querySelector(".location")
// let followers = document.querySelector(".followers")
// let following = document.querySelector(".following")
// let joined = document.querySelector(".joined")
// let blog = document.querySelector(".blog")
// let twitterUsername = document.querySelector(".twitterUsername")
// let email = document.querySelector(".email")
// let agithub = document.querySelector(".agithub")
// searchBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     fetch(`https://api.github.com/users/${searchInput.value}`).then((res) =>
//         res.json()).then((data) => {
//                 if (searchInput.value == data.login) {
//                     avatar.src = data.avatar_url
//                     name.innerText = data.login
//                     bio.innerText = data.bio
//                     if (data.location == null) {
//                         locationn.innerText = "not mentioned"
//                     }
//                     else {
//                         locationn.innerText = data.location
//                     }
//                     followers.innerText = data.followers
//                     following.innerText = data.following
//                     repos.innerText = data.public_repos
//                     blog.innerText = data.blog
//                     if (data.twitter_username == null) {
//                         twitterUsername.innerText = 'dont use'
//                     } else {

//                         twitterUsername.innerText = data.twitter_username
//                     }
//                     joined.innerText = "Joined: " + data.created_at
//                     if (data.email == null) {
//                         email.innerText = "Email: dont use"
//                     }
//                     else {
//                         email.innerText = "Email:" + data.email
//                     }
//                 }
//             });
//         })




// let sun = document.querySelector(".fa-regular");
// let sunBlack = document.querySelector(".black");
// let body = document.querySelector("#github");
// let form = document.querySelector(".form");
// let searchBtn = document.querySelector(".searchBtn");
// let searchInput = document.querySelector(".search");
// let avatar = document.querySelector(".avatar");
// let name = document.querySelector(".name");
// let bio = document.querySelector(".bio");
// let repos = document.querySelector(".repos");
// let locationn = document.querySelector(".location");
// let followers = document.querySelector(".followers");
// let following = document.querySelector(".following");
// let joined = document.querySelector(".joined");
// let blog = document.querySelector(".blog");
// let twitterUsername = document.querySelector(".twitterUsername");
// let email = document.querySelector(".email");

// sun.addEventListener("click", () => {
//     body.style.backgroundColor = "#536872";
//     sun.style.display = "none";
//     sunBlack.style.display = "block";
// });

// sunBlack.addEventListener("click", () => {
//     body.style.backgroundColor = "#141C2F";
//     sun.style.display = "block";
//     sunBlack.style.display = "none";
// });


let sun = document.querySelector(".fa-regular")
let sunBlack = document.querySelector(".black")
let body = document.querySelector("#github")

sun.addEventListener("click", () => {
    body.style.backgroundColor = "#536872"
    sun.style.display = "none"
    sunBlack.style.display = "block";
})

sunBlack.addEventListener("click", () => {
    body.style.backgroundColor = "#141C2F"
    sun.style.display = "block"
    sunBlack.style.display = "none";
})

let searchBtn = document.querySelector(".searchBtn")
let searchInput = document.querySelector(".search")
let avatar = document.querySelector(".avatar")
let name = document.querySelector(".name")
let bio = document.querySelector(".bio")
let repos = document.querySelector(".repos")
let locationn = document.querySelector(".location")
let followers = document.querySelector(".followers")
let following = document.querySelector(".following")
let joined = document.querySelector(".joined")
let blog = document.querySelector(".blog")
let twitterUsername = document.querySelector(".twitterUsername")
let email = document.querySelector(".email")
let agithub = document.querySelector(".agithub")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${searchInput.value}`).then((res) =>
        res.json()).then((data) => {
            avatar.src = data.avatar_url
            name.innerText = data.login
            bio.innerText = data.bio ? data.bio : "Not provided"
            locationn.innerText = data.location ? data.location : "Not provided"
            followers.innerText = data.followers
            following.innerText = data.following
            repos.innerText = data.public_repos
            blog.innerText = data.blog ? data.blog : "Not provided"
            twitterUsername.innerText = data.twitter_username ? data.twitter_username : "Not provided"
            joined.innerText = "Joined: " + new Date(data.created_at).toLocaleDateString()
            email.innerText = data.email ? "Email: " + data.email : "Email: Not provided"
            console.log(data);
        })
})
