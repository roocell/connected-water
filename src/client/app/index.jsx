import React from 'react';
import {render} from 'react-dom';


import GoogleMapComponent from './GoogleMapComponent.jsx';

var data = [
    {
        name: 'React.js',
        type: 'library',
        description: 'Awesome library for handling view.',
        followers: 23252,
        worksWithReactabular: true,
        id: 123
    },
    {
        name: 'Angular.js',
        type: 'framework',
        description: 'Swiss-knife of frameworks. Kitchen sink not included.',
        followers: 35159,
        worksWithReactabular: false,
        id: 456
    },
    {
        name: 'Aurelia',
        type: 'framework',
        description: 'Framework for the next generation.',
        followers: 229,
        worksWithReactabular: false,
        id: 789
    },
];

var cx = require('classnames');

var columns = [
    {
        property: 'name',
        header: 'Name',
        headerClass: cx({'name-column': true}), // custom props
    },
    {
        property: 'type',
        header: 'Type',
    },
    {
        property: 'description',
        header: 'Description',
    },
    {
        property: 'followers',
        header: 'Followers',
        // accuracy per hundred is enough for demoing
        cell: (followers) => followers - (followers % 100),
    },
    {
        property: 'worksWithReactabular',
        header: '1st Class Reactabular',
        // render utf ok if works
        cell: (works) => works && <span>&#10003;</span>,
    },
];

var Table = require('reactabular').Table;

class App extends React.Component {

  render() {
    return (
      <div>
        //<GoogleMapComponent />
        <Table columns={columns} data={data} />
      </div>
    );



  }
}

render(<App/>, document.getElementById('app'));

