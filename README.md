# Restaurant Reviews App

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, I took a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for users.

### Specification

I was provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also did not include any standard accessibility features, and it did not work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.

### Running the Project

Clone this repository on your computer, then follow the steps below:

1. In the repository, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8222`. For Python 3.x, you can use `python3 -m http.server 8222`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8222`.

2. With your server running, visit the site: `http://localhost:8222` to see the live site.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.