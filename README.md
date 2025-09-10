<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

   <a href="https://github.com/ransuhaneda/react-gsap-acd">
    <img src="public/img/logo.png" alt="Logo" width="96" height="96">
  </a>
  <h3 align="center">Animated React Website with GSAP</h3>
  <p align="center">
   A modern, award-winning website built with React, featuring advanced scroll animations and interactive elements powered by GSAP. This project was an exploration into creating high-performance, visually engaging web experiences.
    <br />
    <a href="https://github.com/ransuhaneda/react-gsap-acd"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ransuhaneda/react-gsap-acd/issues">Report Bug</a>
    ·
    <a href="https://github.com/ransuhaneda/react-gsap-acd/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#features">Features</a>
    </li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#building-for-production">Building for Production</a></li>
      </ul>
    </li>
    <li><a href="#key-learnings">Key Learnings</a></li>
    <li><a href="#attribution">Attribution</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- FEATURES -->

## Features

- **Smooth Scroll Animations**: Leveraging GSAP's ScrollTrigger for seamless, performance-optimized animations.
- **Custom Visual Effects**: Unique image displays using hand-crafted CSS clip-paths.
- **Interactive Media**: Controlled playback of video and audio elements integrated into the user experience.
- **Advanced Cursor Tracking**: Utilized react-use to monitor element and cursor positions for dynamic animations.
- **Responsive Design**: Built with a mobile-first approach using Tailwind CSS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHSTACK -->

## Tech Stack

[![React][React-shield]][React-url]
[![Vite][Vite-shield]][Vite-url]
[![GSAP][GSAP-shield]][GSAP-url]
[![TailwindCSS][TailwindCSS-shield]][TailwindCSS-url]
**Post-Processing**: [PostCSS](https://postcss.org/) + [autoprefixer](https://github.com/postcss/autoprefixer)
**Icons**: [React Icons](https://react-icons.github.io/react-icons/)
**Utility Hooks**: [React Use](https://github.com/streamich/react-use)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or higher) & PNPM

### Installation

1.  Clone the repo

    ```bash
    git clone https://github.com/ransuhaneda/react-gsap-acd.git
    cd react-gsap-acd
    ```

2.  Install NPM Dependencies

    ```bash
    pnpm install
    ```

3.  Start the Development Server
    ```bash
    pnpm run dev
    ```
    The application will be available at `http://localhost:5173`.

<!-- Production Build -->

### Building for Production

To create a production-ready build:

```bash
pnpm run build
```

### Key Learnings

This project served as a deep dive into modern frontend animation techniques. Here are the core concepts I implemented:

- **GSAP & ScrollTrigger**: Mastered the timeline-based API for orchestrating complex animation sequences triggered by scroll position
- **Custom Clip-Paths**: Designed and applied custom CSS clip-path properties to create unique, non-rectangular image reveals and transitions
- **Media Control**: Programmatically managed video and audio playback based on user interaction and scroll position
- **Smooth Scrolling**: Implemented a custom smooth scroll container to enhance the feeling of fluidity throughout the site
- **Cursor-Based Interactions**: Used the react-use library to track the user's cursor and viewport position, driving animations that react to user movement
- **Utility-First CSS**: Effectively used Tailwind CSS to rapidly build and style components without writing custom CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Attribution & Inspiration -->

### Attribution

This project was developed by following the excellent tutorial by Javascript Mastery:
["Build and Deploy an Awwwards Winning Website | React.js, Tailwind CSS, GSAP"](https://www.youtube.com/watch?v=zA9r5zTllx4).

The overall design and aesthetic are inspired by the innovative website [zentry.com](https://zentry.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

### Contact

Lance Carteciano - @ransuhaneda - ransuhaneda@gmail.com
Project Link: https://github.com/ransuhaneda/react-gsap-acd
Social Link: https://linktr.ee/ransuhaneda

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Url -->

[React-url]: https://react.dev/
[GSAP-url]: https://gsap.com/
[TailwindCSS-url]: https://tailwindcss.com/
[Vite-url]: https://vite.dev/

<!-- Badges -->

[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[GSAP-shield]: https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white
[TailwindCSS-shield]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Vite-shield]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
