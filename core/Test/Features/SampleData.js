const faker = require('faker');
const bcrypt = require('bcrypt');

const admin_user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync('password', bcrypt.genSaltSync()),
  raw_password: 'password',
  verifiedAt: '2020-10-01T04:07:29.000Z',
  phone: faker.phone.phoneNumber(),
  RoleId: 1,
};

const product = {
  title: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
  category: faker.commerce.product().toUpperCase(),
  price: faker.commerce.price(),
  image:
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Aventador_ultimae_model_mobile.png',
};

module.exports = {
  admin_user,
  product,
};
