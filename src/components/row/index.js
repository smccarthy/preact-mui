/**
 * MUI Preact Row Module
 * @module preact/row
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Row
 */ 
class Row extends Component {
  render({ children, ...props}){
    return (
    <div class="mui-row" {...props}> 
    {children}
    </div>
    )
  }
}

module.exports = Row;