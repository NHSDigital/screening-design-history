const fs = require('fs')
const path = require('path')
const { DateTime } = require('luxon')

// Arguments
const inputPath = process.argv.slice(-1)[0]
if (process.argv.length <= 2) {
  console.log('No arguments set')
  console.log('Please provide a path: `node scripts/generate.js path/to/images`')
  process.exit(1)
}

// Extract the directory name from the full path
const deepestDirectory = path.basename(inputPath)

let title = deepestDirectory.replace(/-/g, ' ')
title = title.charAt(0).toUpperCase() + title.slice(1)

const datestamp = DateTime.local().toFormat('yyyy-MM-dd')

// Ensure we're using relative paths from the project root
const relativePath = inputPath.replace(/^.*app\/images\//, '')
const imageDirectory = path.join('app/images', relativePath)
const postDirectory = path.join('app/posts', path.dirname(relativePath))

const paths = []

function start () {
  makeDirectories()
  getExistingImages()
  generatePage()
}

function makeDirectories () {
  if (!fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory, { recursive: true })
  }

  if (!fs.existsSync(postDirectory)) {
    fs.mkdirSync(postDirectory, { recursive: true })
  }
}

function getExistingImages () {
  const files = fs.readdirSync(imageDirectory)

  files.forEach(file => {
    if (!(/\.(png|jpg)$/.test(file))) {
      console.log('Ignoring: ' + file)
      return
    }

    const title = file.replace(/\.(png|jpg)$/, '').replace(/^\d{2}-/, '').replace(/[-_]/g, ' ')


    const image = {
      src: file,
      title: title.charAt(0).toUpperCase() + title.slice(1)
    }
    paths.push(image)
  })
}

function generateFrontMatter (items) {
  return `---
  title: ${title}
  description: A short summary of your post
  date: ${datestamp}
  screenshots:
    ${items}
---`
}

function generatePage () {
  let items = 'items:'

  paths.forEach(item => {
    items += `
      - text: "${item.title}"
        src: ${item.src}`
  })

  const filename = path.join(postDirectory, `${datestamp}-${deepestDirectory}.md`)

  fs.writeFile(filename, generateFrontMatter(items), err => {
    if (err) {
      console.error(err)
    }
    console.log(`Page generated: ${filename}`)
  })
}

start()
