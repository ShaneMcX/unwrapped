import React from 'react';
import { render } from 'react-dom';
import Grid from 'material-ui-next/Grid'

const App = () => (
  <div>
    <Grid container wrap="wrap">
      <Grid item>
        This is some text that should be wrapped. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Fugit magnam omnis eius ad quam ipsam
        dolorum iure itaque placeat fugiat animi iusto, asperiores nam
        architecto sit suscipit voluptates voluptate minima! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Non, sunt fuga, doloremque,
        praesentium quod nulla tempore delectus deserunt veritatis quae ducimus
        temporibus. Recusandae alias, numquam eaque repudiandae aperiam rem quo?
      </Grid>
      <hr />
      This is some text that is wrapped. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Fugit magnam omnis eius ad quam ipsam dolorum iure
      itaque placeat fugiat animi iusto, asperiores nam architecto sit suscipit
      voluptates voluptate minima! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Non, sunt fuga, doloremque, praesentium quod nulla
      tempore delectus deserunt veritatis quae ducimus temporibus. Recusandae
      alias, numquam eaque repudiandae aperiam rem quo?
    </Grid>
  </div>
)


render(<App />, document.getElementById('root'));
