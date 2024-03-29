# Front-end Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.1-hotpink)

## Introduction

This is an E-commerce website designed as a frontend Project under Integrify Academy Frontend module. The task was to create an e-commerce website using API endpoints from [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/).
This project requires implementation of TypeScript and SASS.

## Technologies
- Typescript
- React
- Redux (Toolkit)
- React Router
- Jest
- MUI
- SASS
  -React-form-hook

## Getting Started

first clone the project from the repository and run the node commands.

1. git clone https://github.com/AbhishekSingh1909/Frontend-ECommerce.git
2. cd Frontend-ECommerce
3. git checkout fullStack_feature
4. npm install

## Fearture

### User (Anonymous Users)

- able to view all product listings
- able to filter the products by categories
- able to sort(by price) and filter products
- search a product by product title
- able to view single product page
- able to register
- able to log in
- add product in cart
  #### Logged in user
  - able to view own account details
  - \*able to modify email, password, name and image
  - able to log out
  - able to create cart
  - able to update cart
  - able to check out cart
  #### Admin
  - able to modify products (create, update, delete)
  - \*able to view all users (all details but password)
  - \*able to delete users
  - \*able to modify user roles

### Product:

- can be viewed as list (all/by category)
- can be viewed individually
- can be sorted (by price)
- can be filtered
- can be added to cart(by logged in user)
- can be created, modified and deleted (by admin)

### Category:

- can be viewed as list

### Cart:

- can be created
- can be modified (add cart item, update cart item quantity, delete cart item)
- can be checked out
- can be deleted

### Project overview

### Folder structure
```
- Horizontal Function bases project
  
public
│   ├───images
└───src
    ├───app
    │   └───hooks
    ├───components
    │   ├───card
    │   ├───CenterContainer
    │   ├───InputSearch
    │   ├───Pagination
    │   ├───Product
    │   ├───ProductImage
    │   └───User
    ├───custom-components
    ├───pages
    ├───redux
    │   ├───reducers
    │   │   ├───address
    │   │   ├───cart
    │   │   ├───category
    │   │   ├───image
    │   │   ├───order
    │   │   ├───product
    │   │   ├───user
    │   │   └───userAuthentication
    │   └───store  
    ├───selectors
    ├───styles
    ├───test
    │   ├───dataSeed
    │   ├───reducers
    │   └───shared
    └───types
        └───FormValidation

           
```

### Testing

The project uses JEST framework to unit test all the reducers.
To run test: npm test

### Deployment

[deploy link frontend project](https://tiny-lily-dcaacd.netlify.app)
[deploy link frontend project](https://e-commerce-website-rho-eight.vercel.app/)

[Full stack project fStore frontend deployment Link ](https://fstore-project.vercel.app/)
```
