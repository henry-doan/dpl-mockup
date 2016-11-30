import React from 'react';

const App = ({ children }) => (
  <div>
    <div className="container">
        
	    <div className="card card-block">
	        <p className="card-text">Bootsrap-flex has the option of auto layout - columns share equally the available space in a row unless a specific size is assigned.</p>
	    </div>

	    <div className="row">
	        <div className="col-xs">.col-xs <br/> 1 of 3 (33%)</div>
	        <div className="col-xs">.col-xs <br/> 1 of 3 (33%)</div>
	        <div className="col-xs">.col-xs <br/> 1 of 3 (33%)</div>
	    </div>
	    <div className="row">
	        <div className="col-xs">.col-xs <br/> 1 of 1 (100%)</div>
	    </div>
	    <div className="row">
	        <div className="col-xs">.col-xs <br/> 1 of 2 (50%)</div>
	        <div className="col-xs">.col-xs <br/> 1 of 2 (50%)</div>
	    </div>
	    <div className="row">
	        <div className="col-xs-8">.col-xs-8 <br/> Fixed 8 of 12 (66%), the other columns in the row will split the remaining 4 (33%) </div>
	        <div className="col-xs">.col-xs</div>
	        <div className="col-xs">.col-xs</div>
	    </div>

		</div>
    { children }
  </div>
)

export default App;

