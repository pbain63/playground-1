class Button {
    constructor(value) {
        this.value = value;
    }

    click = () => {
        alert(this.value);
    }
}

const button = new Button("hello");
setTimeout(button.click, 1000);