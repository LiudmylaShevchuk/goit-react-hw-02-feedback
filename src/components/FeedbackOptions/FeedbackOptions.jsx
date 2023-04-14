import PropTypes from 'prop-types';
import { BtnList, BtnName, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, handleClick }) => {
    return (
        <>
            <BtnList> {options.map((option, index) => {
                const label = option.charAt(0).toUpperCase() + option.slice(1);
                return (
                    <BtnName key={ index}>
                        <Button type="button" onClick={() => handleClick(option)}>{ label}</Button>
                    </BtnName>
                );
            })}
            </BtnList>
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
};