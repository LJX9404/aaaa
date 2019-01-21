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
import adddev from "@/components/addDev/adddev"
import findDev from "@/components/addDev/findDev"
import addSquipmentSuccess from "@/components/addDev/addSquipmentSuccess"
import addSquipmentFail from "@/components/addDev/addSquipmentFail"
import addSquipment from "@/components/addDev/addSquipment"
import addSquipmentMore from "@/components/addDev/addSquipmentMore"
import moreQuipmentBangding from "@/components/addDev/moreQuipmentBangding"
import moreQuipment from "@/components/addDev/moreQuipment"
import call400 from "@/components/addDev/call400"
import someSuccess from "@/components/addDev/someSuccess"
import addScreendev from "@/components/addDev/addScreendev"
import network from "@/components/addDev/network"
import wifinetwork from "@/components/addDev/wifinetwork"
import contactnetwork from "@/components/addDev/contactnetwork"

Vue.use(Router)
module.exports = new Router({
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
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
      path: '/addSquipmentSuccess',
      name: 'addSquipmentSuccess',
      component: addSquipmentSuccess,
    },
    {
      path: '/addSquipmentFail',
      name: 'addSquipmentFail',
      component: addSquipmentFail,
    },
    {
      path: '/addSquipment',
      name: 'addSquipment',
      component: addSquipment,
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
    },
    {
      path: '/adddev',
      name: 'adddev',
      component: adddev,
    },
    {
      path: '/findDev',
      name: 'findDev',
      component: findDev,
    },
    {
      path: '/call400',
      name: 'call400',
      component: call400,
    },
    {
      path: '/someSuccess',
      name: 'someSuccess',
      component: someSuccess,
    },
    {
      path: '/addScreendev',
      name: 'addScreendev',
      component: addScreendev,
    },
    {
      path: '/network',
      name: 'network',
      component: network,
    },
    {
      path: '/wifinetwork',
      name: 'wifinetwork',
      component: wifinetwork,
    },
    {
      path: '/contactnetwork',
      name: 'contactnetwork',
      component: contactnetwork,
    },
    {
      path: '/addSquipmentMore',
      name: 'addSquipmentMore',
      component: addSquipmentMore,
    },
    {
      path: '/moreQuipmentBangding',
      name: 'moreQuipmentBangding',
      component: moreQuipmentBangding,
    },
    {
      path: '/moreQuipment',
      name: 'moreQuipment',
      component: moreQuipment,
    }
  ]
})