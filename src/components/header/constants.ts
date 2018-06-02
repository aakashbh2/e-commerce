export const HEADER_ITEMS = [
  {
    name: 'Home',
    active: true,
    hot: false,
    url: ''
  },
  {
    name: 'Shop',
    active: false,
    hot: false,
    url: 'shop/all',
    subCategory: [{
      name: 'All Products',
      url: 'shop/all'
    }, {
      name: 'Women',
      url: 'shop/women'
    }, {
      name: 'Men',
      url: 'shop/Men'
    }, {
      name: 'Bag',
      url: 'shop/Bag'
    }, {
      name: 'Shoes',
      url: 'shop/Shoes'
    }, {
      name: 'Watches',
      url: 'shop/Watches'
    }],
  },
  {
    name: 'Sale',
    active : false,
    hot: true,
    url: '/sale'
  }, {
    name: 'About',
    active: false,
    hot: false,
    url: '/about-us'
  }, {
    name: 'Contact',
    active: false,
    hot: false,
    url: '/contact-us'
  }
];
