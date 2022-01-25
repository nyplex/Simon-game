
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

In the project, I have used arround 15 differents sounds FX. Those sounds have been created and designed by Raphael Texeira and I have all the rights to use them.

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

In terms of features, the website uses bootstrap. The navbar stays stick on the top of the pages. Also when the user click on the contact icon/links a contact modal window opens. The last feature is on the portfolio page, when the user scroll down, the content appear using a fade transition (this feature has been written by someone else, see credits section).

<h1 align="center">Testing</h1>

When the users arrive on the home page, they are welcomed by a video header follwed by a quick presentation of the company. The next section is a spotlight of the mains services of Focus. Finally the users can see the current clients of the company. At the bottom of the page, the users are invited to contact the company.

On the services pages ("production", "strategy", "diffusion"), the users can learn more about what Focus can offer. They will learn more about each products and services. 

Finally, on the portfolio page, the users can check the company's work. The portfolio page page uses a timeline display from the most recent work to oldest ones. 

On each pages of the website the users have the possibility to easily to get in touch with company using a static contact icon and a contact link on the navbar. 

The website is fully responsive (mobile, tablet, laptop and desktop). All external links will open in a new tab. The website has been tested on different brwoser. 

<h1 align="center">Deployment</h1>

Focus website has been deployed using GitHub Pages from the master branch. To check the live website [click here.](https://nyplex.github.io/focus/index.html).
You can clone the project usit "git clone" command in your terminal and pasting https://github.com/nyplex/focus.git

The styling on this project has been done using the preprocessor SASS. You download SASS [here.](https://sass-lang.com/install)

<h1 align="center">Credits</h1>


- MEDIA

    The video header has been downloaded on Vimeo.
    All the SVG illustrations are from  [Undraw.](https://undraw.co/illustrations)
    All the icons are from [Font Awesome.](https://fontawesome.com/)
    All the client's logo are from Google Images.
    All the videos on the portfolio page are from Youtube.

- CODE 

    All the HTML/CSS code has been written by me using bootstrap mainly for the responsivity of the website with the exception of two features:

    * The portfolio animation (JavaScript & CSS) has been written by [George Soukos.](https://georgemartsoukos.com/) and modified by me to fit the overall design of the website.
    * To make the CSS hover animation on the buttons I have used this [Exemple](https://codepen.io/giana/pen/xdXpJB) and modified the code to fit my needs  
  
    
