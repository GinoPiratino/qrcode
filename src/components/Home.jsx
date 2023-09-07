import './Home.css'
import qrCode from '../assets/image-qr-code.png'

export const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className="second-container">
          <img src={qrCode} alt="qrCode" className='image' />
          <div className='text-container'>
            <h2 className='title'>
              Improve your front-end skills by building projects
            </h2>
            <p className="paragraph">Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
          </div>
        </div>
      </div>
    </div>
  )
}

