import Vue from 'vue'

let files = require.context('.', false, /\.vue$/)
files.keys().map(v=>{
    let name = v.split("./")[1].split('.vue')[0]
    Vue.component(name,files(v).default)
})