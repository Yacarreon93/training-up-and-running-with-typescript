import React from 'react'; // to import this way, use tsconfig file, otherwise use "import * as React from 'react'"
import { render } from 'react-dom';

// vscode suggests to install some typescript types packages

class App extends React.Component {
    // render() {} // in case nothing is returned from render, typescript will show you some problems

    render () {
        return <div>Hi</div>;
    }
};

render(<App />, document.getElementById('app'));
