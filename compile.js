const compile = [
    'tsc source/typescript.ts --outDir build',
    'gcc -o build/c source/c.c',
    'cd source && haxe -main Main -x ../build/haxe.n',
    'g++ source/cplusplus.cpp -o build/cplusplus',
    'rustc -o build/rust source/rust'
]

const exec = require('child_process').exec

compile.forEach(e => {
    exec(e, (err, stdout, stderr) => {
        if(err) return console.error(stderr)
        console.log(stdout)
    })
})
