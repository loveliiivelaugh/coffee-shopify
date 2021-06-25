[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Coffee Shop

## Description

A sample coffee shop powered by Shopify. Built with React.js. Features 8 core pages as well as a single product page dynamically added whenever new product is entered. Features global cart access and interaction using Context API. Full checkout flow handled by Shopify. Mocked the design from a free HTML template and includes parallax background as well as light animations. Product management is handled in backend Shopify admin console.

## Table of Contents

* [Description](#Description)

* [Screenshots](#Screenshots)

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Tests](#Tests)

* [Questions](#Questions)


## Screenshot(s)

![Screenshot 1](/src/assets/screenshot1.png)

![Screenshot 2](/src/assets/screenshot2.png)

![Screenshot 3](/src/assets/screenshot3.png)

## Installation

`npm i`

## Usage

*note* currently checkout flow has an issue with finalizing checkout and creating new checkout during user session.
## License

Copyright 2021
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[MIT License](https://www.mit.edu/~amini/LICENSE.md)

## How to Contribute

Open to contributions.
## Questions

Follow me at my [GitHub](https://github.com/loveliiivelaugh) to discover more of my projects.

Feel free to reach out at my [email](woodward.michael.a@gmail.com) woodward.michael.a@gmail.com if you have any odditional questions or just want to chat!


#### This README was generated with the [CLI README Generator](https://github.com/loveliiivelaugh/nu-hw9-cli-readme-generator) app.
## 👉 Get Started
Clone Repo
```
git clone ... 
```
Change directory into project folder
```
cd <project-name-just-cloned>
```
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```
Run the development server
```
npm run start
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Bootstrap](https://react-bootstrap.github.io)
- Contact Form - [Formspree](https://formspree.io)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Netlify](https://netlify.com)


## 📚 Guide
<details>
<summary><b>Styles</b></summary>
<p>
  You can edit Bootstrap SASS variables in the global stylesheet located at <code><a href="src/styles/global.scss">src/styles/global.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bootstrap elements with custom style check the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap docs</a> to see if you can do what need by tweaking a SASS variable.
</p>
<p>
  Custom styles are located in their related component's directory. For example, if any custom style is applied to the Navbar component you'll find it in <code>src/components/Navbar.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places.
</p>
</details>

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.

```js
import { Link, useRouter } from './../util/router.js';

function MyComponent(){
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname)

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={(e) => router.push('/about')}>About</button>
    </div>
  );
}
```
</p>
</details>
<details>
<summary><b>Deployment</b></summary>
<p>
Build for production

```
npm run build
```

Install the Netlify CLI
```
npm install netlify-cli -g
```

Then run this command in your project directory to deploy to Netlify
```
netlify deploy
```

See the <a target="_blank" href="https://docs.netlify.com/cli/get-started/#manual-deploys">Netlify docs</a> for more details.
</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  The <a href="https://create-react-app.dev">Create React App documention</a> covers many other topics.
  This project was initially created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, a React codebase generator. Feel free to ask questions in the <a href="https://spectrum.chat/divjoy">Divjoy forum</a> and we'll do our best to help you out.
</p>
</details>
  
