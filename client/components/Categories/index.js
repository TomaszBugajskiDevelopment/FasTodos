import { connect } from 'react-redux';

import Categories from './component';
import container from './container';

export default connect(container.mapStateToProps, container.matchDispatchToProps)(Categories);