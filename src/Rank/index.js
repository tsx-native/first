import test_data from '../test_data';
export default class Rank extends React.Component {
    render() {
        return (React.createElement("div", { className: "nb_wrap" },
            React.createElement(Head, { leftType: "home", rightType: "account", centerType: "title", title: "NBbrain" }),
            React.createElement("div", { className: "nb_content" },
                React.createElement("nav", { className: "nb_rank_nav" },
                    React.createElement(Link, { to: "/rank", className: "nb_btn nb_btn_primary" }, "\u6311\u6218\u6392\u884C\u699C"),
                    React.createElement(Link, { to: "/qbank_ranking", className: "nb_btn nb_btn_outline" }, "\u9898\u5E93\u6392\u884C\u699C")),
                React.createElement("ul", { className: "nb_rank_list" }, test_data.rank.data.map((item, index) => React.createElement(RankItem, { key: index, index: index, item: item })))),
            React.createElement(Foot, null)));
    }
}
