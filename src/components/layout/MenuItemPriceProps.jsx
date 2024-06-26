import Plus from '@/icons/Plus';
import Trash from '@/icons/Trash';
import Up from '@/icons/Up';
import Down from '@/icons/Down';
import { useState } from 'react';

export default function MenuItemPriceProps({ name, props, setProps }) {
  const [isOpen, setIsOpen] = useState(false);

  function addProp() {
    setProps((oldProps) => {
      return [
        ...oldProps,
        {
          name: '',
          price: 0,
        },
      ];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevProps) => {
      const newProps = [...prevProps];
      newProps[index][prop] = newValue;
      return newProps;
    });
  }

  function removeProp(index) {
    setProps((prevProps) => prevProps.filter((_, i) => i !== index));
  }

  return (
    <div className='bg-gray-200 p-2 rounded-md mb-2'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex p-1 border-0 justify-start'
        type='button'>
        {isOpen ? <Up size={18} /> : <Down size={18} />}
        <span className='capitalize text-gray-600'>{name + 's'}</span>
        <span className=' text-gray-400'>({props?.length})</span>
      </button>
      <div className={isOpen ? 'block' : 'hidden'}>
        {props?.length > 0 &&
          props.map((prop, index) => (
            <div key={index} className='flex gap-2 items-end'>
              <div>
                <label>Name</label>
                <input
                  type='text'
                  onChange={(ev) => editProp(ev, index, 'name')}
                  placeholder='Name'
                  value={prop.name}
                />
              </div>
              <div>
                <label>Extra price</label>
                <input
                  type='number'
                  onChange={(ev) => editProp(ev, index, 'price')}
                  placeholder='Extra price'
                  value={prop.price}
                />
              </div>
              <div>
                <button
                  onClick={() => removeProp(index)}
                  type='button'
                  className='bg-white mb-3 p-3'>
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))}
        <button
          type='button'
          onClick={addProp}
          className='bg-white items-center'>
          <Plus size={20} />
          <span>Add {name.toLowerCase()}</span>
        </button>
      </div>
    </div>
  );
}
