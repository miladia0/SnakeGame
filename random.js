 const siz = 21;
export function jayrandom(){
    return{  x:Math.floor(Math.random()*siz+1)
       , y:Math.floor(Math.random()*siz+1)
    }
  
} 
export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > siz||
    position.y < 1 || position.y > siz
  )
}