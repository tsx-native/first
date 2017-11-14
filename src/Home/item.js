export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { basic_message, qbank } = this.props.item;
        let avator = null;
        if (!basic_message.headimgurl) {
            avator = React.createElement(SVG, { type: "avatar_girl", classes: "nb_list_avator nb_font_span " });
        }
        else {
            avator = React.createElement("img", { className: "nb_list_avator", src: basic_message.headimgurl });
        }
        return (React.createElement("li", { className: "nb_list_item" },
            React.createElement("div", { className: "nb_list_qbnk" },
                React.createElement("p", { className: "nb_qbank_matrial" },
                    React.createElement("img", { src: qbank.qbank_material_url })),
                React.createElement("h4", { className: "nb_list_qbank_name" }, qbank.qbank_name),
                React.createElement("div", { className: "nb_list_qbank_value" },
                    React.createElement("p", null,
                        React.createElement(SVG, { type: "total_score", classes: "nb_font_weak_yeallow nb_font_span nb_font_large nb_font_align" }),
                        qbank.total_score),
                    React.createElement("p", null,
                        React.createElement(SVG, { type: "challenge_now", classes: "nb_font_weak_yeallow nb_font_span nb_font_large nb_font_align" }),
                        qbank.challenge_total),
                    React.createElement("p", null,
                        React.createElement(SVG, { type: "collection_n", classes: "nb_font_weak_yeallow nb_font_span nb_font_large nb_font_align" }),
                        qbank.collect_total))),
            React.createElement("div", { className: "nb_list_user" },
                avator,
                React.createElement("span", { className: "nb_list_message" },
                    React.createElement("i", { className: "nb_user_name" }, basic_message.nickname),
                    React.createElement("i", { className: "nb_user_title" }, basic_message.title)),
                React.createElement(Link, { to: "", className: "nb_btn nb_btn_outline nb_button_small nb_list_item_btn" },
                    React.createElement(SVG, { type: "start_challenge", classes: "nb_font_clear_gap nb_font_adjust" }),
                    "GO"))));
    }
}
