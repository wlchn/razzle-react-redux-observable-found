import { OutputEpic } from '@wlchn/razzle-react-redux-observable-found';

import Action from './Action';
import State from './State';

type Epic = OutputEpic<Action, State>;

export default Epic;
