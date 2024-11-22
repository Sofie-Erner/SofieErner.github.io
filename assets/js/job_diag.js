// This script contains the code to draw a diagram showing data for job seeking

// --- Colours ---
// colourblind-friendly using https://davidmathlogic.com/colorblind/
const c1 = "#D81B60";
const c2 = "#1E88E5";
const c3 = "#FFC107";
const c4 = "#004D40";

// Get canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "bold 20px Lato";
ctx.textBaseline = "middle";

// This script contains the code to draw arrows
// The arrow will be filled with 4 different segments
function DrawArrow(x0=0, y0=0, l1=10, l2=10, l3=10, l4=10, c1="#D81B60", c2="#1E88E5", c3="#FFC107", c4="#004D40"){
    // (x0,y0): starting coordinate from centre of arrow (for reference of placement)
    // l1-l4: the width of the 4 segments
    
    // Define variables
    const l = l1 + l2 + l3 + l4; // total width of arrow

    // Useful x and y coordinates (m for - and p for +)
    const x1m = x0 - l/2;
    const x1p = x0 + l/2;

    const x2m = x0 - l;
    const x2p = x0 + l;

    const y1 = y0 + 3*l/2;
    const y2 = y0 + 5*l/2;

    // Fill 1st segment
    ctx.beginPath();
    ctx.moveTo(x1m,y0);
    ctx.lineTo(x1m,y1);
    ctx.lineTo(x2m,y1);
    ctx.lineTo(x1m + l1,y2 - l1);
    ctx.lineTo(x1m + l1,y0);

    ctx.strokeStyle = c1;
    ctx.stroke();
    ctx.fillStyle = c1;
    ctx.fill();

    // Fill 2nd segment
    ctx.beginPath();
    ctx.moveTo(x1m + l1,y0);
    ctx.lineTo(x1m + l1 + l2,y0);
    ctx.lineTo(x1m + l1 + l2,y2 - l1 + l2);
    ctx.lineTo(x1m + l1,y2 - l1);

    ctx.strokeStyle = c2;
    ctx.stroke();
    ctx.fillStyle = c2;
    ctx.fill();

    // Fill 3nd segment
    ctx.beginPath();
    ctx.moveTo(x1p - l4,y0);
    ctx.lineTo(x1p - l4 - l3,y0);
    ctx.lineTo(x1p - l4 - l3,y2 - l4 + l3);
    ctx.lineTo(x1p - l4,y2 - l4);

    ctx.strokeStyle = c3;
    ctx.stroke();
    ctx.fillStyle = c3;
    ctx.fill();

    // Fill 4th segment
    ctx.beginPath();
    ctx.moveTo(x1p,y0);
    ctx.lineTo(x1p,y1);
    ctx.lineTo(x2p,y1);
    ctx.lineTo(x1p - l4,y2 - l4);
    ctx.lineTo(x1p - l4,y0);

    ctx.strokeStyle = c4;
    ctx.stroke();
    ctx.fillStyle =c4;
    ctx.fill();

    // Draw the outline arrow
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1p,y0);
    ctx.lineTo(x1p,y1);
    ctx.lineTo(x2p,y1);
    ctx.lineTo(x0,y2);
    ctx.lineTo(x2m,y1);
    ctx.lineTo(x1m,y1);
    ctx.lineTo(x1m,y0);
    ctx.lineTo(x0, y0);

    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();
};


function MakeLegend(c1="#D81B60", c2="#1E88E5", c3="#FFC107", c4="#004D40"){
    // Width of Canvas: 1250 & Height: 375
    ctx.strokeStyle = c1;
    ctx.fillStyle = c1;
    let txt = "Rejection No Feedback";
    ctx.fillRect(10,375-30,20,20);
    ctx.fillText(txt,40,375-20);

    ctx.strokeStyle = c2;
    ctx.fillStyle = c2;
    let wTxt = ctx.measureText(txt).width;
    txt = "Rejection Not Useful Feedback";
    ctx.fillRect(50+wTxt,375-30,20,20);
    ctx.fillText(txt,80+wTxt,375-20);

    ctx.strokeStyle = c3;
    ctx.fillStyle = c3;
    wTxt = 40 + wTxt + ctx.measureText(txt).width;
    txt = "Rejection Useful Feedback";
    ctx.fillRect(50+wTxt,375-30,20,20);
    ctx.fillText(txt,80+wTxt,375-20);

    ctx.strokeStyle = c4;
    ctx.fillStyle = c4;
    wTxt = 40 + wTxt + ctx.measureText(txt).width;
    txt = "Not Hiring Anymore";
    ctx.fillRect(50+wTxt,375-30,20,20);
    ctx.fillText(txt,80+wTxt,375-20);
};
// --- Make Diagram ---

DrawArrow(60,20,10,10,10,10,c1,c2,c3,c4);
MakeLegend(c1,c2,c3,c4);