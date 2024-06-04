require('dotenv').config()
const {mkdirSync, writeFileSync} = require('fs')

const targetPath = './src/environments/environment.ts'

const envContent = `
    export const environment = {
        mapbox: "${process.env['MAPBOX_KEY']}"
    }
`

mkdirSync('./src/environments/', {recursive: true});

writeFileSync(targetPath, envContent);