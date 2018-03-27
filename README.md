# share-files
share-files is a simple tool to create a file sharing service using [NodeJS](https://nodejs.org/en/). You can list files and share-files will generate a QR code. Scan the QR code on a mobile device to download the files! Supports zip and multiple files!

Note: the mobile device scanning the QR code should be in the same network to download the file(s).

![screenshot](demo.gif)

## How does it work?

share-files binds a web server to the address of your WiFi network interface on a 3000 port, and sets a default handler for it. The default handler serves the content.

The program prints a QR code that encodes the text:

```
http://{address}:3000
```

Most QR apps can detect URLs in decoded text and act accordingly (i.e. Open the URL with the default browser), so when the QR code is scanned the content starts being downloaded by the mobile browser.

## Installation
Install using [npm](https://www.npmjs.com/get-npm)

```
npm install -g share-files
```

## Usage

To share a single file:

```
share-files --files <path-to-file>
```

This will list all your available network interfaces, pick one and then the QR code will be generated. Scan the QR code using your mobile device to download the file.

To download multiple files:

```
share-files --files <path-to-file>,<path-to-file>,<path-to-file>
```

Separate multiple files with a `,` and the code will be generated once the zip file is created. Scan the QR code to download the zip file

## Why?
I always wanted to share files/movies from my mac to my phone. I used Airdroid and it annoys me with signup, etc. so I created one. Anyways, it's fun :)

## Todo:
1. Support HTTPS
2. Remove Express.js dependency. We can build without Express.js. 
3. Zip takes more time for larger files more than 2GB, check them. 

## Contribute
If you see any issues, any improvements, please feel free to raise a PR. 
