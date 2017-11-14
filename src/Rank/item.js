// import './rankItem.scss';
export default class RankItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let index = this.props.index;
        let { nickname, headimgurl, title, scores, challenges, qbanks } = this.props.item;
        let avator = null;
        let fill = '';
        if (!headimgurl) {
            avator = React.createElement(SVG, { type: "avatar_girl", classes: "nb_list_avator nb_font_clear_gap " });
        }
        else {
            avator = React.createElement("img", { className: "nb_list_avator nb_font_clear_gap", src: headimgurl });
        }
        let default_classes = " nb_font_clear_gap nb_font_position";
        switch (index) {
            case 0:
                fill = "nb_font_weak_red";
                break;
            case 1:
                fill = "nb_font_weak_orange";
                break;
        }
        fill = fill + default_classes;
        return (React.createElement("li", { className: "nb_rank_item" },
            index < 3 && React.createElement(SVG, { type: "rank_n", classes: fill }),
            avator,
            React.createElement("span", { className: "nb_rank_nickname" },
                React.createElement("i", { className: "nb_rank_title" },
                    "[",
                    title,
                    "]"),
                nickname),
            React.createElement("p", { className: "nb_rank_repution" },
                React.createElement("i", null,
                    React.createElement(SVG, { type: "total_scores", classes: "nb_font_clear_gap" }),
                    scores),
                React.createElement("i", null,
                    React.createElement(SVG, { type: "challenge", classes: "nb_font_clear_gap" }),
                    challenges),
                React.createElement("i", null,
                    React.createElement(SVG, { type: "qbanks", classes: "nb_font_clear_gap" }),
                    qbanks),
                React.createElement(Link, { to: "", className: "nb_btn nb_btn_outline nb_button_small nb_list_item_btn" },
                    React.createElement(SVG, { type: "start_challenge", classes: "nb_font_clear_gap nb_font_adjust" }),
                    "GO"))));
    }
}
