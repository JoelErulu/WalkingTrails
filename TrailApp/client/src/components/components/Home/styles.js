import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
      flexDirection: 'row',
  },
  gridItem: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  admin: {
    position: 'absolute', 
    bottom: 10, 
    right: 10
  },

  gold: {
    color: 'gold',
    fontSize: '40px',
    '&:hover': {
      fontSize: '72px',
    },
  },
  green: {
    color: 'green',
    fontSize: '40px',
    '&:hover': {
      fontSize: '72px',
    },
  },
  grey: {
    color: 'gray',
    fontSize: '40px',
    '&:hover': {
      fontSize: '72px',
    },
  },
}));

export const goldOptions = {
  strokeColor: 'gold',
  strokeOpacity: 1,
  strokeWeight: 6,
  fillColor: 'gold',
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

export const greenOptions = {
  strokeColor: 'green',
  strokeOpacity: 1,
  strokeWeight: 6,
  fillColor: 'green',
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

export const greyOptions = {
  strokeColor: 'gray',
  strokeOpacity: 1,
  strokeWeight: 6,
  fillColor: 'gray',
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

export const containerStyle = {
  width: '100%',
  height: '100%'
};

export const exampleMapStyles = [
  {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
          {
              color: "#eeeeee",
          },
      ],
  },
  {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
          {
              visibility: "off",
          },
      ],
  },
  {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
          {
              color: "#9e9e9e",
          },
      ],
  },
];