// This script contains the code to draw a diagram showing data for job seeking

// --- Colours ---
// colourblind-friendly using https://davidmathlogic.com/colorblind/
const c1 = "#D81B60";
const c2 = "#1E88E5";
const c3 = "#FFC107";
const c4 = "#004D40";

// --- Get canvas ---
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Width of Canvas & Height
const canW = canvas.width;
const canH = canvas.height;

// Text properties
ctx.font = "bold 20px Lato";
ctx.textBaseline = "middle";
ctx.textAlign = "left";

// This function contains the code to draw arrows
// The arrow will be filled with 4 different segments
function DrawArrow(x0=0, y0=0, yh=100, w1=10, w2=10, w3=10, w4=10, c1="#D81B60", c2="#1E88E5", c3="#FFC107", c4="#004D40"){
    // (x0,y0): starting coordinate from centre of arrow (for reference of placement)
    // w1-w4: the width of the 4 segments
    
    // Define variables
    const w = w1 + w2 + w3 + w4; // total width of arrow
    const h = yh - y0;

    // Useful x and y coordinates (m for - and p for +)
    const x1m = x0 - w/2;
    const x1p = x0 + w/2;

    const x2m = x0 - w;
    const x2p = x0 + w;

    const y1 = y0 + 3*h/4;

    let yTemp; // calculate y-height for segment
    let xTemp; // calculate x value for segment


    // Fill 1st segment
    ctx.beginPath();
    ctx.moveTo(x1m,y0);
    ctx.lineTo(x1m,y1);
    ctx.lineTo(x2m,y1);
    
    xTemp = x1m + w1;

    if (w1 > w/2){ // if width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(w1-w/2);
    }
    else {
        yTemp = y1 + (h/(4*w))*(w/2 + w1);
    }
    
    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);
    ctx.fillStyle = c1;
    ctx.fill();

    // Fill 2nd segment
    ctx.beginPath();
    ctx.moveTo(xTemp,y0);
    ctx.lineTo(xTemp,yTemp);

    xTemp = xTemp + w2;
    if (w1 > w/2){ // if 1st segment width over half of arrow
        yTemp = yTemp - (h/(4*w))*(w2); // negative gradient
    }
    else if( w1 + w2 > w/2){  //if 1st plus 2nd segments width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(w2-(w/2-w1));
    }
    else { // if still not reached middle
        yTemp = yTemp + (h/(4*w))*(w2); // positive gradient
    }

    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);
    ctx.fillStyle = c2;
    ctx.fill();

    // Fill 3nd segment
    ctx.beginPath();
    ctx.moveTo(xTemp,y0);
    ctx.lineTo(xTemp,yTemp);

    xTemp = xTemp + w3;
    if (w1 + w2 > w/2){ // if 1st plus 2nd segment width over half of arrow
        yTemp = yTemp - (h/(4*w))*(w3); // negative gradient
    }
    else if( w1 + w2 + w3 > w/2){  //if the 3 segments width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(w3-(w/2-w1-w2));
    }
    else { // if still not reached middle
        yTemp = yTemp + (h/(4*w))*(3); // positive gradient
    }

    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);
    ctx.fillStyle = c3;
    ctx.fill();

    // Fill 4th segment
    ctx.beginPath();
    ctx.moveTo(x1p,y0);
    ctx.lineTo(x1p,y1);
    ctx.lineTo(x2p,y1);
    
    xTemp = x1p - w4;

    if (w4 > w/2){ // if width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(w4-w/2);
    }
    else {
        yTemp = y1 + (h/(4*w))*(w/2 + w4);
    }
    
    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);
    ctx.fillStyle = c4;
    ctx.fill();

    // Draw the outline arrow
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1p,y0);
    ctx.lineTo(x1p,y1);
    ctx.lineTo(x2p,y1);
    ctx.lineTo(x0,yh);
    ctx.lineTo(x2m,y1);
    ctx.lineTo(x1m,y1);
    ctx.lineTo(x1m,y0);
    ctx.lineTo(x0, y0);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
};

// Draw segments
function DrawSeg(){


}

// Draw legend at bottom of diagram
function MakeLegend(canH, c1="#D81B60", c2="#1E88E5", c3="#FFC107", c4="#004D40"){
    // Using height of canvas, place legend for colours c1-c4

    ctx.strokeStyle = c1;
    ctx.fillStyle = c1;
    let txt = "Rejection No Feedback";
    ctx.fillRect(10,canH-30,20,20);
    ctx.fillText(txt,40,canH-20);

    ctx.strokeStyle = c2;
    ctx.fillStyle = c2;
    let wTxt = ctx.measureText(txt).width;
    txt = "Rejection Not Useful Feedback";
    ctx.fillRect(50+wTxt,canH-30,20,20);
    ctx.fillText(txt,80+wTxt,canH-20);

    ctx.strokeStyle = c3;
    ctx.fillStyle = c3;
    wTxt = 40 + wTxt + ctx.measureText(txt).width;
    txt = "Rejection Useful Feedback";
    ctx.fillRect(50+wTxt,canH-30,20,20);
    ctx.fillText(txt,80+wTxt,canH-20);

    ctx.strokeStyle = c4;
    ctx.fillStyle = c4;
    wTxt = 40 + wTxt + ctx.measureText(txt).width;
    txt = "Not Hiring Anymore";
    ctx.fillRect(50+wTxt,canH-30,20,20);
    ctx.fillText(txt,80+wTxt,canH-20);
};

// Draw rounded rectangle with text in it
function DrawRect(x0=0, y0=0,col = "black",txt,num){
    // place rounded rectangle at (x0,y0) with colour col, text txt, and number num

    ctx.fillStyle = col;
    
    textMes = ctx.measureText(txt);
    wRect = textMes.width + 20; // calculate width
    hRect = 2*(textMes.actualBoundingBoxAscent + textMes.actualBoundingBoxDescent) + 40; // calculate height

    ctx.roundRect(x0,y0,wRect,hRect,[10]);
    ctx.fillText(txt,x0 + 10,y0 + 20,wRect,hRect/2);
    ctx.fillText(num,x0 + 10,y0 + 20 + hRect/2,wRect,hRect/2);

    ctx.lineWidth = 2;
    ctx.stroke();
};

// Draw lines with direction between boxes
function DrawLine(x0,y0,x1,y1,col = "black"){
    // make line with arrow halfway along to go from one box to another
};

// --- Make Diagram ---
// Draw legend
MakeLegend(canH,c1,c2,c3,c4);

// Make upper and lower lines
ctx.beginPath();
ctx.moveTo(10,50);
ctx.lineTo(canW-200,50);

ctx.moveTo(10,canH-75);
ctx.lineTo(canW-200,canH-75);

ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

// Text boxes for offers & rejections
DrawRect(canW-200,15,"black","Offers","0");
DrawRect(canW-200,canH-115,"black","Rejections","50");

// Waiting responses
DrawRect(20,(canH-100)/2,"black","Waiting Responses","100");


// Total Applications
wTot = ctx.measureText("Waiting Responses").width + 100;
DrawRect(wTot,(canH-100)/2,"black","Total","150");
wTot = ctx.measureText("Waiting Responses").width + 100 + ctx.measureText("Total").width/1.3;
DrawArrow(wTot,canH/2+50,canH/2+150,5,5,5,25,c1,c2,c3,c4);