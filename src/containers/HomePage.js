import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Calculator from "../components/Calculator";
import {
	removeAllHistory,
	addHistoryRecord,
  initHistory
} from '../actions/init';

const HomePage = () => {
  const histroyRecords = useSelector(({ init }) => init.histroyRecords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initHistory())
  }, [dispatch])

  return (
    <div className="home">
      <Calculator 
        removeAllHistory={() => dispatch(removeAllHistory())}
        addHistoryRecord={(item) => dispatch(addHistoryRecord(item))}
        histroyRecords={histroyRecords}
      />
    </div>
  )
}

export default HomePage;