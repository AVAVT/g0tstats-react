import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    username : PropTypes.string,
    rank : PropTypes.string
  }

  render() {
    const playerInfo = this.props.username ? <span>for player {this.props.username} ({this.props.rank})</span> : undefined;

    return (
      <header className="header">
  			<div className="container">
  				<div className="row">
  					<div className="col-sm-12">
  						<h1>
                <a href="http://online-go.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://a00ce0086bda2213e89f-570db0116da8eb5fdc3ce95006e46d28.ssl.cf1.rackcdn.com/4.0/img/ogslogo.png" alt="OGS logo"/>
                </a>&nbsp;
                statistics {playerInfo}
              </h1>
  					</div>
  				</div>
  			</div>
  		</header>
    );
  }
}

export default Header;
