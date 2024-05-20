
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kashul/node-simple-app-docker">
    <img src="images/docker.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Simple NodeJS application for docker image
</h3>

  <p align="center">
    Sample docker file for Your NodeJS application.
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Exmple docker file for simple node application.





<!-- GETTING STARTED -->
## Getting Started

Follow below instructions for setup project locally and run.

### Prerequisites

Download and install Docker desktop on your machine.[Docker desktop](https://www.docker.com/products/docker-desktop/)


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/kashul/node-simple-app-docker.git
   ```
2. Build docker image
   ```sh
   docker build -t test:latest .
   ```
3. Run docker image
   ```sh
   docker run -p 3000:3000 test:latest
   ```
4. Browse [http://localhost:3000](http://localhost:3000)







<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kashul/node-simple-app-docker/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/your_branch_name`)
3. Commit your Changes (`git commit -m 'Add some changes'`)
4. Push to the Branch (`git push origin feature/your_branch_name`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Kashul - [Kashul Hindagoda](https://www.linkedin.com/in/kashul-hindagoda/) - kasulkenuak@gmail.com

Project Link: [https://github.com/kashul/node-simple-app-docker](https://github.com/kashul/node-simple-app-docker)









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kashul/node-simple-app-docker?style=for-the-badge
[contributors-url]: https://github.com/kashul/node-simple-app-docker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kashul/node-simple-app-docker?style=for-the-badge
[forks-url]: https://github.com/kashul/node-simple-app-docker/network/members
[stars-shield]: https://img.shields.io/github/stars/kashul/node-simple-app-docker?style=for-the-badge
[stars-url]: https://github.com/kashul/node-simple-app-docker/stargazers
[issues-shield]: https://img.shields.io/github/issues/kashul/node-simple-app-docker?style=for-the-badge
[issues-url]: https://github.com/kashul/node-simple-app-docker/issues
[license-shield]: https://img.shields.io/github/license/kashul/node-simple-app-docker?style=for-the-badge
[license-url]: https://github.com/kashul/node-simple-app-docker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kashul-hindagoda/
[product-screenshot]: images/screenshot.png
