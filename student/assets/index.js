let data=[
    "第一行",
    "第二行",
    "第三行"
]

function render(){
    console.dir("render")

   data.forEach(item=>{
    const div= document.createElement("div")
       div.innerHTML=item;
       document.body.appendChild(div)
   })
  
}
render()