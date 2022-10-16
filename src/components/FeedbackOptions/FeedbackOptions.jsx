import { Box } from 'components/Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ statOptions, onButtonClick }) => {
  return (
    <Box>
      {statOptions.map(option => {
        return (
          <Button
            key={option}
            type="button"
            name={option}
            onClick={onButtonClick}
          >
            {option}
          </Button>
        );
      })}
    </Box>
  );
};
