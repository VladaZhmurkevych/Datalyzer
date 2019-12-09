import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import DataCard from '../shared/DataCard';
import AdminCardDataItem from '../shared/AdminCardDataItem';
import AdminCardDataItemPassword from '../shared/AdminCardDataItemPassword';
import { connect } from 'react-redux';
import {setConnectionForDeleting} from "../../store/connection/actions";
import {displayCustomPopup} from "../../store/popups/actions";
import PopupTypes from '../../store/popups/popupTypes';

const DatabaseDataCard = ({
  db_name,
  name,
  username,
  password,
  host,
  port,
  updateConnection,
  deleteConnection,
  id,
}) => {
  const onDelete = useCallback(() => {
    deleteConnection(id);
  }, [id, deleteConnection]);
  return (
    <DataCard
      caption={name}
      secondIcon="/images/controls.png"
      thirdIcon="/images/cross.png"
      onSecondButtonClick={updateConnection}
      onThirdButtonClick={onDelete}
    >
      <AdminCardDataItem name="DB name" value={db_name} />
      <AdminCardDataItem name="Host" value={host} />
      <AdminCardDataItem name="Port" value={port} />
      <AdminCardDataItem name="DB user" value={username} />
      <AdminCardDataItemPassword name="BD password" value={password} />
    </DataCard>
  );
};

DatabaseDataCard.propTypes = {
  id: PropTypes.number.isRequired,
  db_name: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  port: PropTypes.string.isRequired,
  updateConnection: PropTypes.func.isRequired,
  deleteConnection: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateConnection: () => {},
  deleteConnection: (id) => {
    dispatch(setConnectionForDeleting(id));
    dispatch(displayCustomPopup(PopupTypes.DELETE_CONNECTION));
  },
});

export default connect(null, mapDispatchToProps)(DatabaseDataCard);