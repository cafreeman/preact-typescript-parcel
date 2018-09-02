import { h, Component } from 'preact';
import './App.css';

interface Props {
  name: string
}

export default class App extends Component<Props> {
  render({ name }: Props) {
    return (
      <p>Hello {name}! This is a Preact app.</p>
    );
  }
}
