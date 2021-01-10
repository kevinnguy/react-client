# react-client
A template for setting up a React client app repo

Supports:
- Web (react-native-web)
- Mobile (react-native)


<!-- Divider -->


## Table of contents
- [Repo setup](#repo-setup)
- [Running the app](#running-the-app)


<!-- Divider -->


## Repo setup
- Fork this repo

### Install dependencies
1. Run `yarn install` (or just `yarn`)
    - Make sure `yarn postinstall` runs successfully

2. Run `yarn pod-install` to install iOS dependencies


<!-- Divider -->


## Running the app
- On iOS: `yarn ios`
- On Android: `yarn android`
- Start Metro bundler: `yarn start`
    - Running `yarn ios`/`yarn android` will automatically start Metro if it's not already running.


<!-- Divider -->


## Running tests
- Run unit tests: `yarn test`
- Run E2E tests: `yarn detox:build && yarn detox:(ios | android)`


<!-- Divider -->


## Setup React Native development
- [Installing dependencies](#installing-dependencies)
- [iOS](#ios)
- [Android](#android)
- [Additional setup](#additional-setup)

### Installing dependencies
- Install brew: https://brew.sh
- Install yarn: `brew install yarn`
- Install watchman: `brew install watchman`
- Install nvm: `brew install nvm`
    - Please follow additional instructions in `Caveats` after brew installing. You will need to update your shell config file(`~/.bashrc`, `~/.zshrc`)
    - You can optionally integrate `nvm` to detect which node veresion to use when changing directories: https://github.com/nvm-sh/nvm
- Install node: `nvm install && nvm use`
    - Running `node -v` should match `.nvmrc`


### iOS
#### Setup Xcode
Download the latest version of Xcode from the Mac App Store. If you need an older version of Xcode, visit: https://developer.apple.com/download/more/?=xcode. 


### Android
- Install Java SDK >= 8: `brew install --cask adoptopenjdk/openjdk/adoptopenjdk8`
    - Verify you're on version 8: `java -version`
- Install Android Studio

Follow up-to-date guide on https://reactnative.dev/docs/environment-setup












