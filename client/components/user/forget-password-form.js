import { useState } from 'react'
import styles from './forget-password.module.css'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState('')
  const [verification_code, setverification_code] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleGetverification_code = async () => {
    // 請求後端發送驗證碼
    try {
      const response = await fetch('http://localhost:3005/api/forgot-password/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const result = await response.json()
      setMessage(result.message)
    } catch (error) {
      setMessage('發送驗證碼失敗')
    }
  }

  const handleResetPassword = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('密碼和確認密碼不一致')
      return
    }

    // 請求後端重設密碼
    try {
      const response = await fetch('http://localhost:3005/api/forgot-password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, verification_code, password })
      })
      const result = await response.json()
      setMessage(result.message)
    } catch (error) {
      setMessage('重設密碼失敗')
    }
  }

  return (
    <section className={styles['section']}>
      <Header />
      <div className={styles['cont']}>
      <img className={styles['login']} src="\img\user\login.svg" alt="" />
        <form className={`${styles['form']}`} onSubmit={handleResetPassword}>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="email"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="電子郵件地址"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary mb-3"
            onClick={handleGetverification_code}
          >
            取得驗證碼
          </button>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="text"
                className={`form-control ${styles['form-control']}`}
                placeholder="電子郵件驗證碼"
                value={verification_code}
                onChange={(e) => setverification_code(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="password"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="password"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="確認密碼"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            確定
          </button>
          {message && <p className="text-center mt-3">{message}</p>}
          <div className="row mt-2">
            <p className={`${styles['notice']}`}>
              還不是會員？
              <Link href="/user/login">加入我们</Link>。
            </p>
          </div>
        </form>
        <img className={styles['login2']} src="\img\user\login2.svg" alt="" />
      </div>
      <Footer />
    </section>
  )
}
