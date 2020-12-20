import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { SocketContext } from 'utils/SocketContext';
import {
  addRecord,
  selectRecordsList,
  setInitalRecordsList,
  updateRecordToNextSong
} from 'features/YouTube/youtubeRecordsSlice';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './RecordsList.module.scss';

export function RecordsList() {
  const recordsList = useSelector(selectRecordsList);
  const socketContext = useContext(SocketContext);
  const dispatch = useDispatch();
  const [recordInput, setRecordInput] = useState('');
  const [addEventOnProgress, setaddEventOnProgress] = useState(false);

  useEffect(() => {
    socketContext.on('addRecordResponse', (resp) => {
      if (resp) {
        if (resp.success) {
          dispatch(addRecord(resp.data));
          setRecordInput('');
        } else {
          window.alert(resp.error);
        }
      }

      setaddEventOnProgress(false);
    })

    socketContext.on('getItemsResponse', (resp) => {
      if (resp) {
        if (resp.success) {
          dispatch(setInitalRecordsList(resp.data));
          dispatch(updateRecordToNextSong());
        } else {
          window.alert(resp.error);
        }
      }
    })
  }, []);


  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      addRecordHandler();
    }
  };

  const addRecordHandler = e => {
    if (!addEventOnProgress) {
      socketContext.emit('addRecord', recordInput);
      setaddEventOnProgress(true);
    }
  };

  const formatDate = date => {
    if (date) {
      return moment.utc(moment.duration(date).asMilliseconds()).format("mm:ss");
    }

    return '';
  }

  return (
    <div>
      <div className={styles.addRecordWrapper}>
        <TextField id="standard-basic" label="insert link"
          value={recordInput}
          onChange={(e) => setRecordInput(e.target.value)}
          onKeyUp={handleEnterPress}
          className={styles.addRecordInputElement}
        />
        <Button variant="contained" disabled={addEventOnProgress} onClick={addRecordHandler}>Add</Button>
      </div>
      <div className={styles.recordsListContainer}>
        <List className={styles.list}>
          {recordsList.map((el, index) => {
            return <ListItem key={index}
              selected={index === 0}>
              <ListItemText primary={el.title} secondary={formatDate(el.duration)} />
            </ListItem>
          })}
        </List>
      </div>
    </div>
  );
}
