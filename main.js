var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id='selfie_1';
        takeSnapshot();
        speak_data='taking your selfie in 5 seconds';
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000)

    setTimeout(function(){
        img_id='selfie_2';
        takeSnapshot();
        speak_data='taking your selfie in 10 seconds';
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000)

    setTimeout(function(){
        img_id='selfie_3';
        takeSnapshot();
        speak_data='taking your selfie in 15 seconds';
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },15000)
}

function takeSnapshot(){
    console.log(img_id)

    Webcam.snap(function(uri){
        if(img_id=='selfie_1'){
            document.getElementById('result_1').innerHTML="<img id='selfie_1' src='"+data_uri+"'/>";
        }
        if(img_id=='selfie_1'){
            document.getElementById('result_1').innerHTML="<img id='selfie_1' src='"+data_uri+"'/>";
        }
        if(img_id=='selfie_1'){
            document.getElementById('result_1').innerHTML="<img id='selfie_1' src='"+data_uri+"'/>";
        }
    });
}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    if(content=='selfie'){
        speak();
    }

}
