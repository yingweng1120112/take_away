import React from 'react'
import styles from '@/styles/shopping-cart/shoppingcar-step1.module.css'
import Carousel from '@/components/shopping-cart/carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareMinus,
  faSquarePlus,
  faTrashCan,
  faStore,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Step1() {
  return (
    <>
      <header />
      {/* 背景樣式上 */}
      <section className={`${styles['roof']} ${styles['sectionstyle']}`}>
        <img src="/shopping-cart/roof.png" alt="" />
      </section>
      {/* 步驟 */}
      <section className={`${styles['step']} ${styles['sectionstyle']}`}>
        <div className={styles['stepbg']}>
          <div className={styles['everystep']}>
            <div className={styles['nextto']}>
              <h1>1</h1>
              <h2>購物車</h2>
            </div>
            <div className={styles['nextto']}>
              <h1>2</h1>
              <h2>填寫資料</h2>
            </div>
            <div className={styles['nextto']}>
              <h1>3</h1>
              <h2>訂單確認</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 購物車 */}
      <div className={styles['shoppingcar']}>
        <div className={styles['shoppingcarleft']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle']}`}>
            <div>購物車（3件）</div>
          </div>
          <div className={styles['cartdetail']}>
            <div className={styles['cartdetailleft']}>
              <input type="checkbox" /> 商品資料
            </div>
            <div className={styles['cartdetailright']}>
              <div>優惠</div>
              <div>單件價格</div>
              <div>數量</div>
              <div>小計</div>
            </div>
          </div>
          <div className={styles['itemscroll']}>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['carti']}>
                  <input type="checkbox" />
                </div>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className={styles['iconstyle']}
                  />
                  <div>2</div>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className={styles['iconstyle']}
                  />
                </div>
                <div>$90</div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles['iconstyle']}
                  />
                </div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['carti']}>
                  <input type="checkbox" />
                </div>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className={styles['iconstyle']}
                  />
                  <div>2</div>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className={styles['iconstyle']}
                  />
                </div>
                <div>$90</div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles['iconstyle']}
                  />
                </div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['carti']}>
                  <input type="checkbox" />
                </div>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className={styles['iconstyle']}
                  />
                  <div>2</div>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className={styles['iconstyle']}
                  />
                </div>
                <div>$90</div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles['iconstyle']}
                  />
                </div>
              </div>
            </div>
            <div className={styles['cartitem']}>
              <div className={styles['cartitemleft']}>
                <div className={styles['carti']}>
                  <input type="checkbox" />
                </div>
                <div className={styles['itemlist']}>
                  <div className={styles['cartimg']}>
                    <img src="/shopping-cart/car-item1.png" alt="" />
                  </div>
                  <div>牛肉風味棒 耐嚼型潔牙棒85克 [牛肉風味]</div>
                </div>
              </div>
              <div className={styles['cartitemright']}>
                <div>0</div>
                <div>$45</div>
                <div className={styles['itemamount']}>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className={styles['iconstyle']}
                  />
                  <div>2</div>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className={styles['iconstyle']}
                  />
                </div>
                <div>$90</div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles['iconstyle']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右側訂單資訊 */}
        <div className={styles['shoppingcarright']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle1']}`}>
            <div>訂單資訊</div>
          </div>
          <div className={styles['cartbottomstyle']}>
            <div>
              <div>小計：</div>
              <div>$270</div>
            </div>
            <div>
              <div>運費：</div>
              <div>$80</div>
            </div>
            <div>
              <div>優惠：</div>
              <div>$0</div>
            </div>
            <div>
              <div>合計：</div>
              <div>$350</div>
            </div>
            <div className={styles['cartbutton']}>
              <button className={styles['buttonstyle']}>
                <FontAwesomeIcon
                  icon={faStore}
                  className={styles['iconstyle1']}
                />
                繼續購物
              </button>
              <button className={styles['buttonstyle']}>
                填寫資料
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className={styles['iconstyle2']}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 商品推薦 */}
      <section className={styles['commend']}>
        <h4>相關商品推薦</h4>
        <div className={styles['carouselstyle']}>
          <Carousel />
        </div>
      </section>

      {/* 下花邊 */}
      <section className={styles['wall']}>
        <img src="/shopping-cart/wall.png" alt="" />
      </section>
      <footer></footer>
    </>
  )
}
