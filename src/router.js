
import Router from 'vue-router'
import HelloWorld from '@/components/vr/HelloWorld'
import bar from "@/components/teamCooking/bar"
import home from "@/components/home"
import myCooker from "@/components/chefButler/myCooker"

import oven from "@/components/ovenP/oven"
import steam from "@/components/steamP/steam"
import traditionalCooking from "@/components/steamP/traditionalCooking"
import reservePlan from "@/components/steamP/reservePlan"
import steamMicro from "@/components/steamMicroP/steamMicro"
import cooker from "@/components/cookerP/cooker"
import echartsTime from "@/components/cookerP/echartsTime"
import myDishwasher from "@/components/cookerP/myDishwasher"
import pickTIme from "@/components/cookerP/pickTIme"



import sink from "@/components/sinkP/sink"
import sterilizer from "@/components/sterilizerP/sterilizer"
import islandMachine from "@/components/islandMachineP/islandMachine"
import dishWasher from "@/components/dishWasherP/dishWasher"
import heater from "@/components/heaterP/heater"

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
        path: '/echartsTime',
        name: 'echartsTime',
        component: echartsTime,
      },
      {
          path: '/myDishwasher',
          name: 'myDishwasher',
          component: myDishwasher,
        },
          {
          path: '/pickTIme',
          name: 'pickTIme',
          component: pickTIme,
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
    },
    {
      path: '/traditionalCooking',
      name: 'traditionalCooking',
      component: traditionalCooking,
    },
    {
      path: '/reservePlan',
      name: 'reservePlan',
      component: reservePlan,
    }
  ]
})
