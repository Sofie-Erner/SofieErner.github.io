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
ctx.textAlign = "center";

const textMes = ctx.measureText("Testy");
const hRect = 2*(textMes.actualBoundingBoxAscent + textMes.actualBoundingBoxDescent) + 30; // calculate box height

// This function contains the code to draw arrows
// The arrow will be filled with 4 different segments
function DrawArrow(x0, y0, yh, w1, w2, w3, w4, c1="#D81B60", c2="#1E88E5", c3="#FFC107", c4="#004D40"){
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

// Draw legend at bottom of diagram
function MakeLegend(canH, c1="#D81B60", c2="#1E88E5", c3="#FFC107", c4="#004D40"){
    // Using height of canvas, place legend for colours c1-c4
    ctx.textAlign = "left";

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

    ctx.textAlign = "center";
};

// Draw rounded rectangle with text in it
function DrawRect(x0, y0, w0, h0, col="black", txt, num){
    // place rounded rectangle at (x0,y0) with colour col, text txt, and number num
    // width and height (w0 and h0) of rectangle

    ctx.fillStyle = col;
    ctx.strokeStyle = col;

    ctx.roundRect(x0,y0,w0,h0,[10]);
    ctx.fillText(txt,x0 + w0/2,y0 + 20,w0,h0/2);
    ctx.fillText(num,x0 + w0/2,y0 + 20 + h0/2,w0,h0/2);

    ctx.lineWidth = 2;
    ctx.stroke();
};

// Draw lines with direction between boxes
function DrawLine(xS, yS, xF, yF, col="black"){
    // make line with arrow half way to go from one box to another
    // variables
    const alpha = Math.atan((yF - yS)/(xF-xS)); // angle of line
    const beta = Math.PI/2 - alpha; // angle for getting arrow points

    const opp = 10; // bottom of arrow
    const adj = 20; // middle of arrow

    const xM = (1/2)*(xS + xF); // x of middle of arrow 
    const yM = (1/2)*(yS + yF); // y of middle of arrow

    const delta1 = Math.sin(beta)*(adj/2); // for arrow end points
    const delta2 = Math.cos(beta)*(adj/2); // for arrow end points

    const deltaX = Math.cos(beta)*opp; // for arrow points
    const deltaY = Math.sin(beta)*opp; // for arrow points

    // Draw main line
    ctx.beginPath();
    ctx.moveTo(xS,yS);
    ctx.lineTo(xF,yF);
    ctx.lineWidth = 2;
    ctx.strokeStyle = col;
    ctx.stroke();

    // Draw arrow head
    ctx.beginPath();
    if (xS < xF){ // end after finish point
        // Draw line between arrow end points
        let xB = xM - delta1; // x of baseline of arrow 
        let yB = yM - delta2; // y of baseline of arrow
        let xT = xM + delta1; // x of tip of arrow
        let yT = yM + delta2; // y of tip of arrow

        ctx.moveTo(xB,yB);
        ctx.lineTo(xB + deltaX, yB - deltaY);
        ctx.lineTo(xT,yT);
        ctx.lineTo(xB - deltaX, yB + deltaY);
        ctx.lineTo(xB,yB);
    }
    else {
        // Draw line between arrow end points 
        let xB = xM + delta1; // x of baseline of arrow   
        let yB = yM + delta2; // y of baseline of arrow 
        let xT = xM - delta1; // x of tip of arrow
        let yT = yM - delta2; // y of tip of arrow

        ctx.moveTo(xB,yB);
        ctx.lineTo(xB + deltaX, yB - deltaY);
        ctx.lineTo(xT,yT);
        ctx.lineTo(xB - deltaX, yB + deltaY);
        ctx.lineTo(xB,yB);
    }

    ctx.fillStyle = col;
    ctx.fill();
};

// --- Make Diagram ---
// Draw legend
MakeLegend(canH,c1,c2,c3,c4);

// Text boxes for offers & rejections
let wRect = 125; // width of box
DrawRect(canW-wRect-10,10,wRect,hRect,"black","Offers","0");
DrawRect(canW-wRect-10,canH-hRect-40,wRect,hRect,"black","Rejections","50");

// Make upper and lower lines
ctx.beginPath();
ctx.moveTo(10,10 + hRect/2);
ctx.lineTo(canW-wRect-10,10 + hRect/2);

ctx.moveTo(10,canH - 40 - hRect/2);
ctx.lineTo(canW-wRect-10,canH - 40 - hRect/2);

ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

// Waiting responses
let txt = "Waiting Responses";
wRect = ctx.measureText(txt).width + 20; // update rectangle with
let hTot = (canH-30-hRect)/2  - 50; // Vertical position

DrawRect(10,hTot, wRect, hRect,"black",txt,"100");
let wTot = 10 + wRect; // Horizontal position

DrawLine(wTot + 50, hTot + hRect/2, wTot, hTot + hRect/2, col="black");
wTot = wTot + 50;

// Total Applications
txt = "Total";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot,wRect,hRect,"black",txt,"160");

DrawArrow(wTot + wRect/2,hTot + hRect, (canH - 40 - hRect/2),25,5,5,5,c1,c2,c3,c4); // arrow for rejections
wTot = wTot + wRect;

DrawLine(wTot,hTot+ hRect/2, wTot + 53,hTot + hRect + 3, col="black"); // account for rounding of rectangle by adding 3
wTot = wTot + 50;

// Online Tests
txt = "Online Test";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot + hRect,wRect,hRect,"black",txt,"10");

DrawArrow(wTot + wRect/2,hTot + 2*hRect, (canH - 40 - hRect/2),9,0,0,0,c1,c2,c3,c4); // arrow for rejections
wTot = wTot + wRect;
let wTemp = wTot; // temp storage for later use

DrawLine(wTot,hTot + 3*hRect/2, wTot + 53,hTot + 2*hRect + 3, col="black"); // account for rounding of rectangle by adding 3
wTot = wTot + 50;

// Withdrew Application
txt = "Withdrew Application";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot + 2*hRect,wRect,hRect,"black",txt,"3");
wTot = wTot + wRect;

// 1st Interview
txt = "1st Interview";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot - hRect,wRect,hRect,"black",txt,"10");

DrawArrow(wTot + wRect/2,hTot, (canH - 40 - hRect/2),9,0,0,0,c1,c2,c3,c4); // arrow for rejections
wTot = wTot + wRect;

DrawLine(wTot - wRect,hTot - hRect/2, wTemp - 3,hTot + hRect + 3,col="black"); // To Online tests
DrawLine(wTot - wRect + 3,hTot - 3, wTot - 3*wRect/2,hTot + 2*hRect, col="black"); // To Withdrawn
DrawLine(wTot,hTot - hRect/2, wTot + 50,hTot - hRect/2, col="black"); // To 2nd Interview
wTot = wTot + 50;

// 2nd Interview
txt = "2nd Interview";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot - hRect,wRect,hRect,"black",txt,"10");

DrawArrow(wTot + wRect/2,hTot, (canH - 40 - hRect/2),9,0,0,0,c1,c2,c3,c4); // arrow for rejections