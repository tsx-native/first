export default class SVG extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { type, classes, style } = this.props;
        let svg = require(`../../../icon/${type}.svg`) || {};
        classes = !!classes ? "nb_font " + classes : "nb_font";
        // let names = names_ICON();
        // console.log(names);
        return (React.createElement("svg", { className: classes, style: style },
            React.createElement("use", { className: "nb_use", xlinkHref: svg.default })));
    }
}
