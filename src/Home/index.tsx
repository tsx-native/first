import Item from './item';
export default class Home extends React.Component{
  render(){
      return (
          <div className="nb_wrap">
              <Head leftType="home" rightType="account" centerType="title" title="NBbrain"/>
              <div className="nb_content">
                  <h2 className="nb_home_title">最近挑战过的题目</h2>
                  <ul className="nb_list">
                      {test_data.home.data.map((item,index) => <Item key={index} item={item}/>)}
                  </ul>
                  <h2 className="nb_home_title">最新题目</h2>
                  <ul className="nb_list">
                      {test_data.home.data.map((item,index) => <Item key={index} item={item}/>)}
                  </ul>
              </div>
              <Foot/>
          </div>
      );
  }
}
