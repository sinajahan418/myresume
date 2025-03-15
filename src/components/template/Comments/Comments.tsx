/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useParams } from "next/navigation";
import styles from "./commentForm.module.css";
import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";

interface Comment {
  _id: string;
  text: string;
  email: string;
  product: number;
  createdAt: Date;
  length: number;
}

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loding, setLoading] = useState<boolean>(false);
  const [isSaveUserInfo, setIsSaveUserInfo] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState<number>(5);
  const { id } = useParams();

  const setCommentScore = (score: number) => {
    setScore(score);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSaveUserInfo(e.target.checked);
  };
  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/products/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setComments(data.data.comments);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };
  const submitComment = async () => {
    if (isSaveUserInfo) {
      const saveuser = {
        username,
        email,
        score,
      };
      localStorage.setItem("user", JSON.stringify(saveuser));
    }
    // Validation (You)
    const comment = {
      email,
      body,
      id,
    };

    const res = await fetch(`http://localhost:5000/api/v1/products/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "appliaction/json",
      },
      body: JSON.stringify(comment),
      credentials: "include",
    });

    if (res.status === 201) {
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);
  return (
    <div className="rtl">
      <hr />

      <main className="">
        <div className="">
          <p className="">
            دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD ) ده
            -10- عددی
          </p>
          <div>
            {loding && <>loding ...</>}
            {comments.length > 0 ? (
              comments.map((comment: Comment) => (
                <div key={comment._id}>
                  <span>{comment.email}</span>
                  <p>{comment.text}</p>
                </div>
              ))
            ) : (
              <div className="p-8">هیچ دیدگاهی ثبت نشده است</div>
            )}
          </div>
        </div>
        <div className="">
          <div className={styles.form}>
            <p className={styles.title}>دیدگاه خود را بنویسید</p>
            <p>
              نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
              شده‌اند <span style={{ color: "red" }}>*</span>
            </p>
            <div className={styles.rate}>
              <p>امتیاز شما :</p>
              <div>
                <IoMdStar onClick={() => setCommentScore(5)} />
                <IoMdStar onClick={() => setCommentScore(4)} />
                <IoMdStar onClick={() => setCommentScore(3)} />
                <IoMdStar onClick={() => setCommentScore(2)} />
                <IoMdStar onClick={() => setCommentScore(1)} />
              </div>
            </div>
            <div className={styles.group}>
              <label htmlFor="">
                دیدگاه شما
                <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                value={body}
                onChange={(event) => setBody(event.target.value)}
                id="comment"
                name="comment"
                placeholder=""
              ></textarea>
            </div>
            <div className={styles.groups}>
              <div className={styles.group}>
                <label htmlFor="">
                  نام
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="">
                  ایمیل
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                />
              </div>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name=""
                id=""
                checked={isSaveUserInfo}
                onChange={handleChange}
              />
              <p>
                {" "}
                ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
                دیدگاهی می‌نویسم.
              </p>
            </div>
            <button onClick={submitComment}>ثبت</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Comments;
