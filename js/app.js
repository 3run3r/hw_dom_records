document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  //
  // const button = document.querySelector('#button');
  // button.addEventListener('click', handleButtonClick);
  //
  // const textInput = document.querySelector('#input');
  // textInput.addEventListener('input', handleInput);
  //
  // const select = document.querySelector('#select');
  // select.addEventListener('change', handleSelect);
  //

  const body = document.querySelector('body');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete All';
  body.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleDelete);
  // const deleteAllAlbums = document.querySelector('button');


  const form = document.querySelector('#main-form');
  form.addEventListener('submit', handleFormSubmit);

});

const newListItem = (form) => {

  const listItem = document.createElement('li');

  const title = document.createElement('h3');
  title.textContent = `${form.title.value}`;
  listItem.appendChild(title);

  const artist = document.createElement('h4');
  artist.textContent = `${form.artist.value}`;
  listItem.appendChild(artist);

  const year = document.createElement('h5');
  year.textContent = `${form.year.value}`;
  listItem.appendChild(year);

  const genre = document.createElement('h6');
  genre.textContent = `${form.genre.value}`;
  listItem.appendChild(genre);

  // const owned = document.createElement('p');
  // owned.textContent = `${form.owned.value}`;
  // listItem.appendChild(owned);
  // const artist = form.artist.value;
  // const year = form.year.value;
  // const genre = form.genre.value;

  // listItem.textContent = `${title}, ${artist}, ${year}, ${genre}`;
  return listItem;

};

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  // const newListItem = document.createElement('li');
  //
  // const title = event.target.title.value;
  // const artist = event.target.artist.value;
  // const year = event.target.year.value;
  // const genre = event.target.genre.value;
  //
  // item.textContent = `${title}, ${artist}, ${year}, ${genre}`;

  const listItem = newListItem(event.target);

  const unorderedList = document.querySelector('#album-list');
  unorderedList.appendChild(listItem);

  if (event.target.owned.value === "Owned"){
    listItem.classList.add('album-owned')
  }

  event.target.reset();
};

const handleDelete = () => {

  const unorderedList = document.querySelector('#album-list');
  unorderedList.innerHTML = "";

};
