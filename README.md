# Pick-a-place 360 Gallery

## Overview

Pick-a-place 360 Gallery is a simple demo project showcasing a 360-degree interactive photo gallery built with A-Frame and Three.js. The gallery is accessible across all platforms, including mobile, desktop, and VR.

**[Live Demo](https://pickaplace.onrender.com/)**
## Features

- **360-Degree Viewing**: Navigate through a gallery of 360-degree images.
- **VR Physics Interactions**: Interact with the gallery by grabbing images with your VR hands!
- **UI Elements**: Utilize intuitive UI components for navigation and interaction.

## Project Structure

```
.gitattributes
.gitignore
.idea/
alongpath.html
assets/
    cubemaps/
    equirectangular/
    scripts/
    Thumbnails/
Audio/
gallery.html
index.html
mobile.html
README.md
scripts/
    alongpath.js
    audio.js
    click-animate-alongpath.js
    curve.js
    device-check.js
    follow-camera.js
    icon-toggle.js
    landing-animation.js
    myCubeMapComponent.js
    observer.js
    on-collision.js
    ...
vr.html
```

## Getting Started

### Prerequisites

- A modern web browser with WebXR support.
- A VR headset (optional but recommended for full experience).

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/pickaplace-360-gallery.git
    ```
2. Navigate to the project directory:
    ```sh
    cd pickaplace-360-gallery
    ```

### Usage

1. Open index.html in your web browser to start the gallery.
2. The project will automatically detect your device and navigate to the appropriate page:
    

gallery.html 
  for desktop.


mobile.html 
  for mobile non VR Devices.


vr.html 
  for VR headsets.



## Notable Scripts

- **Device Check**: 

device-check.js


- **Cube Map Component**: 

myCubeMapComponent.js


- **curve**: 

curve.js



## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Inspired by the A-Frame School [curriculum](https://aframe.io/aframe-school/#/10).
