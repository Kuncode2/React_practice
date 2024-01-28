const kunal = React.createElement('h1', {
    id: "title",
    key: "ke"
}, "Kunal");

const kun = React.createElement('h2', {
    id: "title2",
    key:"ke2"
}, "Kun");

const oot = React.createElement("div", {
    id: "ar",
}, [kunal, kun]);

const rootElement = document.getElementById("root");
ReactDOM.render(oot, rootElement);