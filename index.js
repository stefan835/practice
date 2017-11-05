const JANEK = {
  "ekstrawertyk": true,
  "lubi_podroze": true,
  "lubi_koty": true,
  "kuchnia": ["azjatycka", "włoska"]
};

const DANUTA = {
  "ekstrawertyk": false,
  "lubi_podroze": true,
  "lubi_koty": true,
  "kuchnia": ["azjatycka"]
};
const GENOWEFA = {
  "ekstrawertyk": true,
  "lubi_koty": true,
  "kuchnia": ["azjatycka"]
};
const JANINA = {
  "ekstrawertyk": true,
  "lubi_podroze": true,
  "lubi_koty": true,
  "kuchnia": ["włoska"]
};
const LEONTYNA = {
  "ekstrawertyk": true,
  "lubi_koty": true,
  "kuchnia": ["japońska", "francuska"]
};
console.log(JANEK)

const matchPartner = (firstPartner, secondPartner, variant) => {
  switch (variant) {
    case 'a': {
      console.log('a');
      break;
    }
    case 'b': {
      console.log('b');
      break;
    }
    case 'c': {
      console.log('c');
      break;
    }
    default:
      console.log('variant parameter is required')
  }
};