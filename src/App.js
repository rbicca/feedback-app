import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')){
        console.log('App', id);
        setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (feed) => {
    feed.id = uuidv4();
    setFeedback( [feed, ...feedback] );
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>    
    </>
  );
}

export default App;
