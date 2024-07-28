import { useState, useContext } from "react";
import "./ContactUsInquiries.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUsInquiries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const inquiriesPerPage = 7;
  const { contactUsInquiries } = useContext(AppContext);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [open, setOpen] = useState(false);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const inquiriesData = contactUsInquiries.data.map((inquiry) => {
    return {
      _id: inquiry._id,
		name: inquiry.name,
      email: inquiry.email,
      phoneNo: inquiry.phoneNo,
      message: inquiry.message,
	subject: inquiry.subject,
	status: inquiry.status
    };
  });

  const startIndex = (currentPage - 1) * inquiriesPerPage;
  const currentPageData = inquiriesData?.slice(startIndex, startIndex + inquiriesPerPage);

  const columns = [
	{
		label: "Inquiry_ID",
		field: "_id",
	},
	{
		label : "Name",
		field: "name"
	},
    {
      label: "Email",
      field: "email",
    },
	{
		label: "Subject",
		field: "subject",

	},
    {
      label: "Message",
      field: "message",
    },
	{
		label: "Status",
		field: "status",
	}
  ];

  const handleReplyClick = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpen(true);
  };

  const handleSendReply = async () => {
    if (!selectedInquiry) return;

    const formData = new FormData();
    formData.append("email", selectedInquiry.email);
    formData.append("subject", subject);
    formData.append("reply", replyMessage);
    if (attachment) {
      formData.append("attachment", attachment);
    }

    try {
      await axios.post("http://localhost:5000/api/v1/sendReply", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
	.then((res) => {
		if(res.status === 200){
			toast.success("Reply sent successfully	")
		}
	})
      setReplyMessage("");
      setSubject("");
      setAttachment(null);
      setSelectedInquiry(null);
      setOpen(false);
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedInquiry(null);
    setReplyMessage("");
    setSubject("");
    setAttachment(null);
  };

  return (
    <div className="ContactUsInquiries DisplayFlex">
      <div className="Header">
        <span>Dashboard</span> <i className="fas fa-angle-right"></i> <span>Contact Us Inquiries</span>
      </div>
      <div className="ContactUsInquiriesContainer DisplayFlex">
        <div className="ContactUsInquiriesTop DisplayFlex">
          <div className="Filter DisplayFlex">
            <CustomTextField
              id="outlined-basic"
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              adornmentPosition="start"
              adornmentContent={<i className="fas fa-search"></i>}
              sx={{ width: "100%", padding: "0" }}
            />
            <CustomTextField
              id="outlined-basic"
              type="number"
              sx={{ width: "100%", padding: "0" }}
            />
          </div>
        </div>
        <div className="ContactUsInquiriesBottom">
          <CustomTable
            data={currentPageData}
            columns={columns}
            currentPage={currentPage}
            totalItems={contactUsInquiries.data?.length}
            usersPerPage={inquiriesPerPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            context="contactUsInquiries"
            onReplyClick={handleReplyClick}
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reply to {selectedInquiry?.email}</DialogTitle>
        <DialogContent>
          <TextField
            label="Subject"
            fullWidth
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="outlined"
            margin="dense"
          />
          <TextField
            label="Reply Message"
            multiline
            rows={4}
            fullWidth
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            variant="outlined"
            margin="dense"
          />
          <input
            type="file"
            onChange={(e) => setAttachment(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button> &nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={handleSendReply} color="primary">Send Reply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactUsInquiries;
