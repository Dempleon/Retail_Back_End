# Retail_Back_End
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description <br>
This node application is the back end server of an e-commerce website built with mysql, express, sequalize. The project follows object relational mapping principles. The user can interact with the databse by making requests through insomnia, or any other restful testing application. Included in the link below is a walkthrough video demo of the application.
<br>
[Demo Video](https://drive.google.com/file/d/19FmSEFQI-7PkiwwbtNYweh-yxMhyhyK9/view?usp=sharing)
<br>
## Table of Contents
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[License](#Retail_Back_End)<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)<br>
    

## Installation
To install the application first clone the repository to the desired directory.
- Navigate to the application directory and enter the following commands into the terminal.
- Initialize the project packages with the following command:
    ```
    npm i
    ```
- Next initial the mysql shell with the following command:
    ```
    mysql -u root -p
    ```
- In the mysql shell enter the following command to run the schema which will create the database
    ```
    source ./db/schema.sql;
    ```
- The quit the mysql shell
    ```
    quit;
    ```
- To seed the database with data enter the following command:
    ```
    npm run seed
    ```
## Usage
To start the application enter the following command:
```
npm start
```

Use a restful route testing application like insomnia to interact with the backend mysql server.

![ProductPost](./images/product%20post.JPG)<br>
![CategoriesPost](./images/categories%20post.JPG)<br>
![TagsPost](./images/tag%20post.JPG)<br>
![DeleteRequest](./images/example%20delete.JPG)<br>
![TagPut](./images/tags%20put.JPG)<br>
![CategoriesPut](./images/categories%20put.JPG)<br>


## Contributing
To contribute to the project fork the repository and create pull requests. There are a few bugs with the application. One bug is the null categories when posting a post request for products.
<br>
![NullCategories](./images/null%20categories%20bug.JPG)<br>
Another bug is the put request bug for products. A 400 request status is sent, but the update is still carried out in the server.
<br>![PutBug1](./images/products%20put%20request%20bug.JPG)<br>
<br>![PutBug2](./images/product%20put%20request%20bug%202.JPG)<br>

## Tests
There are no tests writted for this application

## Questions
If you have any questions about the repo, open an issue or contact me directly at [Dempoleon@gmail.com](Dempoleon@gmail.com).
You can find more of my work at [Dempleon](https://github.com/Dempleon)