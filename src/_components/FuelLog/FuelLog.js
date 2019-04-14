import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function FuelLog(props) {
  const { classes, date, odometer, tripometer, fuelVolume, price } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm container>
            
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>

                <Typography gutterBottom variant="subtitle1">{date}</Typography>

                <Typography gutterBottom>{odometer}</Typography>
                <Typography gutterBottom>Trip: {tripometer}</Typography>
                <Typography color="textSecondary">Fuel: {fuelVolume}</Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">${price}</Typography>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

FuelLog.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  odometer: PropTypes.string.isRequired,
  tripometer: PropTypes.string.isRequired,
  fuelVolume: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default withStyles(styles)(FuelLog);