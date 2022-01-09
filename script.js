

const people = [
    {
        name:"Mher",
        review:["Hello I'm Mher and my job is to make people happy by developing stuff :)"],
        img: src = 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        
    },
    {

        
        name:"Angela",
        review:["Hi I'm Angela and I'm a web developer"],
        img: src = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name:"Chris",
        review:["Yo yo yo I'm Chris and I'll do my best to be the best"],
        img:src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },

    {
        name:"Tom",
        review:["Tom is my name and I'm a cat"],
        img: src = 'https://images.unsplash.com/photo-1580788404954-ae4e4bdc9061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        name:"Jerry",
        review:["And I'm Jerry and I'm so happy :)"],
        img: src='https://images.unsplash.com/photo-1516247897763-0f4ad94c2668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80'
    }
]


const paragraph = document.querySelector('.paragraph');
const theName = document.querySelector('.name')
const picture = document.querySelector('.picture')
const nextBtn = document.querySelector('.right')
const prevBtn = document.querySelector('.left')




let page = 0
theName.textContent = people[page].name    
paragraph.textContent = people[page].review
picture.src = people[0].img



function nextFunc(){
   
    
   if(page <4){
    page = page + 1
   }
        

     
     
   theName.textContent = people[page].name    
paragraph.textContent = people[page].review
picture.src = people[page].img
   
}

function prevFunc(){
    if(page >0){
        page = page - 1
       }
            
    
         
         
        
       theName.textContent = people[page].name    
       paragraph.textContent = people[page].review
    picture.src = people[page].img
}


