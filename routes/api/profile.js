const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

var upload = multer({ dest: "uploads/" });

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("company", "Company is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { company } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/profile/files
// @desc     Add profile files
// @access   Private
router.post("/files", [auth, upload.single("file")], async (req, res) => {
  // TODO Check validation
  console.log("req.file " + JSON.stringify(req.file));
  const errors = validationResult(req);
  console.log("errors.array()" + JSON.stringify(errors.array()));
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    originalname,
    encoding,
    mimetype,
    destination,
    filename,
    path,
    size
  } = req.file;

  const newFile = {
    originalname,
    encoding,
    mimetype,
    destination,
    filename,
    path,
    size
  };

  console.log("The req object is : " + JSON.stringify(req.body));
  try {
    let profile = await Profile.findOne({ user: req.user.id });

    console.log("Profile is : " + profile);

    if (profile) {
      profile.files.unshift(newFile);

      await profile.save();

      return res.json(profile);
    } else {
      // Build profile object
      const profileFields = {};
      profileFields.user = req.user.id;

      // Create
      profile = new Profile(profileFields);
      profile.files.unshift(newFile);

      await profile.save();
      return res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/profile/files/:file_id
// @desc     Delete experience from profile
// @access   Private
router.delete("/files/:file_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.files
      .map(item => item.id)
      .indexOf(req.params.file_id);

    profile.files.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
