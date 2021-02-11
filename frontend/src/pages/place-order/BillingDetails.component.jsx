import {
  makeStyles,
  Container,
  Avatar,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import { Receipt } from '@material-ui/icons';
import regionData from '../../utils/region';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const BillingDetails = ({ details, onChange, sameAddress, setSameAddress }) => {
  const classes = useStyles();

  return (
    <Grid item sm={12} md={12} lg={12} xs={12}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Receipt />
          </Avatar>
          <Typography component="h1" variant="h5">
            Billing Address
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Address Line 1"
                  name="addressLine1"
                  value={details.addressLine1}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Address Line 2"
                  name="addressLine2"
                  value={details.addressLine2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel id="stateLabel">State</InputLabel>
                  <Select
                    labelId="stateLabel"
                    label="State"
                    color="secondary"
                    name="state"
                    value={details.state}
                    onChange={onChange}
                  >
                    {regionData.map((state) => (
                      <MenuItem value={state.state} key={state.state}>
                        {state.state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel id="cityLabel">City / Town</InputLabel>
                  <Select
                    labelId="cityLabel"
                    label="City / Town"
                    color="secondary"
                    name="city"
                    value={details.city}
                    onChange={onChange}
                    disabled={!details.state}
                  >
                    {details.state
                      ? regionData
                          .find(({ state }) => details.state === state)
                          .regions.map((region) => (
                            <MenuItem value={region} key={region}>
                              {region}
                            </MenuItem>
                          ))
                      : []}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  InputProps={{ inputProps: { max: 999999 } }}
                  name="pincode"
                  label="Pincode"
                  value={details.pincode}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sameAddress}
                        onChange={(e) => setSameAddress(e.target.checked)}
                      />
                    }
                    label="Shipping address same as billing address?"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center" color="primary">
                  <b>
                    Currently, PCBs are manufactured and shipped within India
                    only.
                  </b>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default BillingDetails;
