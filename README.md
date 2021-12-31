# Hue-scripts

Scripts for Hue Bridge

## Get Started

```
git clone git@github.com:7h1b0/hue-scripts.git
cd hue-scripts
npm i
npm link
hue --help
```

## Configuration

you can now use different ways of configuring it:

- `hue` object in your `package.json`
- `.huerc` file in JSON or YML format, or you can be explicit with the file extension:
  - `.huerc.json`
- `hue.config.js`, `.huerc.js`, or `.huerc.cjs` file in JS format

See [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for more details on what formats are supported.

### Options

| Variable | Description          | Type   | Required | Default value |
| :------- | :------------------- | :----- | :------- | :------------ |
| ip       | IP of the Hue Bridge | string | yes      |               |
| token    | Authentication token | string | yes      |               |
