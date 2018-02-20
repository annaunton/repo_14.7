
/*var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});

*/

var Contact = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {

      var stylesContactItem = {
        background: '#ccc',
        margin: '10px auto',
        width: '80%',
        padding: '40px'
      };

      var stylesContacImage = {
        width: '100px',
        float: 'left'
      };

     
      var stylesContactLabel = {
        marginLeft: '150px',
        color: '#fff',
        fontWeight: 'bold',
        textShadow: '2px 2px 5px black'
      };

      var stylesContactEmail
        marginLeft: '50px',
        color: 'deeppink'
      };

    return (
      <div className={'contactItem'} style={stylesContactItem}>
        <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'} style={stylesContactImage}/>
        <p className={'contactLabel'} style={stylesContactLabel}>
          Imię: {this.props.item.firstName}
        </p>
        <p className={'contactLabel'} style={stylesContactLabel}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email} style={stylesContactEmail}>
          {this.props.item.email}
        </a>
      </div>
    )
  },


});




