import Header from './components/Header';
import FeedbackData from './data/feedbackData';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className='container'>
      <Header text={'Feedback UI'} />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
