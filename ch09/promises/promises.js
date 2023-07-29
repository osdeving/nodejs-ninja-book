import { readFile, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

const fileName = fileURLToPath(import.meta.url)

// read file sync
const content = readFileSync(fileName)
console.log('readFileSync', content)
console.log('terminou sync')

// read file async with promises
const readFilePromise = promisify(readFile)
readFilePromise(fileName)
    .then(data => console.log('readFile (async)', data))
console.log('terminou async com promises')

// read file async
readFile(fileName, (err, data) => console.log('readFile (async)', data))
console.log('terminou async sem promises')
