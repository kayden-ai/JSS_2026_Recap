import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const tableBody = document.querySelector('tbody');
const modal = document.querySelector('dialog');
const modalContent = document.querySelector('#modal-content');
const closeBtn = document.querySelector('#close-modal');

const btnAll = document.querySelector('#filter-all');
const btnSodexo = document.querySelector('#filter-sodexo');
const btnCompass = document.querySelector('#filter-compass');

let allRestaurants = [];

closeBtn.addEventListener('click', () => modal.close());

const renderRestaurants = (restaurants) => {
  tableBody.innerHTML = '';

  if (restaurants.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="2">No restaurants found.</td></tr>`;
    return;
  }

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      try {
        const menu = await fetchData(
          `${baseUrl}/restaurants/daily/${restaurant._id}/fi`
        );
        modalContent.innerHTML = restaurantModal(restaurant, menu);
        modal.showModal();
      } catch (error) {
        modalContent.innerHTML = `<h2>${restaurant.name}</h2><p style="color: red;">Error: Could not load the daily menu. Please try again later.</p>`;
        modal.showModal();
      }
    });

    tableBody.appendChild(row);
  });
};

const init = async () => {
  try {
    allRestaurants = await fetchData(`${baseUrl}/restaurants`);
    allRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    renderRestaurants(allRestaurants);
  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="2" style="color: red;">Fatal Error: Could not connect to the restaurant database.</td></tr>`;
  }
};

btnAll.addEventListener('click', () => renderRestaurants(allRestaurants));

btnSodexo.addEventListener('click', () => {
  const sodexoList = allRestaurants.filter((r) => r.company === 'Sodexo');
  renderRestaurants(sodexoList);
});

btnCompass.addEventListener('click', () => {
  const compassList = allRestaurants.filter(
    (r) => r.company === 'Compass Group'
  );
  renderRestaurants(compassList);
});

init();
