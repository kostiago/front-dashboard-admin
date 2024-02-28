import { topDealUsers } from '../../data';
import './topBox.scss';

const TopBox = () => {
  const filteredUsers = topDealUsers.filter((user) => user.role === 'user');
  return (
    <>
      <section className="topBox">
        <div className="list" title="Batata" aria-label="BATATA">
          <h1>Clientes recentes</h1>
          {filteredUsers.map((user) => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <span className="clientProcess">{user.clientProcess}</span>
              <span className="partProcess">{user.partProcess}</span>
            </div>
          ))}
        </div>

        <div className="list">
          <h1>Ultimos recentes</h1>
          {filteredUsers.map((user) => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <span className="clientProcess">{user.clientProcess}</span>
              <span className="partProcess">{user.partProcess}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopBox;
