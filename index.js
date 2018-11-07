let request = require("request")
let cheerio = require("cheerio")
function kinokava(options){
    let url = "https://kinokavad.ee/"
    if(!options) options = {}
    if(options.city === "tartu") url+= "tartu"
    if(options.city === "pärnu") url+= "parnu"
    return new Promise(function(resolve, reject) {
        request(url, (err, res, body)=>{
            if(err) {
                reject(err)
                return;
            }
            let $ = cheerio.load(body)
            let total = $("main section").length
            let arr = []
            for (let i = 0; i<total; i++) {
                let obj = {}
                obj.time = $("main section .time").eq(i).html().replace("&#x200B;", "")
                obj.cinema = $("main section .cinema").eq(i).text()
                obj.title = $("main section .title a").eq(i).text()
                arr.push(obj)
            }
            let filteredbycinema = arr.filter(el=>{
              return options.cinema? el.cinema === options.cinema:el
            })
            let filteredbytime = filteredbycinema.filter(el=>{
              if(options.time && options.time.length < 3 || typeof options.time == "number") {options.time += ":00"}
              return options.time? el.time.split(":")[0] >= options.time.split(":")[0] && el.time.split(":")[1] >= options.time.split(":")[1]:el
            })
            resolve(filteredbytime)
    })
})
}

module.exports = kinokava