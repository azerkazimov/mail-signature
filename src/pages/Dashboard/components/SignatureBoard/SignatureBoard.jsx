import { Switch } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuClock4, LuMail, LuPhone } from "react-icons/lu";
import banner1 from "../../../../assets/images/templates/Frame-2095584541.png";
import { useProfileImgStore } from "../../../../store/profileImg";
import { useSignatureStore } from "../../../../store/signatureStore";
import { useIconColor, useQRCodeColors } from "../../../../utils/hooks/colorHooks";
import { Delete, Edit } from "../../../../utils/icons";
import { Icon } from "../../../../utils/icons/icons";

export const SignatureBoard = () => {
  const { signatures, selectedSignatureId, deleteSignature } = useSignatureStore();
  const { profileImageUrl } = useProfileImgStore();

  // ==== switch button antd ====
  const [checked, setChecked] = useState(false);

  const handleChange = (checkedValue) => {
    setChecked(checkedValue);
  };

  // ==== set colors ====
  const setIconColor = useIconColor();
  const getQRCodeColors = useQRCodeColors();

  // Find the selected signature
  const selectedSignature = signatures.find((signature) => signature.id === selectedSignatureId);
  // useEffect(() => {

  //   if (!selectedSignature || !selectedSignature.formValues) return null;
  // }, [signatures, selectedSignatureId]);

  return (
    <div className="signature">
      <div className="signature-template mb-5">
        <div className="row gap-4">
          <div className="banner col-md-8">
            <div className="generator_banner_right">
              <div
                className="right-regard row gap-3"
                style={{
                  backgroundColor: selectedSignature.backgroundColor,
                }}>
                <div className="col-md-3 right-regard-img">
                  <img
                    src={profileImageUrl || "https://via.placeholder.com/130"}
                    alt="Uploaded"
                    style={{
                      width: "129px",
                      height: "129px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-md-6 right-regard-container">
                  <div className="right-regard-name">
                    <h2
                      style={{
                        color: selectedSignature.fontColor,
                        fontFamily: selectedSignature.font,
                      }}>
                      {selectedSignature.fullName || "Your Name"}
                    </h2>
                    <p
                      style={{
                        color: selectedSignature.fontColor,
                        fontFamily: selectedSignature.font,
                      }}>
                      {selectedSignature.position || "Your Position"}
                    </p>
                  </div>

                  <div className="right-regard-contacts">
                    <div className="right-regard-contacts-item">
                      <LuMail style={{ color: setIconColor() }} />
                      <p
                        style={{
                          color: selectedSignature.fontColor,
                          fontFamily: selectedSignature.font,
                        }}>
                        {selectedSignature.email || "Your Email"}
                      </p>
                    </div>
                    <div className="right-regard-contacts-item">
                      <FiMapPin style={{ color: setIconColor() }} />
                      <p
                        style={{
                          color: selectedSignature.fontColor,
                          fontFamily: selectedSignature.font,
                        }}>
                        {selectedSignature.address || "Your Address"}
                      </p>
                    </div>
                    <div className="right-regard-contacts-item">
                      <LuPhone style={{ color: setIconColor() }} />
                      <p
                        style={{
                          color: selectedSignature.fontColor,
                          fontFamily: selectedSignature.font,
                        }}>
                        {selectedSignature.phone || "Your Phone"}
                      </p>
                    </div>
                    <div className="sosial-icons">
                      <Link to={selectedSignature.instagramUrl}>
                        <FaInstagram style={{ color: setIconColor() }} />
                      </Link>
                      <Link to={selectedSignature.facebookUrl}>
                        <FaFacebookSquare style={{ color: setIconColor() }} />
                      </Link>
                      <Link to={selectedSignature.linkedinUrl}>
                        <FaLinkedin style={{ color: setIconColor() }} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 right-regard-qr px-2">
                  <QRCode
                    value={selectedSignature.qrCoreBase64 || " "}
                    style={{ height: "107px", width: "107px" }}
                    {...getQRCodeColors()}
                  />
                </div>
              </div>

              <div className="banner-img px-3 pb-2">
                <img src={banner1} alt="" />
              </div>
            </div>
          </div>
          <div className="signature-info col-md-4">
            <h3>{selectedSignature.header || "Template name"}</h3>
            <div className="user-data">
              <p>Admin</p>
              <div className="email mt-2">
                <img src="" alt="" />
                {selectedSignature.email}
              </div>
            </div>
            <div className="clock">
              <LuClock4 />
              <span>31/07/2024</span>
            </div>
            <div className="user-status">
              <p>Status</p>
              <div className="switch-button my-2">
                <Switch checked={checked} onChange={handleChange} />
              </div>
              <span>Integrated</span>
            </div>
            <div className="edit-remove flex-container">
              <button style={{ background: "transparent" }}>
                <Icon icon={Edit} color={"#B1B1B1"} />
              </button>
              <button onClick={() => deleteSignature(selectedSignature.id)} style={{ background: "transparent" }}>
                <Icon icon={Delete} color={"#B1B1B1"} style={{ cursor: "pointer" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignatureBoard.propTypes = {
  selectedSignatureId: PropTypes.string,
};
