export const restaurantRow = (restaurant) => {
  const {name, company} = restaurant;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${name}</td><td>${company}</td>`;
  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;

  const menuItems = courses
    .map((course) => {
      const {name: courseName, price, diets} = course;
      return `<li>${courseName}, ${price ? price : '?€'}. ${diets ? diets : 'No diets listed'}</li>`;
    })
    .join('');

  return `
    <h2>${name}</h2>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone ? phone : 'No phone available'}</p>
    <p>${company}</p>
    <ul>${menuItems}</ul>
  `;
};
