# Introduction

This is definitely my boldest project! So, because this, I decide write this in english, to have more projection. 

# What The Aplicattion Wanna Fix

Well, I work at public health care system in Brazil, and we have some problems. Our system it's not transparent. People request consultations with doctors and exams, and, this pass for an authorizathion process. But, when the request are devolved or denied, nobody is notify, so the users keep waiting forever, until they got tired and go at the Central of Regulation to see whats happenning. This is really harmful to our users, because they wait so much more time for a exam then it's necessary. 
Besides that, our users cant see how is them requests. We have queues to our health services, and they dont know them positions. So, i started this project wanting fix this. 

# The stacks

This it maked with Node JS, Express, Mongo DB, Javascript, Handlebars, HTML, CSS etc. 


# Starting the project

Download the files to your workstation. 

Download the Node JS: https://www.youtube.com/watch?v=__7eOCxJyow or https://www.youtube.com/watch?v=-cLzUD0TQY0

Open the terminal. Write: 

`node -v`

Execute. If the system return the node version, you are ok. 

Continue in the terminal. Open the directory that contain the files of this project. 

Download the npm package with the command: 

`npm install express mongooze express-handlebars connect-flash express-session body-parser`

If everything worked fine, you are ready. Write the final command: 

``node app.js``

The system it's on! Open the browser and look for the URL: 

`localhost:8082/admin/login`

# SISRRA - The Start

We start with login. I did that with user cache, saving the data in navigator and using Json. I dont know very much about that but i will study more in time.


![p1](https://user-images.githubusercontent.com/92747098/150890060-1dbbae04-79ab-438a-a2e6-43fa14698515.jpeg)


We have a area to the user make his register. Its pretty fine and the data go to the user cache. 


![p2](https://user-images.githubusercontent.com/92747098/150890173-6b3b02c3-a38d-4870-b4af-7d7f85b42c37.jpeg)


After login, you are at the home-page. We havent so much here, but we have a side menu, a off button etc. 


In the menu, we count with same pages that users will request same procedure, and other for the doctor authorize, and the last to the operator system schedule the exam or consultation. 


![p3](https://user-images.githubusercontent.com/92747098/150890202-4e60dccb-45d2-4299-a7a4-ea1ce8d9a2d4.jpeg)


It's been building. The idea it's the user can have an area to consult his request and look his notifications, but this will be build later then this page are ready. 


# SISRRA - Solicitations and Authorize

Here are the page to the system operator request an appointment with a doctor or a exam. It's really complete. In the evolution system, the user data its send to the server, then it's stored at a Mongo DB Data Base, a NoSQL Data Base. 


![p4](https://user-images.githubusercontent.com/92747098/150890356-0ec478fd-e96f-46c2-90b3-d21305c14ebb.jpeg)


Here the doctor obtain the requests and annalise then to authorize the correct solicitations. 


![p5](https://user-images.githubusercontent.com/92747098/150890446-52f781b5-6e61-4b4f-beb0-9f8be7e2f311.jpeg)


# Conclusion 

The system it's not ready yet. It been a very intense experience development this, because it's really more complex then looks like when I imagined. 

To finish, if you wanna access and experiment, try here: https://eduardo-borges-goncalves.github.io/sigss/index.html

# Next

Next tasks: 
- consum the request in the authorize page;
- build the authorize page properly;
- build the schedule page; 
- build the notify system; 
- build the user area. 
