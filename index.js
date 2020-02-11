// var htmlCode = {
//  "&" : "&",
//  '"' : "\"",
//  "<" : "<",
//  ">" : ">",
// }
function test(){
 var input = document.getElementById("input");
 //console.log(input.value.trim());
 var e = window.event || test.caller.arguments[0];
// console.log(e);
 var el = e.target || e.srcElement;
 if(el.tagName.toLowerCase() == "td" && el.rowSpan <= 1 && el.colSpan <= 1 ){
  var str = el.innerHTML;
  //str = htmlCode[str] || str;
  input.value += str;
 }
 if(el.innerHTML == "Backspace"){
  input.value = input.value.slice(0,-1); 
 }
 if(el.innerHTML == "CapsLock"){
  var els = document.getElementsByTagName("td");
  for(var i = 0, l = els.length; i < l; i++){
   var str = els[i].innerHTML;
   if(/^[a-z]$/.test(str))
    els[i].innerHTML = str.toUpperCase();
   if(/^[A-Z]$/.test(str))
    els[i].innerHTML = str.toLowerCase(); 
  }
 }
 if(el.innerHTML == "ENTER"){
  ctrKeyboard();
 }
}
function ctrKeyboard(){
 var el = document.getElementById("keyboard");
 if(el.offsetWidth > 0)
  el.style.display = "none";
 else {
  el.style.display = "block";
  //sortNum(); 
  capsInit();
 }
}
function capsInit(){
 var els = document.getElementsByTagName("td");
 for(var i = 0,j = 0, l = els.length; i < l; i++){
  var str = els[i].innerHTML;
  if(/^[A-Z]$/.test(str))
   els[i].innerHTML = str.toLowerCase(); 
 }
}
function sortNum (){
 var arr = [0,1,2,3,4,5,6,7,8,9].sort(function(){
  return Math.random() > 0.5?1:-1;
 });
 var els = document.getElementsByTagName("td");
 for(var i = 0,j = 0, l = els.length; i < l; i++){
  var str = els[i].innerHTML;
  if(/^\d$/.test(str))
   els[i].innerHTML = arr[j++];
 } 
}
