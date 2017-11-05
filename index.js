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
  const getResults = (condition) => {
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
        results.push(condition)
      }
      else {
        results.push(firstPartner[prop] === secondPartner[prop])
      }
    }
    return results
  };
  switch (variant) {
    case 'a': {
      const results = getResults(true);
      return !results.includes(false)
    }
    case 'b': {
      const results = getResults(false);
      return !results.includes(false)
    }
    case 'c': {
      return
    }
    default:
      console.log('variant parameter is required')
  }

};

console.log("JANEK, DANUTA", matchPartner(JANEK, DANUTA, 'a'));
console.log("JANEK, GENOWEFA", matchPartner(JANEK, GENOWEFA, 'a'));
console.log("JANEK, JANINA", matchPartner(JANEK, JANINA, 'a'));
console.log("JANEK, LEONTYNA", matchPartner(JANEK, LEONTYNA, 'a'));

console.log('-------------------------------');

console.log("JANEK, DANUTA", matchPartner(JANEK, DANUTA, 'b'));
console.log("JANEK, GENOWEFA", matchPartner(JANEK, GENOWEFA, 'b'));
console.log("JANEK, JANINA", matchPartner(JANEK, JANINA, 'b'));
console.log("JANEK, LEONTYNA", matchPartner(JANEK, LEONTYNA, 'b'));

console.log('-------------------------------');

console.log("JANEK, DANUTA", matchPartner(JANEK, DANUTA, 'c'));
console.log("JANEK, GENOWEFA", matchPartner(JANEK, GENOWEFA, 'c'));
console.log("JANEK, JANINA", matchPartner(JANEK, JANINA, 'c'));
console.log("JANEK, LEONTYNA", matchPartner(JANEK, LEONTYNA, 'c'));

console.log('-------------------------------');

