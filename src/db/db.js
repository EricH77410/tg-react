import data from './imgDent.json';

const IMG_PATH = './assets/img/ImgDent';

export const praticiens = [
  { id: 1, nom_prenom: "René Davier" },
  { id: 2, nom_prenom: "Paul Roulette" },
  { id: 3, nom_prenom: "Assistante Claudine" }
]

export const get_img_dent = (num, type='v') => {
  let img = data.filter((item) => {
      return item.nomimg === num+type;
  })
  return IMG_PATH+'/'+img[0].img;
}

