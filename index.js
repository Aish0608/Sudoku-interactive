// ENTERING VALUES---------------------------------------------------------

let easyNum=[
    [-1,-1,5,1,6,-1,-1,3,-1],
    [3,-1,-1,5,8,4,9,-1,-1],
    [-1,-1,-1,-1,-1,7,-1,8,-1],
    [5,-1,9,7,-1,-1,-1,-1,-1],
    [-1,-1,7,-1,5,-1,-1,-1,6],
    [-1,-1,6,-1,4,2,-1,7,-1],
    [-1,-1,-1,-1,2,-1,-1,9,1],
    [-1,6,-1,8,-1,5,4,2,-1],
    [4,-1,-1,-1,-1,-1,7,5,8]
];
let medNum=[
    [-1,-1,-1,2,-1,-1,6,9,-1],
    [-1,-1,-1,-1,5,7,-1,1,-1],
    [-1,-1,-1,-1,-1,3,-1,4,5],
    [5,-1,-1,-1,-1,-1,1,3,8],
    [-1,-1,4,8,-1,5,9,-1,-1],
    [7,8,1,-1,-1,-1,-1,-1,2],
    [6,9,-1,5,-1,-1,-1,-1,-1],
    [-1,2,-1,1,3,-1,-1,-1,-1],
    [-1,1,8,-1,-1,6,-1,-1,-1]
];
let hardNum=[
    [8,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,3,6,-1,-1,-1,-1,-1],
    [-1,7,-1,-1,9,-1,2,-1,-1],
    [-1,5,-1,-1,-1,7,-1,-1,-1],
    [-1,-1,-1,-1,4,5,7,-1,-1],
    [-1,-1,-1,1,-1,-1,-1,3,-1],
    [-1,-1,1,-1,-1,-1,-1,6,8],
    [-1,-1,8,5,-1,-1,-1,1,-1],
    [-1,9,-1,-1,-1,-1,4,-1,-1],
];


var input=document.getElementsByTagName("input");


EnterArray(easyNum);
function EnterArray(arr){
    for(let pme=0;pme<81;pme++)
    {
        input[pme].value="";
        input[pme].disabled=false;
    }
    for(let mele=0;mele<81;mele++)
    {
        var i=parseInt(mele/9),j=mele%9;
        if(arr[i][j]!=-1)
        {
            input[mele].value=arr[i][j];
            input[mele].disabled=true;
        }
    }
}
var easybtn=document.getElementById("easy");
easybtn.addEventListener("click",()=>{
    for(let a=0;a<81;a++)
    {
        input[a].classList.remove("select")
    }
    EnterArray(easyNum);
});
var mediumbtn=document.getElementById("medium");
mediumbtn.addEventListener("click",()=>{
    for(let b=0;b<81;b++)
    {
        input[b].classList.remove("select")
    }
    EnterArray(medNum);
});
var hardbtn=document.getElementById("hard");
hardbtn.addEventListener("click",()=>{
    for(let c=0;c<81;c++)
    {
        input[c].classList.remove("select")
    }
    EnterArray(hardNum);
});

// VALIDATIONS --------------------------------------------


function TheBoard(){
    var board=[];
    var rowArr=[];
    for(let p=0;p<81;p++)
    {
        var i=parseInt(p/9),j=p%9;
        if(input[p].value === ""){
            alert("Compelete the sudoku!")
            return
        }
        rowArr[j]=input[p].value;
        if((j+1)%9==0)
        {
            board.push(rowArr);
            rowArr=[];
        }
    }
    if(valROW(board))
    {
        if(valCol(board))
        {
            if(valBOX())
            {
                alert("*Congratulations!*")
            }
        }
    }
    
}
function valROW(board){
    for(let r=0;r<9;r++)
    { 
        var sum=0;
        for(let c=0;c<9;c++)
        {
            sum=parseInt(sum+parseInt(board[r][c]));
        }
        if(sum!=45)
        {
            for(let i=0;i<9;i++)
            {
                for(let j=i+1;j<9;j++)
                {
                    if(board[r][i]==board[r][j])
                    {
                        input[r*9+i].classList.add("incorrect");
                        input[r*9+j].classList.add("incorrect");
                        return false
                    }
                }
            }
        }
    }
    return true 

}


function valCol(board){
    for(let c=0;c<9;c++)
    { 
        var sum=0;
        for(let r=0;r<9;r++)
        {
            sum=parseInt(sum+parseInt(board[r][c]));
        }
        if(sum!=45)
        {
            for(let j=0;j<9;j++)
            {
                for(let i=j+1;i<9;i++)
                {
                    if(board[i][c]==board[j][c])
                    {
                        input[i*9+c].classList.add("incorrect");
                        input[j*9+c].classList.add("incorrect");
                        return false 
                    }
                }
            }
        }
    }
    return true
}


function valBOX(){
    let boxArr= [
        [input[0],input[1],input[2],input[9],input[10],input[11],input[18],input[19],input[20]],
        [input[3],input[4],input[5],input[12],input[13],input[14],input[21],input[22],input[23]],
        [input[6],input[7],input[8],input[15],input[16],input[17],input[24],input[25],input[26]],
        [input[27],input[28],input[29],input[36],input[37],input[38],input[45],input[46],input[47]],
        [input[30],input[31],input[32],input[39],input[40],input[41],input[48],input[49],input[50]],
        [input[33],input[34],input[35],input[42],input[43],input[44],input[51],input[52],input[53]],
        [input[54],input[55],input[56],input[63],input[64],input[65],input[72],input[73],input[74]],
        [input[57],input[58],input[59],input[66],input[67],input[68],input[75],input[76],input[77]],
        [input[60],input[61],input[62],input[69],input[70],input[71],input[78],input[79],input[80]]
    ]
    for(let r=0;r<9;r++)
    { 
        var sum=0;
        for(let c=0;c<9;c++)
        {
            sum=parseInt(sum+parseInt(boxArr[r][c].value));
        }
        if(sum!=45)
        {
            for(let i=0;i<9;i++)
            {
                for(let j=i+1;j<9;j++)
                {
                    if(boxArr[r][i].value==boxArr[r][j].value)
                    {
                        boxArr[r][i].classList.add("incorrect");
                        boxArr[r][j].classList.add("incorrect");
                        return false 
                    }
                }
            }
        }
    }
    return true
}
   
var valibtn=document.getElementById("Valid");
valibtn.addEventListener("click",()=>{
    TheBoard();
})

//ON INPUT VALIDATIONS------------------------------------------------------------------
for(let i=0;i<81;i++)
{
    input[i].addEventListener("input",(e)=>{
        if(!parseInt(e.data)){
            e.target.value="";   
        }
    })

    input[i].addEventListener("click",(e)=>{
        for(let i=0;i<81;i++)
        {
            input[i].classList.remove("select")
        }
        let box=e.target.dataset.box;
        let row=e.target.dataset.row;
        let col=e.target.dataset.col;
        for(let i=0;i<81;i++)
        {
            if(input[i].dataset.box==box || input[i].dataset.row==row || input[i].dataset.col==col)
            {
                input[i].classList.add("select")
            }
        }
    })
    
}



