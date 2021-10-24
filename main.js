const LinksSocialMedia = {
  github: 'edu2406',
  youtube: 'UCwsaZiwNaNJ1LG6o3VK0nRA',
  facebook: 'Carlos Eduardo',
  instagram: 'carlos_edu2406',
  twitter: 'edu93259445'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // const social = li.getAtTribute('class')

    li.children[0].href = https://${social}.com/${LinksSocialMedia[social]}
    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = 'https://api.github.com/users/edu2406'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      user.textContent = user.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}