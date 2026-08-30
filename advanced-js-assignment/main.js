import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const tableBody = document.querySelector('tbody');
const modal = document.querySelector('dialog');
const modalContent = document.querySelector('#modal-content');
const closeBtn = document.querySelector('#close-modal');

closeBtn.addEventListener('click', () => modal.close());

const init = async () => {
  try {
    const restaurants = await fetchData(`${baseUrl}/restaurants`);

    // Sort alphabetically by name
    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    restaurants.forEach((restaurant) => {
      const row = restaurantRow(restaurant);

      row.addEventListener('click', async () => {
        try {
          // Fetch the daily menu for the clicked restaurant
          const menu = await fetchData(
            `${baseUrl}/restaurants/daily/${restaurant._id}/fi`
          );
          modalContent.innerHTML = restaurantModal(restaurant, menu);
          modal.showModal();
        } catch (error) {
          modalContent.innerHTML = `<p>Error loading menu.</p>`;
          modal.showModal();
        }
      });

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  }
};

init();
