import Item from './item';
import test_data from '../test_data';
export default class Rank extends React.Component{
  render(){
      return (
          <div className="nb_wrap">
              <Head leftType="home" rightType="account" centerType="title" title="NBbrain"/>
              <div className="nb_content">
                  <nav className="nb_rank_nav">
                    <Link to="/rank" className="nb_btn nb_btn_primary">挑战排行榜</Link>
                    <Link to="/qbank_ranking" className="nb_btn nb_btn_outline">题库排行榜</Link>
                  </nav>
                  <ul className="nb_rank_list">
                      {test_data.rank.data.map((item,index) => <RankItem key={index}  index={index} item={item}/>)}
                  </ul>
              </div>
              <Foot/>
            </div>
        );
    }
}
