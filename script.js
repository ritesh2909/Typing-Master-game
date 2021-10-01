const setOfWords = [ "The lion is a large cat of the genus Panthera native to Africa and India.",
                        "The cheetah is a large cat native to Africa and central Iran.",
                    "Old World Sparrows are a group of small passerine birds forming the family Passeridae.",
                "Monkey is a common name that may refer to most mammals of the infraorder Simiiformes.",
            "The Labrador is one of the most popular dog breeds in a number of countries in the world.",
        "Dinosaurs are a diverse group of reptiles of the clade Dinosauria." ];


const msg = document.getElementById("ques");
const typedWords = document.getElementById("ans");
const btn = document.getElementById("btn");
let startTime , endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    console.log(date);
    startTime = date.getTime();
    btn.innerText = "End";
}



const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let TotalTime = ((endTime - startTime)/1000);

    console.log(Math.floor(TotalTime));

    let totalstr = typedWords.value;
    let wordCount = wordCounter(totalstr);
    let speed = Math.round((wordCount/TotalTime)*60);
    if(totalstr.length==0)
    {
        speed = 0;
    }
    let finalMsg = " You typed total at "+speed+" words per minute ";
    finalMsg+= compareWords(msg.innerText,totalstr);
    msg.innerText = finalMsg;

}
const compareWords = (str1,str2) =>{
    let cnt = 0;
    for(let i = 0;i<str1.length;i++)
    {
        if(str1[i]==str2[i])
        {
            cnt++;
        }
    }

    let errorWords = (str1.length - cnt);
    return (cnt +" correct out of "+str1.length + " words and the total number of errors are "+errorWords+".");

}
const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}
typedWords.disabled = true;
btn.addEventListener('click', function(){
    console.log(this);
    if(this.innerText =="Start")
    {
        typedWords.disabled = false;
        playGame ();
    }
    else if(this.innerText == "End")
    {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})



