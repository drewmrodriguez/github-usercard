import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const userCards = document.querySelector('.cards');

axios.get('https://api.github.com/users/drewmrodriguez')
  .then((results) => {
    cardCreator(results);
    console.log(results);  

    const newCard = cardCreator(results);
    userCards.appendChild(newCard);
  })
  .catch( err => {
    console.log("Error:", err);
  });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['rmjuarez12',
  'evllz',
  'eddiemadrigal',
];

  followersArray.forEach((user) => {
    const url = 'https://api.github.com/users/' + user;
    
    axios.get(url)
      .then((results) => {
        cardCreator(results);
        console.log(results); 

        const newCard = cardCreator(results);
        userCards.appendChild(newCard);
      }) .catch((err) => {
        console.log("Error:", err);
      })
  });



// const followersArray = ['https://api.github.com/users/rmjuarez12',
//                         'https://api.github.com/users/evllz',
//                         'https://api.github.com/users/eddiemadrigal',];

//   followersArray.forEach(e => {
//     axios.get(e)
//     .then(response => {
//     console.log(response)
//     const newUser = createUsercard(response.data);
//     cardHolder.appendChild(newUser);
//      })
//    })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function cardCreator(user) {
  // Create Elements
  const card = document.createElement('div');
    const cardUserImg = document.createElement('img');
    const cardInfo = document.createElement('div');
      const infoName = document.createElement('h3');
      const infoUserName = document.createElement('p');
      const infoLoc = document.createElement('p');
      const infoProfile = document.createElement('p');
        const profAddress = document.createElement('a');
      const infoFollowers = document.createElement('p');
      const infoFollowing = document.createElement('p');
      const infoBio = document.createElement('p');
      
  // Create Structure
   card.appendChild(cardUserImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(infoName);
    cardInfo.appendChild(infoUserName);
    cardInfo.appendChild(infoLoc);
    cardInfo.appendChild(infoProfile);
    infoProfile.appendChild(profAddress);
    cardInfo.appendChild(infoFollowers);
    cardInfo.appendChild(infoFollowing);
    cardInfo.appendChild(infoBio);

  // Set Content
  cardUserImg.src = user.data.avatar_url;
  infoName.textContent = user.data.name;
  infoUserName.textContent = user.data.login;
  infoLoc.textContent = user.data.location;
  infoProfile.textContent = 'GitHub Link';
  profAddress.href = user.data.html_url;
  infoFollowers.textContent = user.data.followers;
  infoFollowing.textContent = user.data.following;
  infoBio.textContent = user.data.bio;

  // Apply Styles
  card.classList.add('card');
  cardUserImg.classList.add('img');
  infoName.classList.add('name');
  infoUserName.classList.add('username');
  infoLoc.classList.add('p');
  infoProfile.classList.add('p');
  infoFollowers.classList.add('p');
  infoFollowing.classList.add('p');
  infoBio.classList.add('p');

  return card;
}