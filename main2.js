import { cube, foo, graph } from "./main.js";

graph.options = {
    color: "blue",
    thickness: "3px",
};

graph.draw();
console.log(cube(3));
console.log(foo);
