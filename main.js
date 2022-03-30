let i = 0;
const hello = () => {
  console.log(i);
  i += 1;

  return (document.getElementById("button").innerHTML = "Hello Jan");
};
