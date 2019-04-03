import Axes from './Axes';
import Group from './Group';
import Text from './Text';
import Arrow from './Arrow';

class TfFrame extends Group {
  constructor(name) {
    super();
    this.add(new Axes(0.015, 0.25));
    const textObject = new Text(name);
    textObject
      .rotateY(Math.PI)
      .translateX(0.03)
      .translateY(0.03);
    this.add(textObject);
    this.arrow = new Arrow(0.025);
    this.add(this.arrow);
    this.name = name;
  }
}

export default TfFrame;