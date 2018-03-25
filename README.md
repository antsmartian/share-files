### share-files
Share-files is a simple tool to create a file share service using nodejs. You can list files and share-files will generate QR code. Scan the QR code in mobile to download the files! Supports zip and multiple files!

Note that, mobile should be in the same network to download the file.

![screenshot](demo.gif)

#### How does it work?

This tool binds a web server to the address of your wifi network interface on a 3000 port, and sets a default handler for it. The default handler serves the content.

The program prints a QR code that encodes the text:

```
http://{address}:3000
```

Most QR apps can detect URLs in decoded text and act accordingly (i.e.: open the URL with the default browser), so when QR the code is scanned the content starts being downloaded by the mobile browser.

#### How to run:
First, install the `share-files`:

```
npm install -g share-files
```

Now, if you want to share a single file run:

```
share-files --files <path-to-file>
```

this will list all your avaialble network interfaces, please pick one and then the QR code will be generated, scan using your mobile to download the file.

To download multiple file:

```
share-files --files <path-to-file>,<path-to-file>,<path-to-file>
```

separate multiple files with `,` and the code will be generated once the zip file is created. Once that is done, you can scan the QR code to download the file. 

#### Why?
I always wanted to share files/movies from my mac to my phone. I used Airdroid and it annoys me with signup etc so I created one. Anyways, its fun :)

#### Todo:
1. Support HTTPS
2. Remove express js dep. We can build without express js. 
3. Now zip takes more time for larger files more than 2GB, check them. 

#### Contribute
If you see any issues, any improvements, please feel free to raise a PR. 