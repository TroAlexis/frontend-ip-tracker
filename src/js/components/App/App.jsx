import React, { Component } from 'react';

//SCSS
import 'Scss/shared';
import './App.module';

//Components
import Title from 'Components/title/title';
import SearchField from 'Components/searchField/searchField';
import IpInfo from 'Components/ipInfo/ipInfo';
import MyMap from 'Components/map/map';

const apiKey = 'at_OyIddYoBB4KF8O5Y6kYpflQtOhBui';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.placeholder = '-------'

    this.state = {
      ipData: {},
      ip: '',
    };
  }

  componentDidMount() {
    this.getIpData();
  }

  getIpData = () => {
    const { ip } = this.state;

    fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({ ipData: data }, () => {
        });
      }).catch(err => alert('The given address is not correct or doesn\'t exist. Try again, please.'));

  }

  handleClick = (e) => {
    this.setState({ ip: e.target.previousElementSibling.value.toString() }, () => {
      this.getIpData();
    });
  }

  render() {
    const { ipData } = this.state;

    return pug`
      .container
        .tracker
          Title(text="IP Address Tracker")
          
          SearchField(placeholder="Search for any IP address or domain", clickHandler=this.handleClick, styleName="search")
          
          IpInfo(ipData=this.state.ipData, styleName="results")
      
        .map
          MyMap(lat=ipData.location && ipData.location.lat lng=ipData.location && ipData.location.lng zoom=14)
    `;
  }
}
