import { Box } from 'components/Box';
import { StatElement, StatName, StatCount } from './Statistics.styled';

export const Statistics = ({
  stats,
  statOptions,
  total,
  positivePercentage,
}) => {
  return (
    <Box mt="20px">
      {statOptions.map(option => {
        return (
          <StatElement key={option}>
            <StatName>{option}</StatName>
            <StatCount>{stats[option]}</StatCount>
          </StatElement>
        );
      })}
      <StatElement>
        <StatName>Total</StatName>
        <StatCount>{total}</StatCount>
      </StatElement>
      {
        <StatElement>
          <StatName>Positive:</StatName>
          <StatCount>{positivePercentage ? positivePercentage : 0}%</StatCount>
        </StatElement>
      }
    </Box>
  );
};
