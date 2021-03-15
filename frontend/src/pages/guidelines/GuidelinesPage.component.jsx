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

// import thicknessImg from '../../assets/thicknessImg.jpg';
// import minTraceImg from '../../assets/minTraceImg.jpg';
// import copperWeightImg from '../../assets/copperWeightImg.jpg';
// import drillImg from '../../assets/drillImg.jpg';
// import solderMaskImg from '../../assets/solderMaskImg.jpg';
// import legendImg from '../../assets/legendImg.jpg';
// import finishingImg from '../../assets/finishingImg.jpg';
// import maskImg from '../../assets/maskImg.jpg';
// import panelizationImg from '../../assets/panelizationImg.jpg';

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
                {/* <TableCell>
                  <Typography>
                    <b>Image</b>
                  </Typography>
                </TableCell> */}
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
                remark="Currently we provided only single and double layer PCB, soon we'll upgrade our production line"
              />
              <TableItem
                item="Material"
                capability="FR-2, FR-3, Aluminium"
                remark="Other cheaper alternatives also available. Contact customer care for more info."
              />
              <TableItem
                item="Maximum PCB Size(Dimension)"
                capability="1ft x 4ft (single layer), 1.5ft x 1.5ft (double layer)"
                remark="This is current maximum production capability."
              />
              <TableItem
                item="Board Thickness"
                //image={thicknessImg}
                capability="0.2 - 3.2mm"
                remark="0.2,0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4mm. Contact us if your board exceeds these."
              />
              <TableItem
                item="Board Thickness Tolerance"
                capability="± 10%"
                remark="Normally + Tolerance will occur due to PCB processing steps such as electroless copper, solder mask and other types of finish on the surface."
              />
              <TableItem
                item="Min Trace"
                //image={minTraceImg}
                capability="8 mil"
                remark="Min manufacturable trace is 8mil, strongly suggest to design trace above 10 - 15 mil to have better final result."
              />
              <TableItem
                item="Min Spacing"
                capability="8 mil"
                remark="Min manufacturable trace is 8mil, strongly suggest to design spacing above 10 - 15 mil to have better final result."
              />
              <TableItem
                item="Outer Layer Copper Thickness"
                //image={copperWeightImg}
                capability="35μm / 70μm"
                remark="Also known as copper weight. 35μm=1oz, 70μm=2oz."
              />
              <TableItem
                item="Drill Sizes (CNC)"
                //image={drillImg}
                capability="0.3 - 10mm"
                remark="Min drill size is 0.3mm, max drill is 10mm."
              />
              <TableItem
                item="Solder Mask"
                //image={solderMaskImg}
                capability="PISM"
                remark="Photoimageable solder resist ink, used for the solder mask manufacturing of high-precision circuit board, with excellent heat resistance, chemical resistance and insulation of the film"
              />
              <TableItem
                item="Minimum Character Width(Legend)"
                //image={legendImg}
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
                //image={finishingImg}
                capability="HASL with lead, Gold Immersion"
                remark="By default, the PCB will have HASL (with lead) finish, for gold immersion extra charge may apply."
              />
              <TableItem
                item="Solder Mask"
                //image={maskImg}
                capability="Green, Red, Blue, White, Black"
                remark="By default solder mask is green in color, extra charges are applied for other color(Green, Red, White, Blue)"
              />
              <TableItem
                item="Silkscreen"
                //image={legendImg}
                capability="White, Black, None"
                remark="No extra charge."
              />
              <TableItem
                item="Panelization"
                //image={panelizationImg}
                capability="V-scoring, Tab-routing"
                remark="Leave min clearance of 1.6mm between boards for break-routing. For V-score panelization, set the space between boards to be zero."
              />
              <TableItem
                item="Others"
                capability="Fly Probe Testing and A.O.I. testing"
                remark="Additional charge may apply based on quantity extra charge."
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default GuidelinesPage;
