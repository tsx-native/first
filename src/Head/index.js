// import './Head.scss';
export default class Head extends React.Component {
    render() {
        let { leftType, rightType, centerType, center, title } = this.props;
        const Left = (React.createElement("div", { className: "nb_top_left" }, leftType === "back" ?
            (React.createElement(Link, { to: "" },
                React.createElement(SVG, { type: "back" }))) : (leftType === "home" ? React.createElement(Link, { to: "/index" },
            React.createElement(SVG, { type: "home" })) : this.props.children)));
        const Right = (React.createElement("div", { className: "nb_top_right" }, rightType === "account" ?
            (React.createElement(Link, { to: "" },
                React.createElement(SVG, { type: "account" }))) : (rightType === "add" ? React.createElement(Link, { to: "" },
            React.createElement(SVG, { type: "add" })) : this.props.children)));
        const Center = (React.createElement("div", { className: "nb_top_center" }, centerType === "title" ? React.createElement("h3", null, title) : this.props.children));
        return (React.createElement("div", { className: "nb_top_wrap" },
            React.createElement("div", { className: "nb_top_content" },
                Left,
                Center,
                Right)));
    }
}
