# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > I added the event listener in the Kids.js module. For the event listener to work I knew I would need the array of children that you get from database so it made sense to put it there. Firstly when a click is made on the webpage it will trigger my ClickEvent function with in the event listener. This function first looks at the element clicked on and creates a variable that will store it. Then we check whether the state “child” exists with in the element. We do this using an if statement. When true we will invoke a for loop to iterate through the children array already on this module. As we iterate we are checking using another if statement to see if the child object key values match the clicked on element’s data id. Once a match is found a window alert will display the child objects name and wish.
   

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

> The function must be invoked with in the function due to the need for having to iterate through kidsArray first and  pass every single kid object through the findCelebrityMatch as an argument. Doing this will match each individual kid object with their intended celebrity by matching celeb’s primary key with kids foreign key. once match the HTML will be generated and we'll continue to loop through the whole kid array. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

  > It all starts when generating the HTML in Celebrities(). We added a bit of data inside our list tag elements. That data we added was id, type, and sport and interloping the .id and .sport key values from the celebrity object. Once the event listener is invoked as long as it’s a celebrity data type the for loop of celebrities starts to iterate until we find a celeb with an id that matches the id on the clicked element. Since this value is a number we had to use parseInt() so it reads as a number instead of a string. We then store the celeb object in a variable so we can read the sport key when interloping it into the window alert string.
   We also could have removed the last for loop if we had the sport key value stored in the element. And just use itemClicked.dataset.sport instead. But this works too.

4. Can you describe, in detail, the algorithm that is in the `main` module?

> After imports we have our container reference to the DOM, then we make a variable with the html structure we are going to be using. Within this string there will be 3 function calls, Kids(), Celebritires(), and Pairings(). The first two functinos are fairly simple and will iterate through the given database arrays and generate lines of HTML for each object in its given array. The last function works a bit different since the Pairings() function will make use of another function called findCelebrityMatch(). Reason being you need to iterate through the kids array and match each object with an object from celebrities array. Once a Primary key is matched with a foreign key we interlope the key values into a string and viola we have the Dom displaying our lists and pairings.

