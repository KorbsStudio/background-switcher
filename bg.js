let switches = document.getElementsByClassName('switch');
let bg = localStorage.getItem('bg');

if (bg == null) {
  setBG('0');
} else {
  setBG(bg);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setBG(theme);
  });
}

function setBG(theme) {
  if (theme == '0') {
    document.querySelector('img#primary-background').setAttribute('src', '');
    document.querySelector('#ob').style.display = 'inherit'
    document.querySelector('img#primary-background').style.opacity = '0'
  } else if (theme == '1') {
    document.querySelector('img#primary-background').setAttribute('src', './imgs/pexels-eberhard-grossgasteiger-2310646.jpg');
    document.querySelector('img#primary-background').style.opacity = '1'
    document.querySelector('#ob').style.display = 'none'
  } else if (theme == '2') {
    document.querySelector('img#primary-background').setAttribute('src', './imgs/pexels-eberhard-grossgasteiger-844297.jpg');
    document.querySelector('img#primary-background').style.opacity = '1'
    document.querySelector('#ob').style.display = 'none'
  }else if (theme == '3') {
    document.querySelector('img#primary-background').setAttribute('src', './imgs/pexels-eberhard-grossgasteiger-12365968.jpg');
    document.querySelector('img#primary-background').style.opacity = '1'
    document.querySelector('#ob').style.display = 'none'
  }else if (theme == '4') {
    document.querySelector('img#primary-background').setAttribute('src', './imgs/pexels-eberhard-grossgasteiger-12366149.jpg');
    document.querySelector('img#primary-background').style.opacity = '1'
    document.querySelector('#ob').style.display = 'none'
  }else if (theme == '5') {
    document.querySelector('img#primary-background').setAttribute('src', './imgs/pexels-eberhard-grossgasteiger-12366148.jpg');
    document.querySelector('img#primary-background').style.opacity = '1'
    document.querySelector('#ob').style.display = 'none'
  }else if (theme == '6') {
    document.querySelector('img#primary-background').setAttribute('src', './imgs/pexels-eberhard-grossgasteiger-12366150.jpg');
    document.querySelector('img#primary-background').style.opacity = '1'
    document.querySelector('#ob').style.display = 'none'
  }
  localStorage.setItem('bg', theme);
}