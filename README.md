#### share-files
Share-files is a simple tool to create a file share service using nodejs. You can list files and share-files will generate QR code. Scan the QR code in mobile to download the files! Supports zip and multiple files!

Note that, mobile should be in the same network to download the file.

### How to run:
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
I always wanted to share files/movies from my mac to my phone. I used Airdrop and it annoys with signup etc, so I created one. Anyways, its fun :)

#### Todo:
1. Support HTTPS
2. Remove express js dep. We can build without express js. 
3. Now zip takes more time for larger files more than 2GB, check them. 

#### Contribute
If you see any issues, any improvements, please feel free to raise a PR. 