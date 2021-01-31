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
import copperThicknessImg from '../../assets/copperThicknessImg.jpg';
import drillImg from '../../assets/drillImg.jpg';
import annularRingImg from '../../assets/annularRingImg.jpg';
import holeDiameterImg from '../../assets/holeDiameterImg.jpg';
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
                capability="1-10 layers"
                remark='For orders above 10 layers, please view the below "Standard PCB" or contact our sales rep.'
              />
              <TableItem
                item="Material"
                capability="FR-4, Aluminum"
                remark='For Flex, Rigid-flex, Metal-based (Aluminum etc.,), HDI, Halogen-free, High Tg, etc.,please view the below "Standard PCB" or contact sales rep.'
              />
              <TableItem
                item="Maximum PCB Size(Dimension)"
                capability="500*1100mm (min 5*6mm)"
                remark='Any sizes beyond this dimension, please view the below "Standard PCB" or contact sales rep.'
              />
              <TableItem
                item="Board Size Tolerance(Outline)"
                capability="±0.2mm/±0.5mm"
                remark="±0.2mm for CNC routing, and ±0.5mm for V-scoring."
              />
              <TableItem
                item="Board Thickness"
                image={thicknessImg}
                capability="0.2-2.4mm"
                remark='0.2,0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4mm. Please view the below "Standard PCB" or contact us if your board exceeds these.'
              />
              <TableItem
                item="Board Thickness Tolerance(t≥1.0mm)"
                capability="±10%"
                remark="Normally “+ Tolerance” will occur due to PCB processing steps such as electroless copper, solder mask and other types of finish on the surface."
              />
              <TableItem
                item="Board Thickness Tolerance(t<1.0mm)"
                capability="±0.1mm"
                remark="Normally “+ Tolerance” will occur due to PCB processing steps such as electroless copper, solder mask and other types of finish on the surface."
              />
              <TableItem
                item="Min Trace"
                image={minTraceImg}
                capability="0.1mm/4mil"
                remark="Min manufacturable trace is 4mil(0.1mm), strongly suggest to design trace above 6mil(0.15mm) to save cost."
              />
              <TableItem
                item="Min Spacing"
                capability="±0.1mm"
                remark="Min manufacturable spacing is 4mil(0.1mm), strongly suggest to design spacing above 6mil(0.15mm) to save cost."
              />
              <TableItem
                item="Outer Layer Copper Thickness"
                image={copperWeightImg}
                capability="1oz/2oz/3oz(35μm/70μm/105μm)"
                remark='Also known as copper weight. 35μm=1oz, 70μm=2oz, 105μm=3oz. Please view the below "Standard PCB" or contact us if you need copper weight greater than 3oz.'
              />
              <TableItem
                item="Inner Layer Copper Thickness"
                image={copperThicknessImg}
                capability="1oz/1.5oz(35μm/50μm)"
                remark="Inner copper weight as per customer’s request for 4 and 6 layers(Multi-layer laminated structure). Please contact us if you need copper weight greater than 1.5oz."
              />
              <TableItem
                item="Drill Sizes (CNC)"
                image={drillImg}
                capability="0.2-6.3mm"
                remark="Min drill size is 0.2mm, max drill is 6.3mm. Any holes greater than 6.3mm or smaller than 0.3mm will be subject to extra charges."
              />
              <TableItem
                item="Min Width of Annular Ring"
                image={annularRingImg}
                capability="0.15mm(6mil)"
                remark="For pads with vias in the middle, Min width for Annular Ring is 0.15mm(6mil)."
              />
              <TableItem
                item="Finished Hole Diameter (CNC)"
                image={holeDiameterImg}
                capability="0.2mm-6.2mm"
                remark="The finished hole diameter will be smaller than size of drill bits because of copper plating in the hole barrels"
              />
              <TableItem
                item="Finished Hole Size Tolerance(CNC)"
                capability="±0.08mm"
                remark="For example, if the drill size is 0.6mm, the finished hole diameter ranges from 0.52mm to 0.68mm will be considered acceptable."
              />
              <TableItem
                item="Solder Mask"
                image={solderMaskImg}
                capability="LPI"
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
                item="Minimum Diameter of Plated Half Holes"
                capability="0.6mm"
                remark="Design Half-Holes greater than 0.6mm to ensure better connection between boards."
              />
              <TableItem
                item="Surface Finishing"
                image={finishingImg}
                capability="HASL with lead, HASL lead free, Immersion gold, OSP	"
                remark='The most popular three types of PCB surface finish. Please view the below "Standard PCB" or contact us for other finishes.'
              />
              <TableItem
                item="Solder Mask"
                image={maskImg}
                capability="Green ,Red, Yellow, Blue, White, Black"
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
                capability="V-scoring, Tab-routing, Tab-routing with Perforation (Stamp Holes)"
                remark="Leave min clearance of 1.6mm between boards for break-routing. For V-score panelization, set the space between boards to be zero."
              />
              <TableItem
                item="Others"
                capability="Fly Probe Testing (Free) and A.O.I. testing(free), ISO 9001:2008 ,UL Certificate"
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
