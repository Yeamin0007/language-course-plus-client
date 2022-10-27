# Project Name - CoursePlus

# Live Site Link
https://course-plus-e412d.web.app/

# About
CoursePlus is a language learning site. Here you can find different language courses with details.
Courseplus offers access to over 60 million users around the world. The platform online allows you to use some free features, including reading, writing, speaking and listening lessons. You can also network with other language learners. 
 
 ## Packages
 During this project I Used :
 1. React-Router-Dom
 2. React-Bootstarp
 3. React-Icons
 4. React-to-PDF

## Authentication
For authentication I used firebase authetication.
And also used firebase to host this project.

## Server Loading
Here I used "vercel" to make a link that helped me to make the local data, global.

### Work Process

1) After creating a responsive navbar I used react router to create different routes.
2) Then I used loader to get data from server & useLoaderData function to dynamically pass to value from the API to components.
3) After destructuring the loadedData ,I used map function on objects to create the differnt courses and details sections for the site.
4) I made a private route to secure the premium details. And you can't visit it without making an account.
5) I used an Accordion from react bootstrap to make a FAQ section for clients.
6) Last but not least I made the whole site responsive and deployed the project in firebase.