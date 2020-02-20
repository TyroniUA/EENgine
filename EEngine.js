//Zadanie 1
console.log('testing')

info = (e)=>{
    
return {
    length: e.length,
    firstChar: e[0],
    lastChar: e.substring(e.length -1)
}
}

console.log(info('testing'));

//Zadanie 2
//Codepen: https://codepen.io/volodymyr-rudov-tsymbalist/pen/poJErVy

let data = {"jsonrpc":"2.0","method":"generateIntegers","params":{"apiKey":"f8a7e8a2-9641-4918-b043-dac48486333a","n":1,"min":1,"max":60,"replacement":true,"base":10},"id":29045};

let confirmation =() => {
  let txt;
  
  $.ajax({
  url: 'https://api.random.org/json-rpc/1/invoke',
  type: "POST",
  data: JSON.stringify(data),// stringify data object
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(result) {
    $('#text').html(JSON.stringify(result['result']['random']['data'][0]));
    txt = result['result']['random']['data'][0];
    let r = confirm("Confirm a number: " + txt);
    if (r == true) {
      setTimeout(confirmation, 3000);
  } else {
    return null;
  }
  }
});
}

document.onload = confirmation();






//Zadanie 3

/*HTML: <div class="foo">
<div class="bar">
<span id="target">
content!
</span>
</div>
</div>*/

//JS:
getTargetContent =()=> {
    let target = $('#target');
     target !=null? target.text():null;
}


//Zadanie 4

   //CodePen: https://codepen.io/volodymyr-rudov-tsymbalist/pen/xxGONKa
   
   /*
   HTML CONTENT
   <body>
  <container>
    <div class='card'>
     
        <h1 class='top'>TOP TEXT</h1>
        <p class='bottom'>LONG BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT LONG
          BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXTLONG
          BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT LONG BOTTOM TEXT</p>
      
    </div>
    <div class='card' id='picture'>
      <img src="https://i.ibb.co/09hhYsn/cCgH1L.jpg" alt="cCgH1L" border="0" width='400px' height='800px'>
    </div>
    <div class='card'>
      <p class='center justify'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum."</p>
    </div>
  </container>
</body>


CSS CONTENT: 

container{
  display: flex;
  justify-content: space-evenly;
  
}
.card{
  display: table;
  margin: 0;
  height: 800px;
  
}
.relative{
  position: relative;
}
p{
  height: 60px
}
#picture{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.bottom{
  display: table-row;
  vertical-align: bottom;
  
}
.center{
  display: table-cell;
  vertical-align: middle;
}
.justify{
 text-align: justify;
}

@media(max-width: 1000px){
  img{
    width:350px;
    height: auto;
  }
   .card{
    
    height:700px;
  }
}
@media(max-width: 800px){
  img{
    width:300px;
    height: auto;
  }
  .card{
    
    height:600px;
  }
}
 h1{
    font-size: 1rem;
  }
  p{
    font-size: 15px;
  }
@media(max-width: 600px){
 
   .card{
    
    height:600px;
  }
  h1{
    font-size: 1rem;
  }
  p{
    font-size: 10px;
  }
}
@media(max-width: 500px){
  img{
    width:100px;
    height: auto;
  }
   .card{
    
    height:150px;
  }
  h1{
    font-size: 1rem;
  }
  p{
    font-size: 10px;
  }
} 
*/
   