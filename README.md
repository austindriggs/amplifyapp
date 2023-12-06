# CS230 Labs 5-7

## Lab Assignment 05
The goal of this assignment is to create a react app and deploy it.
Software requirements: 

### You need the following software’s.
1.	Download and install Git https://git-scm.com/downloads 
2.	Download and install Node.js https://nodejs.org/en/download 
3.	Create an account on GitHub https://github.com/ 
4.	Create an account on AWS https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro 

### Part 01 (50 Points)
1.	Create a react app
  a.	npx create-react-app amplifyapp \
    i.	if it’s not working first use npm install -g npm \
  b.	cd amplifyapp \
  c.	npm start \
You can open the react app in a local machine using the following address http://localhost:3000/ or http://127.0.0.1:3000/ 
2.	You need make some changes in only in the App.js file. This is the only component we have. 
3.	In the App.js there is a function named App(). Inside this function there is div with className = “App”. Remove everything you have inside this div.
4.	Create a h1 tag with text “CS 230L” inside that div.
5.	Create a h2 tag with text “Section - XX”. 
6.	Create a p tag with text “WVU ID: XXXXXXX”
7.	Create another p tag with text “Hi I am X”
8.	Replace X with appropriate value.
9.	In amplifyapp folder open the command prompt and use the following commands\
    a.	git config --global user.name “your user name”  \
    b.	git config --global user.email “your email”  \
    a and b are the commands you need to use only for the first time. \
    If you work with another project after this can start from c.  \
    c.	git init \
    d.	git add . \
    e.	git commit -m "initial commit" 
10.	Then go to GitHub and create a repository name it anything you want.
11.	After creating a repository, you fill see some commands on GitHub 

![github-commands](https://github.com/austindriggs/amplifyapp/assets/112009203/e4193644-0bd6-400d-9f40-237fc1ca5585)

12.	Copy those commands and paste it on the same command prompt one by one. 
13.	Then refresh the GitHub page that will upload the codes of your local machine into GitHub.

### Part 02 (50 Points)
You've successfully set up your React app on both your local machine and GitHub. However, at this point, only you can view the web app in your local browser. It's time to deploy the app and make it accessible to others. To do this, you'll need to create an AWS account. You can find detailed instructions on how to do this on the provided website.

1.	The goal here is to deploy your web page. For this we will use AWS.
2.	https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro
3.	This web page has all the instructions for this you just need to follow those.
4.	If you scroll down a bit, you see a heading Implementation
5.	It has total 5 sections. I have already break down the first and second sections in Part 01.
6.	You need to follow from Log in to the AWS Management Console to Deploy your app with AWS Amplify.
7.	After successful deployment you will have a web address like this 
https://master.d2rrly8wcnxx18.amplifyapp.com/
8.	If you open this website, you will see this

![webpage](https://github.com/austindriggs/amplifyapp/assets/112009203/3aab8ddb-d35a-457a-bfce-de45372d078f)

### Submission:
1.	You need to submit your GitHub repository. So that I can see your code. (50 points)
2.	You need to submit the web address so that I can see your live website. (50 points)

### Deadline: 
The assignment will be due till Midnight, 24th October.

<!------------------------------------------------------------------->

## Lab Assignment 06

### Goals:
The goal is to create two more components. One is for Navbar one is for displaying some cards on our website. We will learn how to use bootstrap in a React app.

### Problem:
1.	Open command prompt in you project folder.
2.	For installing bootstrap use the following command \
a.	npm install bootstrap 
3.	If it’s successfully installed then you will be able to find a folder called bootstrap inside the node_modules folder.
4.	In you index.js you need to import the bootstrap file. \
a.	import "bootstrap/dist/css/bootstrap.css";
5.	Create a Navbar component. This component should display a navbar in your webpage. 
6.	Create the second component called Card. This should display three cards side by side.
7.	After creating these components import into your main component (App.js)
8.	And then finally use those components / single tags inside the div which has the classNmae = “App”.

Note: You can get the navbar and card codes from bootstrap official website

![sample](https://github.com/austindriggs/amplifyapp/assets/112009203/7e662b89-3b0b-4958-9710-977d76b904c2)
Figure:  Sample output

### Submission:
1.	You need to submit your GitHub repository. So that I can see your code.
2.	You need to submit the web address so that I can see your live website. 
3.	Both of these components carry equal weights. \
a.	Navbar – (50 points) \
b.	Card – (50 points)
Create a text file enter both the GitHub repo link and website then submit that text file on ecampus.

### Deadline: 
The assignment is due Wednesday midnight (November 1st).

<!------------------------------------------------------------------->

## Lab Assignment 07

### Goals:
-	Create some more components
-	Work with props
-	Work with react router

### Problem:
1.	Open command prompt in your project directory and install the following package.
npm install react-router-dom
2.	For displaying the following output create a new component called Home. Then import Home in you App component and use it.

![image](https://github.com/austindriggs/amplifyapp/assets/112009203/1acefd54-628b-46ae-8925-595cabd2b068)

3.	Create one more component called Contact. Inside this component use any bootstrap form.
4.	In your App.js file use the followinig import:  import { BrowserRouter, Routes, Route } from "react-router-dom"
5.	Create 3 react Routes for Home, Card and Contact. https://www.w3schools.com/react/react_router.asp (You can find more information about react router here.)

```
<div className="App">
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
   </BrowserRouter>
 </div>
```

6.	You need to add this type of code in you App.js. Use it as a reference. 
7.	Now your webpage will have three pages. \
a.	http://localhost:3000/ (This will show the home page) \
![image](https://github.com/austindriggs/amplifyapp/assets/112009203/2322cdc9-1639-46db-a99c-57b56ae62ccc)
b.	http://localhost:3000/card (This will show the card) \
![image](https://github.com/austindriggs/amplifyapp/assets/112009203/c4ed18ec-aa11-43b1-8d10-4460939eef0c)
c.	http://localhost:3000/contact (This will show the contact form)
![image](https://github.com/austindriggs/amplifyapp/assets/112009203/d5e313f2-8764-4e1a-a4b0-779268c0be1d)

### Submission:
1.	You need to submit your GitHub repository. So that I can see your code.
2.	You need to submit the web address so that I can see your live website. 
Create a text file enter both the GitHub repo link and website then submit that text file on ecampus.

### Deadline: 
The assignment is due Wednesday midnight (November 9th).
