<h1 align="center">
<img src='./src/assets/rational-design-logo-card.svg' alt='Rational Design Logo'>
</h1>

<!-- Badges -->
<div align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/timmybytes/rational-design" />
  <img alt='Lighthouse accessibility score' src='./test_results/lighthouse_accessibility.svg' />
  <img alt='Lighthouse best practices score' src='./test_results/lighthouse_best-practices.svg' />
  <img alt='Lighthouse performance score' src='./test_results/lighthouse_performance.svg' />
  <img alt='Lighthouse SEO score' src='./test_results/lighthouse_seo.svg' />
  <img alt='Lighthouse PWA score' src='./test_results/lighthouse_pwa.svg' />
</div>

<div align="center">
  <strong>A tool for ratio-based design</strong>
</div>

<p align="center">
  <sub>Built with ❤︎ by
  <a href="https://timmybytes.com">Timothy Merritt</a>
</div>

Rational Design is a tool for generating type-scales for greater consistency in design systems or web design projects. It’s built with React Hooks, SCSS, Webpack, and npm scripts, and is fully responsive.

## About

Rational Design uses a combination of `state` and `useRef` Hooks to dynamically render type scales according to user input. This originally created some delays in state updating properly due to [stale closures](https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/), but the useRef Hook solves this issue by returning the same `ref` value in memory during each rerender.

[Trello Board for Rational Design App](https://trello.com/b/dhSzNpvw)

## Usage

### Web App

Use the [live web app](https://timmybytes.github.io/rational-design/) to create a ratio-based type scale. You can click the **info button** in the app for more details. All related options are updated immediately with React `state` and `useRef` Hooks, so you can play around with the settings to generate different scales.

<img src='./src/assets/readme-1.png' alt='Rational Design - Info button display'>

#### Select a ratio

Choose a ratio from the dropdown menu to define the increments of your scale. The ratios included come from musical-based ratios, as well as Orthagon ratios. You can read more about using ratios in your layouts and designs [here](https://alistapart.com/article/content-out-layout/).


<img src='./src/assets/readme-2.png' alt='Rational Design - Info button display'>
<img src='./src/assets/readme-3.png' alt='Rational Design - Info button display'>

#### Choose a base size

Choose a base font size (in pixels). The rest of your scale will be calculated starting from this number and applying your chosen ratio to each increment.

<img src='./src/assets/readme-4.png' alt='Rational Design - Info button display'>

#### Choose a scale

The **scale** determines how many ratio increments the app should output. The default is 3, but you can go up to 100.
<img src='./src/assets/readme-5.png' alt='Rational Design - Info button display'>

#### Chose colors

A color chooser is incorporated into Rational Design's settings via [react-color](https://casesandberg.github.io/react-color/#examples). Use the color pairings to see your type scale in different color contrasts.

<img src='./src/assets/readme-colors.png' alt='Rational Design - color palette display'>

#### Use your type scale

You can use the resulting increments as a system for consistency in your projects. Instead of just eyeballing bigger and smaller sizes, choose from your scale and your designs will be more pleasing to the eye (and easier to manage).

<img src='./src/assets/readme-6.png' alt='Rational Design - Info button display'>

---

### Local Development

To run and configure locally, follow these steps:

#### Fork and Clone Repo

Fork and clone the repo to your local machine:

```sh
git clone https://github.com/timmybytes/rational-design.git
```

`cd` into the repo, and install dependencies:

```sh
cd rational-design/
npm install
```

#### Development

To start a development environment:

```sh
npm start
```

## Contributing

Feel free to submit a pull request if you want to add features or changes, though I would caution this app is still in early stages and I plan to greatly expand its current feature set.

## License

Rational Design is available under the [MIT license](./LICENSE.md).
