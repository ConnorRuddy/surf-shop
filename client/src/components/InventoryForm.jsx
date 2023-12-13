import React, {useState} from 'react'

export default function InventoryForm(props){
  const dataInputs = {brand: props.brand|| '', model: props.model ||'', size: props.size || '', value: props.value || '', description: props.description || '', image: props.image || '',} // Changed from {firstName: '', lastName:''} so That we can refactor for edit functionality, its saying. If there is something entered leave it. If not, let it be a empty string 
  const [inputs, setInputs] = useState(dataInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  function handleSubmit(e){
    if(props.editToggle){
      props.editBounty(inputs, props._id);
      setInputs(initInputs);
      props.setEditToggle((prevState) => !prevState);
    } else {``
      console.log('submitting');
      props.submit(inputs, props._id);
      setInputs(initInputs);
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className='inventory-form'>

      <input type='text' 
        name="brand"
        value={inputs.brand}
        onChange={handleChange}
        placeholder="Brand"/>

      <input type='text' 
        name="model"
        value={inputs.model}
        onChange={handleChange}
        placeholder="Model"/>

      <input type='text' 
        name="size"
        value={inputs.size}
        onChange={handleChange}
        placeholder="Size"/>

      <input type='number' 
        name="value"
        value={inputs.value}
        onChange={handleChange}
        placeholder="Price"/>

      <input type='text' 
        name="value"
        value={inputs.description}
        onChange={handleChange}
        placeholder="Description"/>

      <input type='text' 
        name="value"
        value={inputs.image}
        onChange={handleChange}
        placeholder="Image Url"/>

    <button>Add New Item</button>
      </form>
    </div>
  )
}