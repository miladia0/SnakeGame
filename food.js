  import{jayrandom}from'./random.js'
  let ghaza = jaygahrandom(); // جایگاه  اولیه  غذا  
  const bozorgshavande=1;//مقداری  که  هر  بار  مار  بزرگ میشود  
import { roymar,gostareshmar } from "./Snake.js";
  export function update(){ // برای این  که هر  بار مار به  غذا نزدیک  شد چه  اتفاقی بیفتد 
if(roymar(ghaza)){
    gostareshmar(bozorgshavande)
    ghaza=jaygahrandom();
}

  }
  
    export function draw (gamebord){// برای ساخت غذا  و  نمایش ان در  صفحه بازی  
     
         const khorak=document.createElement('div')
    khorak.style.gridRowStart=ghaza.y
    khorak.style.gridColumnStart=ghaza.x
    khorak.classList.add('food')
    gamebord.appendChild(khorak)
    
    
     }
     function jaygahrandom(){
         let  jayjadidghaza
         while (jayjadidghaza==null || roymar(jayjadidghaza)) {
             jayjadidghaza= jayrandom()
             
         }
         return jayjadidghaza;
     }