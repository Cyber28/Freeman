# Freeman
Discord bot made in as many languages as possible
## Structure
- `/build` - This is where all files will be built. Also includes files that do not need to be built
- `/source` - This is where all the files that need to built are located
- `freeman.js` - The main file of the Discord bot
- `compile.js` - Run this to compile everything
### Requirements
- Node.js
- TypeScript
- Python
- Haxe (WIP)
- Neko (WIP)
- A gcc compiler (that can compile both C and C++)
- Dart
#### Setting up and running
To set up, make sure all requirements are met and that your config.json is configured properly. Run `npm i` to install dependencies, and `node compile.js` to build the files. After the files have been built, run `node freeman.js` to run the bot itself.
