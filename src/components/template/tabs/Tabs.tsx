"use client";
import React, { useState } from "react";
import styles from "./tabs.module.css";
import Comments from "../Comments/Comments";


const Tabs = () => {
  const [tab, setTab] = useState<string>("description");

  return (
    <>
      <div data-aos="fade-left" className={styles.tabs}>
        <ul>
          <li>
            <button
              className={tab === "description" ? styles.active_tab : "bg-[#272626] "}
              onClick={() => setTab("description")}
            >
              توضیحات
            </button>
          </li>
          <li>
            <button
              className={tab === "moreInfoes" ? styles.active_tab : ""}
              onClick={() => setTab("moreInfoes")}
            >
              اطلاعات بیشتر
            </button>
          </li>
          <li>
            <button
              className={tab === "comments" ? styles.active_tab : ""}
              onClick={() => setTab("comments")}
            >
              نظرات ( 0)
            </button>
          </li>
        </ul>

        <div className={styles.contents}>
          <section>
            {tab === "description" && (
              <>
                {" "}
                <div>
                  <p>توضیحات :</p>
                  <hr />
                  <h3>10 عددی (SETpresso ( GOLD</h3>
                  <p>( South and Central America and Africa ( 100% ARABICA</p>
                  <p>( NESPRESSO COMPATIBLE COFFEE CAPSULE ( GOLD</p>
                  <p>
                    کپسول نسپرسو ایرانی قهوه ست مدل Gold سازگار با دستگاه‌های
                    کپسولی نسپرسو است. ترکیب این کپسول قهوه ایرانی 100% عربیکا
                    بوده و با برشته‌کاری متوسط به بالا از اسیدیته متوسط و بسیار
                    خوشایند و متوازن به همراه تلخی متوسط به پایین به همراه
                    تن‌واری متوسط است.
                  </p>
                  <p>
                    کپسول قهوه Gold Setpresso ترکیب با شیر بسیار مناسبی نیز
                    ایجاد می‌کند. اگر دستگاه کفساز شیر خانگی در دسترس دارید
                    می‌توانید فنجان کاپوچینوی دلپذیری در منزل یا محل کار تهیه
                    کنید. شما می‌توانید در دو حالت اسپرسو و همینطور لونگو دستگاه
                    عصاره‌گیری کنید. بدنه کپسول «ست پرسو » آلومینیومی بوده و
                    بدون نیاز به هرگونه تخصص در دم‌آوریِ قهوه می‌توان در زمان
                    کوتاهی قهوه‌ مناسبی را عصاره‌گیری کرد که هم تازه است و هم
                    طعم مطبوعی دارد. هر بسته کپسول قهوه ست پرسو حاوی 10 عدد
                    کپسول است. اگر قهوه خود را با شیر میل می‌کنید قطعا اولین
                    انتخاب شما از بین محصولات کپسول قهوه Setpresso این رنگ یعنی
                    Gold Setpresso است. یک فنجان کاملا متعادل با تندی شبیه به
                    ادویه زنجبیل و طعم کراسان.
                  </p>
                </div>
              </>
            )}
            {tab == "moreInfoes" && (
              <>
                <div>
                  <p>اطلاعات بیشتر :</p>
                  <hr />
                  <main>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>وزن</p>
                      <p>65 گرم</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>مناسب برای</p>
                      <p>گردو شکستن</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>میزان بو</p>
                      <p>تخمی</p>
                    </div>
                  </main>
                </div>
              </>
            )}
            {tab == "comments" && <Comments/>}
          </section>
        </div>
      </div>
    </>
  );
};

export default Tabs;
