let b=document.getElementById('segment');
let b1=document.getElementById('segment1');
let b2=document.getElementById('segment2');
const r=[b2,b1,b];
let bb=document.getElementById('val');
const txt=document.getElementById('txt');
const btn=document.getElementById('button');
//==========to draw z segments==========
function segs(){
    let data1=``;
    for(let i=1;i<=7;i++){
        data1 +=`
        <div class="seg${i}" id="segmen${i}"></div>
        `;
    }
    b.innerHTML=data1;
    b1.innerHTML=data1;
    b2.innerHTML=data1;
}
segs();
//=========display every 7segments if its not a number or empty========
function displayNoneForAllSegs(){
    b.style.display='none';
    b1.style.display='none';
    b2.style.display='none'; 
}
//============find number digit one by one===============
function findNumDigits(n){
    if(n>=0){
        rem=n%10;
        n=parseInt(n/10); 
       number=n;
    }
    return rem;
}
//=========validate text box==============
function validate(n){
    let val='Please enter a number';
    bb.innerHTML=val;
    bb.style.display='block';
}
//============change value to 7segment============  
function textNums(){
    let num=txt.value;
    
    const isnum=(str)=>/^\d+$/.test(str);//chech if its a number or not
    if(isnum(num)){
        
       let nn=parseInt(num);
       number=nn;
      //==========if number > 3 digits=========
    if(nn.toString().length>3 ){
        displayNoneForAllSegs();
        alert("Enter numbers between 0 and 999"); 
    }
    //==========if number <= 3 digits=========
    else {
        for(let i=1;i<= nn.toString().length;i++){
        findNumDigits(number);
            display(rem,r[i-1]);
        if(i==1){
            b.style.display='none';  
           b1.style.display='none';
            b2.style.display='inline'; 
         }
       else if(i==2){
        b.style.display='none';  
        b1.style.display='inline';
        }else {
            b.style.display='inline'; 
       } 
    }
    }
    }
    //=============for non a number===============
    else{
        displayNoneForAllSegs();
        validate(num);
    }      
}
// ===========display acourding number of digit=====
function display(n,nums){
      let arr=['1101111','0000011','1011110','1010111','0110011','1110101','1111101','1000011','1111111','1110111'];
      for(let i=0;i<arr.length;i++){
        if(n==i){
            for(let j=0;j<arr[n].length;j++){
                if(arr[n][j]==1){
                    nums.children[j].style.backgroundColor='red';
                } 
                else{
                    nums.children[j].style.backgroundColor='gray';
                }
            }}
      }
}

//=========when press the button display a number============
btn.addEventListener('click',()=>{
    textNums();
});
//=========when press enter in keyboard display a number============
txt.addEventListener('keyup',(e)=>{
    bb.style.display='none';
    if(e.keyCode===13){
        textNums();
    }
});
