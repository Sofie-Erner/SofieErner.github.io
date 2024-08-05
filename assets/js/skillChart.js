const xValues = [["HTML","JavaScript","CSS","PowerBI"],
    ["Mathematica","LaTeX"],
    ["C/C++","Linux","Bash","MatLab","Git","Microsoft"],
    ["Python"],["CI","Unit Testing"],["Project","Management"],["Team","Management"],
    ["Critical","Thinking","","Problem","Solving"]];

const yLabels = ["","Familiar","Experienced","Proficient"];
const yValues = [1,3,2,3,1,2,1,3];

var ctx = document.getElementById("skillChart").getContext("2d")
var skillChart2 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(30, 123, 153, 0.5)",
      borderColor: "rgba(30, 123, 153, 1)", /*"#1E7B99",*/
      borderWidth: 1,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "Skills"
    },
    scales: {
      xAxes: [{gridLines: {drawOnChartArea: false}}],
      yAxes: [{
        display: true,
        ticks: {beginAtZero: true, 
          callback: function(value, index, ticks){
          if (value == 1) {return "Familiar"}
          else if (value == 2) {return "Experienced"}
          else if (value == 3) {return "Proficient"}
        } },
        gridLines: {drawOnChartArea: false}}],
    }
  }
});