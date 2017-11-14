import Item from './item';
export default class Home extends React.Component {
    render() {
        return (React.createElement("div", { className: "nb_wrap" },
            React.createElement(Head, { leftType: "home", rightType: "account", centerType: "title", title: "NBbrain" }),
            React.createElement("div", { className: "nb_content" },
                React.createElement("h2", { className: "nb_home_title" }, "\u6700\u8FD1\u6311\u6218\u8FC7\u7684\u9898\u76EE"),
                React.createElement("ul", { className: "nb_list" }, test_data.home.data.map((item, index) => React.createElement(Item, { key: index, item: item }))),
                React.createElement("h2", { className: "nb_home_title" }, "\u6700\u65B0\u9898\u76EE"),
                React.createElement("ul", { className: "nb_list" }, test_data.home.data.map((item, index) => React.createElement(Item, { key: index, item: item })))),
            React.createElement(Foot, null)));
    }
}
