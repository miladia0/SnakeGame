import { jahatharekat } from "./move.js";
 export const marspeed=5;

const badanmar=[{x:11,y:11}
];//بدنه  مار  را  برا  حسب  پزیشن  های گرید نام  گذاری کرده و در  یک اریه  به  صورت  ابجکت  تعریف کرده ایم  
 let meghdarjadi=0;
export function update(){// این  تابع  برای این  است که  ما ه ر   با ر جایگاه  مار را  را  جانمایی  کنیم  
azafekardan();
    const harekat= jahatharekat();
    for(let i =badanmar.length-2;i>=0;i--){
        badanmar[i+1]={...badanmar[i]}
    }
    badanmar[0].x +=harekat.x
    badanmar[0].y+=harekat.y
 }
export function draw (gamebord){// برای این که  بدنه  مار  از ابتدای  بازی  به  صورت  کامل  وسط بازی باشد   این   تابع  پنل  بازی را به  خود میگرد  همانطور که میدانمیم  از  گرید استفاده  کردیم  و  به  راختی  میتوان  انرا  به این صورت  ایکس  و  ایگرگ  جا نمایی  کرد  
 badanmar.forEach(ghate=>{
     const tanemar=document.createElement('div')// تنه مارا بهه  صورت  یک  دیو طراحی  کرده  
tanemar.style.gridRowStart=ghate.y// جنمایی  در  محور ایکسها  
tanemar.style.gridColumnStart=ghate.x// جا نمایی  در محور ایگرگ  
tanemar.classList.add('snake')// اضافه  کردن ان  در استایل  مورد نظر که در سی اس اس  به  ان دادیم  
gamebord.appendChild(tanemar)// و  در اخر  اضافه  کردن  بدنه  مار تولید شده  به   صفحه  بازی  
 })

 }
 export function gostareshmar(meghdar){
     meghdarjadi+= meghdar
 }
 export function roymar(jayegah,{nadidegereftansar=false}={}){
     return badanmar.some((ghate1,adad) =>{
         if(nadidegereftansar && adad===0)return false
         return mosavibodanjanamaee(ghate1,jayegah)
     })
 }
 export function getSnakeHead() {
    return badanmar[0]
  }
  export function snakeIntersection() {
    return roymar(badanmar[0], { nadidegereftansar: true })
  }
  
function mosavibodanjanamaee(jay1,jay2){
     return jay1.x===jay2.x && jay1.y===jay2.y
 }
 function azafekardan () {
     for(let i=0; i<meghdarjadi;i++){
         badanmar.push({...badanmar[badanmar.length-1]})
     }
     meghdarjadi=0
 }