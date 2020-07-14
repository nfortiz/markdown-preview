import React from 'react';
import marked from 'marked';

const App: React.FunctionComponent = () => {
  const output = React.useRef(null);
  const [markdown, setMarkdown] = React.useState('');

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
    <main>
      <textarea
        value={markdown}
        onChange={onChange}></textarea>
        <div ref={output}></div>
    </main>
  );
};

export default App;
