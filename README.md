# Please update this with necessary up-to-date info on the Ionic 4 version. Don't mind about the iOS part, leave as is. Thanks :)


###Setup instructions:

1) Setting up /upgrading cordova and Ionic

- Install NodeJS 5 : [https://nodejs.org/](https://nodejs.org/)

- Install ionic and cordova.

```
npm install -g cordova ionic
```

If cordova and Ionic were installed and you need to update:

```
npm uninstall -g cordova ionic && npm install -g cordova ionic
```


2) Pull the project and install npm dependencies

```
git clone git@gitlab.com:finnco/learn-finnish-vbs.git && cd learn-finnish-vbs && npm install
```


### Deploy instructions

In any way, you first need to generate the appropriate icons. In the `resources/` directory, rename `icon-android.png` or `icon-ios.png` to `icon.png`.

#### Android
1) Compile the app with the release and production flags.

```
ionic cordova build android --release --prod
```

2) Go to the `learn-finnish-vbs/platforms/android/build/outputs/apk` directory and sign the app

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
```

3) Compile the app with the release and production flags

```
PATH-TO/sdk/build-tools/25.0.3/zipalign -v 4 android-release-unsigned.apk Publication.apk
```

3) Publish on the Google Play.


#### iOS

1) Prepare for compiling

- Install `npm install -g ios-deploy`
- Login to the account through the Apple ID
- Download the provisioning file for the app into Xcode

2) Compile the app with the release and production flags.

```
ionic cordova build ios --release --prod
```

3) Open `learn-finnish-vbs/platforms/ios/Verbs - Finnco.xcodeproj` with Xcode. Wait for the Xcode indexation.

4) In Xcode, go to Product>Archive and then to Window>Organizers>Archive Organizer from where you can publish the app.

Minify notes for later: `learn-finnish-vbs/node_modules/@ionic/app-scripts/config/`