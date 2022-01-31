const fs = require("fs")
const path = "./"
var exec = require("child_process").exec

const filesArray = fs
  .readdirSync(path)
  .filter((file) => fs.lstatSync(path + file).isFile())

let results = filesArray.filter((element) => {
  let res = element.slice(element.length - 3, element.length)
  if (res === "png") return res
})

console.log(results[0].slice(results[0].length, results[0].length - 4))

for (let i = 0; i < results.length; i++) {
  const name = results[i].split(".").shift()
  exec(
    `convert ${name}.png -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB  ${name}-opt.jpg`,
    function (error) {
      if (error !== null) {
        console.log("exec error: " + error)
      }
    }
  )
}
