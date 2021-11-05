// import s from "./HandleError.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function HandleError({ error }) {
  const { authType } = useParams();

  useEffect(() => {
    if (!error) {
      return null;
    } else if (authType === "login") {
      return toast.error(`${error}. Invalid login or password.`, {
        theme: "dark",
      });
    } else if (authType === "signup") {
      return toast.error(
        `${error}. A user with this e-mail address already exists.`,
        {
          theme: "dark",
        }
      );
    } else {
      return toast.error(`${error}.`, {
        theme: "dark",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
