import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../theme';
import ScoreCard from './ScoreCard.js';

storiesOf('ScoreCard', module)
  .addDecorator(story => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', backgroundColor: '#2d2d2d', minHeight: '100vh' }}>
      <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
        {story()}
      </div>
    </div>
  ))
  .addDecorator(muiTheme([
    'Light Theme',
    'Dark Theme',
    theme,
  ]))
  .add('classic, bad rank', () => (
    <ScoreCard fullName="Marc Nitzsche" rank={1} />
  ))
  .add('classic, top rank', () => (
    <ScoreCard fullName="Jonas Klein" rank={4} />
  ))
  .add('has alias', () => (
    <ScoreCard fullName="Marc Nitzsche" rank={1} hasAlias />
  ));
