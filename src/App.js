import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title.js';
import CoreConcept from './components/CoreConcept/CoreConcept.js';
import TabButton from './components/TabButton/TabButton.js';

import { EXAMPLES } from './data-with-examples.js';
import { CORE_CONCEPTS } from './data-with-examples.js';


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  // let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;

    setSelectedTopic(selectedButton);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Title />

      <main className="App-header">
        <section className="core-ex">
          <h2 className="app-title">Core Concepts</h2>

          <ul className="core-list">
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

            {/*<CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section className="tab-ex">
          <h2 className="app-title">Examples</h2>

          <menu className="tab-list">
            {/* OR <TabButton label="Components" /> */}
            <TabButton 
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

            {!selectedTopic ? (
              <p className="tab-none">Please select a topic.</p>
            ) : (
              <div className="tab-con">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>

                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
        </section>
      </main>
    </div>
  );
}

export default App;
