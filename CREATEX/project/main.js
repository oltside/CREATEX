let imgList = [
  {
    src: '/project/img/slide-1',
    nameImg: 'Воздушный шар'
  },
  {
    src: '/project/img/slide-2',
    nameImg: 'Воздушный шар'
  },
  {
    src: '/project/img/slide-3',
    nameImg: 'Воздушный шар'
  },
  {
    src: '/project/img/slide-4',
    nameImg: 'Воздушный шар'
  },
  {
    src: '/project/img/slide-5',
    nameImg: 'Воздушный шар'
  },
  {
    src: '/project/img/slide-6',
    nameImg: 'Воздушный шар'
  }

]

let img = document.querySelector('main-img')
let btn = document.querySelector('btn-gallery-next')

let setImg = curentDataImg => {
  img.src = curentDataImg.src
  img.alt = curentDataImg.nameImg
}

setImg(imgList[0])

btn.addEventListener('click', setImg)