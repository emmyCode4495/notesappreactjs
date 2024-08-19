import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCards from '../../components/cards/NoteCards'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  })

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCards
            title="Meeting on 7th April"
            date="2nd July 2003"
            content="Meeting the 5tth of july"
            tags="#Meeting"
            isPinned={true}
          />
        </div>
      </div>

      <button className="w-16 h-16 items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
      onClick={()=>{
        setOpenAddEditModal({isShown: true, type:"add", data:null})
      }}
      >
        <MdAdd className="text-[32px] ml-3 text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rouunded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes  onClose={()=>{
          setOpenAddEditModal({isShown: false, type:'add', data:null})
        }}
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        />
      </Modal>
    </>
  );
}

export default Home
