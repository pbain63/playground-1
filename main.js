async function f() {
  try {
    let response = await fetch("https://no-such-url");
  } catch (error) {
    alert(error);
    // console.log(error);
    // console.error(error);
    
    
  }
}
f();
