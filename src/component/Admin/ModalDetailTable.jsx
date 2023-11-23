import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconSquareRoundedPlus, IconX } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
};

function ModalDetailTable({children}) 
{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="">
        <Link className="transition-all duration-500 hover:text-blue-700 relative group">
          Detail
          <div className="absolute bottom-0 w-0 bg-blue-700 h-[1px] transition-all duration-500 group-hover:w-full"></div>
        </Link>      
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="flex items-center justify-between border-b-2 border-slate-200 p-3 mb-5">
                <div className="">
                    <h1 className="text-xl">Detail</h1>
                </div>
                <button onClick={handleClose} className="flex items-center p-1 rounded-full hover:bg-slate-200/50 hover:text-black">
                    <IconX/>
                </button>
            </div>
            <div className="p-5">
              {children}
            </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalDetailTable