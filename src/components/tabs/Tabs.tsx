import React from 'react';
import './tabs.scss';

const Tabs = ({ children }) => {
  return (
    <section>
      <ul className="tabs">
        {React.Children.map(children, (tab) => {
          <li>{tab.props.title}</li>;
        })}
      </ul>

      {React.Children.map(children, (one) => (
        <div key={one.props.label} className="content">
          {one.props.children}
        </div>
      ))}
    </section>
  );
};

export default Tabs;
