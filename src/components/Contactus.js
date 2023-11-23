import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contactus() {
  return(
   <div className='ContactusForm'>
    <h1 className='contactusheadingone'>Contact US</h1>
    <p className='contactUsparagraph'>We are here for you! How we can help</p>
    <input type='text' id='contactme' placeholder='Enter your Full Name' />
    <input type='text' id='contactme' placeholder='Enter your Valid Email Address'/>
    <input type='text'  id='contactme' placeholder='Subject'/>
    <input type='text'  id='contactme' placeholder='Your message here....'/>
    <button className="appButton">Submit</button>
   
   </div>
  );
}

export default Contactus;