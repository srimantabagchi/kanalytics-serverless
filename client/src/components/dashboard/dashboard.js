import React, { useEffect, useState, Fragment, Message, Progress } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { getCurrentProfile, uploadFile } from "../../actions/profile";

const Dashboard = ({ getCurrentProfile, uploadFile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file); // or "movieImg"

    try {
      console.log("stuff 1");
      const res = await axios.post("https://file.io", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          setTimeout(() => setUploadPercentage(0), 5000);
        }
      });

      const { filename, filepath } = res.data;
      setUploadedFile({ filename, filepath });
      setMessage("File uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("there was a problem with the server.");
      } else {
        setMessage(err.response.data.message);
      }
    }
  };

  return (
    <Fragment>
      <div className='container'>
        {message ? <Message message={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className='custom-file mb-4'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={onChange}
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>
          <input
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-4'
          />
        </form>
        {uploadedFile ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
              <h3 className='text-center'>{uploadedFile.filename}</h3>
              <img style={{ width: "100%" }} src={uploadedFile.filepath} />
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
