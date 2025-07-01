class MyArray{
     constructor(){
          this.length=0
          this.data={}
          // this.push=(data)=>{
          //      this.data={...this.data ,data}

          // } we dont define this in construtor because eveerytime we create use a new keyword this got created wating memory
     }
     push(item){
          this.data[this.length]=item
         return this.length++
          
          
     }
     pop(){
         const lastItem= this.data[this.length-1];
         delete this.data[this.length-1];
         this.length--;
         return lastItem;
          

     }

     get(index){
          return this.data[index]
         

     }
     shift(){
          const firstItem=this.data[0]
          // no need to delte first element we can just overwrite in it
          for(let i=0;i<this.length;i++){
               this.data[i]=this.data[i+1]
          }
          delete this.data[this.length-1]
          this.length--
          console.log( this.data[0])
          return firstItem
          
          
          
     }
     deleteByIndex(number){
          const selectedIndex=this.data[number]
          delete this.data[number];
          for(let i=number;i<this.length;i++){
               this.data[i]=this.data[i+1]
          }
          delete this.data[this.length-1]
          this.length--
          return selectedIndex;

     }
}


const hello= new MyArray();


hello.push("jiiii")
hello.push("jojoioi")
hello.push("shrrvvuu")
// hello.shift()
hello.deleteByIndex(0);
// hello.pop()
console.log(hello)
