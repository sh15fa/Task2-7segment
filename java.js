const segments=document.querySelectorAll('.segments');
const fieldValidate=document.getElementById('val');
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
    for(let i=0;i<segments.length;i++){
        segments[i].innerHTML=data1;
    }
}
segs();
//=========display every 7segments if its not a number or empty========
function displayNoneForAllSegs(){
    for(let i=0;i<segments.length;i++){
        segments[i].style.display='none';
    }
}
//============find number digit one by one===============
function findNumDigits(number){
    if(number>=0){
        rem=number%10;
        number=parseInt(number/10); 
        numberConverted=number;
    }
    return rem;
}
//=========validate text box==============
function validate(msg){
    fieldValidate.innerHTML=msg;
    fieldValidate.style.display='block';
}

const display=((x)=>{//========to display sigments according to number of digits=======  
    displayNumTo7Seg(rem,x);
});
//============change value to 7segment============  
function txtNumTo7Segs(){
    let numFromUser=txt.value;
    const isNum=(str)=>/^\d+$/.test(str);//chech if its a number or not
    if(isNum(numFromUser)){
        displayNoneForAllSegs();
       let strToNum=parseInt(numFromUser);
       numberConverted=strToNum;
      //==========if number > 3 digits=========
    if(strToNum.toString().length>3 ){
        displayNoneForAllSegs();
        alert("Enter numbers between 0 and 999"); 
    }
    //==========if number <= 3 digits=========
    else {
        for(let i=0;i< strToNum.toString().length;i++){
        findNumDigits(numberConverted);
            display(segments[strToNum.toString().length-1-i]);
            segments[i].style.display='inline';
    }
    }
    }
    //=============for non a number===============
    else{
        displayNoneForAllSegs();
        if(numFromUser==""){
            let valMsg ="Please enter a number.";
            validate(valMsg);
        }else{
            let valMsg="Please enter just a numeric number.";
            validate(valMsg);
        }

        
    }      
}
// ===========display acourding number of digit=====
function displayNumTo7Seg(number,Segms){
      let arr=['1101111','0000011','1011110','1010111','0110011','1110101','1111101','1000011','1111111','1110111'];
      for(let i=0;i<arr.length;i++){
        if(number==i){
            for(let j=0;j<arr[number].length;j++){
                if(arr[number][j]==1){
                    Segms.children[j].style.backgroundColor='red';
                } 
                else{
                    Segms.children[j].style.backgroundColor='gray';
                }
            }}
      }
}

//=========when press enter in keyboard display a number============
txt.addEventListener('keyup',(e)=>{
    fieldValidate.style.display='none';
    if(e.keyCode===13){
        txtNumTo7Segs();
    }
});
