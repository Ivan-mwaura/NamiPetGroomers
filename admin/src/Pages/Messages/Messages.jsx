import { useState, useContext} from "react";
import "./Messages.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Messages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 7;
  const { messages } = useContext(AppContext);
  const [selectedMessage, setSelectedMessage] = useState(null);
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

  const messagesData = messages.data.map((message) => {
    return {
      _id: message._id,
      firstName: message.firstName,
      lastName: message.lastName,
      selectedService: message.selectedService,
      email: message.email,
      phoneNo: message.phoneNo,
      message: message.message,
    };
  });

  const startIndex = (currentPage - 1) * messagesPerPage;
  const currentPageData = messagesData?.slice(startIndex, startIndex + messagesPerPage);

  const columns = [
    {
      label: "First Name",
      field: "firstName",
    },
    {
      label: "Last Name",
      field: "lastName",
    },
    {
      label: "Selected Service",
      field: "selectedService",
    },
    {
      label: "Email",
      field: "email",
    },
    {
      label: "Phone Number",
      field: "phoneNo",
    },
    {
      label: "Message",
      field: "message",
    },
  ];

  const handleReplyClick = (message) => {
    setSelectedMessage(message);
    setOpen(true);
  };

  const handleSendReply = async () => {
    if (!selectedMessage) return;

    const formData = new FormData();
    formData.append("email", selectedMessage.email);
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
        if (res.status === 200) {
          toast.success("Reply sent successfully!"); 
        }
      })
      setReplyMessage("");
      setSubject("");
      setAttachment(null);
      setSelectedMessage(null);
      setOpen(false);
      
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMessage(null);
    setReplyMessage("");
    setSubject("");
    setAttachment(null);
  };

  return (
    <div className="Messages DisplayFlex">
      <div className="Header">
        <span>Dashboard</span> <i className="fas fa-angle-right"></i> <span>Messages</span>
      </div>
      <div className="MessagesContainer DisplayFlex">
        <div className="MessagesTop DisplayFlex">
          <div className="Filter DisplayFlex">

          </div>
        </div>
        <div className="MessagesBottom">
          <CustomTable
            data={currentPageData}
            columns={columns}
            currentPage={currentPage}
            totalItems={messages?.data.length}
            messagesPerPage={messagesPerPage}
			usersPerPage={messagesPerPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            context="messages"
            onReplyClick={handleReplyClick}
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reply to {selectedMessage?.email}</DialogTitle>
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

export default Messages;
