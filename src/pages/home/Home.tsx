import ChartBox from '../../components/chartBox/ChartBox';
import TopBox from '../../components/topBox/TopBox';
import { chartBoxUser } from '../../data';
import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="box box-1">
        <TopBox />
      </div>

      <div className="box box-3">
        <ChartBox {...chartBoxUser} />
      </div>

      <div className="box box-7"></div>
    </section>
  );
};

export default Home;
