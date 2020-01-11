import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteFile, downloadFile } from "../../actions/profile";
import axios from "axios";
import FileSaver from "file-saver";

const Files = ({ files, deleteFile, downloadFile }) => {
  const fileList = files.map(file => (
    <tr key={file._id}>
      <td>{file.originalname}</td>

      <td>
        <Moment format='YYYY/MM/DD'>{moment.utc(file.createdDate)}</Moment>
      </td>
      <td>{file.mimetype}</td>
      <td>{file.size}</td>
      <td>
        <button onClick={() => onClick(file._id)} className='btn btn-danger'>
          Download
        </button>
      </td>
      <td>
        <button onClick={() => deleteFile(file._id)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));

  const onClick = async e => {
    console.log("Download File reached" + e);
    // const res = await axios.get(`/api/profile/files/${id}`);
    const res = await axios({
      url: `/api/profile/files/${e}`,
      method: "GET",
      responseType: "blob"
    });
    console.log("Download File reached" + JSON.stringify(res));
    console.log("Download filename reached" + res.headers.filename);
    FileSaver.saveAs(new Blob([res.data]), res.headers.filename);
  };

  return (
    <Fragment>
      <h2 className='my-2'>File List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Original Name</th>
            <th>Created Date</th>
            <th>File Type</th>
            <th>Size</th>
            <th />
          </tr>
        </thead>
        <tbody>{fileList}</tbody>
      </table>
    </Fragment>
  );
};

Files.propTypes = {
  files: PropTypes.array.isRequired,
  deleteFile: PropTypes.func.isRequired,
  downloadFile: PropTypes.func.isRequired
};

export default connect(null, { deleteFile, downloadFile })(Files);
