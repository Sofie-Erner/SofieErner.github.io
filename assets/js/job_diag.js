// This script contains the code to draw a diagram showing data for job seeking

// ---------------
// --- Colours ---
// ---------------

// colourblind-friendly using https://www.color-hex.com/color-palette/1044488
// "IBM Design Library"
const cols = ["#FFB000","#FE6100","#DC267F","#785EF0","#648FFF"];

// ------------------
// --- Get canvas ---
// ------------------

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

// Numbers from Excel and SQL for diagrams
// [ Waiting Responses, Total applications, Online Test, Withdrew Application, 1st Interview, 2nd Interview, Offers, Rejections]
const boxNums = [126, 246, 15, 11, 14, 4, 4, 104];
const rejNums = [[72,11,4,0],[4,0,0,0],[3,1,2,0],[1,0,0,0]];
// ------------------------
// --- Define Functions ---
// ------------------------

// This function contains the code to draw arrows
// The arrow will be filled with 4 different segments
function DrawArrow(x0,y0,yh,w1,w2,w3,w4,c1,c2,c3,c4){
    // (x0,y0): starting coordinate from centre of arrow (for reference of placement)
    // w1-w4: the width of the 4 segments
    
    // Define variables
    const N = 2.5;

    /*
    let wS = [w1i,w2i,w3i,w4i];
    wS = wS.map(widthFunc);

    // function to vary width depending on value
    function widthFunc(value, index, array){
        if (value < 5){return 10}
        else if (value > 15){return 30}
        else{return N*value}
    }

    w1 = wS[0]; w2 = wS[1]; w3 = wS[2]; w4=wS[3];
    */

    w1=N*w1; w2=N*w2; w3=N*w3; w4=N*w4;

    const w = w1 + w2 + w3 + w4; // total width of arrow
    const h = yh - y0; // Height of arrow

    // Useful x and y coordinates (m for - and p for +)
    const x1m = x0 - w/2;
    const x1p = x0 + w/2;

    const x2m = x0 - w;
    const x2p = x0 + w;

    const y1 = y0 + 3*h/4;

    let yTemp = 0.0; // calculate y-height for segment
    let xTemp = 0.0; // calculate x value for segment
    let wTemp = 0.0; // temp value for total width of segments considered
    let wi = 0; ci = "black"; //default values

    // Fill 1st segment
    if (w1 != 0){ // first segment has width
        wi = w1; ci = c1; wTemp = w1;
    }
    else {
        if (w2 != 0){
            wi = w2; ci = c2; wTemp = w2;
        }
        else if ( w3 != 0 ){
            wi = w3; ci = c3; wTemp = w3;
        }
        else if (w4 != 0){
            wi = w4; ci = c4; wTemp = w4;
        }
    }

    [xTemp, yTemp] = DrawFirst(x0,y0,yh,x1m,x2m,y1,w,h,wi,ci);
    AddNum(x1m,y0,wi,h,(wi/N).toString());


    // Fill next segment
    if (wTemp == w1){ // only one segment
        if (w2 != 0){
            [xTemp, yTemp] = DrawMiddle(x0,y0,yh,xTemp,yTemp,w,wTemp,h,w2,c2); // Draw second
            AddNum(xTemp-w2,y0,w2,h,(w2/N).toString());
        }
        if (w3 != 0){
            [xTemp, yTemp] = DrawMiddle(x0,y0,yh,xTemp,yTemp,w,wTemp,h,w3,c3); // Draw third
            AddNum(xTemp-w3,y0,w3,h,(w3/N).toString());
        }
    }
    else if (wTemp == w2 && w3 != 0){ // first segment was empty
        [xTemp, yTemp] = DrawMiddle(x0,y0,yh,xTemp,yTemp,w,wTemp,h,w3,c3); // Draw third
        AddNum(xTemp-w3,y0,w3,h,(w3/N).toString());
    }

    // Fill 4th segment
    if (w4 != 0){ // last segment has width
        wi = w4; ci = c4;
    }
    else {
        if (w3 != 0){
            wi = w3; ci = c3;
        }
        else if (w2 != 0){
            wi = w2; ci = c2;
        }
        else if (w1 != 0){
            wi = w1; ci = c1;
        }
    }
    DrawLast(x0,y0,yh,x1p,x2p,y1,w,h,wi,ci);
    AddNum(x1p-wi,y0,wi,h,(wi/N).toString());

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

// Draw first segment of arrow
function DrawFirst(x0,y0,yh,x1m,x2m,y1,w,h,wi,ci){
    ctx.beginPath();
    ctx.moveTo(x1m,y0);
    ctx.lineTo(x1m,y1);
    ctx.lineTo(x2m,y1);

    let yTemp = 0.0;
    let xTemp = x1m + wi;

    if (wi > w/2){ // if width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(wi-w/2);
    }
    else {
        yTemp = y1 + (h/(4*w))*(w/2 + wi);
    }
    
    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);

    ctx.fillStyle = ci;
    ctx.fill();

    return [xTemp, yTemp] // return x and y values to draw next segment
}

// Draw last segment of arrow
function DrawLast(x0,y0,yh,x1p,x2p,y1,w,h,wi,ci){
    ctx.beginPath();
    ctx.moveTo(x1p,y0);
    ctx.lineTo(x1p,y1);
    ctx.lineTo(x2p,y1);
    
    let xTemp = x1p - wi;
    let yTemp = 0.0;

    if (wi > w/2){ // if width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(wi-w/2);
    }
    else {
        yTemp = y1 + (h/(4*w))*(w/2 + wi);
    }
    
    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);
    ctx.fillStyle = ci;
    ctx.fill();
}

// Draw middle segment of arrow
function DrawMiddle(x0,y0,yh,xTemp,yTemp,w,wTemp,h,wi,ci){
    ctx.beginPath();
    ctx.moveTo(xTemp,y0);
    ctx.lineTo(xTemp,yTemp);

    xTemp = xTemp + wi;
    if (wTemp > w/2){ // if 1st segment width over half of arrow
        yTemp = yTemp - (h/(4*w))*(wi); // negative gradient
    }
    else if( wTemp + wi > w/2){  //if 1st plus 2nd segments width over half of arrow
        ctx.lineTo(x0,yh); // draw to middle of arrow
        yTemp = yh - (h/(4*w))*(wi-(w/2-wTemp));
    }
    else { // if still not reached middle
        yTemp = yTemp + (h/(4*w))*(wi); // positive gradient
    }

    ctx.lineTo(xTemp,yTemp);
    ctx.lineTo(xTemp,y0);
    ctx.fillStyle = ci;
    ctx.fill();

    return [xTemp,yTemp]
}

function AddNum(xi,yi,wi,h,txt){
    ctx.fillStyle = "white";
    ctx.font = "bold 10px Lato";
    ctx.fillText(txt,xi + wi/2,yi + h/3);
    ctx.font = "bold 20px Lato";
}

// Draw legend at bottom of diagram
function MakeLegend(canH,c1,c2,c3,c4,c5){
    // Using height of canvas, place legend for colours c1-c5
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

    ctx.strokeStyle = c5;
    ctx.fillStyle = c5;

    wTxt = 40 + wTxt + ctx.measureText(txt).width;
    txt = "Offer";
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

// --------------------
// --- Make Diagram ---
// --------------------

// --- Draw legend ---
MakeLegend(canH,cols[0],cols[1],cols[2],cols[3],cols[4]);

// --- Text boxes for offers & rejections ---
let wRect = 125; // width of box
DrawRect(canW-wRect-10,10,wRect,hRect,"black","Offers",boxNums[6].toString());
DrawRect(canW-wRect-10,canH-hRect-40,wRect,hRect,"black","Rejections",boxNums[7].toString());

// --- Make upper and lower lines --- 
ctx.beginPath();
ctx.moveTo(10,10 + hRect/2);
ctx.lineTo(canW-wRect-10,10 + hRect/2);

ctx.moveTo(10,canH - 40 - hRect/2);
ctx.lineTo(canW-wRect-10,canH - 40 - hRect/2);

ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

// --- Waiting responses --- 
let txt = "Waiting Responses";
wRect = ctx.measureText(txt).width + 20; // update rectangle with
let hTot = (canH-30-hRect)/2  - 50; // Vertical position

DrawRect(10,hTot, wRect, hRect,"black",txt,boxNums[0].toString());
let wTot = 10 + wRect; // Horizontal position

DrawLine(wTot + 50, hTot + hRect/2, wTot, hTot + hRect/2, col="black");
wTot = wTot + 50;

// --- Total Applications --- 
txt = "Total";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot,wRect,hRect,"black",txt,boxNums[1].toString());

// arrow for rejections
DrawArrow(wTot+wRect/2,hTot+hRect,(canH-40-hRect/2),rejNums[0][0],rejNums[0][1],rejNums[0][2],rejNums[0][3],cols[0],cols[1],cols[2],cols[3]);
wTot = wTot + wRect;
let wTemp1 = wTot; // temp storage for later use

// Arrow to Online Tests
DrawLine(wTot,hTot+ hRect/2, wTot + 53,hTot + hRect + 3, col="black"); // account for rounding of rectangle by adding 3
wTot = wTot + 50;

// --- Online Tests --- 
txt = "Online Test";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot + hRect,wRect,hRect,"black",txt,boxNums[2].toString());

 // arrow for rejections
DrawArrow(wTot+wRect/2,hTot+2*hRect,(canH-40-hRect/2),rejNums[1][0],rejNums[1][1],rejNums[1][2],rejNums[1][3],cols[0],cols[1],cols[2],cols[3]);
wTot = wTot + wRect;
let wTemp2 = wTot; // temp storage for later use

// Arrow to Withdrew Application
DrawLine(wTot,hTot + 3*hRect/2, wTot + 53,hTot + 2*hRect + 3, col="black"); // account for rounding of rectangle by adding 3
wTot = wTot + 50;

// --- Withdrew Application --- 
txt = "Withdrew Application";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot + 2*hRect,wRect,hRect,"black",txt,boxNums[3].toString());
wTot = wTot + wRect;

// --- 1st Interview --- 
txt = "1st Interview";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot - hRect,wRect,hRect,"black",txt,boxNums[4].toString());

// arrow for offers
DrawArrow(wTot + wRect/2,hTot - hRect, 10 + hRect/2,1,0,0,0,cols[4],"black","black","black");
// arrow for rejections
DrawArrow(wTot + wRect/2,hTot, (canH - 40 - hRect/2),rejNums[2][0],rejNums[2][1],rejNums[2][2],rejNums[2][3],cols[0],cols[1],cols[2],cols[3]);
wTot = wTot + wRect;

DrawLine(wTemp1,hTot + hRect/2,wTot - wRect,hTot - hRect/2, col="black"); // To Total
DrawLine(wTemp2,hTot + 3*hRect/2,wTot - wRect,hTot - hRect/2, col="black"); // To Online tests
DrawLine(wTot - wRect + 3,hTot - 3, wTot - 3*wRect/2,hTot + 2*hRect, col="black"); // To Withdrawn
DrawLine(wTot,hTot - hRect/2, wTot + 50,hTot - hRect/2, col="black"); // To 2nd Interview
wTot = wTot + 50;

// --- 2nd Interview --- 
txt = "2nd Interview";
wRect = ctx.measureText(txt).width + 20;
DrawRect(wTot,hTot - hRect,wRect,hRect,"black",txt,boxNums[5].toString());

// arrow for offers
DrawArrow(wTot + wRect/2,hTot - hRect, 10 + hRect/2,2,0,0,0,cols[4],"black","black","black");
// arrow for rejections
DrawArrow(wTot + wRect/2,hTot, (canH - 40 - hRect/2),rejNums[3][0],rejNums[3][1],rejNums[3][2],rejNums[3][3],cols[0],cols[1],cols[2],cols[3]);
wTot = wTot + wRect;

// --- Offer from rejection --- 
DrawArrow(wTot + wRect/8,(canH - 40 - hRect/2), 10 + hRect/2,1,0,0,0,cols[4],"black","black","black");