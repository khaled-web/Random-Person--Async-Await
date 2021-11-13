// Async Await

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  getData()
    .then(data => showData(data))
    .catch(error => console.log(error))
});

const getData = async function () {
  const url = 'https://randomuser.me/api/';
  const result = await fetch(url);
  const response = await result.json();
  return response;
}

function showData(data) {

  const {
    name: {
      first
    },
    name: {
      last
    },
    picture: {
      large
    },
    location: {
      country
    },
    location: {
      city
    },
    phone: phone,
    email: email
  } = data.results[0];

  // console.log(data);

  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('photo').src = large;
  document.getElementById('country').textContent = country;
  document.getElementById('city').textContent = city;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
}