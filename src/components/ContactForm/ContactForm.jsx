import { useState } from 'react';
// import { nanoid } from 'nanoid';
import {
  StyledInput,
  StyledForm,
  StyledName,
  StyledFormButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // console.log(setNumber);
  return (
    <StyledForm>
      {/* // onSubmit={this.handleSubmit}> */}
      <StyledName>Name</StyledName>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // id={this.loginInputName}
        onChange={handleChange}
        value={name}
      />
      <StyledName>Number</StyledName>
      <StyledInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // id={this.loginInputnumber}
        onChange={handleChange}
        value={number}
      />
      <StyledFormButton type="submit">Add Contacts</StyledFormButton>
    </StyledForm>
  );
};

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };
// export class ContactForm extends Component {
//   state = { ...INITIAL_STATE };

//   loginInputName = nanoid();
//   loginInputnumber = nanoid();

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <StyledForm onSubmit={this.handleSubmit}>
//         <StyledName>Name</StyledName>
//         <StyledInput
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id={this.loginInputName}
//           onChange={this.handleChange}
//           value={name}
//         />
//         <StyledName>Number</StyledName>
//         <StyledInput
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           id={this.loginInputnumber}
//           onChange={this.handleChange}
//           value={number}
//         />
//         <StyledFormButton type="submit">Add Contacts</StyledFormButton>
//       </StyledForm>
//     );
//   }
// }
