import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { loadBlogInfo } from '@/services/blog'

// 資料夾的中的`[pid].js`檔案代表這路由中，除了根路由與靜態路由之外的所有路由，例如 `/product/123` 就是這個檔案
// 資料來源:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}

export default function Blog() {
  // 第1步. 宣告能得到動態路由pid的路由器
  // router.query(物件)，其中包含了pid屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pid
  const router = useRouter()

  const [blogInfo, setBlogInfo] = useState([])

  // 宣告一個指示是不是正在載入資料的狀態
  // 因為一開始一定是要載入資料，所以預設值為true

  const getBlogInfo = async (pid) => {
    const data = await loadBlogInfo(pid)
    console.log("getinfo:data:")
    console.log(data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
    if (Array.isArray(data)) {
      setBlogInfo(data)
    }
  }

  // 樣式3: didMount+didUpdate
  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pid，之後向伺服器要資料
  useEffect(() => {
    console.log("useeffect router.query:")
    console.log(router.query)
    if (router.isReady) {
      const { pid } = router.query
      getBlogInfo(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
       {blogInfo.map((v, i) => {
          return(
          <div key={v.blog_id}>
            <p>blog_ID: {v.blog_id}</p>
            <p>pet_ID: {v.pet_id}</p>
            <p>content: {v.content}</p>
            <p>pic1: {v.pic1}</p>
            <p>pic2: {v.pic2}</p>
            <p>pic3: {v.pic3}</p>
            <p>pic4: {v.pic4}</p>
            <p>pic5: {v.pic5}</p>
            <p>time: {v.time}</p>
          </div>
        )
        })}
        {blogInfo.map((v, i) => {
          return(
          <div className={styles['post']} key={v.blog_id}>
          <img src={`/img/diarySearch/${v.adopt1}`} alt="" className={styles['head-img']} />
          <div className={styles['post-right']}>
            <p className={styles['content-word']}>
            </p>
            <div className={styles['post-time']}>
              <p className={styles['content-time']}> {v.time}</p>
              <img src="/img/petDiary/Edit_1.svg" alt="" />
            </div>
          </div>
          </div>
        )
        })}
    </>
  )
}