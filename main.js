function preload(){
classifier=ml5.imageClassifier('DoodleNet')
}

function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;

}
function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function classifycanvas(){
classifier.classify(canvas,gotresult);

}

function gotresult(error,result){
    if(error){
        console.error(error);
    }

    console.log(result);
    document.getElementById("label").innerHTML="label:"+result[0].label;
    document.getElementById("confidence").innerHTML="confidence:"+Math.round(result[0].confidence*100)+"%";
     utterThis=new SpeechSynthesisUtterance(result[0].label);
     synth.speak(utterThis);
}