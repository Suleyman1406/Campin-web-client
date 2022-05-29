import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const Comments = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have a point🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];
  console.log();
  return (
    <CommentSection
      cancelBtnStyle={{ color: "red" }}
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
        currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
        currentUserFullName: "Riya Negi",
      }}
      // currentUser={null}

      logIn={{
        loginLink: `${window.location.href.split("details")[0]}login`,
        signupLink: `${window.location.href.split("details")[0]}register`,
      }}
      commentData={data}
      submitBtnStyle={{
        backgroundColor: "gray",
        border: "none",
      }}
      onSubmitAction={(data) => console.log("check submit, ", data)}
      currentData={(data) => {
        console.log("curent data", data);
      }}
    />
  );
};

export default Comments;
