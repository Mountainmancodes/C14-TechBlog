# Tech Blog

Tech Blog is a CMS-style blog site where developers can publish their posts and comment on others' posts. This project is built using Node.js, Express.js, Sequelize, Handlebars.js, and features user authentication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Live Deployment](#live-deployment)
- [Local Deployment](#local-deployment)
- [Examples](examples)
- [License](#license)
- [Source Code](#source-code)

## Features

- User Authentication: Sign up, log in, and log out.
- Post Management: Create, update, and delete posts.
- Comment System: Comment on posts and view comments.
- Responsive Design: Optimized for desktop and mobile devices.

## Technologies Used

- Node.js
- Express.js
- Sequelize (PostgreSQL)
- Handlebars.js
- Express-Session for user authentication
- bcrypt for password hashing

## Environment Variables

DB_NAME='your_database_name'
DB_USER='your_database_user'
DB_PASSWORD='your_database_password'
DB_URL='' # Optional, if you use a different method to connect to the database
SESSION_SECRET='your_secret_key'

## Usage

### Live Deployment

1. Open the application via this [Link to the application](https://c14-techblog.onrender.com/).
2. Create an account or log in to an existing account.
3. Create, read, update, and delete blog posts.
4. Comment on blog posts.
5. Explore the application and enjoy!

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database by using the `schema.sql` and update `.env` file
4. Run seeds: `npm run seed`
5. Start the server: `npm start`
6. Visit `http://localhost:3001` in your browser

## Examples

[Tech Blog Deployed Site](https://c14-techblog.onrender.com/)
[Example 1](./images/Home%20Screen.png)
[Example 2](./images/Dashboard.png)
[Example 3](./images/Sign-up.png)

## Source Code

- Created by [Mountainmaincodes](https://github.com/Mountainmancodes)
- Code Assistance:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/)
  - [edX Xpert Learning Assistant](https://www.edx.org/)
  - [Render](https://community.render.com/t/why-am-i-getting-this-error-while-deploying-backend/19177/5)
  - [AskBSC](https://utavirtfsfpt0-ys73309.slack.com/archives/D0720EK1P9V)

## License

MIT License

Copyright (c) 2024 Lixiviate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
