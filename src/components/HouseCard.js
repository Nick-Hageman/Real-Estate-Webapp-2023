import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme } from '@mui/material/styles';
import SellIcon from '@mui/icons-material/Sell';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color: "white",
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HouseCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: 'rgb(42, 47, 56)',
      },
      secondary: {
        main: '#999999',
      },
    },
  });

  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: 'rgb(26, 27, 28)'}}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="img/black-logo.jpg" />
        }
        action={
          <IconButton aria-label="" theme={buttonTheme} color='secondary'>
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="body2" color="white">Lot 34 Phase 3</Typography>}
        subheader={<Typography variant="body2" color="white">2031 Castle Hill Dr SE</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image="img/DJI_0097.JPG"
        alt="Paella dish"
      />
      <CardContent>
      <div class="table-container">
        <table class="table-rwd">
          <tr>
            <th></th>
            <th>Information</th>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              For Sale
              <IconButton aria-label="" theme={buttonTheme} color='secondary'>
                <SellIcon fontSize='small' />
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>2031 Castle Hill Dr</td>
          </tr>
          <tr>
            <td>Sq Feet</td>
            <td>24,000</td>
          </tr>
          <tr>
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Bathrooms</td>
            <td>3</td>
          </tr>
          <tr className='value-rwd'>
            <td>Land Value</td>
            <td className='value-rwd-right'>173,421</td>
          </tr>
        </table>
      </div>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="grey">MORE INFO:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}