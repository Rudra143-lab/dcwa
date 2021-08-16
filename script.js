// Write here update Digital Clock Function

setInterval(() => {
    
   //Write here all variables uses in the upadate clock function

    date=new Date();
    hour_time=date.getHours();
    minute_time=date.getMinutes();
    second_time=date.getSeconds();
    ap="AM";
    
   //Write here all conditions uses for set time in the html

   if(hour_time > 12){
       hour_time=hour_time-12;
       ap="PM";
   }

    hour_time=(hour_time < 10 ? "0":"")+hour_time;
    minute_time=(minute_time < 10 ? "0":"")+minute_time;
    second_time=(second_time < 10 ? "0":"")+second_time;
    
   //Write here all function to set the time in html

    document.getElementById("hour").innerHTML=hour_time;
    document.getElementById("minute").innerHTML=minute_time;
    document.getElementById("second").innerHTML=second_time;
    document.getElementById("units").innerHTML=ap;
}, 1000);

//Write speak for speak the time using onclick evnt on button

function speak(){

    //create data and variable that using in speak funcion

    synth = window.speechSynthesis;
    data_1 = "It is " + hour_time + "hours" +minute_time + " minutes " + second_time + "Seconds" + ap;
    utterThis = new SpeechSynthesisUtterance(data_1);
    synth.speak(utterThis);
    console.log("Rudra Prajapati Your web app is working perfecty");
}

//call here speak funcion like this speak();

speak();