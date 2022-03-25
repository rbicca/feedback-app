import { useState } from 'react';
import Button from './shared/Button';
import Card from "./shared/card";

const FeedbackForm = () => {

    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        //console.log(e.target.value);
        setText(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
                {/*  @todo - rating select component  */}
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" version='primary'>Send</Button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;