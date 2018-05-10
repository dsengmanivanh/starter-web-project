import _ from 'lodash';
import { cube } from './math.js';
import '../scss/page.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var elementPre = document.createElement('pre');
   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  //lazy load
/*  btn.onclick = e => import('./print').then(module => {
    var print = module.default;
    print();
  });*/

  elementPre.innerHTML = [
       'Hello webpack!',
       '5 cubed is equal to ' + cube(5)
     ].join('\n\n');

  element.appendChild(btn);
  element.appendChild(elementPre);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // Re-render the "component" to update the click handler
     document.body.appendChild(element);
   })
}
