#### Project Structure
This project is divided into three packages:
- common -> shared code used by the RN app and the web app
- nativeApp -> react native specific code and configuration
- webApp -> web (react-native-web) project with configuration

The top level package.json (`./package.json`) sets up 
[yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to facilitate 
the monorepo package architecture.

#### Setting up for development
To get started, run `yarn` at the top level of the project. 
Yarn workspaces will install all of the dependencies for the project. 
For local development, we next need to build the common package by running 
`yarn build` from the `./packages/common` context (runs the build script in the 'common' package.json).

#####Web
For web, we can simply run `yarn start` from the './packages/webApp' 
context to compile and launch the project in a browser.

####Native
To run and develop the mobile app, we need to handle symlinks, as they don't work well with 
Metro Bundler. To make sure we are getting the latest changes from the common package, we need to 
use [wml](https://www.npmjs.com/package/wml). This package will listen to changes in our 
common package and copy the changes into our nativeApp node_modules. 

To set up wml, run 
`npm install -g wml` and then from the './packages/nativeApp' context run 
`wml add ../common ./node_modules/@tandem/common`. Then to start watching the common package 
run `wml start`. As long as this script is running, any changes in the common package will 
be immediately copied over to our app's node_modules.
######iOS
The project uses [CocoaPods](http://cocoapods.org/pods/React) for native level dependency management. To install these dependencies 
run `yarn pod:install`. Once the install finishes, we can run `yarn ios` to build the app, 
launch the bundler, and launch the Simulator. After the build and bundle complete, we should 
see the app on the Simulator.
######Android
For Android we simply need to open up an emulator using Android Studio and then run `yarn android`.


