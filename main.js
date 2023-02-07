const button = document.querySelector(".btnRandomColor");
const cardBackground = document.querySelector(".cardWithBackground");

// GITHUB INFO
const nome = document.querySelector(".name");
const img = document.querySelector("img[alt='Foto do Github'");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const repo = document.querySelector(".repository");
const locale = document.querySelector(".location");

// API REQUEST
fetch('https://api.github.com/users/Henrriky')
.then(response => response.json())
.then(data => {
    nome.textContent = data.login;
    img.src = data.avatar_url;
    followers.textContent = `${data.followers} Seguidores`;
    following.textContent = `${data.following} Seguindo`;
    repo.textContent = `${data.public_repos} Repositórios`;
    locale.textContent = data.location;
})


button.addEventListener("click", () => {
    cardBackground.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
    const letters = "0123456789ABCDF";
    let color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}


