import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteFile } from "../../actions/profile";

const Files = ({ files }) => {
  const fileList = files.map(file => (
    <tr key={file._id}>
      <td>{file.originalname}</td>
      <td>{file.mimetype}</td>
      <td>{file.size}</td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>File List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Original Name</th>
            <th className='hide-sm'>File Type</th>
            <th className='hide-sm'>Size</th>
            <th />
          </tr>
        </thead>
        <tbody>{fileList}</tbody>
      </table>
    </Fragment>
  );
};

Files.propTypes = {
  files: PropTypes.array.isRequired
};

export default connect(null)(Files);
