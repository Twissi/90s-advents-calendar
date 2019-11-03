# 90s-advents-calendar

> Customizable 90s advents calendar

Find a link behind each door.
This advents calendar features websites about Brutalism web design.

## Screenshots

This is an example on how the calendar looks.

Before december:
![Screenshot of calendar before dec](https://github.com/Twissi/90s-advents-calendar/blob/master/screenshots/Screenshot%202019-11-03%20at%2022.15.22.png?raw=true)

On december 17th:
![Screenshot of calendar](https://github.com/Twissi/90s-advents-calendar/blob/master/screenshots/Screenshot%202019-11-03%20at%2022.16.58.png?raw=true)

## Run locally

Run the following commands in the `/src` folder.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

## Customize content

Update the file `/shared/content.js` with you own content.

## Test by overwriting todays date

Update env var `overwriteDate` in `nuxt.config.js`:

For example:

```
env: {
  overwriteDate: "12/17/2019"
}
```

## Deploy

Run the following commands in the `/src` folder to generate the static site.

```bash
# generate static project
$ yarn generate
```
