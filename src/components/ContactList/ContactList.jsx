import PropTypes from 'prop-types';
import { StyledText, StyledList, StyledItems, StyledContactButton } from './ContactList.styled'

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <StyledItems key={id}>
          <StyledText>{name}:</StyledText>
          <StyledText>{number}</StyledText>
          <StyledContactButton type="button" onClick={() => onDelete(id)}>
            Delete
          </StyledContactButton>
        </StyledItems>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
