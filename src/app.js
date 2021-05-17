//var dt = require('./viem/home.js');
import Home from './viem/home/home.js';
const list = require('./viem/list/list.html');

const hhoo = new Home();
const domAdd = document.getElementById('add');

domAdd.innerHTML = hhoo.name;
document.write(hhoo.tpl);