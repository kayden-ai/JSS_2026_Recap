export const restaurantRow = (restaurant) => {
  const {name, company} = restaurant; // Destructuring
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${name}</td><td>${company}</td>`;
  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  // Destructuring
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;

  let menuHtml = '<ul>';
  courses.forEach((course) => {
    const {name: courseName, price, diets} = course;
    // Ternary operators used for price and diets
    menuHtml += `<li>${courseName}, ${price ? price : '?€'}. ${diets ? diets : 'No diets listed'}</li>`;
  });
  menuHtml += '</ul>';

  return `
    <h2>${name}</h2>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone ? phone : 'No phone available'}</p>
    <p>${company}</p>
    ${menuHtml}
  `;
};
