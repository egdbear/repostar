import React from 'react';
import TabList from './TabList';
import TabPanel from './TabPanel';

import './styles.css';

export default class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  setActiveIndex = (index) => {
    this.setState({activeIndex: index});
  }

  render() {
    const { tabs, components } = this.props;
    const { activeIndex } = this.state;

    return (
      <div>
        <TabList tabs={tabs} activeIndex={activeIndex} setActiveIndex={this.setActiveIndex} />
        <TabPanel activeIndex={activeIndex} components={components} />
      </div>
    );
  }
}
