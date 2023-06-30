// draggable
$( function() {
    // $( "#draggable" ).draggable();
    $( "#draglogo" ).draggable();
    $( ".card-footer" ).draggable();
  } );

//   footer color change

$(function () {
    $('#fcp').colorpicker();
    $('#fcp').colorpicker().on(
            'changeColor',
            function() {
                $('.card-footer').css('background-color',
                        $(this).colorpicker('getValue', '#ffffff'));
            });
    
  });
    


function changeToImg() {
const toImgArea = document.getElementById('imgItem');

// To avoid the image will be cut by scroll, we need to scroll top before html2canvas.
window.pageYOffset = 0;
document.documentElement.scrollTop = 0
document.body.scrollTop = 0

// transform to canvas
html2canvas(toImgArea, {
allowTaint: true,
taintTest: false,
type: "view",
}).then(function (canvas) {
const sreenshot = document.getElementById('sreenshot');
const downloadIcon = document.getElementById('download');

// setting the canvas width  
canvas.style.width = "100%";

// append the canvas in the place that you want to show this image.  
sreenshot.appendChild(canvas);
console.log( downloadIcon);

// toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
downloadIcon.href = canvas.toDataURL("image/jpeg");
downloadIcon.download = document.getElementById('counterDisplay')[0].innerText+"-"+document.getElementsByClassName('name')[0].innerText+'.jpg';
});
}


var loadFile1 = function(event) {
        
 document.getElementById('imgItem').style.background = "url('"+URL.createObjectURL(event.target.files[0])+"')";     
 document.getElementById('imgItem').style.backgroundSize = "cover";

};



// clean the showing area
function resetTheImageArea() {
document.getElementById('sreenshot').innerHTML = "";
}


// resizer element
$( function() {
    // $( "#draggable" ).resizable();
    $( ".card" ).resizable();
  } );



//change image
function changeImage() {
    var image = document.getElementById('draglogo');
    if (image.src.match("migoo1")) {
        image.src = "migoo.png";
    }
    else {
        image.src = "migoo1.png";
    }
  }


   // Function to increment the counter and update the display
function incrementNumber() {
    document.getElementsByClassName('name')[0].innerHTML = ""
    resetTheImageArea()
    if(document.getElementById("counterDisplay").innerHTML != "")
    {
        var counters = document.getElementById("counterDisplay").innerHTML
        // Increment the counter
        counters++;
        
        // Update the display with the new counter value
        document.getElementById("counterDisplay").textContent = counters;
        document.getElementsByClassName('name')[0].innerHTML = ""
        resetTheImageArea()
    }
    else{
        var counter = 100;
        counter++;

        // Update the display with the new counter value
        document.getElementById("counterDisplay").textContent = counter;
        document.getElementsByClassName('name')[0].innerHTML = ""
        resetTheImageArea()
    }
   }