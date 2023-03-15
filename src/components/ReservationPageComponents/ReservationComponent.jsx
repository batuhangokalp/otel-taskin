import React, { useState, useRef , useEffect } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {useParams} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  @media only screen and(max-width: 958px) {
    background-color: red;
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
  width: 100%;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ReservationComponent() {
  const form = useRef();
  let params = useParams();
  const [roomType, setRoomType] = useState("Standart Oda");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adultCount, setAdultCount] = useState("");
  const [childCount, setChildCount] = useState("");
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  useEffect(()=>{
    (params.roomType === "standartRoom") && setRoomType("Standart Oda")
  },[])
  useEffect(()=>{
    (params.roomType === "doubleRoom") && setRoomType("Double Oda")
  },[])
  useEffect(()=>{
    (params.roomType === "tripleRoom") && setRoomType("Triple Oda")
  },[])
  const handleRoomType = (event) => {
    setRoomType(event.target.value);
  };

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
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleAdultCount = (event) => {
    setAdultCount(event.target.value);
  };
  const handleChildCount = (event) => {
    setChildCount(event.target.value);
  };
  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleClick = async () => {
    setOpen(true);
  };

  const resetForm = async () => {
    setRoomType("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setStartDate("");
    setEndDate("");
    setAdultCount("");
    setChildCount("");
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
    setVerified(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    axios
      .post("http://88.208.226.24:4001/api/mail/mailsender", {
        body: message,
        subject: "Rezervasyon Talebi",
      })
      .then((res) => {
        console.log("Posting data", res);
        if (res.data.status === true) {
          alertAndResetForm();
        }
      })

      .catch((err) => console.log(err));
  };

  const message = `<p>&nbsp;</p>
<p style="padding-left: 80px;"><span style="font-size: 14pt;"><strong>Yeni rezervasyon talebi!</strong></span></p>
<p style="text-align: left; padding-left: 40px;">&nbsp;</p>
<table style="border-collapse: collapse; width: 45.8707%; height: 226px; margin-left: 40px; margin-right: auto;" border="1"><colgroup><col style="width: 33.5037%;"><col style="width: 66.4963%;"></colgroup>
<tbody>
<tr style="height: 50px;">
<td style="height: 22px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Oda T&uuml;r&uuml;</strong></span></td>
<td style="height: 22px; text-align: center;">${roomType}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 22px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>İsim</strong></span></td>
<td style="height: 22px; text-align: center;">${firstName}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 22px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Soy İsim</strong></span></td>
<td style="height: 22px; text-align: center;">${lastName}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 22px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Email</strong></span></td>
<td style="height: 22px; text-align: center;">${email}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 44px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Telefon Numarası</strong></span></td>
<td style="height: 44px; text-align: center;">${phoneNumber}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 22px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Giriş Tarihi&nbsp;</strong></span></td>
<td style="height: 22px; text-align: center;">${startDate}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 18px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>&Ccedil;ıkış Tarihi</strong></span></td>
<td style="height: 18px; text-align: center;">${endDate}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 18px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Yetişkin Sayısı</strong></span></td>
<td style="height: 18px; text-align: center;">${adultCount}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 18px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>&Ccedil;ocuk Sayısı</strong></span></td>
<td style="height: 18px; text-align: center;">${childCount}</td>
</tr>
<tr style="height: 50px;">
<td style="height: 18px; text-align: center;"><span style="font-family: 'times new roman', times, serif; font-size: 14pt;"><strong>Not</strong></span></td>
<td style="height: 18px; text-align: center;">${note}</td>
</tr>
</tbody>
</table>`;

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail}>
        <PairDiv>
          <select
            className="selectpicker show-tick form-select form-select-md"
            value={roomType}
            onChange={handleRoomType}
            required
            id="roomType"
            name="roomType"
          >
            <option value="Standart Oda" id="standartRoom">
              Standart Oda
            </option>
            <option value="Double Oda" id="doubleRoom">
              Double Oda
            </option>
            <option value="Triple Oda" id="tripleRoom">
              Triple Oda
            </option>
          </select>
        </PairDiv>
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
              required
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
          <div className="col col-lg">
            <label htmlFor="startDate">Giriş Tarihi</label>
            <input
              required
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              name="startDate"
              onChange={handleStartDate}
            />
          </div>
          <div className="col col-lg">
            <label htmlFor="endDate">Çıkış Tarihi</label>
            <input
              required
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={handleEndDate}
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="adultCount">Yetişkin</label>
            <input
              required
              type="number"
              min="0"
              className="form-control"
              id="adultCount"
              value={adultCount}
              name="adultCount"
              onChange={handleAdultCount}
              placeholder="Yetişkin sayısı"
            />
          </div>
          <div className="form-group">
            <label htmlFor="childCount">Çocuk</label>
            <input
              required
              type="number"
              min="0"
              className="form-control"
              id="childCount"
              value={childCount}
              name="childCount"
              onChange={handleChildCount}
              aria-describedby="emailHelp"
              placeholder="Çocuk sayısı"
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
        <Stack spacing={2} sx={{ width: "100%" }}>
          <RoomsButton type="submit" disabled={!verified}>
            REZERVASYON OLUŞTUR
          </RoomsButton>
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
    </Container>
  );
}

export default ReservationComponent;
