import React, { useState, useRef } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const FormDiv = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  @media only screen and (max-width: 758px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;
  }
`;

const PairDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  color: #606060;
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  font-size: 14px;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-top: 3rem;
  color: #fff;
  background-color: #deb666;
  border-radius: 0px;
  border: none;
  width: 20rem;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FormComponents() {
  const form = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleClick = async () => {
    setOpen(true);
  };

  const resetForm = async () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setNote("");
  };

  const alertAndResetForm = async () => {
    await handleClick();
    await resetForm();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("http://88.208.226.24:4001/api/mail/mailsender", {
        body: message,
        subject: "İletişim Hakkında",
      })
      .then((res) => {
        console.log("Posting data", res);
        if (res.data.status === true) {
          alertAndResetForm();
        }
      })

      .catch((err) => console.log(err));
  };

  const message = `<p><strong>Merhaba,</strong></p>
  <p><strong>${firstName} &nbsp;${lastName} tarafından g&ouml;nderilen yeni mesajınız var.</strong></p>
  <p style="padding-left: 40px;">&nbsp;</p>
  <p style="padding: 12px; border-left: 4px solid rgb(208, 208, 208); font-style: italic;"><span style="font-size: 14pt;">${note}</span></p>
  <p>&nbsp;</p>
  <p style="text-align: left;"><span style="text-decoration: underline;"><strong>İletişim Bilgileri&nbsp;</strong></span></p>
  <p style="text-align: left; padding-left: 40px;">&nbsp;</p>
  <p style="text-align: left;"><strong>E-Mail : </strong>${email}</p>
  <p style="text-align: left;"><strong>Telefon Numarası : </strong>${phoneNumber}</p>`;

  return (
    <FormDiv>
      <form ref={form} onSubmit={sendEmail}>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="firstName">İsim</label>
            <input
              required
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              name="firstName"
              onChange={handleFirstName}
              placeholder="İsminizi girin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Soy İsim</label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              name="lastName"
              onChange={handleLastName}
              aria-describedby="emailHelp"
              placeholder="Soy isminizi girin"
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={handleEmail}
              placeholder="Mail adresinizi girin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Telefon</label>
            <input
              required
              type="tel"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              name="phoneNumber"
              onChange={handlePhoneNumber}
              aria-describedby="emailHelp"
              placeholder="Numaranızı girin"
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="note">Not(Opsiyonel)</label>
            <textarea
              type="text"
              rows="3"
              cols="50"
              className="form-control"
              id="note"
              value={note}
              name="note"
              onChange={handleNote}
              placeholder="Eklemek istedikleriniz.."
            />
          </div>
        </PairDiv>
        <PairDiv>
          <ReCAPTCHA
            sitekey="6Ler9-ckAAAAAK4OPriOc9FikmGCkOCONW9jWBsS"
            onChange={onChange}
            hl="tr"
          />
        </PairDiv>
        <RoomsButton type="submit" disabled={!verified}>
          MESAJINI GÖNDER
        </RoomsButton>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Mailiniz iletilmiştir.
            </Alert>
          </Snackbar>
        </Stack>
      </form>
    </FormDiv>
  );
}

export default FormComponents;
