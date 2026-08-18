async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return 10;
}

function f() {
  wait().then((result) => alert(result));
}

f();
