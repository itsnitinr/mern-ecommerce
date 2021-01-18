import {
  Typography,
  Grid,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@material-ui/core';
import useStyles from './HeroForm.styles';

const HeroForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroForm}>
      <Typography
        variant="h5"
        color="primary"
        style={{ marginBottom: '1.5rem' }}
      >
        Get a Quote
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            fullWidth
            label="Height (in cm)"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            fullWidth
            label="Width (in cm)"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="layersLabel">Layers</InputLabel>
            <Select labelId="layersLabel" label="Layers" color="secondary">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="thicknessLabel">Thickness</InputLabel>
            <Select labelId="thicknessLabel" label="Layers" color="secondary">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth color="secondary">
            Place Order
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroForm;
