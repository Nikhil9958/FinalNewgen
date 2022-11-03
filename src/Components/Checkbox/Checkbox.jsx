import React from 'react'
import './Checkbox.css'
const Checkbox = () => {
  return (
    <div className='checkbox-container'>   
      <form action="/action_page.php">
        <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label className='margin-right' for="vehicle1"> All</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label className='margin-right' for="vehicle2"> Metrics</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label className='margin-right' for="vehicle3"> Confusion Matrix</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label className='margin-right' for="vehicle3"> ROC Curve</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> PR Curve</label>
     </form>
    </div>
  )
}

export default Checkbox
