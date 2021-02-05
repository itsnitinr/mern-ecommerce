import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

import PageHeader from '../../components/page-header/PageHeader.component';
import TableItem from '../../components/table-item/TableItem.component';

import thicknessImg from '../../assets/thicknessImg.jpg';
import minTraceImg from '../../assets/minTraceImg.jpg';
import copperWeightImg from '../../assets/copperWeightImg.jpg';
import drillImg from '../../assets/drillImg.jpg';
import solderMaskImg from '../../assets/solderMaskImg.jpg';
import legendImg from '../../assets/legendImg.jpg';
import finishingImg from '../../assets/finishingImg.jpg';
import maskImg from '../../assets/maskImg.jpg';
import panelizationImg from '../../assets/panelizationImg.jpg';

const useStyles = makeStyles((theme) => ({
  tableHeadRow: {
    background: theme.palette.secondary.main,
  },
}));

const GuidelinesPage = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader title="Guidelines" subtitle="Capabilities & Remarks" />
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHeadRow}>
                <TableCell>
                  <Typography>
                    <b>Items</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <b>Image</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <b>Manufacturing Capabilities</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <b>Remarks</b>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableItem
                item="Number of Layers"
                capability="1 or 2 layers"
                remark='For orders above 10 layers, please view the below "Standard PCB" or contact our sales rep.'
              />
              <TableItem
                item="Material"
                capability="FR-3, FR-2"
                remark='For Flex, Rigid-flex, Metal-based (Aluminum etc.,), HDI, Halogen-free, High Tg, etc.,please view the below "Standard PCB" or contact sales rep.'
              />
              <TableItem
                item="Maximum PCB Size(Dimension)"
                capability="1ft x 4ft (single layer), 1.5ft x 1.5ft (double layer)"
                remark='Any sizes beyond this dimension, please view the below "Standard PCB" or contact sales rep.'
              />
              <TableItem
                item="Board Thickness"
                image={thicknessImg}
                capability="0.2 - 3.2mm"
                remark='0.2,0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4mm. Please view the below "Standard PCB" or contact us if your board exceeds these.'
              />
              <TableItem
                item="Board Thickness Tolerance"
                capability="± 10%"
                remark="Normally + Tolerance will occur due to PCB processing steps such as electroless copper, solder mask and other types of finish on the surface."
              />
              <TableItem
                item="Min Trace"
                image={minTraceImg}
                capability="8 mil"
                remark="Min manufacturable trace is 4mil(0.1mm), strongly suggest to design trace above 6mil(0.15mm) to save cost."
              />
              <TableItem
                item="Min Spacing"
                capability="8 mil"
                remark="Min manufacturable spacing is 4mil(0.1mm), strongly suggest to design spacing above 6mil(0.15mm) to save cost."
              />
              <TableItem
                item="Outer Layer Copper Thickness"
                image={copperWeightImg}
                capability="35μm / 70μm"
                remark='Also known as copper weight. 35μm=1oz, 70μm=2oz, 105μm=3oz. Please view the below "Standard PCB" or contact us if you need copper weight greater than 3oz.'
              />
              <TableItem
                item="Drill Sizes (CNC)"
                image={drillImg}
                capability="0.3 - 10mm"
                remark="Min drill size is 0.2mm, max drill is 6.3mm. Any holes greater than 6.3mm or smaller than 0.3mm will be subject to extra charges."
              />
              <TableItem
                item="Solder Mask"
                image={solderMaskImg}
                capability="PISM"
                remark="Liquid Photo-Imageable is the mostly adopted. Thermosetting Ink is used in the inexpensive paper-based boards."
              />
              <TableItem
                item="Minimum Character Width(Legend)"
                image={legendImg}
                capability="0.15mm"
                remark="Characters of less than 0.15mm wide will be too narrow to be identifiable."
              />
              <TableItem
                item="Minimum Character Height (Legend)"
                capability="0.8mm"
                remark="Characters of less than 0.8mm high will be too small to be recognizable."
              />
              <TableItem
                item="Character Width to Height Ratio (Legend)"
                capability="1:5"
                remark="In PCB silkscreen legends processing, 1:5 is the most suitable ratio."
              />
              <TableItem
                item="Surface Finishing"
                image={finishingImg}
                capability="HASL with lead, Gold Immersion"
                remark='The most popular three types of PCB surface finish. Please view the below "Standard PCB" or contact us for other finishes.'
              />
              <TableItem
                item="Solder Mask"
                image={maskImg}
                capability="Green, Red, Blue, White, Black"
                remark="No extra charge (Green, Red, Yellow, Blue)"
              />
              <TableItem
                item="Silkscreen"
                image={legendImg}
                capability="White, Black, None"
                remark="No extra charge."
              />
              <TableItem
                item="Panelization"
                image={panelizationImg}
                capability="V-scoring, Tab-routing"
                remark="Leave min clearance of 1.6mm between boards for break-routing. For V-score panelization, set the space between boards to be zero."
              />
              <TableItem
                item="Others"
                capability="Fly Probe Testing and A.O.I. testing"
                remark="No extra charge."
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default GuidelinesPage;
