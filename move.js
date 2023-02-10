let  jahat = {x:0,y:0}
let akharinjahat={x:0,y:0}
window.addEventListener('keydown',e=>{
    switch(e.key){
        case 'ArrowUp':
            if(akharinjahat.y!==0)break
         jahat={x:0,y:-1} 
        break
    
    
        case 'ArrowDown':
            if(akharinjahat.y!==0)break
          jahat={x:0,y:1}  
        break
    
    
        case 'ArrowLeft':
            if(akharinjahat.x!==0)break
            jahat={x:-1,y:0}
        break
    
    
        case 'ArrowRight':
            if(akharinjahat.x!==0)break
             jahat={x:1,y:0} 
        break
    }
})
export function jahatharekat (){
    akharinjahat=jahat
    return jahat
}