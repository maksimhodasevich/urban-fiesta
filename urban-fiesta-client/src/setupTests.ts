import Enzyme from 'enzyme';
//TODO: change to official adapter after release
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });