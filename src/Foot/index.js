export default class Foot extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "nb_bottom_wrap" },
            React.createElement("ul", { className: "nb_bottom_content" },
                React.createElement("li", null,
                    React.createElement(Link, { to: "/index" },
                        React.createElement(SVG, { className: "nb_font", type: "home" }))),
                React.createElement("li", null,
                    React.createElement(Link, { to: "/rank" },
                        React.createElement(SVG, { className: "nb_font", type: "ranking" }))),
                React.createElement("li", null,
                    React.createElement(Link, { to: "/list/:userid" },
                        React.createElement(SVG, { className: "nb_font", type: "my_qbank_list" }))),
                React.createElement("li", null,
                    React.createElement(Link, { to: "/user/:userid" },
                        React.createElement(SVG, { className: "nb_font", type: "account" }))))));
    }
}
