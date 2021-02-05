import {
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Card,
  TableContainer,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  tableContainer: {
    width: '100%',
  },
});

const PCBDetails = ({
  details,
  onChange,
  price,
  onHeightChange,
  onWidthChange,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item sm={8}>
        <form>
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Height (in mm)"
                variant="outlined"
                color="secondary"
                name="height"
                InputProps={{ inputProps: { min: 1 } }}
                value={details.height}
                onChange={onHeightChange}
                required
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Width (in mm)"
                variant="outlined"
                color="secondary"
                name="width"
                InputProps={{ inputProps: { min: 1 } }}
                value={details.width}
                onChange={onWidthChange}
                required
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Quantity"
                variant="outlined"
                color="secondary"
                name="quantity"
                InputProps={{ inputProps: { min: 1 } }}
                value={details.quantity}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="layersLabel">Layers</InputLabel>
                <Select
                  labelId="layersLabel"
                  label="Layers"
                  color="secondary"
                  name="layers"
                  value={details.layers}
                  onChange={onChange}
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="thicknessLabel">Thickness</InputLabel>
                <Select
                  labelId="thicknessLabel"
                  label="Thickness"
                  color="secondary"
                  name="thickness"
                  value={details.thickness}
                  onChange={onChange}
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
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="colorLabel">Color</InputLabel>
                <Select
                  labelId="colorLabel"
                  label="Color"
                  color="secondary"
                  name="color"
                  value={details.color}
                  onChange={onChange}
                >
                  <MenuItem value="Green">Green</MenuItem>
                  <MenuItem value="Red">Red</MenuItem>
                  <MenuItem value="Yellow">Yellow</MenuItem>
                  <MenuItem value="Blue">Blue</MenuItem>
                  <MenuItem value="White">White</MenuItem>
                  <MenuItem value="Black">Black</MenuItem>
                  <MenuItem value="No Solder Mask">No Solder Mask</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="sfLabel">Surface Finish</InputLabel>
                <Select
                  labelId="sfLabel"
                  label="Surface Finish"
                  color="secondary"
                  name="surfaceFinish"
                  value={details.surfaceFinish}
                  onChange={onChange}
                >
                  <MenuItem value="HASL">HASL</MenuItem>
                  <MenuItem value="No Surface Finish">
                    No Surface Finish
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="cwLabel">Copper Weight</InputLabel>
                <Select
                  labelId="cwLabel"
                  label="Copper Weight"
                  color="secondary"
                  name="copperWeight"
                  value={details.copperWeight}
                  onChange={onChange}
                >
                  <MenuItem value={35}>35 µm</MenuItem>
                  <MenuItem value={70}>70 µm</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="gfLabel">Gold Fingers</InputLabel>
                <Select
                  labelId="gfLabel"
                  label="Gold Fingers"
                  color="secondary"
                  name="goldFingers"
                  value={details.goldFingers}
                  onChange={onChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="fptLabel">Flying Probe Test</InputLabel>
                <Select
                  labelId="fptLabel"
                  label="Flying Probe Test"
                  color="secondary"
                  name="flyingProbeTest"
                  value={details.flyingProbeTest}
                  onChange={onChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="chLabel">Castellated Holes</InputLabel>
                <Select
                  labelId="chLabel"
                  label="Castellated Holes"
                  color="secondary"
                  name="castellatedHoles"
                  value={details.castellatedHoles}
                  onChange={onChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                fullWidth
                label="Remarks"
                variant="outlined"
                color="secondary"
                multiline
                rows={3}
                name="remarks"
                value={details.remarks}
                onChange={onChange}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item sm={4}>
        <Typography gutterBottom variant="h4" color="secondary">
          Cost Breakdown
        </Typography>
        <TableContainer className={classes.tableContainer} component={Card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Cost Type</b>
                </TableCell>
                <TableCell>
                  <b>Price</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="row">PCB Cost</TableCell>
                <TableCell>₹ {price.orderPrice || 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Tax</TableCell>
                <TableCell>₹ {price.taxPrice || 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Shipping</TableCell>
                <TableCell>₹ {price.shippingPrice || 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <b>Estimated Total Cost</b>
                </TableCell>
                <TableCell>
                  <b>
                    ₹{' '}
                    {Math.round(
                      ((price.orderPrice || 0) +
                        (price.taxPrice || 0) +
                        (price.shippingPrice || 0)) *
                        100
                    ) / 100}
                  </b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default PCBDetails;
