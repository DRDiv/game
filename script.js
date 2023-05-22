var count = 0;

function createNewElement(source) {
  var element = document.createElement('img');
  element.src = source;
  element.style.height = '10vw';
  return element;
}
var l=[[0,0,0],[0,0,0],[0,0,0]]
function check(){
    bool=false
    m=-1
    
    if (l[0][0]==l[0][1] && l[0][1]==l[0][2] && l[0][0]!=0){
        bool=true
        m=l[0][0]
        var p=['r11','r12','r13']
        
    }
    if (l[1][0]==l[1][1] && l[1][1]==l[1][2] && l[1][0]!=0){
        bool=true
        m=l[1][0]
        var p=['r21','r22','r23']
    }
    if (l[2][0]==l[2][1] && l[2][1]==l[2][2] && l[2][0]!=0){
        bool=true
        m=l[2][0]
        var p=['r31','r32','r33']
    }
    if (l[0][0]==l[1][0] && l[1][0]==l[2][0] && l[0][0]!=0){
        bool=true
        m=l[0][0]
        var p=['r11','r21','r31']
    }
    if (l[0][1]==l[1][1] && l[1][1]==l[2][1] && l[1][1]!=0){
        bool=true
        m=l[0][1]
        var p=['r12','r22','r32']
    }
    if (l[0][2]==l[1][2] && l[1][2]==l[2][2] && l[0][2]!=0){
        bool=true
        m=l[0][0]
        var p=['r13','r23','r33']
    }
    if (l[0][0]==l[1][1] && l[1][1]==l[2][2] && l[0][0]!=0){
        bool=true
        m=l[0][0]
        var p=['r11','r22','r33']
    
    }
    if (l[2][0]==l[1][1] && l[1][1]==l[0][2] && l[2][0]!=0){
        bool=true
        m=l[2][0]
        var p=['r31','r22','r13']
    
    }
    if (!(l[0].includes(0) || l[1].includes(0)||(l[2].includes(0)))){
        bool=true
        var p=[]
        
        
        
    }
    if (bool){
        console.log(p)
        if (p.length==0){alert("DRAW")}
       else{p.forEach(function(element){document.getElementById(element).children[0].src=(m==1)?"redcross.png":"redzero.png"})
       setTimeout(()=>{s=m==1?'P1 WIN':'P2 WIN';
       alert(s)},20)}
        location.reload()
        
      
        
    }
}
function handleClick(cell) {
  
    
    if (l[parseInt(cell.id[1])-1][parseInt(cell.id[2])-1]==0){
    var element = count % 2 === 0 ? createNewElement('cross.png') : createNewElement('zero.png');
    l[parseInt(cell.id[1])-1][parseInt(cell.id[2])-1]=count%2==0?1:2;
    cell.appendChild(element);
    count++;}
    setTimeout(check,5);
  
}


var cells = document.querySelectorAll('td');
cells.forEach(function(cell) {
  cell.addEventListener('click', ()=>handleClick(cell));
});
