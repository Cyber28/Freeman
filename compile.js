const compile = [
    'tsc source/typescript.ts --outDir build'
]

const exec = require('child_process').exec

compile.forEach(e => {
    exec(e, (err, stdout, stderr) => {
        if(err) return console.error(stderr)
        console.log(stdout)
    })
})