<p align="center">
  <!-- <img width="200px" alt="Project Title Logo" title="Project Title Logo" src="logo.svg" /> -->
  
  <h1 align="center">Project NLW Connect - Referral system for online events</h1>

  <!-- <p align="center">
    🔗 <a href="https://URLThisProject.com">https://URLThisProject.com</a> 🔗
  </p>   -->

I developed the backend for the NLW Connect project using Node.js, Fastify, and the Drizzle ORM, creating a referral system for online events. The following routes were implemented: event registration, invitation lookup and redirection to the new user registration based on the referral, counting clicks on the invitation, querying the number of referrals that signed up, checking the current ranking position, and displaying the top 3 users who made the most referrals. The system uses PostgreSQL as the database and Redis.

</p>

## 🧭 Table of contents

- [🧭 Table of contents](#-table-of-contents)
- [🎥 Implementation Video](#-implementation-video)
- [👏 Learning and more Implementations](#-learning-and-more-implementations)
- [💡 Technologies Used](#-technologies-used)
- [🚀 Running the Project](#-running-the-project)
  - [Back-end](#back-end)
- [📝 Routes](#-routes)
- [🌎 License](#-license)
- [✒ Author](#-author)

## 🎥 Implementation Video

In the GitHub edit, drag the video that it already puts on github itself.

<!-- ## 🎨 Layout

Layout developed by [Name](https://www.instagram.com/urlName/)

[![Layout in Figma](https://github.com/VagnerNerves/default-readme/blob/main/assets/layout-in-figma.svg)](https://www.figma.com/files) -->

## 👏 Learning and more Implementations

The main takeaway was using Redis as a database to store ranking positions, as well as creating Swagger documentation for the routes, using Zod for validation.

## 💡 Technologies Used

- [x] [Nodejs](https://nodejs.org/en)
- [x] [Fastify](https://fastify.dev/)
- [x] [@fastify/cors](https://github.com/fastify/fastify-cors)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [zod](https://zod.dev/)
- [x] [fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod)
- [x] [@fastify/swagger](https://github.com/fastify/fastify-swagger)
- [x] [@fastify/swagger-ui](https://github.com/fastify/fastify-swagger-ui)
- [x] [drizzle-orm](https://orm.drizzle.team/)
- [x] [postgres](https://www.npmjs.com/package/postgres)
- [x] [ioredis](https://github.com/redis/ioredis)

<!-- ## 📂 Folder Structure

```plainText
app
.
├── __tests__
├── android                     # Native android files
├── ios                         # Native ios files
├── src                         # Source files
│   ├── @types                  # Contains all global definitions of types and interfaces
│   ├── assets                  # Contains Js bundles assets. e.g: icons, splash, images etc...
│   ├── components              # Contains all global react components
│   ├── context                 # All contexts
│   ├── constants               # Constants files
│   ├── hooks                   # Cstomized hooks
│   ├── navigation
│   ├── screens
│   ├── services                # Contains external and api services
│   ├── App                     # Aplication entry
.
.
├── index                       # Bundle entry
.
.
└── README.md
``` -->

## 🚀 Running the Project

### Back-end

Clone the project

```bash
  git clone https://github.com/VagnerNerves/nlw-connect-nodejs-022025.git
```

Enter the project directory

```bash
  cd nlw-connect-nodejs-022025
```

Install with dependencies

```bash
  npm install
```

You will need to run Docker and then execute the command to create the PostgreSQL and Redis databases

```bash
  docker compose up -d
```

Execute the Drizzle ORM generate command to create the database and tables

```bash
  npx drizzle-kit generate
```

Create the .env file according to the .env.example file.

Start the server

```bash
  npm run dev
```

Now your backend will be running at http://localhost:33333, and you can view and interact with the routes through the Swagger documentation at http://localhost:33333/docs.

<!-- ### Front-end Web

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

### Mobile

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

- IOS:

```bash
  npx pod-install && npx react-native run-ios
```

- Android:

```bash
  npx react-native run-android
``` -->

## 📝 Routes

Access http://localhost:33333/docs for the route documentation with Swagger.

<!-- [![Run in Postman](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-postman.svg)](https://app.getpostman.com/run-collection/link)
[![Run in Insomnia](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-insomnia.svg)](https://insomnia.rest/run/?label=NAMEPROJECT&uri=LINK) -->

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.

## ✒ Author

<p align="center">
  <img width="200px" alt="Author Vagner Nerves" title="Author Vagner Nerves" src="https://github.com/VagnerNerves/default-readme/blob/main/assets/VagnerNerves.svg" />

  <h3 align="center">Vagner Nerves</h3>
  
  <p align="center">  
    Made with love and hate 😅, get in touch!
  </p>
</p>  
  
<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vagnernervessantos/)](https://www.linkedin.com/in/vagnernervessantos/)
[![Gmail Badge](https://img.shields.io/badge/-vagnernervessantos@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vagnernervessantos@gmail.com)](mailto:vagnernervessantos@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/VagnerNerves)](https://github.com/VagnerNerves)

</div>
