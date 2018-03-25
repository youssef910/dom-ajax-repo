# My Resume

1. Fork and Clone this repo
2. run `npm install` then `npm start` (don't worry if you don't understand these commands now, we will explain them in Node module)
3. When you run `npm start`, your browser should open the webpage immediately with hot reload enabled (i.e. when you change files, they will automatically be reflected on the page).

## Github API

Github provides an **API** that provides a way for developers to retrieve information about in **JSON** format. We will spend most of our time using the `repos` **endpoint** which GETs the repos (repositories) of a specified user.

The documentation for the `repos` endpoint is available on: [https://developer.github.com/v3/repos/](https://developer.github.com/v3/repos/)

- Try to open this URI on the browser https://api.github.com/users/codeyourfuture/repos. What do you get back? Try changing *codeyourfuture* to your Github username, and see if you get back your list of repositories.

**Now to the requirements.**

# Task 1: My Github Page
## Requirement 1:
**Given** I am on the Resume site

**When** I click on `My Github` link

**Then** I should be presented with a list of repositories for my Github user


## Requirement 2:
**Given** I am on the Resume site

**When** I click on `My Github` link

**Then** I should be shown the number of repos in my Github account (in place of the `X`)

## Requirement 3:
**Given** I am on the `My Github` page

**When** I am presented a list of my Repos

**Then** each link should have 

> The page `my-github.html` under the folder *pages* has a reference to the script `my-github.js` and the CSS file `my-github.css`. These are the files that you will need to change for these tasks.

# Task: Show My Pull Requests submitted against js-exercises
GET https://api.github.com/repos/codeyourfuture/js-exercises/pulls

hint: This request lists all the pull requests against js-exercises. How can you show only the ones that related to your Github usernam (How can you _filter_ the list)

# Task 2: My Friends' Github Search page

# Task 3: Show Details of one repo when Clicking on it


# Task x: Random API
Pick any random API from https://github.com/toddmotto/public-apis (**only those that don't require authentication (have Auth No)**) and create a page to use the API

# About the Theme of this site

This theme is from [Start Bootstrap - Resume](https://startbootstrap.com/template-overviews/resume/).

You can check [Start Bootstrap](https://startbootstrap.com/) to get more free open-source themes.

## Gulp Tasks
These are advanced commands that you don't need to know about for now, but if you're curious, then google _gulp_, _sass_ and _js/css minification_.

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp minify-js` minifies the themes JS file
- `gulp copy` copies dependencies from node_modules to the vendor directory

### Copyright and License for the theme

Copyright 2013-2018 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-resume/blob/gh-pages/LICENSE) license.
