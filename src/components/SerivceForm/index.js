import './index.css'

const ServiceForm = () => (
  <div className="service-form">
    <h3>Services</h3>
    <p className=''>Lost & found</p>
    <hr />
    <div className='first-section'>
      <label>
        Service Name
        <input type="text" placeholder="Lost & found" />
      </label>
      <label>
        Category
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </label>
      <label>
        Sub Category
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </label>
      <div>
        <button className="upload-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
            <title>S UploadToCloud 18 N</title>
            <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M8,16.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12H8Z" />
            <path class="fill" d="M14.786,5.5715a3.22315,3.22315,0,0,0-.363.0205A4.072,4.072,0,1,0,6.462,3.974,3.431,3.431,0,0,0,2.2585,8.171,1.9285,1.9285,0,1,0,1.9285,12H8V9H5.85a.35.35,0,0,1-.35-.35.34252.34252,0,0,1,.1035-.245l3.234-2.8425a.25.25,0,0,1,.325,0l3.234,2.8425A.34252.34252,0,0,1,12.5,8.65a.35.35,0,0,1-.35.35H10v3h4.786a3.2145,3.2145,0,0,0,0-6.4285Z" />
          </svg>
          <span className='text'>Upload Image</span></button>
      </div>
      <label >
        <div className='show-image-container'>
          <input type="checkbox" />
          <p>Show image</p>
        </div>
      </label>
    </div>

    <div className='desc'>
      Description
      <input type="text" placeholder="type Here" style={{ width: '50%' }} />
    </div>

    <label>
      Lounge
      <input type="text" placeholder="Money Exchange" style={{ width: '100%' }}/>
    </label>
  </div>
);

export default ServiceForm;
