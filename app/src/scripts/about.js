'use strict'
import {gup} from './utils'
const firstName = gup('first_name',window.location.href)
if(firstName){
  document.getElementById('hi').textContent = `Hi, ${firstName}!`
}