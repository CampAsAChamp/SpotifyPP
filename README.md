<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CampAsAChamp/SpotifyPP">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Spotify++</h3>

  <p align="center">
    Spotify browser using the Spotify Web API that adds additional track information the user normally doesn't have access to such as dance-ability, energy, acousticness, instrumentalness, and liveness provided by the track endpoint.
    <br />
    <br />
    <a href="https://github.com/CampAsAChamp/SpotifyPP">View Demo</a>
    ·
    <a href="https://github.com/CampAsAChamp/SpotifyPP/issues">Report Bug</a>
    ·
    <a href="https://github.com/CampAsAChamp/SpotifyPP/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#resources-consulted">Resources Consulted</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">

![product-screenshot]

</div>

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Angular](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Features
- Communicating with the webserver
- Populating information about the user
- Populating the search component
- Artist page
- Album page
- Track page

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* **Node.js**
* **Node Package Manager (NPM)**
* **Angular CLI**

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/CampAsAChamp/SpotifyPP.git
    ```
2. Download and install Angular CLI
   ```sh
    npm install -g @angular/cli
    ```
4. Download dependencies for the `client`
    ```sh
    cd client
    npm install
    ```
5. Download dependencies for the `webserver` 
    ```sh
    cd webserver    
    npm install    
    ```
6. Create `client_secret.json` in the `webserver` folder
    ```json
      {
        "client_id": "spotify-client-id-here",
        "client_secret": "spotify-client-secret-here"
      }
    ```
7. Create `tokens.json` in the `webserver` folder
    ```json
    {
      "access_token": null,
      "refresh_token": null
    }
    ```
    1. *This file will be overwritten once an access and refresh token have been retrieved*
5. Create a Spotify Developer Account at https://developer.spotify.com/dashboard/
6. Create an app
    1. Set the redirect URI to http://localhost:8888/callback. 
        1. This will tell Spotify to redirect back to our Express webserver once authentication and authorization is complete.
    2. Copy the client id and secret


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
### Usage

1. Go into the `webserver` folder and start it up
   ```sh
   npm start
   ```
2. The `webserver` will now be running on port 8888. Visit `localhost:8888` in your web browser to view the server
3. Go into the `client` folder and start it up
    ```sh
    ng serve
    ```
4. The `client` will now be running on port 4200. Visit `localhost:4200` in your web browser to view the client application


<p align="right">(<a href="#top">back to top</a>)</p>

## Resources Consulted
- The angular docs were surprisingly really helpful and had great examples for understanding the concepts
- https://angular.io/guide/http
- https://angular.io/api/common/NgForOf
- https://angular.io/guide/displaying-data#showing-an-array-property-with-ngfor
- https://malcoded.com/posts/angular-ngstyle/
- https://developer.spotify.com/documentation/web-api/reference/
- https://howtodoinjava.com/typescript/arrays/
- https://stackoverflow.com/questions/48402287/what-is-the-angular2-event-for-pressing-enter
- https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[contributors-url]: https://github.com/CampAsAChamp/msPaintAutomation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[forks-url]: https://github.com/CampAsAChamp/msPaintAutomation/network/members
[stars-shield]: https://img.shields.io/github/stars/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[stars-url]: https://github.com/CampAsAChamp/msPaintAutomation/stargazers
[issues-shield]: https://img.shields.io/github/issues/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[issues-url]: https://github.com/CampAsAChamp/msPaintAutomation/issues
[license-shield]: https://img.shields.io/github/license/CampAsAChamp/msPaintAutomation.svg?style=for-the-badge
[license-url]: https://github.com/CampAsAChamp/msPaintAutomation/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png
