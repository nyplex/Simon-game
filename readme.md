
<h1 align="center">SIMON GAME</h1>

*This is the README file for SIMON game web application. You will find here a bunch of information regarding the Design, the technologies used and some informations regarding the gameplay.*

Simon is a memory game invented by Ralph H. Baer and Howard J. Morrison. The game creates a series of tones and lights and requres a user to repeat the sequence. If the user succeeds, the series becomes longer and more complex. Once the user fails or the time limit runs our, the game is over. 

Simon 2.0, is a web based application game that I have created. I took the concept of the original game and translate it into a web application. In the new version of the game, the user has the possibility to choose a theme, a game mode, a level of difficulty. The game can ben played with up to 4 people. 

The main goal during the user's visit is fun and entertainment. I want the user to enjoy theirt time on the app and I want them to come back.

For the first-time player, I have written a set of rules that explain how to the game works.


[Check out the webste here.](https://nyplex.github.io/focus/index.html)

![alt text](focus.png)


<h1 align="center">Design</h1>


## User's needs

For this kind of application, the user's needs are really straightforward. The user's want to understand how the game works rapidily without spending too much time reading the rules. 

The second need is to make sure the user enjoy the time he spend on the app. Finally, specificly for this game, the speed of execution is really important as the game's speed will increase while the player plays. 
        

## Website requirements
        
- Welcome window where the user can setup the game
- The game
- Score window
- Rules window



## Usage Scenario
        
- First Time Users

    When the users land on the website for the first time, they will be have the choice to read the rules of the game. The user's must understand what the game is about and how it works and that wihout speding more than 5 minutes reading the rules. DUring their first visit, the user must understand easily how to configure the game and how play. 

- Returning Users
  
    The users that are coming back already know what Simon 2.0 is. The main goals for the returning users is to give them as much fun as possible and also giving them more complex challenge (level 3, 4, 5).


<h1 align="center">Design</h1>

## Wireframes

I used Figma to make the wireframe. 
  - Colors palette
  - Setup page
  - Main page
  - Mobile main page

## Colors

The mains colors used on the website are dark blue, light blue and pink. The text is dark gray. 
This are the mains colors used on the website:

  - light: "#F1FAEE",
  - secondary: "#A8DADC",
  - primary: "#1D3557",
  - text: "#323232",
  - Second variant: "#457B9D",

## Typography

I have used 2 fonts on this appliation, the main one is "IBM Plex Sans" and second one is "Black Ops One".

## Illustrations/Media

There is only 2 illustrations on this website, the rest have been done using CSS. 
The first illustration is main background, I have used this "website" to generate the svg background. The other illustrtion is the logo that I have created myself using figma. 

In the project, I have used arround 15 differents sounds FX. Those sounds have been created and designed by Raphael Teixera and I have all the rights to use them.

<h1 align="center">Technologies</h1>

- HTML5
- CSS3
- TailwindCSS
- JavaScript
- jQeury
- PostCSS
- Webpack
- GIT


<h1 align="center">Features</h1>

In terms of features, the website uses tailswindCSS. This CSS framework, gives me the opurtinity to write less CSS code and a better organisations of the differents classes. With tailwindCSS, I also used PostCSS which I use for auto prefixer functionality. 

Regarding JavsScript, I have used jQuery and I wrote my code using javaScript ES6. In order to use ES6, I have installed webpack. 
Webpack will then buddle all my different JS files + jQuery into a main index.js file.


<h1 align="center">Testing</h1>

When the users arrive on the website's main page, they are welcomed by a modal window where they can configure the game. The users can choose the game's theme, the numbers of payers, the level of difficulties and the mode they want to play. They also have the possiblity to read the rules. 

When the user launch the game, if more than 1 player, a new modal will open for the users to enter the name of each players. If single player, the game will launch. 

During the game, if the players loose, the game over modal will open displaying the results. On this modal, the user can either restart the game with the same configuration or setup a new game.

At any time during the game, the users car restart or setup the game using the button in the header. 
 

<h1 align="center">Deployment</h1>

Simon game has been deployed on ... click here to check the live application.
You can close the project using the "git clone" command in your terminal and pasting ... http..//

This project use different technologies (webpack, tailwindCSS, jQuery etc..), in order to a working version of the project on your local machine, please follow these steps using your terminal:

- clone the git repo on your local machine (git clone htp:// ...)
- cd into the project folder 
- run "npm intall" , in order to install all the dependencies. 
- run "npm run build" in order to bundle all the files.
- those command will create a node_modules folder and update the dist folder which contains the main files (js, css, html)
- you can open the index.html in the dist folder using your local server 


<h1 align="center">Credits</h1>


- MEDIA

    The sounds in the game have been created by Raphael Teixeira.

  
    
