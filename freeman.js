const commandsRaw = [
    {
        name: 'javascript',
        execute: 'node build/javascript.js'
    },
    {
        name: 'python',
        execute: 'python build/python.py'
    },
    {
        name: 'typescript',
        execute: 'node build/typescript.js'
    },
    {
        name: 'c',
        execute: 'build/c'
    },
    {
       name: 'haxe',
       execute: 'neko build/haxe.n.n'
    },
    {
        name: 'c++',
        execute: 'build/cplusplus'
    },
    {
        name : 'dart',
        execute: 'dart build/dart.dart'
    },
    {
        name: 'rust',
        execute: 'build/rust'
    }
]

function mapXToY(map, array) {
    array.forEach(e => {
        map.set(e.name, e.execute)
    })
    return map
}

const exec = require('child_process').exec
const token = require('./config.json').token
const prefix = 'f!'
const Discord = require('discord.js')
const client = new Discord.Client()
const commands = new Map()

client.on('ready', _ => {
    console.log('Hello world!')
    mapXToY(commands, commandsRaw)
})

client.on('message', message => {
    if(message.author.bot || !message.content.startsWith(prefix)) return
    let command = commands.get(message.content.toLowerCase().slice(prefix.length))
    if(!command) return
    exec(command, (err, stdout, stderr) => {
        if(err) {
            console.error(stderr)
            return message.channel.send("whoops, this doesn't seem right.")
        }
        message.channel.send(stdout)
    })
})

client.login(token)
