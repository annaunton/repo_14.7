/*
var ContactForm = React.createClass({
  
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
});

*/

var ContactForm = React.createClass({
 
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
 
  render: function() {

    var stylesContactForm = {
      width: '90%',
      maxWidth: '1000px',
      margin: '10px auto',
      padding: '60px 40px 20px',
      background: '#EEE',
      textAlign: 'center'
    };

    var stylesContactFormInput = {
      marginLeft: '10px',
      minWidth: '200px',
      height: '30px',
      borderRadius: '2px'
    };

    var stylesContactFormButton {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '16px',
      background: '#ccc',
      color: 'deeppink',
      fontWeight: 'bold',
      display: 'block',
      margin: '30px auto 0',
      width: '150px',
      height: '50px',
      borderRadius: '5px'
    };


    return (
      <form className= {'contactForm'} style={stylesContactForm}>
        <input type= {'text'} placeholder= {'Imię'} value={this.props.contact.firstName} style={stylesContactFormInput} />
        <input type= {'text'} placeholder= {'Nazwisko'} value={this.props.contact.lastName} style={stylesContactFormInput} />
        <input type= {'email'} placeholder= {'Email'} value={this.props.contact.email} style={stylesContactFormInput} />
        <button type= {'submit'} style={stylesContactFormButton} >Dodaj kontakt</button>
      </form>
    )
  },
});



