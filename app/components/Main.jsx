var React = require('react');
var Navigation = require('Navigation');


var Main =  (props) => {
  return (
    <div>


    <div className="row">
      <Navigation />
      <div className="">{props.children}</div>

    </div>

    </div>
  );
}
module.exports = Main;
