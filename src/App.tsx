import { h, Component } from 'preact';

interface Props {
  name: string
}

export default class App extends Component<Props> {
  render({ name }: Props) {
    return (
      <div>Hello {name}! This is a Preact app.</div>
    );
  }
}
