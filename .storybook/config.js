import { configure } from '@kadira/storybook';
import '../scss/main.scss';
// import '../styles/yourCSS.scss'; your css here!

function loadStories() {
  require('../components/stories/button');
  // require as many as stories you need.
}

configure(loadStories, module);
