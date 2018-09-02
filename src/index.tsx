import { h, render } from 'preact';
import App from './App';

const name = "Chris";
const container = document.getElementById('root') as HTMLElement;

render(
  <App name={name} />,
  container,
  container.lastChild as Element
);
