# **What The Forecast?!!**

![Mockup image](assets/images/mockup/mockup.png)

## **Introduction**
What The Forecast?!! is an interactive weather app built from my learnings of HTML, CSS and JavaScript.
The purpose of this app is to provide the user with weather information from all around the world.

---
<a></a>
## Table Of Contents ##
* [UX](#ux)
    * [Strategy](#Strategy)
        * [User Stories](#User-Stories)
     * [Scope](#Scope)
       * [Expectations](#Expectations)
     * [Stucture and Skeleton](#Stucture-andSkeleton)
        * [Wireframes](#Wireframes)
    * [Surface](#Surface)
        * [Fonts](#Typography)
        * [Colors](#Colors)
* [Features](#Features)
    * [Existing Features](#Existing-Features)
    * [Future Features](#Future-Features)
* [Technologies Used](#Technologies-Used)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Acknowledgements](#Acknowledgements)

<a name="ux"></a>
## **UX**
---
<a></a>
### **Strategy**

* #### **User Stories**
  * As a User, I want to input my custom location into an input field to get weather data from my desired location.
  * As a User, I want the home screen to be inviting and with information relevant to my search.
  * As a User, I want to view the results of my search to get an idea of the current weather.
  * As a User, I want to easily enter my information.
  * As a User, I want to easily understand what I have to do.
  * As a user, I want the website to be easy to navigate.

<a></a>
### **Scope**

  * #### **Expectations** 
    * I expect the app to show the locations of where the user has searched.
    * I expect the app to show the weather, date and temperature of the area searched.
    * I expect the apps weather image to change depending on the weather shown.
    * I expect a well-designed website that allows for an enjoyable user experience. 

  * #### **Requirements**
    * Responsive design that works on all devices.
    * Navigation menu that is simple to use. 
    * Well designed and functional web page.
    * Visually appealing styling and imagery.
    * Contact for the provides feedback.

 <a></a>
### **Stucture**

  * #### **Main page**
    * An image based on the weather to be used in the centre of the page.
    * A search bar will be used to search the location the user wants, this will be above everything on the page.
    * Center of the page will hold all the information about the searched location.
    
<a></a>
* #### **Wireframes**
    
  You can view all of the wireframes here:

    * [Desktop](assets/images/wireframes/WhatTheForecastDesktop.png)
    * [Tablet](assets/images/wireframes/WhatTheForecastTablet.png)
    * [Mobile](assets/images/wireframes/WhatTheForecastmobile.png)

<a></a>
### **Surface**

<a></a>
* #### **Fonts**
  The fonts I have used are __Merriweather Sans__ And __Lato__.
  Merriweather Sanswas used for the body of the app and Lato was used for the temperature range only. I used a text shadow to highlight the main data the user will be looking for the temperature and the location selected.


<a></a>
* #### **Colours**
For the backgrounds, I used a CSS style property __linear-gradient__ to add colours representing day and night. For the background colour of the search bar and the text content in the body, I've used a light blue colour.
the colours used are:

* Orange : rgba(219, 117, 21, 0.3) / #db7515
* Blue : rgba(8, 17, 70, 0.8) / #081146
* light blue : #262d43

![Color image](assets/images/wireframes/WhatTheForecast.png)


<a></a>
* ### **Existing Features**
  * Search box for the user to search any location they choose, they enter a place and click search, the __Weather API__ will return the weather data for that location.
  * Weather image, this changes depending on the data received from the __Weather API__.
  * Live Weather area, it will show the weather information the user has searched.
  
<a></a>
* ### **Future Features**
  * A five day Forcast would allow the user to view today's weather and the next five days on the location searched.
  * a news section to allow the user to view the main headlines in the location searched.
  * A wind speed section to show the user the wind speed of the location searched.

<a></a>
## **Technologies Used**
<a></a>
* ### **Languages**
     * [HTML](https://en.wikipedia.org/wiki/HTML)
     * [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
     * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

<a></a>
* ### **Tools and Libraries**
     * [GitHub](https://github.com/)
     * [Google Fonts](https://fonts.google.com/)
     * [Balsamic](https://balsamiq.com/wireframes/)
     * [Stack Overflow](https://stackoverflow.com/)
     * [W3C HTML Validation Service](https://validator.w3.org/)
     * [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
     * [techsini](http://techsini.com/)
     * [Youtube](https://www.youtube.com/)

<a></a> 
## **Testing**

### As a User, I want to input my custom location into an input field to get weather data from my desired location.
  1. The home page is a clean simple design with on search function.
    ![Test Image](assets/images/testing/testing-img.png)
  1. Enter the desired loction into the seacrh field.
   ![Test Image](assets/images/testing/testing-img-1.png)
  1. The information about the location searched is displayed.
   ![Test Image](assets/images/testing/testing-img-2.png)

### Lighthouse test results:
 * [Desktop](assets/images/testing/lighthouse-deasktop.png)
 * [Mobile](assets/images/testing/lighthouse-mobile.png)

### Code Validation:
 * [HTML](assets/images/testing/html-val.png)
 * [CSS](assets/images/testing/css-val.png)
 * [Javascript](assets/images/testing/jshint.png)

### Manual Testing 

* I tested the website layout and function on different browsers.
* I tested the page on different mobile and tablet devices.
* I've tested the search field to make sure it is functioning correctly.
* When testing the search function, I found that when you misspell or don't write anything into the search bar it logs a fault in the console. For this, I found help on [Stack Overflow](https://stackoverflow.com/).


<a></a> 
## **Deployment**

  This project was deployed via GitHub by executing the following steps.
After writing the code, committing and pushing it to GitHub:

1. Log in to **GitHub** and locate the **Repository**
1. Go to your GitHub repository and click on the **Settings** tab
1. Then go to the **Pages** tab in the left-hand side sidebar.
1.Then under **Source** click the **None** dropdown and select the **Main** branch
1. Click **Save**
1. The page will update and at the top, it will say: Your site is ready to be published at  ```https://YOURUSERNAME.github.io/REPONAME/```

## **How to run the project locally**

Open the **GitHub** Repository
1. Click the Green **Code** Button above the files.
1. Here you can either Clone or Download the repository.
1. To clone the Repository using HTTPS, click on the clipboard to copy
the link.
1. Open your favourite **Terminal**.
1. Change the working directory to the location you want the cloned
directory to be.
1. Type **git clone** and paste the URL copied from step 3.
1. Press **Enter** to create your clone.

## **How to fork the Repository**

Fork the GitHub Repository makes a copy of the original to view and/or make changes without affecting the original.
Follow these steps:
1. Login into Github and select the Repository you would like to "Fork".
1. Select the **Fork** Button on the top right of the page.
1. A copy is now in your Github account.


<a></a>
## **Acknowledgements**

* My Mentor Simen ([Eventyret_mentor](https://github.com/Eventyret)) helping me throughout this project.
* Stack Overflow for helping me with any queries I had.
* Tyler Potts Video on [Youtube](https://www.youtube.com/watch?v=GuA0_Z1llYU/) helped me along the way.