# Introduction

This is definitely my boldest project! So, because this, I decide write this in english, to have more projection. 

# What The Aplicattion Wanna Fix

Well, I work at public health care system in Brazil, and we have some problems. Our system it's not transparent. People request consultations with doctors and exams, and, this pass to an authorizathion. But, when the request are devolved ou damage, nobody is notify, and the user stay waiting forever, until he got tyred and go at the Central of Regulation to see whats happenning. This is really harmful to our user, because they wait so much more time for a exam. 
Besides that, our user cant see how is his request. We have queues of users to our health services, and they dont know them positions. So, i start this project wanna fix this. 

# The stacks

I started with what i knew at the time when I start: Javascript, Html e CSS. But, before, I used other stacks, like Node JS, Express, Mongo DB, to fix the data issue. This can be here when you are seeing this project or this dont, if not are, sorry. It's so many things to do, create the system and update the Readme properly. 

# SIGSS - The Start

We start with login. I did that with user cache, saving the data in navigator and using Json. I dont know how much about that but i will study more this in time.


![p1](https://user-images.githubusercontent.com/92747098/150890060-1dbbae04-79ab-438a-a2e6-43fa14698515.jpeg)


We have a area to the user make his register. Its very beautiful and the data go to user cache. 


![p2](https://user-images.githubusercontent.com/92747098/150890173-6b3b02c3-a38d-4870-b4af-7d7f85b42c37.jpeg)


After login, you are at the home-page. We havent so much here, but we have a side menu, a off button etc. 


In the menu, we count with same pages that users will request same procedure, and other to the doctor authorize, and the last to the operator system schedule the exam or consultation. 


![p3](https://user-images.githubusercontent.com/92747098/150890202-4e60dccb-45d2-4299-a7a4-ea1ce8d9a2d4.jpeg)


It's been building. The idea it's the user can have an area to consult his request and look his notifications, but this will be build later then this page are ready. 


# SIGSS - Solicitations and Authorize

Here are the page to the system operator request an appointment with a doctor or a exam. It's really complete. In the evolution system, the user data its send to the server, then it's stored at a Mongo DB Data Base, a NoSQL Data Base. 


![p4](https://user-images.githubusercontent.com/92747098/150890356-0ec478fd-e96f-46c2-90b3-d21305c14ebb.jpeg)


Here the doctor obtain the requests and annalise then to authorize the correct solicitations. 


![p5](https://user-images.githubusercontent.com/92747098/150890446-52f781b5-6e61-4b4f-beb0-9f8be7e2f311.jpeg)


# Conclusion 

The system it's not ready yet. It been a very intense experience development this, because it's really more complex then looks like when I imagined. 

To finish, if you wanna access and experiment, try here: https://eduardo-borges-goncalves.github.io/sigss/index.html

# Next

Next tasks: 
- integrated this with the backend in node js / Express
- connect with the database;
- save the requests;
- consum the request in the authorize page;
- build the authorize page properly;
- build the schedule page; 
- build the notify system; 
- build the user area. 
