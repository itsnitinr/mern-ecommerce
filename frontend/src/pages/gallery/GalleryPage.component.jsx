import { Container, Grid } from '@material-ui/core';
import { SRLWrapper } from 'simple-react-lightbox';
import PageHeader from '../../components/page-header/PageHeader.component';
import galleryImages from './GalleryPage.data';

const GalleryPage = () => {
  return (
    <>
      <PageHeader title="Gallery" subtitle="View our projects" />
      <Container>
        <SRLWrapper>
          <Grid container justify="center" spacing={2}>
            {galleryImages.map((image) => (
              <Grid key={image.caption} item lg={4} md={4} sm={4} xs={12}>
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  src={image.src}
                  alt={image.caption}
                />
              </Grid>
            ))}
          </Grid>
        </SRLWrapper>
      </Container>
    </>
  );
};

export default GalleryPage;
