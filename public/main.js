
function setMenusRoot(callback) {
  let menusRoot = document.createElement('div')
  menusRoot.className += 'menus'
  document.getElementsByClassName('container')[0].appendChild(menusRoot)
  callback()
}

function setMenuItem() {
  let menusConfig = [{
    href: '/maxage',
    text: 'max-age'
  }, {
    href: '/expires',
    text: 'Expires'
  }, {
    href: '/lastModified',
    text: 'Last-Modified'
  }]
  menusConfig.forEach(it => {
    let node = document.createElement('a')
    let textnode = document.createTextNode(it.text);
    node.appendChild(textnode);
    node.className = 'menu ' + it.text
    node.href = it.href
    document.getElementsByClassName('menus')[0].appendChild(node)
  })
}

