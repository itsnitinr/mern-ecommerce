import {
  Grid,
  TextField,
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
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles({
  tableContainer: {
    width: '100%',
  },
  heading: {
    borderBottom: '5px solid #54be73',
    marginBottom: '1.5rem',
    width: '225px',
  },
});

const PCBDetails = ({
  details,
  onChange,
  price,
  onHeightChange,
  onWidthChange,
  onButtonChange,
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
            <TableContainer>
              <TableRow>
                <TableCell>Layers</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={parseInt(details.layers)}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="layers" value={1}>
                      One
                    </ToggleButton>
                    <ToggleButton name="layers" value={2}>
                      Two
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Thickness</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={parseFloat(details.thickness)}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="thickness" value={0.2}>
                      0.2
                    </ToggleButton>
                    <ToggleButton name="thickness" value={0.4}>
                      0.4
                    </ToggleButton>
                    <ToggleButton name="thickness" value={0.6}>
                      0.6
                    </ToggleButton>
                    <ToggleButton name="thickness" value={0.8}>
                      0.8
                    </ToggleButton>
                    <ToggleButton name="thickness" value={1.0}>
                      1.0
                    </ToggleButton>
                    <ToggleButton name="thickness" value={1.2}>
                      1.2
                    </ToggleButton>
                    <ToggleButton name="thickness" value={1.4}>
                      1.4
                    </ToggleButton>
                    <ToggleButton name="thickness" value={1.6}>
                      1.6
                    </ToggleButton>
                    <ToggleButton name="thickness" value={1.8}>
                      1.8
                    </ToggleButton>
                    <ToggleButton name="thickness" value={2.0}>
                      2.0
                    </ToggleButton>
                    <ToggleButton name="thickness" value={2.2}>
                      2.2
                    </ToggleButton>
                    <ToggleButton name="thickness" value={2.4}>
                      2.4
                    </ToggleButton>
                    <ToggleButton name="thickness" value={2.6}>
                      2.6
                    </ToggleButton>
                    <ToggleButton name="thickness" value={2.8}>
                      2.8
                    </ToggleButton>
                    <ToggleButton name="thickness" value={3.0}>
                      3.0
                    </ToggleButton>
                    <ToggleButton name="thickness" value={3.2}>
                      3.2
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Color</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={details.color}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="color" value="Green">
                      Green
                    </ToggleButton>
                    <ToggleButton name="color" value="Red">
                      Red
                    </ToggleButton>
                    <ToggleButton name="color" value="Yellow">
                      Yellow
                    </ToggleButton>
                    <ToggleButton name="color" value="Blue">
                      Blue
                    </ToggleButton>
                    <ToggleButton name="color" value="White">
                      White
                    </ToggleButton>
                    <ToggleButton name="color" value="Black">
                      Black
                    </ToggleButton>
                    <ToggleButton name="color" value="No Solder Mask">
                      No Solder Mask
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Surface Finish</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={details.surfaceFinish}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="surfaceFinish" value="HASL">
                      HASL
                    </ToggleButton>
                    <ToggleButton
                      name="surfaceFinish"
                      value="No Surface Finish"
                    >
                      No Surface Finish
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Copper Weight</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={parseInt(details.copperWeight)}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="copperWeight" value={35}>
                      35 µm
                    </ToggleButton>
                    <ToggleButton name="copperWeight" value={70}>
                      70 µm
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gold Fingers</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={details.goldFingers === 'true'}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="goldFingers" value={true}>
                      Yes
                    </ToggleButton>
                    <ToggleButton name="goldFingers" value={false}>
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Flying Probe Test</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={details.flyingProbeTest === 'true'}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="flyingProbeTest" value={true}>
                      Yes
                    </ToggleButton>
                    <ToggleButton name="flyingProbeTest" value={false}>
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Castellated Holes</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    exclusive
                    value={details.castellatedHoles === 'true'}
                    onChange={onButtonChange}
                  >
                    <ToggleButton name="castellatedHoles" value={true}>
                      Yes
                    </ToggleButton>
                    <ToggleButton name="castellatedHoles" value={false}>
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
            </TableContainer>
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
        <Typography className={classes.heading} variant="h5" gutterBottom>
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
