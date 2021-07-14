<img src="docs/blog-post.jpg" />

# Next.js + Tailwind CSS Blog Challenge 🚀 &nbsp; ![easy](https://img.shields.io/badge/-Medium-yellow) ![time](https://img.shields.io/badge/%E2%8F%B0-3h-blue) 

The goal of this challenge is to provide a baseline for candidates to experience React, Next.js and Tailwind CSS environment whilst being able to validate technical and autonomy skills.

There is a set of tasks that you need to perform in order to complete the challenge. Most of the them are simple changes in existing codebase, however as you advance in the challenge you will face more challenging tasks.

Please, take time to read the instructions bellow before you start.


## How?

You'll be assigned to this challenge. You MUST fork this repository to your own space and then start developing these tasks. After finished, you should open a Pull Request. 

### Why? 

Beacause we will start a small Peer Code Review there. We will be able talk and understand a bit more of your process.
The whole idea is for you and for us to understand if we're capable of communicate and collaborate together.


## Criteria ✅

- To each task you should assign, at least, one commit
- You should fork this repo to your own space and use GitHub (or GitLab, etc)
- Do not merge your code to master, always open a pull request!
- You can (and should) search solutions to help you complete your task
- For each task we assign a number of points of a total of 30
- We will reduce 1 point for each day of delay 💣
- You will be given 2 weeks to complete the challenge
- Last but not least: enjoy and have fun building your solution! 😀

Anytime you have any question please reach out.


## Technologies 📖

We use [TypeScript](https://www.typescriptlang.org/) as our *lingua-franca* (kidding! 🙃) and this is the language used in this challenge and we expect you to write in TypeScript as well. If you don't know it, don't worry, it's very similar to JavaScript/ECMAScript but with `types` (which is awesome and saves us from some tedious time on debugging broken things!).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) which in turn uses [React](https://reactjs.org/) to render components. As CSS framework we choose [Tailwind CSS](https://tailwindcss.com/) for its versatility, good integration with existing ecossystem and pintegrated tools that help us develop faster.


## The Gist ✨

The objective is to have a new simple blog website using React which uses an existing API (provided by the customer).
This new website should feature a simple header, inline summary of blog posts with a load more button and a simple footer with a copyright. We want this to be very clean, responsive to all common devices, fast and beautiful!

## What is already in place 🔋

- Fully functional Next.js app with all needed dependencies (except for the optional dependency on Task 5)
- Tailwind CSS already integrated
- A functional API of lorem ipsum blog posts
- All you need to start when you wish!

## Tasks 🏁

### 1. First Run 

*Points: 2*

First, we need to prepare ourselves to start building. Fork this repo to your own space and clone it using `git clone` command (or any other git tool you are familiar with).

Install all `npm` dependencies and open your favorite editor.

Now, start the development server using ```npm run dev```.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now, take a look at the codebase and make sure you're familiar with it.

If you need, you can learn more about Next.js. Take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


### 2. Styling with Tailwind CSS

*Points: 4*

Now, this time we need to add some CSS to the PostCard component (the one that renders the posts summaries).

As you already know, we use *Tailwind CSS* to style our codebase. Make sure you have [Tailwind CSS Docs](https://tailwindcss.com/docs) always opened, because you will need it.

Try to make the ```<PostCard />``` similar to the mockup that you find on top of this page, using only Tailwind CSS classes. Be sure that it works well in mobile devices.

Center the posts container and make sure it won't grow more than the screen `md` size. You can find this information in the documentation.


### 3. Simple Header

*Points: 6*

Let's create a simple React Component that should render the blog name at the top left and a simple menu at the right.
The menu should have only one link to the homepage, and should be called `Home`. This component should be placed in the `_app.ts` page.

Apply some margins that should be consistent to the existing design. Be sure that it works well in mobile devices.


### 4. About us page

*Points: 8* 

Now that we have a ```<Header />``` component, we want to add an `About Us` page. This is a simple static page that should be added to `pages` directory. Make sure you know how to add this new page by heading into the Next.js Documentation. It's very simple and straightforward!

This page's width should have the same size of the the blog listing page and should have 2 lorem ipsum paragraphs and, at least, one image. 

You are free to add anything else that you like.


### 5. Blog post page

*Points: 10*

This is the last and more exhausting task of all but the most fun to do for me. 😄

The whole idea is to add a Next.js dynamic page that renders each blog post. 

If you look at the `Post` interface you will see that you have all properties you need to design and build a great blog post:
```ts
interface Post {
  id: string;
  title: string;
  picture: Picture;
  excerpt: string;
  content: string;
  author: Author;
  tags: Tag[];
  comments: Comment[];
}
```
Be sure to explore each property and understand what it holds and what can be used.

The feature picture should appear in the header. Take into consideration diferent render dimensions for different devices. The Picture property already returns three different sizes of the same picture:
```ts
interface Picture {
  thumbnail: string;
  medium: string;
  large: string;
}
```
Make sure you use this well! 😉

**The API**

The API lives in the same domain and port but in a different path. Just go to [http://localhost:3000/api](http://localhost:3000/api) to see it.

Itlready has a route that returns a blog post or 404 if the post cannot be found. Head to `/api/posts/<slug>` to fetch just one post.

**Note:** You can use `getServerSideProps` instead of `getStaticProps` to fetch the blog post from the API.

Add a link to each ```<PostCard />``` to their corresponding URI.

#### Notes:
- The post body should be readable. There's a Tailwind plugin called [Typography](https://github.com/tailwindlabs/tailwindcss-typography) which can help you here a lot! It's up to you to use it or not.
- Take into consideration any accessibility aids you can provide, either by using HTML semantics or color contrasts.


## Final thoughts 💡

I hope you enjoy doing this challenge. Most of the things you use and build here are our daily activities (although, in a larger scale).

Make sure your code is clean and understandable. Do not merge your Pull Request!

Happy coding! 🤓 🥳