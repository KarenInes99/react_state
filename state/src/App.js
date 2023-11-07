import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialisation l'état du composant
    this.state = {
      person: {
        fullName: 'Ines Karen',
        bio: 'I am a web developer',
        imgSrc: '/images/téléchargement.png',
        profession: 'Web Developer',
      },
      show: true,
      timeSinceMount: 0,
    };
  }
  toggleDisplay = () => { //fonction appelee quand le bouton est appuyé
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    // Démarrer une minuterie lorsque le composant est monté
    this.intervalTimer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Actualiser chaque 1 second (1000 millisecondes)
  }

  componentWillUnmount() {
    // Effacer le timer lorsque le composant est démonté pour éviter les fuites de mémoire
    clearInterval(this.intervalTimer);
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
     
      <div>
        {this.state.show ? (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} style={{}} />
            <p>Profession: {profession}</p>
          </div>
        ) : (
          <p>Cliquer ici pour voir les informations d'une personne</p>
        )}

    <p>Temps écoulé: {this.state.timeSinceMount} seconds</p>
        <button onClick={this.toggleDisplay}>
          {this.state.show ? 'Cacher Infos' : 'Voir Infos'}
        </button>
      </div>
    );
  }
}

export default App;




