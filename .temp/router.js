import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bar from "@/components/bar"
import home from "@/components/home"
import myCooker from "@/components/myCooker"

import oven from "@/components/oven"
import steam from "@/components/steam"
import steamMicro from "@/components/steamMicro"
import cooker from "@/components/cooker"


import sink from "@/components/sink"
import sterilizer from "@/components/sterilizer"
import islandMachine from "@/components/islandMachine"
import dishWasher from "@/components/dishWasher"
import heater from "@/components/heater"


import moreMenu from "@/components/moreMenu"






Vue.use(Router)
module.exports = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      name: 'home',
      component: home,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
     
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar,
     
    },
    {
      path: '/myCooker',
      name: 'myCooker',
      component: myCooker,
     
    },
    {
      path: '/steam',
      name: 'steam',
      component: steam,
     
    },
    {
      path: '/steamMicro',
      name: 'steamMicro',
      component: steamMicro,
     
    },
    {
      path: '/oven',
      name: 'oven',
      component: oven,
     
    },
    {
      path: '/cooker',
      name: 'cooker',
      component: cooker,
    },
    {
      path: '/heater',
      name: 'heater',
      component: heater,
    },
    {
      path: '/dishWasher',
      name: 'dishWasher',
      component: dishWasher,
    },
    {
      path: '/islandMachine',
      name: 'islandMachine',
      component: islandMachine,
    },
    {
      path: '/sink',
      name: 'sink',
      component: sink,
    },
    {
      path: '/sterilizer',
      name: 'sterilizer',
      component: sterilizer,
    },
    {
      path: '/moreMenu',
      name: 'moreMenu',
      component: moreMenu,
    }
  ]
})
