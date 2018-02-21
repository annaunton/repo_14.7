/*
var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts8 = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts8)
    );
  }
});
*/

var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var listOfContacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    var stylescontactsList = {
      background: '#EEE',
      padding: '20px 0', 
      width: '90%',
      maxWidth: '1000px',
      margin: '0 auto',
      marginTop: '20px'

    };

    return (
      <ul className={'contactsList'} style={stylescontactsList}>
      <listOfContacts/>
      </ul>
    );
  }
});








