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

const matchPartner = (firstPartner, secondPartner, variant) => {

  const results = [];
  for (const prop in firstPartner) {
    if (typeof(firstPartner[prop]) === 'object') {
      const longerArr = firstPartner[prop].length > secondPartner[prop].length ? firstPartner[prop] : secondPartner[prop];
      const shorterArr = firstPartner[prop].length <= secondPartner[prop].length ? firstPartner[prop] : secondPartner[prop];
      shorterArr.map((element) => {
        results.push(longerArr.includes(element))
      })
    }
    else if (typeof(secondPartner[prop]) === 'undefined') {
      results.push(true)
    }
    else {
      results.push(firstPartner[prop] === secondPartner[prop])
    }
  }
  switch (variant) {
    case 'a': {
      return !results.includes(false)
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

console.log("JANEK, DANUTA", matchPartner(JANEK, DANUTA, 'a'));
console.log("JANEK, DANUTA", matchPartner(JANEK, GENOWEFA, 'a'));
console.log("JANEK, DANUTA", matchPartner(JANEK, JANINA, 'a'));
console.log("JANEK, DANUTA", matchPartner(JANEK, LEONTYNA, 'a'));
