import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import moment from 'moment';


import TimePicker from 'rc-time-picker';

import 'rc-time-picker/assets/index.css';

function getModalStyle() {
    const top = 50;
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    test: {
        backgroundColor: 'black',
        zIndex: 99999
    }
}))



function Book_Button({ auth, coachId, coachName }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = async () => {
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const allowHours   = ({hours})=> hours >=9 && hours <= 16
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Book Appointment for {coachName}</h2>


   
          <div id="simple-modal-description">

                <TimePicker
                className={classes.test}
                // use to control utfOffset, locale, default open value
                defaultOpenValue={moment()}
                hourStep
                disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]}
                disabledMinutes={() => [0, 2, 4, 6, 8]}
                />

</div>


        </div>
      )
    return(
        <div>
        {auth ?
        <Button type="button" onClick={handleOpen}>
            Book Me
        </Button>: null}


        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
       {body}
        </Modal>
        </div>
    )
}

function mapStateToProps({ auth }) {
    return {
      auth
    }
  }

export default connect(mapStateToProps)(Book_Button)