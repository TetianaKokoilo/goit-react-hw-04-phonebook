import PropTypes from 'prop-types';
import { StyledLabel, StyledFilterInput } from './Filter.styled';

export const Filter = ({ filter }) => {
  return (
    <StyledLabel>
      Find contacts by name
      <StyledFilterInput type="text" onChange={filter} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
}