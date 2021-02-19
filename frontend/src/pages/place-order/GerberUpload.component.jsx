import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  CircularProgress,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  iframe: {
    marginTop: '2rem',
    height: '100vh',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '75vh',
    },
  },
  text: {
    marginBottom: '1rem',
  },
  input: {
    display: 'none',
  },
}));

const GerberUpload = ({ file, setFile }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);

  const onChange = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('gerberFile', e.target.files[0]);
    const { data } = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setLoading(false);
    setFile(data.file);
  };

  return (
    <>
      <Grid item lg={12} sm={12} xs={12} className={classes.text}>
        <Typography variant="h4">Gerber File Upload</Typography>
        <Typography variant="h6" gutterBottom color="secondary">
          Upload the gerber file in ZIP format. Only one file is allowed. You
          can view your gerber file once you upload the file.
        </Typography>
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <input
          className={classes.input}
          id="contained-button-file"
          type="file"
          onChange={onChange}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload Gerber ZIP File
          </Button>
        </label>
      </Grid>
      {loading && (
        <div style={{ height: '50px', width: '50px', margin: '2rem auto' }}>
          <CircularProgress
            style={{ height: '100%', width: '100%' }}
            color="secondary"
          />
        </div>
      )}
      {file && (
        <Grid item lg={12} sm={12} xs={12}>
          <iframe
            title="Gerber Viewer"
            className={classes.iframe}
            src={`https://tracespace.io/view/?boardUrl=${file}`}
          ></iframe>
          <Typography variant="body1">
            <b>Note: </b>The end product might not be same as the above render.
            It's just for visualization of the board.
          </Typography>
        </Grid>
      )}
      <Grid item lg={12}>
        <Alert
          severity="info"
          color="info"
          style={{ margin: '1.5rem 0 0.5rem 0' }}
        >
          <Link target="_blank" to="/guidelines">
            Click here
          </Link>{' '}
          to check the guidelines to see if the board meets our capabilities
        </Alert>
      </Grid>
    </>
  );
};

export default GerberUpload;
