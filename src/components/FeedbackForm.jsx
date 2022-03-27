import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from "./shared/card";

const FeedbackForm = ({handleAdd}) => {

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = ({target: {value}}) => {
        //console.log(e.target.value);
        if(value === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if (value !== '' && value.trim().length < 10){
            setBtnDisabled(true);
            setMessage('Review must be at least 10 chars.');            
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }


        setText(value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length >9){
            const newFeedback = {
                text,
                rating
            };
            handleAdd(newFeedback);
            setText('');
        }

    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service?</h2>
                <RatingSelect select={ (rating) => console.log(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" version='primary' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div> }
            </form>
        </Card>
    );
};

export default FeedbackForm;