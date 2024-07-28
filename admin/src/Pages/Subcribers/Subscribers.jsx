import { useState, useContext } from "react";
import "./Subscribers.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { Avatar } from "@mui/material";

const Subscribers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const subscribersPerPage = 7;
  const { subscribers } = useContext(AppContext);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
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

  const calculateDaysRemaining = (endDate) => {
    const currentDate = new Date();
    const subscriptionEndDate = new Date(endDate);
    const timeDifference = subscriptionEndDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  const subscribersData = subscribers.data.map((subscriber) => {
    const daysRemaining = calculateDaysRemaining(subscriber.subscriptionEndDate);
    const status = daysRemaining > 0 ? `${daysRemaining} days left` : 'Expired';

    return {
      _id: subscriber._id,
      name: subscriber.name,
      email: subscriber.email,
      amount: subscriber.amount,
      phoneNumber: subscriber.phoneNumber,
      subscriptionPlan: subscriber.subscriptionPlan,
      subscriptionEndDate: subscriber.subscriptionEndDate,
      subscriptionDate: subscriber.subscriptionDate,
      status: status,
      daysRemaining: daysRemaining
    };
  });

  const startIndex = (currentPage - 1) * subscribersPerPage;
  const currentPageData = subscribersData.slice(startIndex, startIndex + subscribersPerPage);

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
  };

  const columns = [
    {
      label: "Profile Picture",
      field: "profilePicture",
      render: (value, row) => (
        <Avatar>{getInitials(row.name)}</Avatar>
      ),
    },
    {
      label: "Name",
      field: "name",
    },
    {
      label: "Email",
      field: "email",
    },
    {
      label: "Phone Number",
      field: "phoneNumber",
    },
    {
      label: "Amount",
      field: "amount",
    },
    {
      label: "Subscription Plan",
      field: "subscriptionPlan",
    },
    {
      label: "Subscription Date",
      field: "subscriptionDate",
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      label: "Subscription End Date",
      field: "subscriptionEndDate",
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      label: "Status",
      field: "status",
      render: (value, row) => (
        <span style={{ color: row.daysRemaining > 0 ? 'blue' : 'red' }}>
          {value}
        </span>
      ),
    }
  ];

  const handleReplyClick = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setOpen(true);
  };

  const handleSendReply = async () => {
    if (!selectedSubscriber) return;

    const formData = new FormData();
    formData.append("email", selectedSubscriber.email);
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
      });
      setReplyMessage("");
      setSubject("");
      setAttachment(null);
      setSelectedSubscriber(null);
      setOpen(false);
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSubscriber(null);
    setReplyMessage("");
    setSubject("");
    setAttachment(null);
  };

  return (
    <div className="Accomodations DisplayFlex">
      <div className="Header">
        <span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
        <span>Subscribers</span>
      </div>
      <div className="AccomodationsContainer DisplayFlex">
        <div className="AccomodationsTop DisplayFlex">
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
        <div className="AccomodationsBottom">
          <CustomTable
            data={currentPageData}
            columns={columns}
            currentPage={currentPage}
            totalItems={subscribersData?.length}
            usersPerPage={subscribersPerPage}
            accomodationsPerPage={subscribersPerPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            context="subscribers"
            onReplyClick={handleReplyClick}
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reply to {selectedSubscriber?.email}</DialogTitle>
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

export default Subscribers;
