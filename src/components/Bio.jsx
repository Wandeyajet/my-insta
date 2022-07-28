   import { useEffect, useState } from 'react'
   import getPhotoUrl from 'get-photo-url'
   import profileIcon from '../assets/profileIcon.svg'
   import { db }  from '../dexie'

    const Bio = ( ) => {
        const [userDetails, setUserDetails] =useState({
            name: 'Simply Simi',
            about: 'A sensational Nigerian songwriter and singer known for amazing hits and lovely lyrics.',
        })
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
const [profilePhoto, setProfilePhoto] = useState(profileIcon)

useEffect(( ) => {
    const setDataFromDb =  async ( ) => {
        const userDetailsFromDb = await db.bio.get('info')
        const profilePhotoFromDb = await db.bio.get('profilePhoto')
        userDetailsFromDb && setUserDetails(userDetailsFromDb)
        profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)
}

    setDataFromDb()
}, [])

const updateUserDetails = async (event) => {
event.preventDefault()
    const objectData ={ 
    name: event.target.nameOfUser.value,
    about: event.target.aboutUser.value,
}
    setUserDetails(objectData)
await db.bio.put(objectData, 'info')
setEditFormIsOpen(false)
}
 
const updateProfilePhoto= async ( ) => {
   const newProfilePhoto= await getPhotoUrl('#profilePhotoInput')
   setProfilePhoto(newProfilePhoto)   
await db.bio.put(newProfilePhoto, 'profilePhoto')
}

        const editForm = (
            <form action="" className="edit-bi0-form" onSubmit = {(e) => updateUserDetails(e)}>                
            <input type="text" id=" "  name="nameOfUser" defaultValue={userDetails?.name} placeholder="Your name" />
            <br />
                <input type="text" id=" " name="aboutUser" defaultValue={userDetails?.about} placeholder="About you" />
            <br />
            <span className= "red-button" > <button type="button" className="cancel-button" onClick ={() => setEditFormIsOpen (false)}>
                    Cancel 
                </button>
                </span>
                <button type="submit">Save</button>
            </form>
        )

        const editButton =  <button onClick={( ) => setEditFormIsOpen(true)}>Edit</button>
        
        return (
            <section className='bio'>
                <input type="file" accept='image/*' name="photo" id="profilePhotoInput" />
             <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
             <div className="profile-photo" role="button"  title="Click to edit photo">
              <img src={profilePhoto} alt="profile"  />
             </div>
             </label>
             
                <div className="profile-info"> 
                    <p className="name">{userDetails.name}</p>
                    <div className='post'>
                    <p> <strong>0</strong> posts     <strong>1500</strong> followers      <strong>  250</strong> following</p>
                    </div>
                    <p className="about">{userDetails.about}</p>
                    
                        {editFormIsOpen ? editForm: editButton}
                </div>
            </section>
        );
     };

export default Bio;
