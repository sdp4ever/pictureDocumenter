
const submitButton = document.getElementById('sBtn');

submitButton.addEventListener('click', (e) =>  handleSubmit());


function handleSubmit(){
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');
    const snapSoundElement = document.getElementById('snapSound');
    const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

    webcam.start()
   .then(result =>{
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });
}

function evalSubmit(){
    const fileInput = document.getElementById('sBtn');
    if(true){
        return true;
    }
}

function doSomethingWithFiles(){
    const fileInput = document.getElementById('sBtn');
    if(fileInput){
        alert("got a file");
    }
    else {
        alert("where is the fukkin file?");
    }
}