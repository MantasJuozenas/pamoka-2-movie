console.log('hi from js');

const vienas = 'as esu pirmas';
const du = 'as esu antras';
const trys = 'as esu trecias';

console.log(vienas);
setTimeout(() => {
  console.log(du);
}, 1000);
console.log(trys);

const user = {
  name: 'Jonas',
  lastname: 'Serbentautas',
};

const GITHUB_API = 'https://api.github.com/users/fabpot';

// function loadUrl() {
//   fetch(GITHUB_API)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// }

// async funkcija

async function loadUrl() {
  try {
    const response = await fetch(GITHUB_API);
    const data = response.json();
    console.log(data);
  } catch (error) {
    alert(error);
  }
}

loadUrl();
