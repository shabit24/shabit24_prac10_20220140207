import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      
      <div className="container">
      <div className="header">
        <h1>Welcome to My React App</h1>
        <h2>A demonstration of various HTML tags</h2>
      </div>
      <div className="content">
        <div className="text">
          <p>
            This is a paragraph demonstrating the use of the <code>&lt;p&gt;</code> tag.
            Paragraphs are block-level elements that are used to group related content together.
            The CSS class <code>.text</code> is used to style this text.
          </p>
        </div>
        <div className="image">
          <img src="https://via.placeholder.comhttps://cdn.prod.website-files.com/65943d23dc44e6ce92eb6b67/65fc9f534c1398dac499304d_commercial_search-p-800.jpg/300" alt="Placeholder" />
        </div>
      </div>
      <div className="footer">
        <a href="https://reactjs.org" className="button" target="_blank" rel="noopener noreferrer">
          Learn More About React
        </a>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));