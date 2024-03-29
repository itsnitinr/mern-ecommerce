import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [layers, setLayers] = useState(2);
  const [thickness, setThickness] = useState(1.6);

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
            type="number"
            required
            fullWidth
            label="Height (in mm)"
            variant="outlined"
            color="secondary"
            value={height}
            onChange={(e) =>
              setHeight(
                Math.min(parseInt(e.target.value), layers === 2 ? 457.2 : 304.8)
              )
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            type="number"
            required
            fullWidth
            label="Width (in mm)"
            variant="outlined"
            color="secondary"
            value={width}
            onChange={(e) =>
              setWidth(
                Math.min(
                  parseInt(e.target.value),
                  layers === 2 ? 457.2 : 1219.2
                )
              )
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="layersLabel">Layers</InputLabel>
            <Select
              labelId="layersLabel"
              label="Layers"
              color="secondary"
              value={layers}
              onChange={(e) => setLayers(e.target.value)}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="thicknessLabel">Thickness</InputLabel>
            <Select
              labelId="thicknessLabel"
              label="Thickness"
              color="secondary"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
            >
              <MenuItem value={0.2}>0.2</MenuItem>
              <MenuItem value={0.4}>0.4</MenuItem>
              <MenuItem value={0.6}>0.6</MenuItem>
              <MenuItem value={0.8}>0.8</MenuItem>
              <MenuItem value={1.0}>1.0</MenuItem>
              <MenuItem value={1.2}>1.2</MenuItem>
              <MenuItem value={1.4}>1.4</MenuItem>
              <MenuItem value={1.6}>1.6</MenuItem>
              <MenuItem value={1.8}>1.8</MenuItem>
              <MenuItem value={2.0}>2.0</MenuItem>
              <MenuItem value={2.2}>2.2</MenuItem>
              <MenuItem value={2.4}>2.4</MenuItem>
              <MenuItem value={2.6}>2.6</MenuItem>
              <MenuItem value={2.8}>2.8</MenuItem>
              <MenuItem value={3.0}>3.0</MenuItem>
              <MenuItem value={3.2}>3.2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Link
            to={`/order?height=${height}&width=${width}&layers=${layers}&thickness=${thickness}`}
          >
            <Button variant="contained" fullWidth color="secondary">
              Place Order
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroForm;
