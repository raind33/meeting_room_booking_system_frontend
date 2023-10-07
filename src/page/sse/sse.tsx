import { useEffect } from 'react';

function SseTest() {

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3002/stream2');
    eventSource.onmessage = ({ data }) => {
      console.log('New message', JSON.parse(data));
    };
  }, []);

  return (
    <div>hello32</div>
  );
}

export default SseTest;