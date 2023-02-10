import {update as updatemar,draw as drawmar , marspeed,getSnakeHead,snakeIntersection} from "./Snake.js"
import{draw as drawghaza, update as updateghaza}from "./food.js"
import{outsideGrid}from './random.js'
let akharinrender=0;//بریا این  که ما  بدذاینیم کی  اخرین  رندر  را  از  دستدگاه  گرفتیم  
let gameover=false;
const gamebord= document.getElementById('gamebord') ;
function main(lahzetime){
    if (gameover) {
        if (confirm('باختی میخای دوباره امتحان کنی ')) {
          window.location = '/'
        }
        return
      }
    window.requestAnimationFrame(main)// بریا این که  مابه  به  صفحه  بازی این پیام را بدهیم که  کی  هر  میلی  ثانیه  ریفرش شود تا  بازی به حرکت در بیاید  
    const zamanlastrender =(lahzetime-akharinrender)/1000;//برای  این  که  هر  میلی  ثانیه  و به  سرعت  صفحه  جا به  جا نشود  ما  به ان یه  واحد میدهیم   که   در  این  جا یک  ثانیه  است  
    if(zamanlastrender<1/marspeed)return// در این جا ما شرط گذاشتیم که اگر از  یک  ثانیه  کمت  بود  ارا  برنگردان  
    console.log(zamanlastrender);
    akharinrender=lahzetime;// بریا این که این حلقه ادامه داشته  باشد به  دستگاه9 اعلام میکنیم که اخرین  رندر را  برابر با اولین  رندر خود قرار بده  
    update();
    draw();
  
}
window.requestAnimationFrame(main)
function update(){

    updatemar();
    updateghaza();
    checkDeath()
    
}
function draw(){
    gamebord.innerHTML=""//برای  این  است  که  هر  با   ما جایگاه  قبلی مار را  پاک  کنیم  و  فقط  جایگاه  جدید را  نشان  بدهیم  
drawmar(gamebord); 
drawghaza(gamebord);
}
function checkDeath() {
    gameover = outsideGrid(getSnakeHead()) || snakeIntersection()
  }