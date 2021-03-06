import { OutputAction } from '@wlchn/razzle-react-redux-observable-found';
import { Dispatch as ReduxDispatch } from 'redux';

import Action from './Action';

export type Dispatch = ReduxDispatch<OutputAction<Action>>;
