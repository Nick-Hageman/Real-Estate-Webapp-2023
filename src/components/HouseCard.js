import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
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
import House3D from './House3D'
import { Canvas } from "@react-three/fiber";
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function HouseCard(props) {
  const dataset = props.data.attributes;
  //console.log(dataset); //view data from API
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {
    const linkToCopy = 'https://hageman-homes.com';
    navigator.clipboard.writeText(linkToCopy)
    
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

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
          <Tooltip title="Copy Link" placement="top" arrow>
            <IconButton aria-label="" theme={buttonTheme} color='secondary'>
              <MoreVertIcon onClick={handleClick(SlideTransition)}/>
              <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message="Link Copied"
                key={state.Transition.name}
              >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Link Copied
                </Alert>
              </Snackbar>
            </IconButton>
          </Tooltip>
        }
        title={<Typography variant="body2" color="white">{"Lot: " + dataset.lot}</Typography>}
        subheader={<Typography variant="body2" color="white">{"Address: " + dataset.address}</Typography>}
      />
      <Canvas>
          <perspectiveCamera position={[0, 0, 0]} />
          <ambientLight intensity={0.25} />
          <House3D position={[0, -1, -2]} url={dataset.value}/>
      </Canvas>
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
              {dataset.status}
              <IconButton aria-label="" theme={buttonTheme} color='secondary'>
                <SellIcon fontSize='small' />
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{dataset.address}</td>
          </tr>
          <tr>
            <td>Sq Feet</td>
            <td>{dataset.sqfoot + " ft"}</td>
          </tr>
          <tr>
            <td>Bedrooms</td>
            <td>{dataset.bedrooms}</td>
          </tr>
          <tr>
            <td>Bathrooms</td>
            <td>{dataset.baths}</td>
          </tr>
          <tr className='value-rwd'>
            <td>Land Value</td>
            <td className='value-rwd-right'>{dataset.landvalue}</td>
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
          <Typography paragraph color="grey">{dataset.info}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}