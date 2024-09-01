import './App.css'
import logo from '../src/assets/images/logo.svg'
import illustrate from '../src/assets/images/illustration-intro.png'
import access from '../src/assets/images/icon-access-anywhere.svg'
import security from '../src/assets/images/icon-security.svg'
import collaboration from '../src/assets/images/icon-collaboration.svg'
import anyfile from '../src/assets/images/icon-any-file.svg'
import productive from '../src/assets/images/illustration-stay-productive.png'
import profile1 from '../src/assets/images/profile-1.jpg'
import profile2 from '../src/assets/images/profile-2.jpg'
import profile3 from '../src/assets/images/profile-3.jpg'
import location from '../src/assets/images/icon-location.svg'
import phone from '../src/assets/images/icon-phone.svg'
import mail from '../src/assets/images/icon-email.svg'
import { useState } from 'react'
import * as yup from "yup"
import facebook from '../src/assets/images/icon-facebook.svg'
import twitter from '../src/assets/images/icon-twitter.svg'
import insatagram from '../src/assets/images/icon-instagram.svg'
function App() {
  const [form,setForm]=useState(
    {email:''}
  )
  function handleSubmit(event)
{
event.preventDefault()
testValidation() 
}
function handleChange(event){
  var value=event.target.value;
  const key=event.target.name;
  setForm({
    ...form,
    [key]:value
  })
  setErrors({ ...errors, [event.target.name]: '' });
}
const [errors, setErrors] = useState({});
    const validationSchema = yup.object().shape({
      email: yup.string().email('Invalid email address').required('Email is required'), 
    });
async function testValidation() {
  try {
    await validationSchema.validate(form, { abortEarly: false });
    console.log("Validation passed");
    setErrors({});
  } catch (err) {
    const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
    
      setErrors(validationErrors);
  }
}
  return (
    <main>
      <header>
        <img src={logo}  />
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>
      </header>
      <div id="top">
        <img src={illustrate}/>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family , and co-workers.
        </p>
        <button>Get Started</button>
      </div>
      <div id="middle">
        <div className="mid">
          <img src={access}/>
          <h4>Access your files, anywhere</h4>
          <p className="midle">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="mid">
          <img src={security} />
          <h4>Security you can trust</h4>
          <p className="midle">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="mid">
          <img src={collaboration} alt="" />
          <h4>Real-time collaboration</h4>
          <p className="midle">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="mid">
          <img src={anyfile}/>
          <h4>Store any type of file</h4>
          <p className="midle">
            Whether you&apos;re sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
      <div id="middle1">
        <div id="left">
          <img src={productive}/>
        </div>
        <div id="right">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="#"> See how Fylo works </a>
        </div>
      </div>
      <div id="middle2">
        <div className="mid2">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="person">
            <img src={profile1} className="img" />
            <div className="about">
              <h5>Satish Patel</h5>
              <label> Founder & CEO, Huddle</label>
            </div>
          </div>
        </div>
        <div className="mid2">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="person">
            <img src={profile2} className="img" />
            <div className="about">
              <h5>Bruce McKenzie</h5>
              <label> Founder & CEO, Huddle</label>
            </div>
          </div>
        </div>
        <div className="mid2">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="person">
            <img src={profile3}  className="img" />
            <div className="about">
                <h5>Iva Boyd</h5>
                <label>Founder & CEO, Huddle</label>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.</p>
            <form id="input">
                <input type="email" name="email" id="" placeholder=" email@example.com" value={form.email} onChange={handleChange}
                style={{
                  borderColor: errors.email ? 'red' : '#ccc',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}/>
                
                <button onClick={handleSubmit}> Get Started For Free</button>
 
            </form>
            {errors.email && <span style={{ color: 'red' ,marginLeft:'-24rem'}}>{errors.email}</span>} 
      </div>
      <footer>
        <div id="logo">
        <img src={logo} />
      </div>
        
        <div id="bot">
          <div id="aboutfylo">
            <img src={location} className="image"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua</p>
        </div>
        <div id="contactinfo">
            <div id="phone">
                <img src={phone} className="image"/>
                <label>+1-543-123-4567</label>
            </div>
            <div id="mail"><img src={mail}className="image"/>
                <label >example@fylo.com</label></div>
            </div>
            <ul>
              <li>About us</li>
              <li>jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>  Contact Us
              </li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
            <div id="social">
              <img src={facebook} className='imgs'/>
              <img src={twitter} className='imgs'/>
              <img src={insatagram} className='imgs'/>
            </div>
        </div>
        
      

      </footer>
    </main>
  )
}

export default App
