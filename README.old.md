# Reacting to APIs

## Getting Started
1. Create a new project with Create React App.
2. Delete the src directory and all of its contents.
3. Create a new src directory and a new `index.js` file inside of src.
4. Create a new directory named components inside of src.

You should now have a project structure that resembles the following:
```
node_modules/
public/
src/
|- components/
|- index.js
.gitignore
package-lock.json
package.json
README.md
```

Before starting the following tasks, make sure that the Chrome Developer Tools are open in your "localhost:3000" tab, and that you also have the React Developer Tools installed. You should be checking these as much as possible to not only troubleshoot these tasks, but to confirm your understanding of what you are doing. 

**In this lab, it is also helpful to check your 'Network' tab in the Chrome Developer Tools when you are making HTTP Requests (or expecting HTTP Responses).**

### Each time you save your files while completing these tasks, check the terminal and browser for compilation errors, and pay attention to what they are telling you. For example, if something is "undefined", why does React think that? What should be defined, and where?

## Objectives
**DESIGN CONSTRAINT:** You may only render one component in `index.js`.

In this lab assignment, your primary objective is to request data from a third-party API, handle the response, and then display the data in the browser. 

The API we will start with is the [Studio Ghibli API](https://ghibliapi.herokuapp.com/). If you visit that website, you will be able to see what a traditional API explorer looks like. Spend a few minutes familiarizing yourself with the website, and see if you can determine what ***endpoints*** are exposed in the API.

When reading the requirements below, think about what kind of user interface this will be, and how many components you may need in order to accomplish these tasks. Which components have state and which ones can just rely on props? Before you jump right into the lab, consider how you will need to organize your application now that you have data being brought in from an API.

#### After each phase, commit your changes in Git, and push them to a GitHub repository on your GitHub profile. If you need a refresher on creating repositories and pushing to GitHub, check out the "Getting Started at Covalence" course for more updated videos.

----

### PHASE ONE
Your first task is to retrieve all films from this API, and then parse the response to display a "card" for each film. You will need to use the `fetch` method in order to do this, and you should invoke `fetch` when the component is mounted to the application. 

Since we all should be using Chrome, you may get away with not importing the `isomorphic-fetch` node module, but for best practices you should import it as well as the `es6-promises`.

Consider styling your card at this point so that it is easier to read. Bootstrap 4 should make this pretty easy for you.

At a minimum, you should display the film title and description, but you may use as many properties as you want.

*Hint: Don't forget your keys!*

----

### PHASE TWO
Your second task is to conditionally render films. More specifically, you should be able to manually "load" the films with a button click. 

When the project first compiles, the only thing you should see is the Studio Ghibli logo image and a button with the text "Load Films". Upon clicking the button, the films should load and be displayed on the screen.

*Hint: your fetch method from Phase One does not need to change in order to complete this section. Instead, consider toggling a property in state with the button click.*

---- 

### PHASE THREE
Your third task is to combine both objectives from Phase One and Two in order to conditionally load data from another endpoint in the Studio Ghibli API. Furthermore, you may only make one HTTP request at a time.

For example, you may choose to load Films or People with a button for the respective endpoint, which means the project should only display two buttons (one for "Load Films", one for "Load People") when it first loads. The data loaded, and therefore rendered, depends on which button is pressed. 

At a minimum, if you choose the "People" endpoint, you should display the person's name, age, gender, and a link to that particular person's JSON response that will open in a new tab, but you may use as many properties as you want. If you choose something else as your second endpoint, just be sure to display at least two properties in addition to opening up the link to the item's ID in a new tab.

----

#### And that's all for this lab! The great thing about APIs, though, is that they give you creative freedom to use the data as much as you see fit, so if you have another idea of how to manipulate this data and display it for your "users", then go right ahead! We're looking forward to seeing what you create.

PART 2

### Tasks

1. Configure React Router in your application. You may use the same structure as the walkthrough video, or (if you have a better idea) you may decide on your own structure. Just make sure that it works! Next, you should create three Links that look like buttons in your application. The first says "Go Home", the second says "View Films", and the last one says "View People" (or another endpoint of your choosing). Clicking these links will navigate you to the respective pages for each of these things.

2. Start by only configuring ONE route. Say, for /films. After navigating to localhost:3000/films, you should see your list of films that you rendered to the browser in the previous lab. The caveat? You shouldn't need any if/else if/else logic in your render methods. The data should only be loaded and displayed when you navigate to /films. You should use componentDidMount() and fetch to make this request.

3. Once you have that route working, configure another one for /films/:id. With this route, you should be able to click on a Link for any film you have displayed on /films to navigate to that specific film's webpage where you will list out all of the information pertaining to only that film.

4. Now that you have /film and /film/:id working, repeat tasks 1 and 2 with another endpoint (like People) in the Studio Ghibli API.

5. At the end of these tasks, you should have at least FIVE pages in your application, and you should be able to navigate to them simply by clicking a link.