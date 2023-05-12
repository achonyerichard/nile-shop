const products = [
  {
    id: 1,
    category: 'Electronics',
    price: 299.99,
    product:"Pressing Iron",
    seller: 'ABC Electronics',
    sellerContact: 'abc@example.com',
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    category: 'Accesories',
    price: 59.99,
    seller: 'XYZ Home',
    product:"Ear Piece",
    sellerContact: 'xyz@example.com',
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    category: 'Games',
    price: 19.99,
    seller: 'Bookstore Inc.',
    product:"PS4 Slim",
    sellerContact: 'info@bookstore.com',
    image: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    category: 'Toys & Games',
    price: 39.99,
    seller: 'Toyland',
    sellerContact: 'sales@toyland.com',
    image: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    category: 'Clothes',
    price: 129.99,
    seller: 'Outdoorsy Co.',
    product:"Puffer Jacket",
    sellerContact: 'info@outdoorsy.com',
    image: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    category: 'Laptop',
    price: 79.99,
    seller: 'Fashionista',
    product:"M2019 Macbook Pro",
    sellerContact: 'hello@fashionista.com',
    image: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    category: 'Phone',
    price: 29.99,
    seller: 'Beauty Co.',
    product:"Samsung S20 ",
    sellerContact: 'info@beautyco.com',
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    category: 'Clothes',
    price: 89.99,
    seller: 'Kitchen Stuff',
    product:"Cargo shorts",
    sellerContact: 'sales@kitchenstuff.com',
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    category: 'Electronics',
    price: 599.99,
    seller: 'Gizmo Tech',
    product:"TV",
    sellerContact: 'support@gizmotech.com',
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 10,
    category: 'Skin Care',
    price: 49.99,
    seller: 'Active Life',
    product:"Face Mask",
    sellerContact: 'info@activelife.com',
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }
];
export default function getProducts(){
  return products
}