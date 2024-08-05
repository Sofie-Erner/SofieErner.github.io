function create() {
    var box = document.createElement("funcTest");
    box.setAttribute('class', 'itembox')
    var holder = document.createElement("p");
    holder.setAttribute('class', 'output');
    // You can set the inner text of the p tag without creating a text node.
    holder.innerText = "The text in the box"
    box.appendChild(holder);
    // Trades should be an element with and ID because you probably only ever want to insert into one place.
    var trades = document.getElementById("trades");
    trades.appendChild(box);
  }

  function changeColor() {
    document.getElementById("myButt").className = "button experience2";
  }