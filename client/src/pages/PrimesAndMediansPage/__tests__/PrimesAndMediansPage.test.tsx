import renderer from 'react-test-renderer';

import PrimeNosContainer from '../../../containers/PrimeNosContainer';

it("should render a greeting", () => {
  const tree = renderer.create(<PrimeNosContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
