var
text=document.getElementById("text");
si=document.getElementById("size");
fo=document.getElementById("font");
function bold () { 
    
if(text.style.fontWeight=="bold"){text.style.fontWeight="normal"}
else {text.style.fontWeight="bold"} }

function it () { 
    
    if(text.style.fontStyle=="italic"){text.style.fontStyle="normal"}
    else {text.style.fontStyle="italic"} ;}
    
function ul() {
    if (text.style.textDecoration=="underline"){text.style.textDecoration=""} else {text.style.textDecoration="underline"}
}
function sizee() {
    text.style.fontSize=si.value
}
function font() { text.style.fontFamily=fo.value}