import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Calendar } from '../appointments/Calendar';
import { AllCoaches } from '../coaches/AllCoaches';
import { Trainings } from '../trainings/Trainings';
import { Signin } from '../user/Signin';
import { UserProfile } from '../user/UserProfile';
import { Home } from './Home';

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/Coaches" component={AllCoaches} />
      <Route path="/Calendar" component={Calendar} />
      <Route path="/Trainings" component={Trainings} />
      <Route path="/signin" component={Signin} />
      <Route path="/user/:id" component={UserProfile} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
