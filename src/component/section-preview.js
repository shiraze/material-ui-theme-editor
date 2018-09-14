import React from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import PreviewDisplay from './preview';
import ViewSelector from './view-selector';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  },
  selector: {
    alignSelf: 'center',
    margin: theme.spacing.unit,
  },
  container: {
    alignSelf: 'center',
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    margin: theme.spacing.unit,
    width: '100%',
  },
  desktop: {
  },
  mobile: {
    maxWidth: 350,
    maxHeight: 650,
  },
});

class SectionPreview extends React.PureComponent {
  render() {
    const { classes, rootClassName } = this.props;
    return (
      <section className={cn(classes.root, rootClassName)}>
        <div className={classes.selector}>
          <ViewSelector
            className={classes.selector}
            onChange={this.props.onChange}
            value={this.props.view}
          />
        </div>
        <Card
          className={cn(classes.container, {
            [classes.desktop]: this.props.view === 'desktop',
            [classes.mobile]: this.props.view === 'mobile',
          })}
        >
          <PreviewDisplay theme={this.props.theme} />
        </Card>
      </section>
    );
  }
}

export default withStyles(styles)(SectionPreview);
