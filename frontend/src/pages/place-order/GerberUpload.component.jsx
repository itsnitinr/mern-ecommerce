import { useState } from 'react';
import axios from 'axios';
import {
  LinearProgress,
  Grid,
  Typography,
  makeStyles,
  Button,
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
    marginBottom: '2rem',
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
      {loading && <LinearProgress />}
      <Grid item lg={12} sm={12} xs={12} className={classes.text}>
        <Typography variant="h4">Gerber File Upload</Typography>
        <Typography variant="h6" color="secondary">
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
      {file && (
        <Grid item lg={12} sm={12} xs={12}>
          <iframe
            title="Gerber Viewer"
            className={classes.iframe}
            src={`https://tracespace.io/view/?boardUrl=${file}`}
          ></iframe>
        </Grid>
      )}
    </>
  );
};

export default GerberUpload;
