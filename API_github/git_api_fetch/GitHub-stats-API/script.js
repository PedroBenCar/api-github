function getProfile() {
  event.preventDefault();
  const username = document.getElementById('usernameInput').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      const profile = document.getElementById('profile-info');
      const OutDataStyle = 'font-weight: bold; color: #eebcff;';
      
      if (data.message === 'Not Found') {
        profile.innerHTML = "No profile";
      } else {
        profile.innerHTML = `
          <img src="${data.avatar_url}"><br> 
          <span style="${OutDataStyle}">Nome: </span>${data.name}<br>
          <span style="${OutDataStyle}">Nickname: </span> ${data.login}<br>
          <span style="${OutDataStyle}">Quantidade de repositorios:</span> ${data.public_repos}<br>
          <span style="${OutDataStyle}">Seguidores: </span> ${data.followers}<br>
          <span style="${OutDataStyle}">Seguindo: </span> ${data.following}<br>
          <span style="${OutDataStyle}">Repositorio Link: </span> ${data.html_url+'/?tab=repositories'}<br>
        `;
      }
    });
}
