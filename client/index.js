import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const appDiv = document.querySelector('#app');

class Home extends Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    axios.get('/api/pokemon')
      .then(res => {
        this.setState({
          pokemon: res.data,
        });
      })
      .catch(e => {
        console.log('Failure while fetching pokemon.');
        console.error(e);
      });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
        }}
      >
        {
          pokemon.map(p => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'solid 2px black',
                  margin: '1em',
                  padding: '1em',
                }}
              >
                <h3> { p.name } </h3>
                <h4> Level: { p.level } </h4>
                <img src={p.imageUrl} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  appDiv,
  () => {
    console.log('Application rendered.');
  },
);
