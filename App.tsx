import React from 'react';
import marked from 'marked';

import Header from './components/Header';

const App: React.FunctionComponent = () => {
  const output = React.useRef(null);
  const [markdown, setMarkdown] = React.useState('# Hello world \n');

  React.useEffect(() => {
    function onResize(x){
      if(output.current && x.matches){

        console.log('The screen has <600px width');

      } else {
        console.log('The screen has >600px width');
      }
    }

    const matchWindow = window.matchMedia('(max-width: 600px)');
    onResize(matchWindow);
    matchWindow.addListener(onResize);

    return () => {
      matchWindow.removeListener(onResize);
    };

  }, []);

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
