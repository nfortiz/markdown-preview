import React from 'react';
import marked from 'marked';

import Header from './components/Header';

const App: React.FunctionComponent = () => {
  const output = React.useRef(null);
  const [markdown, setMarkdown] = React.useState('# Hello world \n');

  React.useEffect(() => {
    const htmlOutput = marked(markdown);
    if (output.current) {
      output.current.innerHTML = htmlOutput;
    }    
  }, [markdown, output])
  
  function onChange (e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(e.target.value)
  }
  return (
    <div><Header />
    <main className='content'>
      <textarea
        className='user-input'
        value={markdown}
        onChange={onChange}></textarea>
        <div 
        ref={output}
        className='html-output'></div>
    </main>
    </div>
  );
};

export default App;
