const hello = () => {
  var name = document.getElementById("button").innerHTML;
  if (name === "Click me") {
    return (document.getElementById("button").innerHTML = "Hello Jan");
  } else {
    return (document.getElementById("button").innerHTML = "Click me");
  }
};
