# Tabbed

Tabbed is a React Native powered app meant for storing and syncing your bookmarks, no browser required. I built this with the purpose of not having to tie my bookmarks up with a browser.

## Contributions

I would love contributions! Right now I'm mainly looking for help with stuff in the _TODO_ list below. Mainly the _UI_ stuff.

When commiting, please try your best to use [this](http://karma-runner.github.io/2.0/dev/git-commit-msg.html) format for your commit messages.

## TODO

### UI

* Dark mode
* Searching / Sorting
* Check if we're following Apple's guidelines

### Core

* Sync bookmarks
* Ability to add bookmark
  * ~~Create form layout~~
  * ~OnSubmit validation~
  * categories have better implementation
* Search for bookmarks (currently implemented, though you can't actually search)
* URL's have the following properties
  * Title
  * URL
  * Date created
  * ~~Categories~~
  * Image (AKA Favicon)
  * isPrivate

### Pages

* Settings
* Onboarding

### Project

* Upgrade to Typescript?
* 100% styled components

## Libraries

* Using [Realm](https://realm.io/docs/javascript/latest/) for strorage
* [react-native-touch-id](https://github.com/naoufal/react-native-touch-id) for biometrics (unlocking via FaceID/TouchID)

## Screenshots

### I know it doesn't look amazing, please feel free to open an issue with design suggestions <3

<img src="./screenshots/SS1.png" alt="Tabbed homescreen" width=281 height=609/>
<img src="./screenshots/SS2.png" alt="Tabbed add bookmark form" width=281 height=609/>
