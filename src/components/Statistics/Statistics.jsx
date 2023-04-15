import PropTypes from 'prop-types';
import { Votes, Vote, Name, Rate } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, totalVotes, positivePercentage }) => { 
    return (
        <>
            <Votes>
                <Vote>
                    <Name>Good:</Name>
                    <Rate>{ good}</Rate>
                </Vote>
                <Vote>
                    <Name>Neutral:</Name>
                    <Rate>{ neutral}</Rate>
                </Vote>
                <Vote>
                    <Name>Bad:</Name>
                    <Rate>{ bad}</Rate>
                </Vote>
                <Vote>
                    <Name>Total:</Name>
                    <Rate>{ totalVotes}</Rate>
                </Vote>
                <Vote>
                    <Name>Positive feedback:</Name>
                    <Rate>{ positivePercentage}%</Rate>
                </Vote>

            </Votes>
        </>       
    );
};

Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    totalVotes:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
};